import React from "react";
import { BeatLoader } from "react-spinners";
import PropTypes from "prop-types";

//Todo add conditions to load the type of spinner
function SpinnerLoader({ color, loading }) {
  return (
    <div className="flex flex-1 flex-col items-center justify-center">
      <BeatLoader color={color} loading={loading} />
    </div>
  );
}

SpinnerLoader.propTypes = {
  color: PropTypes.string,
  loading: PropTypes.bool
};

SpinnerLoader.defaultProps = {
  color: "#30BE76",
  loading: true
};

export default SpinnerLoader;
