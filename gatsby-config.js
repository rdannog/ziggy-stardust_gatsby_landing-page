module.exports = {
  pathPrefix: `/ziggy-stardust_gatsby_landing-page`,
  siteMetadata: {
    siteUrl: "https://rdannog.github.io/",
    title: "ZIGGY STARDUST",
  },
  plugins: ["gatsby-plugin-styled-components", "gatsby-plugin-react-helmet",
  {
    resolve: "gatsby-source-graphql",
      options: {
        typeName: "completedata",
        fieldName: "completedata",
        url: "https://api-us-east-1.graphcms.com/v2/ckvtvmzo429vl01xq8ividxqq/master",
      },
  }
],
};
