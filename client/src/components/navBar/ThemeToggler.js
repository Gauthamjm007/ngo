import React from "react";
import PropTypes from "prop-types";
import ThemeContext from "../theme/ThemeContext";
import Switch from "@material-ui/core/Switch";
import WbSunnyIcon from "@material-ui/icons/WbSunny";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import NightsStayIcon from "@material-ui/icons/NightsStay";

/**
 * This component is a theme toggler to set light or dark
 */
export default function ThemeToggler({ className }) {
  const [state, setState] = React.useState({
    checkedA: true,
  });
  const { theme, setTheme } = React.useContext(ThemeContext);
  if (false) {
    console.log(theme);
  }
  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
    event.target.checked ? setTheme("material") : setTheme("reply");
  };

  return (
    <div className={className}>
      <Typography component="div">
        <Grid component="label" container alignItems="center" spacing={1}>
          <Grid item>
            <NightsStayIcon />
          </Grid>
          <Grid item>
            <Switch
              checked={state.checkedA}
              onChange={handleChange}
              name="checkedA"
              color="primary"
              inputProps={{ "aria-label": "primary checkbox" }}
            />
          </Grid>
          <Grid item>
            <WbSunnyIcon />
          </Grid>
        </Grid>
      </Typography>
    </div>
  );
}

ThemeToggler.propTypes = {
  //style of string
  className: PropTypes.string,
};
