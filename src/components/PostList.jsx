import * as React from 'react';
import { Link } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import PropTypes from 'prop-types';
import Layout from './Layout';
import SEO from './SEO';

export default function PostList({ posts, title }) {
  return (
    <Layout>
      <SEO title={title} />
      {posts.map(({ node }) => (
        <div key={node.id} className="post-item">
          <Link to={node.frontmatter.slug}>
            <GatsbyImage
              alt={`${node.frontmatter.title}-thumbnail`}
              image={getImage(
                node.frontmatter.featuredImage)}
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
        id: PropTypes.string,
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
  title: PropTypes.string.isRequired,
};
