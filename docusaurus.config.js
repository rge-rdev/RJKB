// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion
const TerserPlugin = require("terser-webpack-plugin")

const lightCodeTheme = require("prism-react-renderer/themes/github")
const darkCodeTheme = require("prism-react-renderer/themes/dracula")

// const NodePolyfillPlugin = require("node-polyfill-webpack-plugin")
// const webpack = require("webpack")

//@ts-ignore
/** @type {import('@docusaurus/types').Plugin} */

/*
function RJ_FIX_WEBPACK_NODE_POLYFILL_PLUGIN(context, options) {
  return {
    name: "rj-fix-webpack-node-polyfill",
    configureWebpack(config, isServer, utils, content) {
      return {
        // plugins: [new NodePolyfillPlugin({ includeAliases: ["process"] })], // add "os" if webpack suddenly complains about that too...
        plugins: [new NodePolyfillPlugin()],
        // plugins: [
        //   new webpack.ProvidePlugin({
        //     process: "process/browser",
        //   }),
        // ],
      }
    },
  }
}
*/

//@ts-ignore
/** @type {import('@docusaurus/types').Plugin} */

function RJ_WEBPACK_PLUGIN(context, options) {
  return {
    name: "rj-webpack-fixes",
    configureWebpack(config, isServer, utils, content) {
      return {
        optimization: {
          // mergeDuplicateChunks: true, // skip client optimizating step to speed up build
          // removeAvailableModules: false, // disable duplicate module check for extra build speed

          minimize: true,
          minimizer: [
            new TerserPlugin({
              minify: TerserPlugin.swcMinify,
              terserOptions: {
                compress: {
                  unused: true,
                  booleans_as_integers: true, // coerce even smaller!
                  dead_code: true, // kill dead code
                  // reduce_funcs: true, //? risky to enable - Terser author considered obsoleting this due to bugs, exponential complexity (esp for recursive fn) & miniminal bundle size improvement //https://github.com/terser/terser/issues/696
                },
                mangle: {},
              },
            }),
          ],
          /*
          minimizer: [
            new TerserPlugin({
              minify: TerserPlugin.esbuildMinify,
              terserOptions: {
                //   minify: false,
                minifyWhitespace: true,
                //   minifyIdentifiers: false,
                minifySyntax: true,
              },
            }),
          ],
          */
          // minimizer: [new EsbuildPlugin({ target: "esnext" })],
          /**Enable Production settings in Dev mode */
          // concatenateModules: true, // to find safe module graph segments to concatenate into a single module
          // flagIncludedChunks: true, // don't load chunks when already loaded as subset of another chunk
          // innerGraph: true, // detect unused exports
          // mangleExports: "size", // minifiy variable names to reduce size
          // mangleWasmImports: true,
          // mergeDuplicateChunks: true, // dedup chunks with same modules
          // removeEmptyChunks: true, // skip client optimizing step to speed up - BAD IDEA - 2X file output!
          // usedExports: true, // dead code elim
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
    // RJ_FIX_WEBPACK_NODE_POLYFILL_PLUGIN,
    "docusaurus-plugin-sass",
    [
      "@docusaurus/plugin-ideal-image",
      /** @type {import('@docusaurus/plugin-ideal-image').PluginOptions} */
      {
        quality: 80,
        max: 1030, // max resized image's size.
        min: 640, // min resized image's size. if original is lower, use that size.
        steps: 2, // the max number of images generated between min and max (inclusive)
        disableInDev: false,
      },
    ],
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
            // minify: {
            //   compress: {
            //     unused: true,
            //   },
            //   mangle: true,
            // },
          },
          target: "esnext",
        },
        module: {
          type: isServer ? "commonjs" : "es6",
        },
        // minify: true,
      },
    }),
  },
  // */
  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          // routeBasePath: '/',
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl: "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
          showLastUpdateAuthor: false,
          showLastUpdateTime: false,
          // showLastUpdateAuthor: true, //! Will result in git history error
          // showLastUpdateTime: true, //? https://github.com/Seneca-CDOT/telescope/issues/3403
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
        // title: "", // Disable title to show only SVG Logo for home page return

        logo: {
          alt: "RJKB Site Logo",
          src: "img/LogoTextRJKB.svg",
          // src: "img/LogoTextRJKB.svg",
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
      //! buggy - requires 2 clicks - not pretty - bad plugin! REMOVED!
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
