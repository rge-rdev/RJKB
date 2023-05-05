/**
 * Copyright(c) Roger Jiang
 */

import React, { Suspense, lazy } from "react"
//@ts-ignore
import Link from "@docusaurus/Link"

import DrawRJSSGColorV2_288avif from "./DrawRJSSGColorV2_288.avif"
import DrawRJSSGColorV2_288webp from "./DrawRJSSGColorV2_288.webp"
import DrawHoverPreviewColor_288avif from "./DrawHoverPreviewColor_288.avif"
import DrawHoverPreviewColor_288webp from "./DrawHoverPreviewColor_288.webp"
import DrawRJKBTypesenseSearchColor_288avif from "./DrawRJKBTypesenseSearchColor_288.avif"
import DrawRJKBTypesenseSearchColor_288webp from "./DrawRJKBTypesenseSearchColor_288.webp"
import IconDocusaurusProfColor_384avif from "./IconDocusaurusProfColor_384.avif"
import IconDocusaurusProfColor_384webp from "./IconDocusaurusProfColor_384.webp"
import IconDocusaurusHurt_384avif from "./IconDocusaurusHurt_384.avif"
import IconDocusaurusHurt_384webp from "./IconDocusaurusHurt_384.webp"
import DrawDocusaurusStackColor_384avif from "./DrawDocusaurusStackColor_384.avif"
import DrawDocusaurusStackColor_384webp from "./DrawDocusaurusStackColor_384.webp"

const Feature = lazy(() => import("./Feature"))

/**
 * @type img_url @replace @deprecated @type img_str to set direct srcSet @string
 */

type FeatureItem = {
  title: string
  SVG?: React.ComponentType<React.ComponentProps<"svg">>
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
    img_url: `${DrawRJSSGColorV2_288avif}, ${DrawRJSSGColorV2_288webp}`,
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
    img_url: `${DrawHoverPreviewColor_288avif}, ${DrawHoverPreviewColor_288webp}`,
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
    img_url: `${DrawRJKBTypesenseSearchColor_288avif}, ${DrawRJKBTypesenseSearchColor_288webp}`,
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
    img_url: `${IconDocusaurusProfColor_384avif}, ${IconDocusaurusProfColor_384webp}`,
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
    img_url: `${IconDocusaurusHurt_384avif}, ${IconDocusaurusHurt_384webp}`,
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
    img_url: `${DrawDocusaurusStackColor_384avif}, ${DrawDocusaurusStackColor_384webp}`,
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
