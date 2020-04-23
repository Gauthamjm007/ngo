import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    maxWidth: 445,
  },
  media: {
    height: 340,
  },
});

export default function NgoCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardContent>
          <Grid container>
            <Grid item xs={12} md={4}>
              <Avatar
                alt={props.name}
                src={props.logo}
                style={{ height: 75, width: 75 }}
              />
            </Grid>
            <Grid item xs={12} md={8}>
              <Grid
                container
                direction="column"
                justify="flex-start"
                alignItems="flex-start"
              >
                <Typography variant="h4">{props.name}</Typography>
                <Typography variant="h6">{props.email}</Typography>
              </Grid>
            </Grid>

            <br />
            <Grid item xs={12} md={12}>
              <Grid
                container
                direction="row"
                justify="flex-start"
                alignItems="flex-start"
              >
                <Grid item xs={4}>
                  <b>Address</b>:
                </Grid>
                <Grid item xs={8}>
                  {props.address.line1}
                  {props.address.line2}
                  <br />
                  {props.address.city},{props.address.district}
                  <br />
                  {props.address.state}-{props.address.pincode}
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </CardContent>
      </CardActionArea>
      <Grid container justify="center">
        <CardActions>
          <ButtonGroup size="small" aria-label="small outlined button group">
            <Button color="primary">Foreign Funding</Button>
            <Button
              variant={props.f_funding ? "contained" : ""}
              style={{ color: props.f_funding ? "white" : "black" }}
              color="primary"
            >
              YES
            </Button>
            <Button
              variant={props.f_funding ? "" : "contained"}
              style={{ color: props.f_funding ? "black" : "white" }}
              color="primary"
            >
              NO
            </Button>
          </ButtonGroup>
          {!Boolean(props.claimed) ? (
            <Link
              to={`/ngo/edit/${props._id}`}
              style={{ textDecoration: "none", color: "white" }}
            >
              <Button
                size="small"
                color="primary"
                variant="contained"
                style={{ color: "white" }}
              >
                Claim
              </Button>
            </Link>
          ) : (
            <Button
              size="small"
              color="primary"
              variant="contained"
              style={{ color: "white" }}
              onClick={props.handleClick}
            >
              View Profile
            </Button>
          )}
        </CardActions>
      </Grid>
    </Card>
  );
}
