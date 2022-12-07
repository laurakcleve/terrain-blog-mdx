import * as React from 'react';
import { graphql, Link } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import PropTypes from 'prop-types';

function IndexPage({ data }) {
  const posts = data.allMarkdownRemark.edges;
  return (
    <div>
      {posts.map((post) => (
        <div key={post.node.id}>
          <Link to={post.node.frontmatter.slug}>
            {post.node.frontmatter.title}
            <GatsbyImage
              image={getImage(
                post.node.frontmatter.featuredImage?.childImageSharp
                  ?.gatsbyImageData,
              )}
            />
          </Link>
        </div>
      ))}
    </div>
  );
}

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { frontmatter: { date: DESC } }) {
      edges {
        node {
          frontmatter {
            slug
            title
            date
            featuredImage {
              id
              childImageSharp {
                gatsbyImageData
              }
            }
          }
        }
      }
    }
  }
`;

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.arrayOf(PropTypes.shape({})),
    }),
  }).isRequired,
};

export default IndexPage;

export function Head() {
  return <title>Home Page</title>;
}
