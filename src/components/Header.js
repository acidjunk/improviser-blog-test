import React from "react";
import { StaticQuery, graphql } from "gatsby";
import { Link } from "gatsby";
import Menu from "./Menu";
import Grid from "@material-ui/core/Grid";
import Toolbar from "@material-ui/core/Toolbar";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import Chip from "@material-ui/core/Chip";
import Avatar from "@material-ui/core/Avatar";
import { Blogger } from "mdi-material-ui";
import Hidden from "@material-ui/core/Hidden";

const Header = (props) => {
  return (
    <AppBar id="appBar">
      <Toolbar>
        <Grid alignItems="center" container justify="space-between" spacing={8}>
          <Grid item>
            <Hidden smDown>

            <Chip
              avatar={
                <Avatar id="logoIcon">
                  <Blogger />
                </Avatar>
              }
              id="logo"
              label={
                <Link to="/">
                  {props.data.site.siteMetadata.title.toUpperCase()}
                </Link>
              }
              variant="outlined"
            />
              </Hidden>
            <Hidden mdUp>
              <Link to="/">

              <Avatar id="logoIcon">
                <Blogger />
              </Avatar>
              </Link>
            </Hidden>

          </Grid>
          <Grid item>
            <Hidden smDown>
              <Typography component="span" variant="caption">
                <Menu />
              </Typography>
            </Hidden>
            <Hidden mdUp>
              <Typography size="s" component="span" variant="caption">
                <Menu />
              </Typography>
            </Hidden>
          </Grid>
        </Grid>
        <Grid item />
      </Toolbar>
    </AppBar>
  );
};

export default () => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            title
            contact {
              email
              phone
            }
          }
        }
      }
    `}
    render={(data) => <Header data={data} />}
  />
);
