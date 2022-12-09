import * as React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import PostList from '../components/PostList';

export default function IndexPage({ data }) {
  const posts = data.allMdx.edges;
  return <PostList posts={posts} title="Minis" />;
}

export const pageQuery = graphql`
  query {
    allMdx(
      filter: { frontmatter: { category: { eq: "minis" } } }
      sort: { frontmatter: { date: DESC } }
    ) {
      edges {
        node {
          id
          frontmatter {
            slug
            title
            date
            description
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
    allMdx: PropTypes.shape({
      edges: PropTypes.arrayOf(PropTypes.shape({})),
    }),
  }).isRequired,
};

export function Head() {
  return <title>Home Page</title>;
}
