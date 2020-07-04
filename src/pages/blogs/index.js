import withRoot from "../../utils/withRoot";
import React from "react";
import { graphql } from "gatsby";
import SEO from "../../components/SEO";
import Page from "../../components/Page";
import List from "../../components/List";

const Blogs = (props) => {
  const blogs = props.data.allMarkdownRemark.edges;
  return (
    <Page title="Blog">
      <SEO title="Blog" />
      <List items={blogs} />
    </Page>
  );
};

export const query = graphql`
  query BlogsQuery {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/blogs/" } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          excerpt
          frontmatter {
            image {
              publicURL
            }
            title
            path
          }
        }
      }
    }
  }
`;

export default withRoot(Blogs);
