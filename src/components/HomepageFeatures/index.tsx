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
    description: <>SSG Routing Darkmode Extended plugins: live-code</>,
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
        Docusaurus was designed from the ground up to be easily installed and
        used to get your website up and running quickly.
        <Link to="./docs/features#typescript">Typescript</Link>
      </>
    ),
  },
  {
    title: "React",
    Svg: require("@site/static/img/icon-react-color.svg").default,
    description: (
      <>
        Extend or customize your website layout by reusing React. Docusaurus can
        be extended while reusing the same header and footer.
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
    Svg: require("@site/static/img/icon-code-editor-diamond-color.svg").default,
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
    title: "__",
    Svg: require("@site/static/img/_.svg").default,
    description: <>RJ's KB </>,
  },
]

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg
          className={styles.featureSvg}
          role="img"
        />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature
              key={idx}
              {...props}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
