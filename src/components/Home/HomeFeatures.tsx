import React from "react"
import clsx from "clsx"
//@ts-ignore
import Link from "@docusaurus/Link"
// import mdx_ssg_video from "../../../static/vid/mdx-ssg-x264-crf30-placebo.mp4"
// import {} from "../../../static/img/svg" //! deprecate all React.ComponentType<React.ComponentProps<"svg">> imports because Docusaurus is corrupting (some) SVG images - bad SVG parsing clearly somewhere - and it's better to just avoid this 💩🐱‍🐉
import Video from "../Video"
//@ts-ignore
import useBaseUrl from "@docusaurus/useBaseUrl"
import _ from "lodash"

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
  //Video-Highlights // Kills Vitals to put on init screen!
  {
    title: "🥇 SSG over SSG",
    // SVG: DrawRJSSGColorSVG,
    img_url: `/img/DrawRJSSGColorV2.svg`,
    alt: "Diagram of SSG Converting JSON into JSX & MDX via Node.js",
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
        into 9000+ MDX + YAML frontmatter & 1300+ Preview JSX into dirpath
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
        Hover{" "}
        <Link
          className="text-cyan-900 dark:text-cyan-300"
          to="/docs"
        >
          /docs links
        </Link>{" "}
        to show instant beautiful interactive preview pages
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
        Deploy{" "}
        <Link
          className="text-cyan-900 dark:text-cyan-300"
          to="/features#-self-hosted-typesense-search"
        >
          <code>Typesense</code> Search Engine
        </Link>{" "}
        as <code>Docker</code> container to <code>fly.io</code> server, scraped
        with <code>DocSearch</code> & PUT synonyms.
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
        Explore my{" "}
        <Link
          className="text-cyan-900 dark:text-cyan-300"
          to="/docs/js"
        >
          fullstack KB
        </Link>
        , with 9000+ concise definitions + ⚡ fast cloud search engine
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
        to build 2-4X faster & fix{" "}
        <code>FATAL ERROR: JavaScript heap out of memory</code>☠ when docusaurus
        can't scale
      </>
    ),
    lazy: true,
  },
  {
    title: "🐱‍🐉 Docusaurus SSG",
    img_url: "/img/DrawDocusaurusStackColor.svg",
    alt: "Docusaurus comes prepacked with features",
    description: (
      <>Made with Docusaurus 2.4.0, a feature-packed extensible SSG framework</>
    ),
    lazy: true,
  },
]

function Feature({
  title,
  SVG: Svg,
  description,
  img_str,
  img_url,
  alt,
  vid_path,
  poster,
  config,
  lazy,
}: FeatureItem) {
  return (
    <div
      id={title}
      className="col col--4"
    >
      <div className="not:hover:delay-1000 hover:from-neutral-1000 m-1 flex transform-gpu justify-center rounded-tl-3xl rounded-br-3xl bg-gradient-to-t from-neutral-300 to-cyan-300 transition-all duration-1000 hover:rounded-full hover:from-neutral-100 hover:to-cyan-500 hover:opacity-90 dark:bg-gradient-to-t dark:from-sky-500 dark:to-emerald-900 hover:dark:from-sky-300 hover:dark:to-sky-900">
        {Svg && (
          <Svg
            className="logo h-48 w-48 items-center"
            role="img"
          />
        )}
        {img_str && (
          <img
            loading={`${lazy ? "lazy" : "eager"}`}
            alt={alt}
            src={img_str}
            className="img_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-Img-styles-module h-48 w-48 items-center"
          />
        )}
        {img_url && !vid_path && (
          <img
            loading={`${lazy ? "lazy" : "eager"}`}
            alt={alt}
            src={useBaseUrl(img_url)}
            className={`items-center ${config?.h ? "h-64" : "h-48 w-48"}`}
          />
        )}
        {vid_path && !img_url && (
          <Video
            title={title}
            src={vid_path}
            poster={poster}
            w={350}
          />
        )}
        {/*
        items-center justify-center overflow-hidden;
        */}
        {img_url && vid_path && (
          <div>
            <div
              className={`${config?.inline ? "inline-flex self-center" : ""}`}
            >
              <img
                loading={`${lazy ? "lazy" : "eager"}`}
                alt={alt}
                src={useBaseUrl(img_url)}
                className="img_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-Img-styles-module h-36 w-36 items-center"
              />
            </div>
            <div
              className={`${config?.inline ? "inline-flex self-center" : ""}`}
            >
              <Video
                title={title}
                src={vid_path}
                poster={poster}
                w={config?.w || 350}
                h={config?.h}
              />
            </div>
          </div>
        )}
      </div>
      {/* mix-blend-luminosity  hover:mix-blend-plus-lighter */}
      <div className="padding-horiz--md text-center">
        <h3 className="rounded-t-full font-extrabold text-slate-900 shadow-inner shadow-teal-400 dark:text-cyan-100">
          <span
            className="text-neutral-900 dark:text-neutral-50"
            id={_.kebabCase(title)}
          >
            {title}
          </span>
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
