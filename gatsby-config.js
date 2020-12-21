/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "De.Eleken",
    description:
      "針對每一個獨一無二的孩子，打造專屬的治療計畫。分析造成孩子發育不良的根本原因，制定方案，而不單只以口腔或是牙齒的情況去處理。",
    author: "@CLA",
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-material-ui`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `image`,
        path: `${__dirname}/src/assets/img`,
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Roboto\:300,400,700`,
          `sans-serif\:300,400,700` // you can also specify font weights and styles
        ],
        display: 'swap',
      }
    }
  ],
}
