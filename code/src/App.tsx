import React, { FC } from "react";

import HomeIndex from "./views/home/Index";
import Layout from "./layouts/Layout";

const App: FC = () => {
  return (
    <Layout>
      <HomeIndex />
    </Layout>
  );
};

export default App;
