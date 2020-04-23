import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { Toolbar, AppBar } from "@material-ui/core";
import useStyles from "./styles";
import ThemeToggler from "./ThemeToggler";
import Grid from "@material-ui/core/Grid";

function Topbar(props) {
  const { className } = props;
  const classes = useStyles(props);

  return (
    <AppBar className={clsx(classes.root, className)}>
      <Toolbar className={classes.toolbar}>
        <Grid item xs={12}>
          <Grid
            container
            direction="row"
            justify="flex-end"
            alignItems="flex-start"
          >
            <ThemeToggler className={classes.themeToggler} />
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}

Topbar.propTypes = {
  className: PropTypes.string,
};

export default Topbar;
