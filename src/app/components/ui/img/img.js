import React from "react";
import PropTypes from "prop-types";
import { keys } from "lodash";
import clsx from "clsx";
import { default as ReactImage } from "react-image";
import {
  Collapse,
  Grow,
  Zoom,
  Fade,
  Slide,
  makeStyles
} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  image: {
    objectFit: "cover",
    objectPosition: "center"
  }
}));

const getTransitionType = (timeout, children, ...props) => ({
  fade: (
    <Fade in={true} timeout={timeout}>
      {children}
    </Fade>
  ),
  collapse: (
    <Collapse in={true} timeout={timeout}>
      {children}
    </Collapse>
  ),
  grow: (
    <Grow in={true} timeout={timeout}>
      {children}
    </Grow>
  ),
  slide: (
    <Slide in={true} timeout={timeout} {...props}>
      {children}
    </Slide>
  ),
  zoom: (
    <Zoom in={true} timeout={timeout}>
      {children}
    </Zoom>
  )
});

function Img({
  src,
  className,
  transitionType = "fade",
  timeout = 500,
  ...props
}) {
  const classes = useStyles();
  return (
    <ReactImage
      src={src}
      className={clsx(className, classes.image, "w-full h-full")}
      container={children => {
        return getTransitionType(timeout, children)[transitionType];
      }}
      {...props}
    />
  );
}

Img.propTypes = {
  src: PropTypes.string.isRequired,
  transitionType: PropTypes.oneOf(keys(getTransitionType())),
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  timeout: PropTypes.number
};

export default Img;
