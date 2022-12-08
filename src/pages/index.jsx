import * as React from 'react';
import { graphql, Link } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import PropTypes from 'prop-types';
import '../styles/index.css';
import Layout from '../components/Layout';

export default function IndexPage({ data }) {
  const posts = data.allMdx.edges;
  return (
    <Layout>
      <div>
        {posts.map((post) => (
          <div key={post.node.id} className="post-item">
            <Link to={post.node.frontmatter.slug}>
              <GatsbyImage
                image={getImage(
                  post.node.frontmatter.featuredImage?.childImageSharp
                    ?.gatsbyImageData,
                )}
              />
              <div className="post-item-text">
                <h3>{post.node.frontmatter.title}</h3>
                <small>
                  {new Date(post.node.frontmatter.date).toLocaleDateString(
                    'en-US',
                    { month: 'long', day: 'numeric', year: 'numeric' },
                  )}
                </small>
                <p>{post.node.frontmatter.description}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </Layout>
  );
}

export const pageQuery = graphql`
  query {
    allMdx(sort: { frontmatter: { date: DESC } }) {
      edges {
        node {
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
