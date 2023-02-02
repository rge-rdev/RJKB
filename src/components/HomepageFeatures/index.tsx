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
    title: "Typescript",
    Svg: require("@site/static/img/undraw_docusaurus_mountain.svg").default,
    description: (
      <>
        Docusaurus was designed from the ground up to be easily installed and
        used to get your website up and running quickly.
        <Link to="./docs/features#typescript">Typescript</Link>
      </>
    ),
  },
  {
    title: "Docusaurus",
    Svg: require("@site/static/img/undraw_docusaurus_tree.svg").default,
    description: (
      <>
        SSG Routing Docusaurus lets you focus on your docs, and we&apos;ll do
        the chores. Go ahead and move your docs into the <code>docs</code>{" "}
        directory.
      </>
    ),
  },
  {
    title: "React",
    Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
    description: (
      <>
        Extend or customize your website layout by reusing React. Docusaurus can
        be extended while reusing the same header and footer.
      </>
    ),
  },
  {
    title: "JSON to MDX",
    Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
    description: <>Recursively</>,
  },
  {
    title: "Node.js",
    Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
    description: (
      <>
        Recursively render directories & write to MDX for Docusaurus to process
      </>
    ),
  },
  {
    title: "RJNote IDE Plugin",
    Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
    description: <>Esbuild/Go + WebAssembly publish separately on NPM</>,
  },
  {
    title: "Fullstack Web Dev Knowledgebase",
    Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
    description: <>Extensive question</>,
  },

  {
    title: "Typesense Fuzzy Search Integration",
    Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
    description: <>Scraper Docker Fuzzy Search</>,
  },
  {
    title: "Flashcard Q/A testing",
    Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
    description: <>Extensive question</>,
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
