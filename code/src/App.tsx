import React from "react";
import ViewIndex from "./views/Index";
import ViewNotFound from "./views/404";
import ViewBlog from "./views/Blog";
import { Routes, Route } from "react-router-dom";

// CSS compiled
import "./css/main.css";

const App: React.FunctionComponent = (): React.ReactElement => {
  return (
    <Routes>
      <Route index element={<ViewIndex />} />
      <Route path="/blog/:slug" element={<ViewBlog />} />
      {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for.
                */}
      <Route path="*" element={<ViewNotFound />} />
    </Routes>
  );
};

export default App;
