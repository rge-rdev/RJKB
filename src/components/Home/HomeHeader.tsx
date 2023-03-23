import React, { useEffect, useState } from "react"
//@ts-ignore
import Link from "@docusaurus/Link"
//@ts-ignore
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
    <header className="hero--primary relative mt-1 flex flex-col items-center overflow-hidden bg-green-700 bg-circuit-light text-center text-[color:var(--ifm-hero-text-color)] bg-blend-hard-light dark:bg-teal-700">
      <div className="flex flex-col items-center justify-center">
        <h1
          id="test"
          className={`hero__title mb-5 mt-2 w-fit  max-w-screen-sm rounded-full font-extralight text-cyan-900 shadow-lg dark:text-cyan-100 ${
            scrollHeader
              ? "fixed top-0 z-[250] animate-fade-in-slow-75 opacity-75"
              : "fixed top-0 animate-fade-out-fast-75 opacity-0"
          }`}
        >
          RJKB
        </h1>
        <h1
          className={`hero__title mt-2 mb-5 w-1/2 max-w-screen-sm rounded-full text-cyan-900 shadow-lg dark:text-cyan-100`}
        >
          {siteConfig.title}
        </h1>
        <h2
          className={`mb-10 flex w-fit flex-col items-center justify-center rounded-full px-10 font-semibold italic text-cyan-200 shadow-lg dark:text-cyan-300 ${
            scrollTagline
              ? "fixed top-20 animate-fade-in-md-50 opacity-50"
              : "fixed top-20 animate-fade-out-md-50 opacity-0"
          }`}
        >
          {siteConfig.tagline}
        </h2>
        <h2
          className={`mb-10 flex w-fit flex-col items-center justify-center rounded-full px-10 font-light italic text-cyan-200 shadow-lg dark:text-cyan-300 ${
            scrollTagline ? "animate-fade-out-fast opacity-0" : ""
          }`}
        >
          {siteConfig.tagline}
        </h2>
        <div>
          <HomeLogoSlider />
        </div>
        <p className="fixed animate-fade-in-out text-cyan-300 opacity-0 dark:text-cyan-500">
          Explore My Fullstack Knowledge Showcase
        </p>
        <div>
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
