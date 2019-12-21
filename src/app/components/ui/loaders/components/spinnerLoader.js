import React from "react";
import { BeatLoader } from "react-spinners";
import PropTypes from "prop-types";

function SpinnerLoader(props) {
  return (
    <div className="flex flex-1 flex-col items-center justify-center">
      <BeatLoader color={props.color} loading />
    </div>
  );
}

SpinnerLoader.propTypes = {
  color: PropTypes.string
};

SpinnerLoader.defaultProps = {
  color: "#30BE76"
};

export default SpinnerLoader;
