import * as React from 'react'
import Layout from '../components/layout'
import { graphql, Link } from 'gatsby'
import BlogItem from '../components/blog-item';

const IndexPage = (props) => {
  const {data} = props;
  return (
    <Layout pageTitle="My Blog Posts">
      {
        data.allMdx.nodes.map(node => (
          <BlogItem blog={node} key={node.id} />
        ))
      }
    </Layout>
  );
}

export const query = graphql`
  query {
    allMdx(sort: {fields: frontmatter___date, order: DESC}) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
        }
        id
        slug
        timeToRead
        wordCount {
          words
        }
      }
    }
  }
`

export default IndexPage;