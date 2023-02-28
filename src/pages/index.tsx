import React from "react"
import Link from "@docusaurus/Link"
import useDocusaurusContext from "@docusaurus/useDocusaurusContext"
import Layout from "@theme/Layout"
import HomepageFeatures from "../components/HomepageFeatures"
import LogoSlider from "../components/LogoSlider"
import DArrow from "@site/static/img/icon-down-button-docusaurus-green.svg"

//bg-zinc-300
// bg-[color:#2c8152] dark:bg-[color:#24be9c]
// bg-green-700 dark:bg-teal-500
function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext()
  return (
    <header className="flex flex-col items-center text-[color:var(--ifm-hero-text-color)] bg-green-700 dark:bg-teal-500 bg-blend-hard-light hero--primary text-center relative overflow-hidden mt-1">
      <div className="flex flex-col justify-center items-center">
        <h1 className="hero__title shadow-lg rounded-full w-1/2 mt-2 mb-5">
          {siteConfig.title}
        </h1>
        <h2
          className="w-fit flex flex-col justify-center items-center shadow-lg rounded-full mb-10 px-10"
          id="aa"
        >
          {siteConfig.tagline}
        </h2>
        <LogoSlider />

        <div className="">
          <Link
            // className="button button--secondary button--lg hover:shadow-2xl"
            className="animate-pulse"
            to="#aa"
          >
            <DArrow
              height="4em"
              className="active:overflow-hidden "
            />
          </Link>
        </div>
      </div>
    </header>
  )
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext()
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="COPYRIGHT ROGER JIANG 2023 RJ's Fullstack Knowledgebase & Portfolio Demo."
    >
      <HomepageHeader />

      <main id="features">
        <HomepageFeatures />
      </main>
    </Layout>
  )
}
