const { withAssetPrefix } = require("gatsby-link");

module.exports = {
  plugins: [
    {
      resolve: "gatsby-theme-portfolio-minimal",
      options: {
        siteUrl: "https://agitated-mahavira-dbaeee.netlify.app/", // Used for sitemap generation
        manifestSettings: {
          favicon: "./content/images/logo.png", // Path is relative to the root
          siteName: "Anpai Technologies", // Used in manifest.json
          shortName: "Anpai Tech", // Used in manifest.json
          startUrl: "/", // Used in manifest.json
          backgroundColor: "#f5efe3", // Used in manifest.json
          themeColor: "#f7d3ba", // Used in manifest.json
          display: "minimal-ui", // Used in manifest.json
        },
        contentDirectory: "./content",
        blogSettings: {
          path: "/blog", // Defines the slug for the blog listing page
          usePathPrefixForArticles: false, // Default true (i.e. path will be /blog/first-article)
        },
         googleAnalytics: {
             trackingId: "UA-184038570-1",
             anonymize: true, // Default true
             environments: ["production", "development"] // Default ["production"]
         }
      },
    },
  ],
};
