import withRoot from "../../utils/withRoot";
import React from "react";
import SEO from "../../components/SEO";
import Page from "../../components/Page";

const Blogs = (props) => {
  // const blogs = props.data.allMarkdownRemark.edges;
  return (
    <Page title="Lessons">
      <SEO title="Lessons" />
      <p>TODO: dynamically fetch some.</p>
    </Page>
  );
};

// export const query = graphql`
//   query ProductsQuery {
//     allMarkdownRemark(
//       filter: { fileAbsolutePath: { regex: "/blogs/" } }
//       sort: { fields: [frontmatter___date], order: DESC }
//     ) {
//       edges {
//         node {
//           excerpt
//           frontmatter {
//             image {
//               publicURL
//             }
//             title
//             path
//           }
//         }
//       }
//     }
//   }
// `;

export default withRoot(Blogs);
