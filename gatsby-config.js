module.exports = {
  siteMetadata: {
    siteUrl: "https://blog.cuprumz.com",
    title: "cuprumz's blog",
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `post`, 
        path: `${__dirname}/post`,
      }
    },
    "gatsby-plugin-mdx",
    "gatsby-transformer-sharp",
  ],
};
