import React from "react";
import Content from "../../components/content/content.component";
import HeaderSearch from "../../components/header-search/header-search.component";

const HomePage: React.FC = () => {
  return (
    <div>
      <HeaderSearch />
      <Content />
    </div>
  );
};

export default HomePage;
