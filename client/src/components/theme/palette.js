import { red, blue, lightBlue, yellow, green } from "@material-ui/core/colors";

const white = "#fff";
const black = "#000";
const themePalette = {
  material: {
    type: "light",
    background: { paper: "#E6ECF0", default: "#FFFFFF" },
    custom: {
      primary: "#EC4E1F",
      secondary: "#E6ECF0",
      contrastText: black,
    },
    contrastText: black,
  },
  reply: {
    type: "dark",
    background: { paper: "#192734", default: "#253341" },
    custom: {
      secondary: "#1DA1F2",
      primary: "#15202B",
      contrastText: white,
    },
    contrastText: white,
  },
};

const makePalette = (type) => {
  const { contrastText, ...rest } = themePalette[type];
  return {
    ...rest,
    contrastText,
    contrastThreshold: 2,
    border: "#DFE3E8",
    divider: "#DFE3E8",
    common: {
      black,
      white,
      contrastText,
      commonBackground: "rgb(45, 45, 45)",
      neutral: "#E4E7EB",
      muted: "#9EA0A4",
    },
    primary: {
      light: lightBlue[300],
      main: lightBlue[500],
      dark: lightBlue[700],
      contrastText,
    },
    success: {
      light: green[300],
      main: green[500],
      dark: green[700],
      contrastText,
    },
    info: {
      light: blue[300],
      main: blue[500],
      dark: blue[700],
      contrastText,
    },
    warning: {
      light: yellow[300],
      main: yellow[500],
      dark: yellow[700],
      contrastText,
    },
    danger: {
      light: red[300],
      main: red[500],
      dark: red[700],
      contrastText,
    },
  };
};

export default makePalette;
