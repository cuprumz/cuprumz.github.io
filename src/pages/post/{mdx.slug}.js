import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../../components/layout'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import BlogRight from '../../components/blog-right';

const BlogPost = ({ data }) => {
  const image = getImage(data.mdx.frontmatter.hero_image);

  return (
    <Layout pageTitle={data.mdx.frontmatter.title}>
      <p>{data.mdx.frontmatter.date}</p>
      <GatsbyImage
        image={image}
        alt={data.mdx.frontmatter.hero_image_alt}
      />
      <p>
        Photo Credit:{" "}
        <a href={data.mdx.frontmatter.hero_image_credit_link}>
          {data.mdx.frontmatter.hero_image_credit_text}
        </a>
      </p>
      <MDXRenderer>
        {data.mdx.body}
      </MDXRenderer>
      <BlogRight url={`${data.site.siteMetadata.siteUrl}/post/${data.mdx.slug}`} />
    </Layout>
  );
}

export const query = graphql`
  query($id: String) {
    site {
      siteMetadata {
        siteUrl
      }
    }
    mdx(id: {eq: $id}) {
      body
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        hero_image_alt
        hero_image_credit_link
        hero_image_credit_text
        hero_image {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
      slug
    }
  }
`

export default BlogPost;