import React from "react";
import PropTypes from "prop-types";
import Chip from "@material-ui/core/Chip";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import withStyles from "@material-ui/styles/withStyles";
import { Login, Application } from "mdi-material-ui";
import { Link } from "gatsby";

const styles = (theme) => ({
  featureChip: {
    fontSize: "16px",
    backgroundColor: "#fff",
    border: "1pt solid #eee",
  },
  featureChipRight: {
    fontSize: "16px",
    backgroundColor: "#fff",
    border: "1pt solid #eee",
    float: "right",
  },
  featureGrid: {
    marginBottom: "25px",
  },
  avi: {
    width: "40px",
    height: "40px",
    color: "#fff",
    // backgroundColor: theme.palette.primary.light,
  },
});
const HomeFeatures = (props) => {
  return (
    <Grid
      className={props.classes.featureGrid}
      container
      justify="center"
      spacing={8}
    >
      <Grid item md={6}>
        <Link to="https://www.improviser.education">
        <Chip
          clickable
          avatar={
            <Avatar className={props.classes.avi}>
              <Application />
            </Avatar>
          }
          className={props.classes.featureChipRight}
          label="iMproviser main platform"
        />
        </Link>
      </Grid>
      <Grid item md={6}>
        <Link to="https://www.improviser.education/login">
        <Chip
          clickable
          avatar={
            <Avatar className={props.classes.avi}>
              <Login />
            </Avatar>
          }
          className={props.classes.featureChip}
          label="Login / Register"
        />
        </Link>
      </Grid>
    </Grid>
  );
};

HomeFeatures.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(HomeFeatures);
