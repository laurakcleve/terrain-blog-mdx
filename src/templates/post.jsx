import * as React from 'react';
import { graphql, Link } from 'gatsby';
import PropTypes from 'prop-types';
import Layout from '../components/Layout';

export default function BlogPostTemplate({ data, children, pageContext }) {
  const { prev, next } = pageContext;
  const { mdx } = data;
  const { frontmatter } = mdx;
  return (
    <Layout>
      <h1>{frontmatter.title}</h1>
      <p className="post-page-date">{frontmatter.date}</p>
      <div>
        <div>{children}</div>
      </div>

      <ul className="prev-next">
        <li>
          {prev && (
            <Link to={prev.frontmatter.slug} rel="prev">
              ← {prev.frontmatter.title}
            </Link>
          )}
        </li>
        <li>
          {next && (
            <Link to={next.frontmatter.slug} rel="next">
              {next.frontmatter.title} →
            </Link>
          )}
        </li>
      </ul>

      <Link to="/" className="bottom-home">
        Home
      </Link>
    </Layout>
  );
}

export const pageQuery = graphql`
  query ($id: String!) {
    mdx(id: { eq: $id }) {
      body
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
        featuredImage {
          childImageSharp {
            gatsbyImageData(width: 800)
          }
        }
      }
    }
  }
`;

BlogPostTemplate.propTypes = {
  data: PropTypes.shape({
    mdx: PropTypes.shape({
      frontmatter: PropTypes.shape({
        title: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
        featuredImage: PropTypes.shape({
          childImageSharp: PropTypes.shape({
            gatsbyImageData: PropTypes.shape({}),
          }),
        }),
      }).isRequired,
    }),
  }).isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  pageContext: PropTypes.shape({
    prev: PropTypes.shape({
      frontmatter: PropTypes.shape({
        slug: PropTypes.string,
        title: PropTypes.string,
      }),
    }),
    next: PropTypes.shape({
      frontmatter: PropTypes.shape({
        slug: PropTypes.string,
        title: PropTypes.string,
      }),
    }),
  }).isRequired,
};
