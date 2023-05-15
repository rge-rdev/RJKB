/**
 * Copyright(c) Roger Jiang
 */

import React from "react"
//@ts-ignore
import Layout from "@theme/Layout"
import HomepageFeatures from "../components/Home/HomeFeatures"
import HomeHeader from "../components/Home/HomeHeader"

export default function Home(): JSX.Element {
  return (
    <Layout
      title="Search Everything FullStack in RJKB Wiki - Dictionary for Developers"
      description="FullStack Dev Wiki with Concise Definitions for EVERY Term/Concept/Code: Browse with ⚡fast instant-search, stylish hover-preview pages, seamless SPA navigation."
    >
      <style>{`@keyframes fadein {
    from {
        opacity:0;
    }
    to {
        opacity:1;
    }
}`}</style>
      <HomeHeader />
      <HomepageFeatures />
    </Layout>
  )
}
