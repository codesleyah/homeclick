import React, { Fragment } from "react";
import Header1 from "./Header1";
import Header2 from "./Header2";
import Header3 from "./Header3";

const Header = ({ header }) => {
  const getHeader = () => {
    return <Header2 />
  };
  return <Fragment>{getHeader()}</Fragment>;
};
export default Header;
