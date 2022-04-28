// This file sets a custom webpack configuration to use your Next.js app
// with Sentry.
// https://nextjs.org/docs/api-reference/next.config.js/introduction
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

const { withSentryConfig } = require("@sentry/nextjs");

const moduleExports = {
  swcMinify: false,
  reactStrictMode: true,
  images: {
    domains: ["images.ctfassets.net", "scontent-lga3-1.cdninstagram.com", "scontent-atl3-2.cdninstagram.com"],
  },
  async redirects() {
    return [
      {
        source: "/about-rae",
        destination: "/about",
        permanent: true,
      },
      {
        source: "/clients-for-life",
        destination: "/clients-for-life/family-1",
        permanent: true,
      },
      {
        source: "/portfolio",
        destination: "/portfolio/babies",
        permanent: true,
      },
      {
        source: "/praise/",
        destination: "/",
        permanent: true,
      },
      {
        source: "/blog/",
        destination: "/",
        permanent: true,
      },
      {
        source: "/blog/:slug",
        destination: "/",
        permanent: true,
      },
      {
        source: "/families/:slug",
        destination: "/",
        permanent: true,
      },
      {
        source: "/babies/:slug",
        destination: "/",
        permanent: true,
      },
      {
        source: "/lifestyle/:slug",
        destination: "/",
        permanent: true,
      },
      {
        source: "/personal/:slug",
        destination: "/",
        permanent: true,
      },
      {
        source: "/weddings/:slug",
        destination: "/",
        permanent: true,
      },
      {
        source: "/products/:slug",
        destination: "/",
        permanent: true,
      },
      {
        source: "/news/:slug",
        destination: "/",
        permanent: true,
      },
      {
        source: "/for-moms/:slug",
        destination: "/",
        permanent: true,
      },
      {
        source: "/for-photographers/:slug",
        destination: "/",
        permanent: true,
      },
      {
        source: "/couples/:slug",
        destination: "/",
        permanent: true,
      },
      {
        source: "/seniors/:slug",
        destination: "/",
        permanent: true,
      },
      {
        source: "/category/:slug",
        destination: "/",
        permanent: true,
      },
      {
        source: "/tag/:slug",
        destination: "/",
        permanent: true,
      },
    ];
  },
};

const sentryWebpackPluginOptions = {
  // Additional config options for the Sentry Webpack plugin. Keep in mind that
  // the following options are set automatically, and overriding them is not
  // recommended:
  //   release, url, org, project, authToken, configFile, stripPrefix,
  //   urlPrefix, include, ignore

  silent: true, // Suppresses all logs
  // For all available options, see:
  // https://github.com/getsentry/sentry-webpack-plugin#options.
};

// Make sure adding Sentry options is the last code to run before exporting, to
// ensure that your source maps include changes from all other Webpack plugins
module.exports = withSentryConfig(moduleExports, sentryWebpackPluginOptions);
