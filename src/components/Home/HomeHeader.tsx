import React, { useEffect, useState } from "react"
import Link from "@docusaurus/Link"
import useDocusaurusContext from "@docusaurus/useDocusaurusContext"
import HomeLogoSlider from "./HomeLogoSlider"
import { IconArrowDownCircleBlackSVG } from "../../../static/img/svg"

export default function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext()

  const [scrollHeader, setScrollheader] = useState(false)
  const [scrollTagline, setScrollTagline] = useState(false)

  useEffect(() => {
    const threshold = 0
    const h_max = 64
    const h_min = 57
    const t_max = 375
    const t_min = 120 //105

    let lastScrollY = window.pageYOffset
    let ticking = false

    const updateScrollDir = () => {
      const scrollY = window.pageYOffset

      if (Math.abs(scrollY - lastScrollY) < threshold) {
        ticking = false
        return
      }
      lastScrollY = scrollY > 0 ? scrollY : 0
      if (scrollY >= h_max) setScrollheader(true)
      if (scrollY < h_max && scrollY < h_min) setScrollheader(false)
      if (scrollY >= t_min && scrollY < t_max) {
        setScrollTagline(true)
      } else {
        setScrollTagline(false)
      }
      ticking = false
    }

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollDir)
        ticking = true
      }
    }

    window.addEventListener("scroll", onScroll)

    return () => window.removeEventListener("scroll", onScroll)
  }, [scrollHeader])

  return (
    <header className="flex flex-col items-center text-[color:var(--ifm-hero-text-color)] bg-green-700 dark:bg-teal-700 bg-blend-hard-light hero--primary text-center relative overflow-hidden mt-1 bg-circuit-light">
      <div className="flex flex-col justify-center items-center">
        <h1
          id="test"
          className={`hero__title shadow-lg rounded-full w-fit mt-2 mb-5 max-w-screen-sm text-cyan-900 dark:text-cyan-100 font-extralight ${
            scrollHeader
              ? "fixed top-0 z-[250] animate-fade-in-slow-75 opacity-75"
              : "fixed top-0 animate-fade-out-fast-75 opacity-0"
          }`}
        >
          RJKB
        </h1>
        <h1
          className={`hero__title shadow-lg rounded-full w-1/2 mt-2 mb-5 max-w-screen-sm text-cyan-900 dark:text-cyan-100`}
        >
          {siteConfig.title}
        </h1>
        <h2
          className={`w-fit flex flex-col justify-center items-center shadow-lg rounded-full mb-10 px-10 font-semibold italic text-cyan-200 dark:text-cyan-300 ${
            scrollTagline
              ? "fixed top-20 animate-fade-in-md-50 opacity-50"
              : "fixed top-20 animate-fade-out-md-50 opacity-0"
          }`}
        >
          {siteConfig.tagline}
        </h2>
        <h2
          className={`w-fit flex flex-col justify-center items-center shadow-lg rounded-full mb-10 px-10 font-light italic text-cyan-200 dark:text-cyan-300 ${
            scrollTagline ? "animate-fade-out-fast opacity-0" : ""
          }`}
        >
          {siteConfig.tagline}
        </h2>
        <div className="">
          <HomeLogoSlider />
        </div>
        <p className="fixed opacity-0 animate-fade-in-out text-cyan-300 dark:text-cyan-500">
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