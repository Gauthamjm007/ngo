import { createMuiTheme } from "@material-ui/core";
import makePalette from "./palette";
import typography from "./typography";

function createTheme(variant) {
  const palette = makePalette(variant);

  return createMuiTheme({
    palette,
    typography,
    zIndex: {
      appBar: 1200,
      drawer: 1100,
    },
    props: {
      MuiButtonBase: {},

      MuiPopover: {
        elevation: 1,
      },
    },
    overrides: {
      MuiPaper: {
        elevation0: {
          boxShadow: "0 0 14px 0 rgba(53,64,82,.05)",
        },
      },
      MuiTableCell: {
        root: { borderBottom: "1px solid rgba(224, 224, 224, .5)" },
      },
    },
  });
}

export default createTheme;
