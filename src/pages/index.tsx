import React, { lazy, Suspense } from "react"
//@ts-ignore
import useDocusaurusContext from "@docusaurus/useDocusaurusContext"
//@ts-ignore
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
      <HomepageFeatures />
    </Layout>
  )
}
