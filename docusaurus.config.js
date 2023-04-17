// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion
const TerserPlugin = require("terser-webpack-plugin")

const lightCodeTheme = require("prism-react-renderer/themes/github")
const darkCodeTheme = require("prism-react-renderer/themes/dracula")
require("dotenv").config()
const BrotliPlugin = require("brotli-webpack-plugin")
const CompressionPlugin = require("compression-webpack-plugin")
// const MangleCssClassPlugin = require("mangle-css-class-webpack-plugin")

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
    name: "RJ's super special awesome plugin to optimize webpack",
    configureWebpack(config, isServer, utils, content) {
      return process.env.NODE_ENV === "development"
        ? {
            optimization: {
              mergeDuplicateChunks: false, // skip client optimizating step to speed up build
              removeAvailableModules: false, // disable duplicate module check for extra build speed
              removeEmptyChunks: false,
              minimize: false,
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
        : {
            plugins: [
              // does not compress .xml sitemap/rss/etc - does not compress .json
              // new BrotliPlugin({
              //   asset: "[path].br[query]",
              //   test: /\.(js|css|html|svg|woff|woff2|xml|jpg|png|gif|webp|txt|json)$/,
              //   threshold: 5120,
              //   // threshold: 1280, //OVERKILL@1.3KB
              //   minRatio: 0.8,
              //   // deleteOriginalAssets: true,
              // }),
              new CompressionPlugin({
                filename: "[path][base].gz",
                algorithm: "gzip",
                test: /\.(js|css|html|svg|woff|woff2|xml|jpg|png|gif|webp|txt|json)$/,
                threshold: 5120,
                minRatio: 0.8,
              }),
              new CompressionPlugin({
                filename: "[path][base].br",
                algorithm: "brotliCompress",
                test: /\.(js|css|html|svg|woff|woff2|xml|jpg|png|gif|webp|txt|json)$/,
                compressionOptions: {
                  level: 11,
                },
                threshold: 5120,
                minRatio: 0.8,
              }),
              // WTF - the HTML mangled CSS DONT match CSS MANGLES?! Can't escape the crappy Infima trap!
              // new MangleCssClassPlugin({
              // classNameRegExp:
              // "(?<![a-zA-Z0-9_-]+)[a-zA-Z-]{3,}(__|--)[a-z]+[a-zA-Z0-9]+((__|--)[a-z]+[a-zA-Z0-9]+)?(?![a-zA-Z0-9_-]+)", // 124 & BREAKS!
              // classNameRegExp: "(?<![a-zA-Z0-9_-]+)[a-zA-Z-]{3,}(__|--)[a-z]+[a-zA-Z0-9_-]+(?![a-zA-Z0-9_-]+)", // 122/128KB & STILL breaks!
              //prettier-ignore
              // classNameRegExp: "((?<![a-zA-Z0-9_-]+)(react-tooltip__[a-zA-Z0-9_-]+)(?![a-zA-Z0-9_-]+))|(--(ifm|docsearch|docusaurus|doc)-[a-z]+(-[a-z]+(-[a-z]+(-[a-z]+)?)?)?)", // isolate to react-tooltip for now
              //prettier-ignore
              // classNameRegExp: "(?<![a-zA-Z0-9_-]+)(react-tooltip__[a-zA-Z0-9_-]+)(?![a-zA-Z0-9_-]+)", // isolate to react-tooltip for now
              // classNameRegExp: "[a-z]{3,}(-[a-z]{3,})?__[a-z]+[a-zA-Z0-9_-]+",// works but somehow breaks all infima CSS in final build?!
              // "((react-tooltip|buttonGroup|breadcrumbs|menu|dropdown|tabList|alert|avatar|card|footer|table-of-contents|pagination-nav|pagination|pills|tabs|hero|navbar-sidebar|docPage|sidebarItem)__[a-zA-Z0-9_-]+|(avatar)|(DocSearch-(Hit-Tree|Commands-key|Commands|Container|Button-Placeholder|Hit--favoriting|Reset|Input|MagnifierLabel|LoadingIndicator|HitsFooter|Label|Hit-action-button|StartScreen)))", //
              // "((react-tooltip|buttonGroup|breadcrumbs|menu|dropdown|tabList|alert|avatar|card|footer|table-of-contents|pagination-nav|pagination|pills|tabs|hero|navbar-sidebar|navbar|docPage|sidebarItem)__[a-zA-Z0-9_-]+|(avatar)|(DocSearch-(Hit-Tree|Commands-key|Commands|Container|Button-Placeholder|Hit--favoriting|Dropdown|Button|Hit-icon|Link|Reset|Input|MagnifierLabel|LoadingIndicator|HitsFooter|Label|Hit-action-button|StartScreen)))", //
              // classNameRegExp: ".*", // MANGLE IT ALL! INCL all your JS code for lulz
              // log: true, // turn on for unholy spam
              // }),
              // new MiniCssExtractPlugin(),
            ],
            optimization: {
              emitOnErrors: true, //! force webpack to complete build with errors - including ones which will crash at runtime
              minimize: true,
              minimizer: [
                new TerserPlugin({
                  minify: TerserPlugin.swcMinify,
                  terserOptions: {
                    compress: {
                      unused: true,
                      dead_code: true, // kill dead code
                      arguments: true,
                      booleans_as_integers: true, // coerce even smaller!
                      passes: 3, // 3X the improvement?!
                      drop_console: true,
                      hoist_funs: true,
                      toplevel: true, // kill dead top-level funcs
                      unsafe: true, // live life dangerous!
                      unsafe_Function: true,
                      unsafe_methods: true,
                      unsafe_proto: true,
                      unsafe_undefined: true,
                      // reduce_funcs: true, //? risky to enable - Terser author considered obsoleting this due to bugs, exponential complexity (esp for recursive fn) & miniminal bundle size improvement //https://github.com/terser/terser/issues/696
                    },
                    mangle: {
                      // eval: true, // not accepted?! valid option on Terser docs
                      toplevel: true,
                      // safari10: true,// screw mac users?
                    },
                    format: {
                      comments: false, //? ask @docusaurus MIT License allow stripping comments from chunks?
                      // indent_level: 4,
                    },
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
  tagline: "iFullstack.Dev",
  favicon: "img/RJKB.ico",

  // Set the production url of your site here
  url: `${process.env.PROD_URL}`,
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  organizationName: "rge-rdev", // Usually your GitHub org/user name.
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
            minify: {
              compress: {
                arguments: true,
                booleans_as_integers: true,
                dead_code: true,
                drop_console: true,
                hoist_funs: true,
                reduce_funcs: true,
                unsafe: true,
                unsafe_Function: true,
                unsafe_methods: true,
                unsafe_proto: true,
                unsafe_undefined: true,
                unused: true,
              },
              mangle: true,
              format: {
                comments: false,
              },
            },
          },
          target: "esnext",
        },
        module: {
          type: isServer ? "commonjs" : "es6",
        },
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
          routeBasePath: "/wiki",
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
          blogTitle: "iFullstack.Dev Blog",
          blogDescription: "iFullstack.Dev Blog",
          blogSidebarCount: 20,
          blogSidebarTitle: "Recent Posts",
          routeBasePath: "blog",
          tagsBasePath: "tags",
          archiveBasePath: "archive",
          postsPerPage: 10,
          showReadingTime: true,
          readingTime: ({ content, frontMatter, defaultReadingTime }) =>
            defaultReadingTime({ content, options: { wordsPerMinute: 300 } }),
          authorsMapPath: "authors.yml",
          feedOptions: {
            type: "all",
            copyright: `Copyright © ${new Date().getFullYear()} Roger Jiang`,
            createFeedItems: async (params) => {
              const { blogPosts, defaultCreateFeedItems, ...rest } = params
              return defaultCreateFeedItems({
                // keep only the 10 most recent blog posts in the feed
                blogPosts: blogPosts.filter((item, index) => index < 10),
                ...rest,
              })
            },
          },
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
      image: "img/DrawRJKBSocialCard.webp",
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
        hideOnScroll: true,
        logo: {
          alt: "RJKB Site Logo",
          src: "img/LogoTextRJKBV2.svg",
          srcDark: "img/LogoTextRJKBDarkV2.svg",
          height: 32,
          width: 84,
          // src: "img/LogoTextRJKB.svg",
        },
        items: [
          //LTR
          {
            type: "doc",
            docId: "JS/JS",
            position: "left",
            label: "Wiki",
          },
          { to: "/blog", label: "Blog", position: "left" },
          //RTL
          { to: "/about", label: "About", position: "right" },
          {
            position: "right",
            href: "https://github.com/rge-rdev",
            className: "header-github-link",
            "aria-label": "RGE RDEV GitHub",
          },
          {
            type: "search",
            position: "right",
            className: "RJ_SEARCH",
          },
        ],
      },
      // customize footer for landing page
      footer: {
        links: [
          {
            html: `<a href="https://github.com/rge-rdev" target="_blank" rel="noopener noreferrer" class="navbar__item footer-icon-link header-github-link" aria-label="rge-rdev GitHub"></a>`,
          },
          {
            html: `<a href="https://www.npmjs.com/~rge-rdev" target="_blank" rel="noopener noreferrer" class="navbar__item footer-icon-link footer-npm-link" aria-label="rge-rdev npm"></a>`,
          },
          {
            html: `<a href="${process.env.PROD_URL}/blog/rss.xml" target="_blank" rel="noopener noreferrer" class="navbar__item footer-icon-link footer-rss-link" aria-label="RSS Feed for RJKB Fullstack Blog"></a>`,
          },
          {
            html: `<a href="${process.env.LINKEDIN}" target="_blank" rel="noopener noreferrer" class="navbar__item footer-icon-link footer-linkedin-link" aria-label="LinkedIn"></a>`,
          },
          {
            html: `<a target="_blank" rel="noopener nofollow" aria-label="Link to mail ${process.env.GIT_USER}" href="${process.env.MAIL_TO}" class="navbar__item footer-icon-link footer-mail-link"></a>`,
          },
        ],
        copyright: `<span class="inline-flex">© ${
          new Date().getFullYear() > 2023
            ? "2023-" + new Date().getFullYear()
            : new Date().getFullYear()
        } Roger Jiang</span>`,
        logo: {
          alt: "RJKB Site Logo",
          src: "img/LogoTextRJKBV2.svg",
          srcDark: "img/LogoTextRJKBDarkV2.svg",
          height: 32,
          width: 84,
          className: "inline-flex",
        },
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
        typesenseCollectionName: process.env.APPLICATION_ID, // Replace with your own doc site's name. Should match the collection name in the scraper settings.

        typesenseServerConfig: {
          nodes: [
            {
              host: process.env.TS_NODE_1,
              port: 443,
              protocol: process.env.TYPESENSE_PROTOCOL,
            },
            // 1 node seems to perform fine for just now
            // {
            //   host: process.env.TS_NODE_2,
            //   port: 443,
            //   protocol: process.env.TYPESENSE_PROTOCOL,
            // },
            // {
            //   host: process.env.TS_NODE_3,
            //   port: 443,
            //   protocol: process.env.TYPESENSE_PROTOCOL,
            // },
          ],
          apiKey: process.env.TYPESENSE_CLIENT_SEARCH_KEY, //!scope API key to search only!
        },

        // Optional: Typesense search parameters: https://typesense.org/d ocs/0.24.0/api/search.html#search-parameters
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
