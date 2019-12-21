import { red } from "@material-ui/core/colors";

const themesConfig = {
  default: {
    palette: {
      type: "light",
      primary: {
        light: "#89F6CF",
        main: "#55C39E",
        dark: "#159270",
        contrastText: "#F7F8FA"
      },
      secondary: {
        light: "#6CABD4",
        main: "#387CA3",
        dark: "#005074",
        contrastText: "#F7F8FA"
      },
      background: {
        paper: "#FFFFFF",
        default: "#F7F8FA"
      },
      error: red
    },
    status: {
      danger: "orange"
    },
    typography: {
      fontSize: 20
    }
  }
};

export default themesConfig;
