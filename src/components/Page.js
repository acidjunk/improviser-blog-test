import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Grid, Typography } from "@material-ui/core";
import withStyles from "@material-ui/styles/withStyles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import "../css/style.styl";

const styles = {
  container: {
    marginTop: 94,
    overflowX: "hidden",
    overflowY: "hidden",
  },
  contentBox: {
    maxWidth: "calc(1136px - 60px)",
    width: "calc(100% - 60px)",
  },
  contentBoxMobile: {
    width: "calc(100% - 6px)",
  },
  title: {
    textAlign: "center",
  },
};

const Component = ({ children, classes, title }) => {
  const matches = useMediaQuery("(min-width:600px)");
  return (
    <>
      <Header />
      <Grid
        className={classes.container}
        container
        direction="row"
        justify="center"
      >
        <Grid className={matches ? classes.contentBox : classes.contentBoxMobile} item>
          {title ? (
            <Typography className={classes.title} gutterBottom variant="h2">
              {title}
            </Typography>
          ) : null}
          {children}
          <Footer />
        </Grid>
      </Grid>
    </>
  );
};

export default withStyles(styles)(Component);
