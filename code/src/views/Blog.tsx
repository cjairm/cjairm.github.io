import React from "react";
import { useParams, Link } from "react-router-dom";

import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";
import Section from "../layout/Section";
import NotFound from "./404";

import appData from "../app.data";

const Blog: React.FunctionComponent = (): React.ReactElement => {
  const { slug } = useParams<{ slug: keyof typeof appData.blog }>();
  if (!slug) {
    return <NotFound />;
  }

  const blog = appData.blog[slug];
  return (
    <>
      <Navbar />
      <div className="columns is-centered has-background-light is-gapless">
        <div className="column is-10">
          <Section id="blog">
            <nav
              className="breadcrumb has-succeeds-separator"
              aria-label="breadcrumbs"
            >
              <ul>
                <li>
                  <Link to="/" className="has-text-white">
                    Back
                  </Link>
                </li>
                <li className="is-active">
                  <a
                    href="#!"
                    aria-current="page"
                    className="has-text-grey-light"
                  >
                    Blog
                  </a>
                </li>
              </ul>
            </nav>
            {blog.title && (
              <div className="columns">
                <div className="column is-12 content">
                  <h1 className="title has-text-centered has-text-white">
                    {blog.title}
                  </h1>
                </div>
              </div>
            )}
            <div className="columns">
              <div className="column is-12 content">
                {blog.content.map((c, i) => {
                  switch (c.type) {
                    case "blockquote": {
                      return (
                        <blockquote
                          key={i}
                          className="has-text-white has-background-dark"
                        >
                          “{c.quote}”. {c.author}
                        </blockquote>
                      );
                    }
                    case "p": {
                      let p = c.p;
                      if (c.archors) {
                        c.archors.forEach((a) => {
                          if (p) {
                            p = replaceLinkInP(p, a);
                          }
                        });
                      }
                      return (
                        <p
                          key={i}
                          dangerouslySetInnerHTML={{ __html: p ? p : "" }}
                        ></p>
                      );
                    }
                    case "code": {
                      return (
                        <pre
                          key={i}
                          className="has-text-white has-background-dark"
                        >
                          {c.pre}
                        </pre>
                      );
                    }
                    default: {
                      return <></>;
                    }
                  }
                })}
              </div>
            </div>
          </Section>
        </div>
      </div>
      <Footer />
    </>
  );
};

interface TargetLinkI {
  href: string;
  text: string;
}

const buildLink = (props: TargetLinkI): string =>
  `<a target="_blank" rel="noreferrer" href=${props.href} class="has-text-grey-light is-underlined">${props.text}</a>`;

const replaceLinkInP = (str: string, anchor: TargetLinkI) => {
  const target = "<-a->";
  const replacement = buildLink(anchor);

  const index = str.indexOf(target);
  const beforeCoincidence = str.substring(0, index);
  const afterCoincidence = str.substring(index + target.length);
  return beforeCoincidence + replacement + afterCoincidence;
};

export default Blog;
