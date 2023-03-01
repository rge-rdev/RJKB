import React from "react"
import useDocusaurusContext from "@docusaurus/useDocusaurusContext"
import Layout from "@theme/Layout"
import HomepageFeatures from "../components/Home/HomeFeatures"
import HomeHeader from "../components/Home/HomeHeader"

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext()
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="COPYRIGHT ROGER JIANG 2023 RJ's Fullstack Knowledgebase & Portfolio Demo."
    >
      <HomeHeader />

      <main id="features">
        <HomepageFeatures />
      </main>
    </Layout>
  )
}
