import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  root: {
    borderBottom: `1px solid ${theme.palette.background.default}`,
    backgroundColor: theme.palette.background.default,
    display: "flex",
    alignItems: "center",
    height: 80,
    zIndex: theme.appBar,
  },
  toolbar: {
    minHeight: "auto",
    width: "100%",
    paddingRight: 50,
    fontFamily: "Muli",
  },
  themeToggler: {
    color: theme.palette.contrastText,
    paddingTop: "20px",
    marginRight: "0px",
    paddingLeft: 100,
  },
  [theme.breakpoints.down("sm")]: {
    brandWrapper: { width: 75 },
    logo: { display: "none" },
  },
}));
