import withRoot from "../utils/withRoot";
import React from "react";
import { graphql, Link } from "gatsby";
import PropTypes from "prop-types";
import SEO from "../components/SEO";
import Card from "../components/Card";
import Page from "../components/Page";
import HomeFeatures from "../components/HomeFeatures";
import Button from "@material-ui/core/Button";
import Carousel from "../components/Carousel";
import Avatar from "@material-ui/core/Avatar";
import { Blogger } from "mdi-material-ui";
import withStyles from "@material-ui/styles/withStyles";

const styles = () => ({
  root: {
    fontWeight: "bold",
  },
});
const Home = (props) => {
  const blogs = props.data.allMarkdownRemark.edges;

  return (
    <Page title="iMproviser blogging platform">
      <SEO title="Home">
        <meta
          content="iMproviser blogging platform, with new improvisation content every 2 weeks. Learn how to improvise on any music instrument."
          name="description"
        />
      </SEO>

      <HomeFeatures />
      <Card
        action={
          <Button
            className={props.classes.root}
            color="secondary"
            component={Link}
            to="/blogs"
            variant="contained"
          >
            View All Blog posts
          </Button>
        }
        avatar={
          <Avatar alt="iMproviser logo" />
        }
        style={{ minHeight: 623 }}
        title="Some blog posts"
      >
        <Carousel items={blogs} />
      </Card>
    </Page>
  );
};

export const query = graphql`
  query {
    allFile(filter: { extension: { eq: "jpg" } }) {
      edges {
        node {
          publicURL
        }
      }
    }
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/blogs/" } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          id
          frontmatter {
            image {
              publicURL
            }
            path
            title
            date(formatString: "DD MMMM YYYY")
          }
          excerpt
        }
      }
    }
  }
`;

Home.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRoot(withStyles(styles)(Home));
