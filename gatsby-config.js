const siteUrl = `https://www.example.com`;

module.exports = {
  siteMetadata: {
    title: `Bambit Gatsby Template`,
    description: `Opis.`,
    author: `Bambit.com.pl`,
    siteUrl: siteUrl,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-react-bootstrap`,
        short_name: `react-bootstrap`,
        icon: 'src/images/gatsby-icon.png',
        start_url: `/`,
        background_color: `#20232a`,
        theme_color: `#20232a`,
        display: `minimal-ui`,
      },
    },
    {
      resolve: 'gatsby-plugin-sitemap',
      options: {
        exclude: [`/category/*`, `/path/to/page`],
      }
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: siteUrl,
        sitemap: `${siteUrl}/sitemap.xml`,
        policy: [{ userAgent: '*', allow: '/', disallow: '/404' }]
      }
    }
  ],
}
