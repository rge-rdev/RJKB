import React from "react"
import Link from "@docusaurus/Link"
import useDocusaurusContext from "@docusaurus/useDocusaurusContext"
import HomeLogoSlider from "./HomeLogoSlider"
import IconArrowDownCircleBlackSVG from "../../../static/img/icon-down-button-docusaurus-green.svg"

export default function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext()
  return (
    <header className="flex flex-col items-center text-[color:var(--ifm-hero-text-color)] bg-green-700 dark:bg-teal-500 bg-blend-hard-light hero--primary text-center relative overflow-hidden mt-1 bg-circuit-light">
      <div className="flex flex-col justify-center items-center">
        <h1 className="hero__title shadow-lg rounded-full w-1/2 mt-2 mb-5 max-w-screen-sm">
          {siteConfig.title}
        </h1>
        <h2 className="w-fit flex flex-col justify-center items-center shadow-lg rounded-full mb-10 px-10 font-light italic">
          {siteConfig.tagline}
        </h2>
        <div className="">
          <HomeLogoSlider />
        </div>
        <p className="fixed opacity-0 animate-fade-in-out">
          Explore My Fullstack Knowledge Showcase
        </p>
        <div className="">
          <Link
            // className="button button--secondary button--lg hover:shadow-2xl"
            className="animate-fade-in animate-pulse-2x"
            to="#explore"
          >
            <IconArrowDownCircleBlackSVG
              id="explore"
              height="4em"
              className="active:overflow-hidden"
            />
          </Link>
        </div>
      </div>
    </header>
  )
}
