import React from "react";
import { ThemeProvider } from "@material-ui/styles";
import { createMuiTheme } from "@material-ui/core";
import PropTypes from "prop-types";
import themesConfig from "../../../config/themeConfig";

function Theme({ children }) {
  const mainTheme = createMuiTheme(themesConfig.default);

  return <ThemeProvider theme={mainTheme}>{children}</ThemeProvider>;
}

Theme.propTypes = {
  children: PropTypes.element
};

export default Theme;
