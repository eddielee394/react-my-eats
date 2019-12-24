import React from "react";
import Proptypes from "prop-types";
import { CardItemLoader, SpinnerLoader } from "./components";

const LOADER_TYPE = {
  SPINNER: "spinner",
  CARD_ITEM: "cardItemLoader"
};

function Loader(props) {
  const { loaderType, isLoading, isSuspense } = props;

  if (isLoading || isSuspense) {
    return loaderType === LOADER_TYPE.CARD_ITEM ? (
      <CardItemLoader {...props} />
    ) : (
      <SpinnerLoader {...props} />
    );
  } else {
    return props.children;
  }
}

Loader.propTypes = {
  isSuspense: Proptypes.bool.isRequired,
  isLoading: Proptypes.bool.isRequired,
  loaderType: Proptypes.string
};

Loader.defaultProps = {
  isSuspense: false,
  isLoading: false,
  loaderType: LOADER_TYPE.SPINNER
};

export default Loader;
