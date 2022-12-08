import * as React from 'react';
import { Link } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import PropTypes from 'prop-types';
import '../styles/index.css';
import Layout from './Layout';

export default function PostList({ posts }) {
  return (
    <Layout>
      {posts.map(({ node }) => (
        <div key={node.id} className="post-item">
          <Link to={node.frontmatter.slug}>
            <GatsbyImage
              image={getImage(
                node.frontmatter.featuredImage?.childImageSharp
                  ?.gatsbyImageData,
              )}
            />
            <div className="post-item-text">
              <h3>{node.frontmatter.title}</h3>
              <small>
                {new Date(node.frontmatter.date).toLocaleDateString('en-US', {
                  month: 'long',
                  day: 'numeric',
                  year: 'numeric',
                })}
              </small>
              <p>{node.frontmatter.description}</p>
            </div>
          </Link>
        </div>
      ))}
    </Layout>
  );
}

PostList.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      node: PropTypes.shape({
        frontmatter: PropTypes.shape({
          date: PropTypes.string,
          description: PropTypes.string,
          featuredImage: PropTypes.shape({
            childImageSharp: PropTypes.shape({
              gatsbyImageData: PropTypes.shape({}),
            }),
            id: PropTypes.string,
          }),
          slug: PropTypes.string,
          title: PropTypes.string,
        }),
      }),
    }),
  ).isRequired,
};
