import * as React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import PostList from '../components/PostList';

export default function IndexPage({ data }) {
  const posts = data.allMdx.edges;
  return <PostList posts={posts} title="Home" />;
}

export const pageQuery = graphql`
  query {
    allMdx(sort: { frontmatter: { date: DESC } }) {
      edges {
        node {
          id
          frontmatter {
            slug
            title
            date(formatString: "MMMM DD, YYYY")
            description
            featuredImage {
              id
              childImageSharp {
                gatsbyImageData(width: 575)
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
