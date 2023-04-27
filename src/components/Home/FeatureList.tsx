import React, { Suspense, lazy } from "react"
//@ts-ignore
import Link from "@docusaurus/Link"

const Feature = lazy(() => import("./Feature"))

type FeatureItem = {
  title: string
  SVG?: React.ComponentType<React.ComponentProps<"svg">>
  img_str?: string
  img_url?: string
  alt?: string
  vid_path?: string
  poster?: string
  config?: { inline?: boolean; w?: number; h?: number }
  description?: JSX.Element
  lazy?: boolean
}

const FeatureList: FeatureItem[] = [
  {
    title: "🥇 SSG over SSG",
    img_url: `/img/DrawRJSSGColorV2.svg`,
    alt: "Diagram of SSG Converting JSON into MDX & TSX via Node.js",
    vid_path: "/vid/RJKB_SSG_CLI_350.mp4",
    poster: "/vid/RJKB_SSG_CLI_350.webp",
    description: (
      <>
        <Link
          className="text-cyan-900 dark:text-cyan-300"
          to="/features#-ssg-over-ssg"
        >
          Node.js script transforms JSON
        </Link>{" "}
        into 9000+ MDX with YAML frontmatter & 1500+ Preview TSX into dir
        hierarchy, in {`>`}30s!
      </>
    ),
  },
  {
    title: "🥇 Hover Link Previews",
    img_url: "/img/DrawHoverPreviewColor_288.webp",
    alt: "RJKB Doc Links show preview page on hover",
    vid_path: "/vid/RJKB_hover_preview_iphone_116.mp4",
    poster: "/vid/RJKB_hover_preview_iphone_116.webp",
    config: { inline: true, h: 250 },
    description: (
      <>
        👉
        <Link
          className="text-cyan-900 dark:text-cyan-300"
          to="/features#-hover-link-previews"
          data-tooltip-id="preview__HWLTjZrhernsLocy7"
          // data-tooltip-delay-hide={30000}
        >
          Hover Preview Pages
        </Link>
        👈 for all links in{" "}
        <Link
          className="text-cyan-900 dark:text-cyan-300"
          to="/wiki/JS"
        >
          /wiki
        </Link>{" "}
        for ⚡ fast, stylish & interactive browsing experience
      </>
    ),
  },
  {
    title: "🥇 Self-hosted Search",
    img_url: "/img/DrawRJKBTypesenseSearchColor_288.webp",
    alt: "RJKB Doc Links show preview page on hover",
    vid_path: "/vid/RJKB_docker_compose_up_350.mp4",
    poster: "/vid/RJKB_docker_compose_up_350.webp",
    description: (
      <>
        <Link
          className="text-cyan-900 dark:text-cyan-300"
          to="/features#-self-hosted-typesense-search"
        >
          <code>Typesense</code> Search Engine
        </Link>{" "}
        deploy to <code>fly.io</code> as <code>Docker</code> container, scraped
        by <code>Algolia</code> <code>DocSearch</code> & PUT synonyms
        collections.
      </>
    ),
  },
  {
    title: "💎 Multi-way Synonym Search",
    vid_path: "/vid/RJKB_Search_Synonyms_350.mp4",
    poster: "/vid/RJKB_Search_Synonyms_350.webp",
  },
  {
    title: "💎 Typo-tolerant Fuzzy Search",
    vid_path: "/vid/RJKB_Search_Fuzzy_350.mp4",
    poster: "/vid/RJKB_Search_Fuzzy_350.webp",
  },
  {
    title: "💎 RJKB Fullstack Search",
    vid_path: "/vid/RJKB_Fullstack_Search_350.mp4",
    poster: "/vid/RJKB_Fullstack_Search_350.webp",
  },
  //Docusaurus-SVGs
  {
    title: "👨‍🎓 Fullstack wiki",
    img_url: `/img/IconDocusaurusProfColor.svg`,
    alt: "RJKB is a fullstack wiki made with Docusaurus",
    description: (
      <>
        <Link
          className="text-cyan-900 dark:text-cyan-300"
          to="/wiki/js"
        >
          Explore the best fullstack wiki
        </Link>{" "}
        with 9000+ concise definitions for EVERYTHING fullstack + ⚡ instant
        search engine
      </>
    ),
    lazy: true,
  },
  {
    title: "💪 Unbreaking Docusaurus",
    // SVG: IconDocusaurusHurt9KColorSVG,
    img_url: "/img/IconDocusaurusHurt9KColor.svg",
    alt: "Docusaurus can't scale well with too many pages",
    description: (
      <>
        <Link
          className="text-cyan-900 dark:text-cyan-300"
          to="/features#-unbreaking-docusaurus"
        >
          Hack Webpack
        </Link>{" "}
        to build/mangle/compress 2-4X faster, fix{" "}
        <code>FATAL ERROR: JavaScript heap out of memory</code>☠ docusaurus
        scaling
      </>
    ),
    lazy: true,
  },
  {
    title: "🐱‍🐉 Docusaurus SSG",
    img_url: "/img/DrawDocusaurusStackColor.svg",
    alt: "Docusaurus comes prepacked with features",
    description: (
      <>
        Made with Docusaurus 2.4.0, a feature-packed extensible SSG framework.
        Try out the ifullstack.dev PWA app!
      </>
    ),
    lazy: true,
  },
]

export default function RenderFeatures() {
  return (
    <>
      {FeatureList.map((props, i) => (
        <Suspense
          fallback={<div style={{ width: "100%", height: "400px" }}></div>}
        >
          <Feature
            key={props.title}
            {...props}
          />
        </Suspense>
      ))}
    </>
  )
}
