import React from "react"
import clsx from "clsx"
import styles from "./styles.module.css"
import Link from "@docusaurus/Link"
import mdx_ssg_video from "@site/static/vid/mdx-ssg-x264-crf30-placebo.mp4"

type FeatureItem = {
  title: string
  SVG?: React.ComponentType<React.ComponentProps<"svg">>
  VIDEO?: string
  description: JSX.Element
}

const FeatureList: FeatureItem[] = [
  {
    title: "Docusaurus",
    SVG: require("@site/static/img/icon-docusaurus-color.svg").default,
    description: (
      <>
        Pre-baked solutions for SSG, Routing, Darkmode. Extra Plugins:
        <code>@docusaurus/theme-live-codeblock</code>
        <code>docusaurus-theme-search-typesense</code>
      </>
    ),
  },
  {
    title: "Typesense",
    SVG: require("@site/static/img/logo-typesense-color-official.svg").default,
    description: (
      <>
        Fully-indexed via <code>typesense-docscraper</code> run on self-hosted
        docker+ngrok instance. <code>Typesense DocSearch</code> Search UI (
        <kbd>Ctrl+K</kbd>) for ⚡ fast typo-tolerant fuzzy search - extended
        with alias collections
      </>
    ),
  },
  {
    title: "Typescript",
    SVG: require("@site/static/img/icon-typescript-color.svg").default,
    description: (
      <>
        Fully-typed top-down for Client-side KB app & all other portfolio
        projects
        <Link to="./docs/features#typescript">Typescript</Link>
      </>
    ),
  },
  {
    title: "React",
    SVG: require("@site/static/img/icon-react-color.svg").default,
    description: (
      <>
        Latest React 18 features in client-side apps including{" "}
        <code>Suspense</code>
      </>
    ),
  },
  // Custom SSG
  {
    title: "Custom SSG to MDX",
    VIDEO: mdx_ssg_video,
    description: (
      <>
        Custom SSG script to traverse JSON DB & map out dir for Docusaurus
        File-Based Router.
      </>
    ),
  },
  {
    title: "JSON to MDX",
    SVG: require("@site/static/img/logo-mdx-light.svg").default,
    description: <>Recursively</>,
  },
  {
    title: "Node.js",
    SVG: require("@site/static/img/icon-node.js-color.svg").default,
    description: (
      <>
        Recursively render directories & write to MDX for Docusaurus to process
      </>
    ),
  },
  {
    title: "Docker",
    SVG: require("@site/static/img/icon-docker-color.svg").default,
    description: <>Typesense & Typsense DocScraper deploy via Docker Compose</>,
  },
  {
    title: "ngrok",
    SVG: require("@site/static/img/logo-ngrok.svg").default,
    description: (
      <>Reverse Proxy to deploy build for typesense-docscraper to </>
    ),
  },
  {
    title: "RJNote IDE Plugin",
    SVG: require("@site/static/img/icon-rjnote-code-editor-color.svg").default,
    description: <>Esbuild/Go + WebAssembly publish separately on NPM</>,
  },
  {
    title: "ESBuild",
    SVG: require("@site/static/img/icon-esbuild-color.svg").default,
    description: (
      <>
        Replaced Webpack with ESBuild for JSLoader to speed up build times from
        2hrs+ to ??
      </>
    ),
  },
  {
    title: "Fullstack KB",
    SVG: require("@site/static/img/icon-brain-circle-color.svg").default,
    description: <>RJ's KB extended </>,
  },
  {
    title: "Alternative Client-side KB App",
    SVG: require("@site/static/img/icon-brain-circle-color.svg").default,
    description: <>Redux Toolkit. </>,
  },

  {
    title: "Redux Toolkit",
    SVG: require("@site/static/img/logo-redux-official-color.svg").default,
    description: (
      <>
        Redux Toolkit + <code>react-redux</code>
      </>
    ),
  },

  {
    title: "React Live Code Editor",
    SVG: require("@site/static/img/logo-react-live-color.svg").default,
    description: (
      <>
        Live Code Editor via <code>@docusaurus/theme-live-codeblock</code>
      </>
    ),
  },
  {
    title: "Recursive Madness",
    SVG: require("@site/static/img/icon-spiral-loop-black.svg").default,
    description: (
      <>Transform JSON DB from Remnote into MDX, plaintext slugs, </>
    ),
  },
  {
    title: "test",
    SVG: require("@site/static/img/logo-text-docker-black.svg").default,
    description: <>RJ's KB </>,
  },
  {
    title: "tsnodesvg?",
    SVG: require("@site/static/img/logo-ts-node-black.svg").default,
    description: <>RJ's KB </>,
  },
  {
    title: "TS-black?",
    SVG: require("@site/static/img/logo-text-typescript-black.svg").default,
    description: <>RJ's KB </>,
  },
  {
    title: "TS-blue?",
    SVG: require("@site/static/img/logo-text-typescript-color.svg").default,
    description: <>RJ's KB </>,
  },
  {
    title: "__",
    SVG: require("@site/static/img/_.svg").default,
    description: <>RJ's KB </>,
  },
]

/**
 * 
 * @param param0   display: flex;
  align-items: center;
  padding: 2rem 0;
  width: 100%;
 * @returns 
 */

function Feature({ title, SVG: Svg, VIDEO, description }: FeatureItem) {
  return (
    <div
      id={title}
      className="col col--4 "
    >
      <div className="flex justify-center bg-gradient-to-bl  from-cyan-100 to-gray-100 dark:bg-gradient-to-bl  dark:from-cyan-900 dark:to-gray-800 transition-all m-1">
        {Svg && (
          <Svg
            className="items-center h-48 w-48"
            role="img"
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
      <div className="padding-horiz--md text-center">
        <h3 className="shadow-lg">{title}</h3>
        <p className="text-cyan-800">{description}</p>
      </div>
    </div>
  )
}
/**
 * 
   display: flex;
  align-items: center;
  padding: 2rem 0;
  width: 100%;
 */

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className="flex items-center p-8 w-full bg-blend-darken">
      <div className="container ">
        <div className="flex flex-wrap my-0 justify-center">
          {FeatureList.map((props) => (
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
