import React from "react";
import NgoDetails from "./ngoDetails";
import useStyles from "./styles";
export default function NgoMain(props) {
  const classes = useStyles(props);
  return (
    <div>
      <NgoDetails color={classes.root.backgroundColor} />
    </div>
  );
}
