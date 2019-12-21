import React from "react";
import { CardItemLoader, SpinnerLoader } from "./components";
import Proptypes from "prop-types";

function Loader(props) {
  const { loaderType } = props;
  
  return loaderType === "cardItemLoader" ? (
    <CardItemLoader {...props} />
  ) : (
    <SpinnerLoader {...props} />
  );
}

Loader.propTypes = {
  loaderType: Proptypes.string
};

export default Loader;
