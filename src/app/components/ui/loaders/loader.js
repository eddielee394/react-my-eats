import React from "react";
import PropTypes from "prop-types";
import { keys } from "lodash";
import { PlaceholderLoader, SpinnerLoader } from "./components";

const getLoaderType = props => ({
  spinner: <SpinnerLoader {...props} />,
  placeholder: <PlaceholderLoader {...props} />
});

function Loader({ loaderType, isLoading, isSuspense, ...props }) {
  if (isLoading || isSuspense) {
    return getLoaderType(props)[loaderType];
  } else {
    return props.children;
  }
}

Loader.propTypes = {
  isSuspense: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired,
  loaderType: PropTypes.oneOf(keys(getLoaderType()))
};

Loader.defaultProps = {
  isSuspense: false,
  isLoading: false,
  loaderType: "spinner"
};

export default Loader;
