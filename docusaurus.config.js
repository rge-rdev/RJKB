/**
 * Copyright(c) Roger Jiang
 */

// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion
const TerserPlugin = require("terser-webpack-plugin")

require("dotenv").config()
const CompressionPlugin = require("compression-webpack-plugin")

const BundleAnalyzerPlugin =
  require("webpack-bundle-analyzer").BundleAnalyzerPlugin

//@ts-ignore
/** @type {import('@docusaurus/types').Plugin} */

/**
 * ✅ No longer crashes for full-site build!
 *
 */
function DOCUSAURUS_RJ_WEBPACK_PLUGIN(context, options) {
  return {
    name: "RJ's super special awesome plugin to optimize webpack for docusaurus",
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
            plugins: [new BundleAnalyzerPlugin({ analyzerPort: "auto" })], // Enable for small dev mode tests to avoid prod crash
          }
        : {
            plugins: [
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
                  level: 9,
                },
                threshold: 5120,
                minRatio: 0.8,
              }),
              /** Bundle Analyzer crashes for larger docusaurus sites */
              // new BundleAnalyzerPlugin({ analyzerPort: "auto" }),
            ],
            optimization: {
              // SIZE for miniscule gains for worse ~50% WORSE caching recall!
              chunkIds: "deterministic",
              emitOnErrors: true, //! force webpack to complete build with errors - including ones which will crash at runtime
              mangleExports: "deterministic",
              mangleWasmImports: true,
              moduleIds: "deterministic",
              innerGraph: true, // detect unused exports
              mergeDuplicateChunks: true, // dedup chunks with same modules
              removeEmptyChunks: true, // skip client optimizing step to speed up - BAD IDEA - 2X file output!
              concatenateModules: true, // to find safe module graph segments to concatenate into a single module
              flagIncludedChunks: true, // don't load chunks when already loaded as subset of another chunk
              minimize: true,
              minimizer: [
                new TerserPlugin({
                  parallel: true,
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
                      comments: false,
                      // indent_level: 4,
                    },
                  },
                }),
              ],
              realContentHash: true,
              usedExports: true, // dead code elim
              // splitChunks: {
              //   chunks: "all",
              // },
              // runtimeChunk: {
              //   name: "runtime",
              // },

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
            cache: {
              type: "filesystem",
              allowCollectingMemory: true,
              buildDependencies: {
                config: [__filename],
              },
              compression: "brotli",
            },
            // experiments: {
            // outputModule: true,
            // css: true,
            // futureDefaults: true,
            // },
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
// The config doesn't need to be async - but I'm just going to add it for now to make it easier to directly await import() modules in future. It's also following the same pattern used by Facebook, albeit more compact here.
/** @returns {Promise<import('@docusaurus/types').Config>} */
module.exports = async () => ({
  // plugins: ["@docusaurus/theme-live-codeblock"],
  plugins: [
    "@docusaurus/theme-live-codeblock",
    DOCUSAURUS_RJ_WEBPACK_PLUGIN,
    RJ_TAILWIND_PLUGIN,
    "docusaurus-plugin-sass",
    // PWA
    [
      "@docusaurus/plugin-pwa",
      {
        debug: false,
        offlineModeActivationStrategies: [
          "appInstalled",
          "standalone",
          "queryString",
        ],
        pwaHead: [
          {
            tagName: "link",
            rel: "icon",
            href: "/img/RJ.webp",
          },
          {
            tagName: "link",
            rel: "manifest",
            href: "/manifest.json", // your PWA manifest
          },
          {
            tagName: "meta",
            name: "theme-color",
            content: "rgb(14, 118, 110)",
          },
        ],
      },
    ],
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
  onBrokenLinks: "ignore",
  onBrokenMarkdownLinks: "warn",

  // Used by docusaurus to set html lang meta tag + additional lang
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
          routeBasePath: `/${process.env.DOCS_BASE}`,
          // sidebarPath: false,
          // breadcrumbs: false,
          sidebarPath: require.resolve("./sidebars.js"),
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
          changefreq: "daily",
          priority: 0.5,
          ignorePatterns: ["/tags/**"], //! Not working! tags still showing up!
          filename: "sitemap.xml",
        },
      }),
    ],
  ],
  themes: ["docusaurus-theme-search-typesense"],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Add (more?!) Docs config here instead of above!!
      docs: {
        sidebar: {
          hideable: true,
          autoCollapseCategories: true,
        },
      },
      // Global Metadata
      metadata: [
        {
          name: "keywords",
          content:
            "Fullstack, React, JS, dev, wiki, blog, code, examples, tutorial, tips, demo",
        },
      ],
      // Replace with your project's social card
      image: "img/DrawRJKBSocialCardV2.webp",
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
        additionalLanguages: ["latex"], // @see blog post - it's dumb but you need to add one random additional language to prevent 25KB of crap appearing in your final production bundle!
        // theme: require("prism-react-renderer/themes/github").default,
        //! DEFAULT lightTheme is sh!t contrast - using docusaurus theme for now
        theme: (await import("./src/theme/lightTheme.mjs")).default,
        darkTheme: require("prism-react-renderer/themes/dracula").default,
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
        typesenseSearchParameters: {
          collection: "rjkb",
          query_by:
            "hierarchy.lvl0,hierarchy.lvl1,hierarchy.lvl2,hierarchy.lvl3,content,tags",
          query_by_weights: "127,16,8,4,2,1",
          prioritize_token_position: true,
          group_limit: 3,
          include_fields:
            "hierarchy.lvl0,hierarchy.lvl1,hierarchy.lvl2,hierarchy.lvl3,content,anchor,url,type,id",
          highlight_full_fields:
            "hierarchy.lvl0,hierarchy.lvl1,hierarchy.lvl2,hierarchy.lvl3,content",
          group_by: "url",
          sort_by: "_text_match:desc",
          // group_by: "url,tags",
          //prettier-ignore
          // filter_by: "language:=en && docusaurus_tag:=[default,docs-default-current]",
          // facet_by: "tags",
          // snippet_threshold: 30, // default
          //typo
          // min_len_1typo: 2,
          // min_len_2typo: 5,
          //caching
          use_cache: true,
          cache_ttl: 3600, //  1hr
        },

        // Optional
        contextualSearch: false,
      },
    }),
})

/**
 * LIST of Plugins + Extensions tested & @deprecated
 *  - "plugin-image-zoom" - buggy, ugly, needs 2 clicks - just bad. Also, needs to serve over-sized images to zoom into in the first place. A terrible idea.
 *  - const BrotliPlugin = require("brotli-webpack-plugin") - one zip format for one match pattern only. Use superior compression-webpack-plugin#
 *  - const MangleCssClassPlugin = require("mangle-css-class-webpack-plugin") - bad - does not mangle consistently across files. Literally made a better node script (mangle_css.tsx) to do the same thing. Also, messes up the logs with extra whitespace (even when logs disabled)
 *  - @docusaurus/plugin-ideal-image - bad - often results in worse image quality for higher file size. Pointless and computationally wasteful - just run batch image script to convert static assets ONE-TIME.
 */
