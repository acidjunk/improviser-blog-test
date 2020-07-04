        // const scaleType = {
          // id: "String",
          // name: "String",
          // number_of_bars: 2,
        // };

module.exports = {
  // pathPrefix: "/",
  siteMetadata: {
    title: "iMproviser Blog",
    contact: {
      phone: "+31 495 820 222",
      email: "contact@improviser.education",
    },
    menuLinks: [
      {
        name: "Blog",
        link: "/blogs",
      },
      {
        name: "Lessons",
        link: "/lessons",
      },
      {
        name: "Team",
        link: "/team",
      },
    ],
  },
  plugins: [
//     {
//       resolve: "gatsby-plugin-mdx",
// //      options: {
// //        defaultLayouts: {
//           //posts: require.resolve("./src/components/posts-layout.js"),
// //          default: require.resolve("./src/templates/general.js"),
// //        },
// //      },
//     },
    {
      resolve: "gatsby-source-apiserver",
      options: {
        // Type prefix of entities from server
        typePrefix: "internal__",
        // The url, this should be the endpoint you are attempting to pull data from
        url: `https://api.improviser.education/v1/exercises/scales`,
        method: "get",
        headers: {
          "Content-Type": "application/json"
        },
        // Request body
        // data: {},
        // Name of the data to be downloaded.  Will show in graphQL or be saved to a file
        // using this name. i.e. posts.json
        name: "scales",
        // Nested level of entities in response object, example: `data.posts`
        // entityLevel: `data.posts`,
        // Define schemaType to normalize blank values
        // example:
        // schemaType: scaleType,
        // Request parameters
        // Only available from version 2.1.0
        // params: {
        //   per_page: 1
        // },
        // Simple authentication, optional
        // auth: {
        //   username: "myusername",
        //   password: "supersecretpassword1234"
        // },
        // enable disk caching
        allowCache: false,
        // if allowCache is true, then the cache will be purged after the
        // specified amount of time
        maxCacheDurationSeconds: 60 * 60 * 24,
        // Advanced authentication for Auth0
        // Only available from version 2.1.0
        // auth0Config: {
        //   method: "POST",
        //   url: "https://MyAuth0Domain/oauth/token",
        //   headers: { "content-type": "application/json" },
        //   data: {
        //     grant_type: "password",
        //     username: "myusername",
        //     password: "PassAWordHere",
        //     audience: "Auth0APIAudience",
        //     scope: "openid",
        //     client_id: "AUTH0_CLIENT_ID",
        //     client_secret: "AUTH0_SECRET"
        //   },
        //   json: true
        // },
        // Optionally include some output when building
        // Default is false
        verboseOutput: true, // For debugging purposes
        // Optionally skip creating nodes in graphQL.  Use this if you only want
        // The data to be saved locally
        // Default is false
        skipCreateNode: false, // skip import to graphQL, only use if localSave is all you want
        // Optionally re-source data when it changes and
        // `gatsby develop` is running.
        // Requires `ENABLE_GATSBY_REFRESH_ENDPOINT=true`.
        // See https://www.gatsbyjs.org/docs/environment-variables/#reserved-environment-variables
        // Default is false
        enableDevRefresh: true,
        // Optionally override key used to re-source data
        // when `gatsby develop` is running.
        // Requires `enableDevRefresh: true`.
        // See setting directly above this one.
        // See also https://github.com/gatsbyjs/gatsby/issues/14653
        // Default is `id`
        // refreshId: "id",
        // Pass an array containing any number of the entity configuration properties (except verbose, auth0Config),
        // any not specified are defaulted to the general properties that are specified
        // Only available from version 2.1.0
        // entitiesArray: [
        //   {
        //     url: `https://api.improviser.education.com/api/v1/exercises/scales`,
        //     method: "post",
        //     headers: {
        //       "Content-Type": "application/json"
        //     },
        //     name: `posts`,
        //     // optional paging
        //     calculateNextPage: (curUrl, response, context) => {
        //       let page = 2
        //       if (context.page) {
        //         page = context.page + 1
        //       }
        //       context.page = page
        //       const url = `http://yourapi.com/api/v1/posts?page=${page}`
        //       const hasNext = response.data.length >= 100
        //       return { url, hasNext }
        //     }
        //   }
        // ]
      }
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "iMproviser blog platform",
        short_name: "iMproviser blog",
        start_url: "/",
        background_color: "#ffffff",
        theme_color: "#2185d0",
        display: "standalone",
        icon: "src/images/logo.png",
      },
    },
    {
      resolve: "gatsby-plugin-offline",
      options: {
        precachePages: ["/teams/*", "/blogs/*"],
      },
    },
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-images",
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 590,
              wrapperStyle: "margin-left: 0",
            },
          },
        ],
      },
    },
    "gatsby-transformer-sharp",
    // "gatsby-transformer-remark",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/pages`,
        name: "pages",
      },
    },
    // {
    //   resolve: "gatsby-source-filesystem",
    //   options: {
    //     name: "blogs",
    //     path: `${__dirname}/src/pages/blogs`,
    //   },
    // },
    "gatsby-plugin-stylus",
    // "gatsby-plugin-remove-serviceworker",

  ],
};
