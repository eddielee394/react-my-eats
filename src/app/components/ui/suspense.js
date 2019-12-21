import React from "react";
import PropTypes from "prop-types";
import Loader from "./loaders/loader";

/**
 * React Suspense defaults
 * Custom implementation to avoids repetitive declarations and implements an ad-hoc data fetching suspense feature, without
 * having to use the react experimental build
 */
function Suspense(props) {
  const { loadingProps, loaded } = props;

  if (loaded) {
    return <Loader {...loadingProps} />;
  }

  return (
    <React.Suspense fallback={<Loader {...loadingProps} />}>
      {props.children}
    </React.Suspense>
  );
}

Suspense.propTypes = {
  loaded: PropTypes.bool,
  loadingProps: PropTypes.object
};

Suspense.defaultProps = {
  loaded: false,
  loadingProps: {
    loaderType: "spinner"
  }
};

export default Suspense;
