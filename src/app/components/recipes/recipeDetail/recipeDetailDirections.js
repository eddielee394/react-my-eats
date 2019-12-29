import React, { useState } from "react";
import PropTypes from "prop-types";
import { Step, Stepper, StepButton, Typography } from "@material-ui/core";

function RecipeDetailDirections({ directions }) {
  const [activeStep, setActiveStep] = useState(0);

  const handleChangeActiveStep = index => {
    setActiveStep(index);
  };

  return (
    <div className="w-full my-8 mb-10">
      <Typography variant="h6">How to cook</Typography>
      <div className="w-full">
        <Stepper
          activeStep={activeStep}
          orientation="vertical"
          connector={null}
          className="flex flex-wrap content-between md:max-h-360 p-5"
          nonLinear
        >
          {React.Children.toArray(
            directions.map((direction, index) => (
              <Step className="w-full md:w-1/2 my-5 px-3">
                <StepButton onClick={() => handleChangeActiveStep(index)}>
                  <Typography variant="body2" align="left">
                    {direction.instructions}
                  </Typography>
                </StepButton>
              </Step>
            ))
          )}
        </Stepper>
      </div>
    </div>
  );
}

RecipeDetailDirections.propTypes = {
  directions: PropTypes.arrayOf(PropTypes.object).isRequired
};

RecipeDetailDirections.defaultProps = {
  directions: []
};

export default RecipeDetailDirections;
