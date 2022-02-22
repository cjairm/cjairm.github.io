import React, { FC, ReactNode, ReactChild } from "react";

import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout: FC<{ children: ReactChild | ReactNode }> = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
