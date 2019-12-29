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
      overlay: {
        light: {
          1: "rgba(247,248,250,0.25)",
          2: "rgba(247,248,250,0.5)",
          3: "rgba(247,248,250,0.75)"
        },
        dark: {
          1: "rgba(40,41,40,0.25)",
          2: "rgba(40,41,40,0.5)",
          3: "rgba(40,41,40,0.75)"
        }
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
