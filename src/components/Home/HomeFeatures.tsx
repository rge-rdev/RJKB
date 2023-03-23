import React from "react"
import clsx from "clsx"
//@ts-ignore
import Link from "@docusaurus/Link"
// import mdx_ssg_video from "../../../static/vid/mdx-ssg-x264-crf30-placebo.mp4"
import {
  DrawRJSSGColorSVG,
  DrawHoverPreviewColorSVG,
  IconArrowDownCircleBlackSVG,
  IconArrowLeftCircleBlackSVG,
  IconArrowRightCircleBlackSVG,
  IconArrowRopRightCircleBlackSVG,
  IconArrowTopLeftCircleBlackSVG,
  IconArrowUpCircleBlackSVG,
  IconBrainCircleColorSVG,
  IconCodeEditorDiamondColorSVG,
  IconDockerColorSVG,
  IconDocusaurusBlackSVG,
  IconDocusaurusColorSVG,
  IconDocusaurusGreySVG,
  IconDocusaurusHurt9KColorSVG,
  IconDocusaurusProfColorSVG,
  IconDownButtonCyanBlueSVG,
  IconDownButtonDocusaurusGreenSVG,
  IconEsbuildColorSVG,
  IconGitSVG,
  IconHTML5GreySVG,
  IconJavascriptBlackSVG,
  IconNodeJSBlackSVG,
  IconNodeJSColorSVG,
  IconReactBlackSVG,
  IconReactColorSVG,
  IconReactGreySVG,
  IconRjnoteCodeEditorColorSVG,
  IconSpiralLoopBlackSVG,
  IconTailwindcssBlackSVG,
  IconTailwindcssColorSVG,
  IconTypescriptBlackSVG,
  IconTypescriptColorSVG,
  LogoTypesenseColorSVG,
  IconWebassemblyColorSVG,
  LogoMDXColorSVG,
  LogoMDXLightSVG,
  LogoNgrokSVG,
  LogoNodeJSColorSVG,
  IconReactLiveColorSVG,
  IconReduxOfficialColorSVG,
  LogoTailwindcssOfficialColorSVG,
  LogoTSNodeBlackSVG,
  LogoTSNodeColorSVG,
  LogoTSNodeGreySVG,
  LogoSVG,
  LogoTextDockerBlackSVG,
  LogoTextTypescriptBlackSVG,
  LogoTextTypescriptColorSVG,
  UndrawDocusaurusMountainSVG,
  UndrawDocusaurusReactSVG,
  UndrawDocusaurusTreeSVG,
  IconYarnBlackSVG,
  IconYarnColorSVG,
} from "../../../static/img/svg"

//@ts-ignore
import useBaseUrl from "@docusaurus/useBaseUrl"
import _ from "lodash"

type FeatureItem = {
  title: string
  SVG?: React.ComponentType<React.ComponentProps<"svg">>
  img_str?: string
  img_url?: string
  alt?: string
  VIDEO?: string
  description: JSX.Element
}

const FeatureList: FeatureItem[] = [
  {
    title: "🥇 SSG over SSG",
    // SVG: DrawRJSSGColorSVG,
    img_url: `/img/DrawRJSSGColorV2.svg`,
    alt: "Diagram of SSG Converting JSON into JSX & MDX via Node.js",
    description: (
      <>
        <Link
          className="text-cyan-900 dark:text-cyan-300"
          to="/features#-ssg-over-ssg"
        >
          Custom SSG Node.js script
        </Link>{" "}
        transforms JSON database into 9000+ MDX & 1300+ Preview JSX - complete
        with YAML frontmatter, links with client-routing - all sorted sorted
        into file hierarchy, in under 30s!
      </>
    ),
  },
  {
    title: "🥇 Hover Link Previews",
    img_url: `/img/DrawHoverPreviewColor.svg`,
    alt: "RJKB Doc Links show preview page on hover",
    description: (
      <>
        Every{" "}
        <Link
          className="text-cyan-900 dark:text-cyan-300"
          to="/docs"
        >
          /docs
        </Link>{" "}
        page shows an interactive preview page on hover
      </>
    ),
  },
  {
    title: "🥇 Self-hosted Typesense Search",
    img_url: `/img/DrawRJKBTypesenseSearchColor.svg`,
    alt: "RJKB Doc Links show preview page on hover",
    description: (
      <>
        Fully-indexed via <code>typesense-docscraper</code> run on self-hosted
        docker+ngrok instance. <code>Typesense DocSearch</code> Search UI (
        <kbd>Ctrl+K</kbd>) for ⚡ fast typo-tolerant fuzzy search - extended
        with alias collections{" "}
        <Link
          className="text-cyan-900 dark:text-cyan-300"
          to="/features#-self-hosted-typesense-search"
        >
          every link hover to show preview page
        </Link>
      </>
    ),
  },

  {
    title: "🥇 Fullstack wiki",
    img_url: `/img/IconDocusaurusProfColor.svg`,
    alt: "RJKB is a fullstack wiki made with Docusaurus",
    description: (
      <>
        Explore my{" "}
        <Link
          className="text-cyan-900 dark:text-cyan-300"
          to="/docs/js"
        >
          fullstack knowledgebase
        </Link>
        , 9000+ docs with{" "}
        <Link
          className="text-cyan-900 dark:text-cyan-300"
          to="/features#-hover-link-previews"
        >
          every link hover to show preview page
        </Link>
      </>
    ),
  },
  {
    title: "🥇 Unbreaking Docusaurus",
    // SVG: IconDocusaurusHurt9KColorSVG,
    img_url: "/img/IconDocusaurusHurt9KColor.svg",
    alt: "Docusaurus can't scale well with too many pages",
    description: (
      <>
        <Link
          className="text-cyan-900 dark:text-cyan-300"
          to="/features#-unbreaking-docusaurus"
        >
          Custom Fixes
        </Link>{" "}
        to enable Docusaurus to build 9000+ pages, without crashing. SWC-loader
      </>
    ),
  },
  {
    title: "🥇 Docusaurus",
    SVG: IconDocusaurusColorSVG,
    description: (
      <>
        Pre-baked solutions for SSG, Routing, Darkmode. Extra Plugins:
        <code>@docusaurus/theme-live-codeblock</code>
        <code>docusaurus-theme-search-typesense</code>
      </>
    ),
  },

  {
    title: "Typescript",
    SVG: IconTypescriptColorSVG,
    description: (
      <>
        Fully-typed top-down for Client-side KB app & all other portfolio
        projects
        <Link
          className="text-cyan-900 dark:text-cyan-300"
          to="./docs/features#typescript"
        >
          Typescript
        </Link>
      </>
    ),
  },
  {
    title: "RJNote IDE Plugin",
    SVG: IconRjnoteCodeEditorColorSVG,
    description: <>Esbuild/Go + WebAssembly publish separately on NPM</>,
  },
]

function Feature({
  title,
  SVG: Svg,
  VIDEO,
  description,
  img_str,
  img_url,
  alt,
}: FeatureItem) {
  return (
    <div
      id={title}
      className="col col--4"
    >
      <div className="not:hover:delay-1000 hover:from-neutral-1000 m-1 flex transform-gpu justify-center rounded-tl-3xl rounded-br-3xl bg-gradient-to-t from-neutral-300 to-cyan-300 transition-all duration-1000 hover:rounded-full hover:from-neutral-100 hover:to-cyan-500 hover:opacity-90 dark:bg-gradient-to-t dark:from-sky-500 dark:to-emerald-900 hover:dark:from-sky-300 hover:dark:to-sky-900">
        {/*    dark:opacity-60 */}
        {Svg && (
          <Svg
            className="logo h-48 w-48 items-center"
            role="img"
          />
        )}

        {img_str && (
          <img
            loading="lazy"
            alt={alt}
            src={img_str}
            className="img_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-Img-styles-module h-48 w-48 items-center"
          />
        )}
        {img_url && (
          <img
            loading="lazy"
            alt={alt}
            src={useBaseUrl(img_url)}
            className="img_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-Img-styles-module h-48 w-48 items-center"
          />
        )}
        {VIDEO && (
          <video
            autoPlay={true}
            loop={true}
          >
            <source
              src={VIDEO}
              type="video/mp4"
            />
          </video>
        )}
      </div>
      {/* mix-blend-luminosity  hover:mix-blend-plus-lighter */}
      <div className="padding-horiz--md text-center">
        <h3 className="rounded-t-full font-extrabold text-slate-900 shadow-inner shadow-teal-400 dark:text-cyan-100">
          <a
            className="text-neutral-900 dark:text-neutral-50"
            id={_.kebabCase(title)}
          >
            {title}
          </a>
        </h3>
        <p className="rounded-b-full font-bold text-zinc-900 dark:text-cyan-100">
          {description}
        </p>
      </div>
    </div>
  )
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className="flex w-full items-center bg-prism-light p-8 dark:bg-prism-dark">
      <div className="container">
        <div className="my-0 flex w-fit flex-wrap justify-center">
          {FeatureList.map((props, i) => (
            <Feature
              key={props.title}
              {...props}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
