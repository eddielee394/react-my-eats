import React from "react";
import PropTypes from "prop-types";
import Loader from "./loaders/loader";

/**
 * Suspense defaults
 * Custom react suspsense implementation to avoids repetitive declarations
 * and implements an ad-hoc data fetching suspense feature, without
 * having to use the react experimental build
 */
function Suspense({ loader, children, loadingProps }) {
  if (loader) {
    return <Loader children={children} {...loadingProps} />;
  }

  return (
    <React.Suspense fallback={<Loader isSuspense {...loadingProps} />}>
      {children}
    </React.Suspense>
  );
}

Suspense.propTypes = {
  loader: PropTypes.bool,
  loadingProps: PropTypes.object,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element)
  ]).isRequired
};

Suspense.defaultProps = {
  loader: false,
  loadingProps: {
    loaderType: "spinner"
  }
};

export default Suspense;
