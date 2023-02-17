import React from "react"
import clsx from "clsx"
import styles from "./styles.module.css"
import Link from "@docusaurus/Link"

type FeatureItem = {
  title: string
  Svg: React.ComponentType<React.ComponentProps<"svg">>
  description: JSX.Element
}

const FeatureList: FeatureItem[] = [
  {
    title: "Docusaurus",
    Svg: require("@site/static/img/icon-docusaurus-color.svg").default,
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
    Svg: require("@site/static/img/logo-typesense-color-official.svg").default,
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
    Svg: require("@site/static/img/icon-typescript-color.svg").default,
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
    Svg: require("@site/static/img/icon-react-color.svg").default,
    description: (
      <>
        Latest React 18 features in client-side apps including{" "}
        <code>Suspense</code>
      </>
    ),
  },
  {
    title: "JSON to MDX",
    Svg: require("@site/static/img/logo-mdx-light.svg").default,
    description: <>Recursively</>,
  },
  {
    title: "Node.js",
    Svg: require("@site/static/img/icon-node.js-color.svg").default,
    description: (
      <>
        Recursively render directories & write to MDX for Docusaurus to process
      </>
    ),
  },
  {
    title: "Docker",
    Svg: require("@site/static/img/icon-docker-color.svg").default,
    description: <>Typesense & Typsense DocScraper deploy via Docker Compose</>,
  },
  {
    title: "ngrok",
    Svg: require("@site/static/img/logo-ngrok.svg").default,
    description: (
      <>Reverse Proxy to deploy build for typesense-docscraper to </>
    ),
  },
  {
    title: "RJNote IDE Plugin",
    Svg: require("@site/static/img/icon-rjnote-code-editor-color.svg").default,
    description: <>Esbuild/Go + WebAssembly publish separately on NPM</>,
  },
  {
    title: "ESBuild",
    Svg: require("@site/static/img/icon-esbuild-color.svg").default,
    description: (
      <>
        Replaced Webpack with ESBuild for JSLoader to speed up build times from
        2hrs+ to ??
      </>
    ),
  },
  {
    title: "Fullstack KB",
    Svg: require("@site/static/img/icon-brain-circle-color.svg").default,
    description: <>RJ's KB extended </>,
  },
  {
    title: "Alternative Client-side KB App",
    Svg: require("@site/static/img/icon-brain-circle-color.svg").default,
    description: <>Redux Toolkit. </>,
  },

  {
    title: "Redux Toolkit",
    Svg: require("@site/static/img/logo-redux-official-color.svg").default,
    description: (
      <>
        Redux Toolkit + <code>react-redux</code>
      </>
    ),
  },

  {
    title: "React Live Code Editor",
    Svg: require("@site/static/img/logo-react-live-color.svg").default,
    description: (
      <>
        Live Code Editor via <code>@docusaurus/theme-live-codeblock</code>
      </>
    ),
  },
  {
    title: "Recursive Madness",
    Svg: require("@site/static/img/icon-spiral-loop-black.svg").default,
    description: (
      <>Transform JSON DB from Remnote into MDX, plaintext slugs, </>
    ),
  },
  {
    title: "test",
    Svg: require("@site/static/img/logo-docker-name-black.svg").default,
    description: <>RJ's KB </>,
  },
  {
    title: "tsnodesvg?",
    Svg: require("@site/static/img/logo-ts-node-black.svg").default,
    description: <>RJ's KB </>,
  },
  {
    title: "TS-black?",
    Svg: require("@site/static/img/logo+text-typescript-black.svg").default,
    description: <>RJ's KB </>,
  },
  {
    title: "TS-blue?",
    Svg: require("@site/static/img/logo+text-typescript-color.svg").default,
    description: <>RJ's KB </>,
  },
  {
    title: "__",
    Svg: require("@site/static/img/_.svg").default,
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

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div
      id={title}
      className="col col--4"
    >
      <div className="flex justify-center bg-gradient-to-bl  from-cyan-100 to-gray-100 dark:bg-gradient-to-bl  dark:from-cyan-900 dark:to-gray-800 transition-all m-1">
        <Svg
          className="items-center h-48 w-48"
          role="img"
        />
      </div>
      <div className="padding-horiz--md text-center">
        <h3 className="shadow-lg">{title}</h3>
        <p className="text-cyan-800">{description}</p>
      </div>
    </div>
  )
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
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
