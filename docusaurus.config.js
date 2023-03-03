// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

//@ts-ignore
const lightCodeTheme = require("prism-react-renderer/themes/github")
//@ts-ignore
const darkCodeTheme = require("prism-react-renderer/themes/dracula")

//@ts-ignore
/** @type {import('@docusaurus/types').Plugin} */

function RJ_WEBPACK_PLUGIN(context, options) {
  return {
    name: "rj-webpack-fixes",
    configureWebpack(config, isServer, utils, content) {
      return {
        optimization: {
          // mergeDuplicateChunks: false, // skip client optimizating step to speed up build
          // removeEmptyChunks: false, // skip client optimizing step to speed up - BAD IDEA - 2X file output!
          removeAvailableModules: false, // disable duplicate module check for extra build speed
          minimize: false, // disable Webpack minimizer in favor of swc-loader as set up below
          // minimizer: [new EsbuildPlugin({ target: "esnext" })],
        },
        module: {
          rules: [
            {
              test: /\.m?js$/,
              exclude: /(node_modules)/,
              use: {
                // `.swcrc` can be used to configure swc
                loader: "swc-loader",
              },
            },
          ],
        },
      }
    },
  }
}

async function RJ_TAILWIND_PLUGIN(context, options) {
  return {
    name: "rj-tailwind-addon",
    configurePostCss(postcssOptions) {
      // Appends TailwindCSS and AutoPrefixer.
      postcssOptions.plugins.push(require("tailwindcss"))
      postcssOptions.plugins.push(require("autoprefixer"))
      return postcssOptions
    },
  }
}
//@ts-ignore
/** @type {import('@docusaurus/types').Config} */
const config = {
  // plugins: ["@docusaurus/theme-live-codeblock"],
  plugins: [
    "@docusaurus/theme-live-codeblock",
    RJ_WEBPACK_PLUGIN,
    RJ_TAILWIND_PLUGIN,
    "docusaurus-plugin-sass",

    // "plugin-image-zoom",
  ],
  title: "RJ KB",
  tagline: "A Fullstack Showcase",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://your-docusaurus-test-site.com",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  organizationName: "rgerdev", // Usually your GitHub org/user name.
  projectName: "RJKB", // Usually your repo name.
  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  //! staticDirectories causes MAJOR BUG in Dcosaurus - build renders a blank homepage for some dumb confusing reason?!
  // staticDirectories: ["public", "static"], // add access to public dir

  //FIX PAINFUL HOURS LONG BUILD TIMES BY SWITCHING FROM CRAPPY WEBPACK TO ESBUILD!#
  //! ESBuild loader
  /*
  webpack: {
    jsLoader: (isServer) => ({
      loader: require.resolve("esbuild-loader"),

      options: {
        loader: "tsx",
        format: isServer ? "cjs" : undefined,
        //format: isServer ? "cjs" : undefined,
        //es2017 4.23m
        target: isServer ? "node12" : "esnext",
      },
    }),
  },
  */
  // /*
  webpack: {
    jsLoader: (isServer) => ({
      loader: require.resolve("swc-loader"),
      options: {
        jsc: {
          parser: {
            syntax: "typescript",
            tsx: true,
            minify: {
              compress: true,
            },
          },
          target: "esnext",
        },
        module: {
          type: isServer ? "commonjs" : "es6",
        },
        minify: true,
      },
    }),
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl: "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
        },
        blog: {
          path: "blog",
          blogTitle: "RJ's Dev logs",
          blogDescription: "Blog for Fullstack Engineers",
          blogSidebarCount: 20,
          blogSidebarTitle: "RJ's Dev Logs",
          tagsBasePath: "tags",
          showReadingTime: true,
          readingTime: ({ content, frontMatter, defaultReadingTime }) =>
            defaultReadingTime({ content, options: { wordsPerMinute: 300 } }),
          //! disable editURL to hide "edit this page" link showing
          // editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
          // postsPerPage: 3,
        },
        theme: {
          // update theme to resolve SCSS now instead of css
          customCss: require.resolve("./src/css/custom.css"),
        },
        // ADDED sitemap-plugin
        sitemap: {
          changefreq: "weekly",
          priority: 0.5,
          ignorePatterns: ["/tags/**"],
          filename: "sitemap.xml",
        },
      }),
    ],
  ],
  themes: ["docusaurus-theme-search-typesense"],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/docusaurus-social-card.jpg",
      colorMode: {
        defaultMode: "dark",
        disableSwitch: false,
        respectPrefersColorScheme: false,
      },
      /*
      announcementBar: {
        id: "TEST_BAR",
        content: "Check out the self-hosted Typesense Search Engine ->",
        backgroundColor: "#fafbfc",
        textColor: "#091E42",
        isCloseable: true,
      },
      */
      navbar: {
        title: "RJKB",

        logo: {
          alt: "My Site Logo",
          src: "img/logo.svg",
        },
        items: [
          {
            type: "doc",
            docId: "intro",
            position: "left",
            label: "Docs",
          },
          { to: "/blog", label: "Dev Log", position: "left" },
          { to: "/features", label: "Tour", position: "left" },
          { to: "/about", label: "About", position: "right" },
          {
            href: "https://github.com/facebook/docusaurus",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      // customize footer for landing page
      footer: {
        style: "dark",
        links: [
          {
            title: "RJKB",
            items: [
              {
                label: "Docs",
                to: "/docs",
              },
              {
                label: "Dev Log",
                to: "/blog",
              },
              {
                label: "Tour",
                to: "/features",
              },
            ],
          },
          {
            title: "Contact",
            items: [
              {
                label: "Stack Overflow",
                href: "https://stackoverflow.com/questions/tagged/docusaurus",
              },
              {
                label: "Discord",
                href: "https://discordapp.com/invite/docusaurus",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/docusaurus",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "About Me",
                to: "/about",
              },
              {
                label: "GitHub",
                href: "https://github.com/rgerdev",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Roger Jiang. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      //! add new liveCodeBlock theme here
      liveCodeBlock: {
        /**
         * The position of the live playground, above or under the editor
         * Possible values: "top" | "bottom"
         */
        playgroundPosition: "bottom",
      },
      //! ADD typesense-search theme here
      typesense: {
        typesenseCollectionName: "rjkb", // Replace with your own doc site's name. Should match the collection name in the scraper settings.

        typesenseServerConfig: {
          nodes: [
            {
              host: "localhost",
              port: 8108,
              protocol: "http",
            },
          ],
          apiKey: "xyz",
        },

        // Optional: Typesense search parameters: https://typesense.org/docs/0.24.0/api/search.html#search-parameters
        typesenseSearchParameters: {},

        // Optional
        contextualSearch: true,
      },
      //! Add Image Zoom Plugin here
      //! buggy - requires 2 clicks - not pretty - bad plugin!
      // imageZoom: {
      //   // CSS selector to apply the plugin to, defaults to '.markdown img'
      //   selector: ".markdown img",
      //   // Optional medium-zoom options
      //   // see: https://www.npmjs.com/package/medium-zoom#options
      //   options: {
      //     margin: 24,
      //     background: "#BADA55",
      //     scrollOffset: 0,
      //     container: "#zoom-container",
      //     template: "#zoom-template",
      //   },
      // },
    }),
}

module.exports = config
