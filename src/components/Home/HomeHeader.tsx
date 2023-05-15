/**
 * Copyright(c) Roger Jiang
 */

import React, { useEffect, useState } from "react"
//@ts-ignore
import Link from "@docusaurus/Link"
//@ts-ignore
import useDocusaurusContext from "@docusaurus/useDocusaurusContext"
import { IconArrowDownCircleBlackSVG } from "../../../static/img/svg"
const HomeLogoSlider = React.lazy(() => import("./HomeLogoSlider"))
const HomeScrollButton = React.lazy(() => import("./HomeScrollButton"))

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
    <header
      className="relative mt-1 flex flex-col items-center overflow-hidden bg-green-700 text-center bg-blend-hard-light dark:bg-teal-700"
      style={{
        backgroundImage:
          "url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMDQgMzA0Ij48cGF0aCBkPSJNNDQuMSAyMjRhNSA1IDAgMSAxIDAgMkgwdi0yaDQ0LjF6bTE2MCA0OGE1IDUgMCAxIDEgMCAySDgydi0yaDEyMi4xem01Ny44LTQ2YTUgNSAwIDEgMSAwLTJIMzA0djJoLTQyLjF6bTAgMTZhNSA1IDAgMSAxIDAtMkgzMDR2MmgtNDIuMXptNi4yLTExNGE1IDUgMCAxIDEgMCAyaC04Ni4yYTUgNSAwIDEgMSAwLTJoODYuMnptLTI1Ni00OGE1IDUgMCAxIDEgMCAySDB2LTJoMTIuMXptMTg1LjggMzRhNSA1IDAgMSAxIDAtMmg4Ni4yYTUgNSAwIDEgMSAwIDJoLTg2LjJ6TTI1OCAxMi4xYTUgNSAwIDEgMS0yIDBWMGgydjEyLjF6bS02NCAyMDhhNSA1IDAgMSAxLTIgMHYtNTQuMmE1IDUgMCAxIDEgMiAwdjU0LjJ6bTQ4LTE5OC4yVjgwaDYydjJoLTY0VjIxLjlhNSA1IDAgMSAxIDIgMHptMTYgMTZWNjRoNDZ2MmgtNDhWMzcuOWE1IDUgMCAxIDEgMiAwem0tMTI4IDk2VjIwOGgxNnYxMi4xYTUgNSAwIDEgMS0yIDBWMjEwaC0xNnYtNzYuMWE1IDUgMCAxIDEgMiAwem0tNS45LTIxLjlhNSA1IDAgMSAxIDAgMkgxMTR2NDhIODUuOWE1IDUgMCAxIDEgMC0ySDExMnYtNDhoMTIuMXptLTYuMiAxMzBhNSA1IDAgMSAxIDAtMkgxNzZ2LTc0LjFhNSA1IDAgMSAxIDIgMFYyNDJoLTYwLjF6bS0xNi02NGE1IDUgMCAxIDEgMC0ySDExNHY0OGgxMC4xYTUgNSAwIDEgMSAwIDJIMTEydi00OGgtMTAuMXpNNjYgMjg0LjFhNSA1IDAgMSAxLTIgMFYyNzRINTB2MzBoLTJ2LTMyaDE4djEyLjF6TTIzNi4xIDE3NmE1IDUgMCAxIDEgMCAySDIyNnY5NGg0OHYzMmgtMnYtMzBoLTQ4di05OGgxMi4xem0yNS44LTMwYTUgNSAwIDEgMSAwLTJIMjc0djQ0LjFhNSA1IDAgMSAxLTIgMFYxNDZoLTEwLjF6bS02NCA5NmE1IDUgMCAxIDEgMC0ySDIwOHYtODBoMTZ2LTE0aC00Mi4xYTUgNSAwIDEgMSAwLTJIMjI2djE4aC0xNnY4MGgtMTIuMXptODYuMi0yMTBhNSA1IDAgMSAxIDAgMkgyNzJWMGgydjMyaDEwLjF6TTk4IDEwMS45VjE0Nkg1My45YTUgNSAwIDEgMSAwLTJIOTZ2LTQyLjFhNSA1IDAgMSAxIDIgMHpNNTMuOSAzNGE1IDUgMCAxIDEgMC0ySDgwVjBoMnYzNEg1My45em02MC4xIDMuOVY2Nkg4MnY2NEg2OS45YTUgNSAwIDEgMSAwLTJIODBWNjRoMzJWMzcuOWE1IDUgMCAxIDEgMiAwek0xMDEuOSA4MmE1IDUgMCAxIDEgMC0ySDEyOFYzNy45YTUgNSAwIDEgMSAyIDBWODJoLTI4LjF6bTE2LTY0YTUgNSAwIDEgMSAwLTJIMTQ2djQ0LjFhNSA1IDAgMSAxLTIgMFYxOGgtMjYuMXptMTAyLjIgMjcwYTUgNSAwIDEgMSAwIDJIOTh2MTRoLTJ2LTE2aDEyNC4xek0yNDIgMTQ5LjlWMTYwaDE2djM0aC0xNnY2Mmg0OHY0OGgtMnYtNDZoLTQ4di02NmgxNnYtMzBoLTE2di0xMi4xYTUgNSAwIDEgMSAyIDB6TTUzLjkgMThhNSA1IDAgMSAxIDAtMkg2NFYySDQ4VjBoMTh2MThINTMuOXptMTEyIDMyYTUgNSAwIDEgMSAwLTJIMTkyVjBoNTB2MmgtNDh2NDhoLTI4LjF6bS00OC00OGE1IDUgMCAwIDEtOS44LTJoMi4wN2EzIDMgMCAxIDAgNS42NiAwSDE3OHYzNGgtMThWMjEuOWE1IDUgMCAxIDEgMiAwVjMyaDE0VjJoLTU4LjF6bTAgOTZhNSA1IDAgMSAxIDAtMkgxMzdsMzItMzJoMzlWMjEuOWE1IDUgMCAxIDEgMiAwVjY2aC00MC4xN2wtMzIgMzJIMTE3Ljl6bTI4LjEgOTAuMWE1IDUgMCAxIDEtMiAwdi03Ni41MUwxNzUuNTkgODBIMjI0VjIxLjlhNSA1IDAgMSAxIDIgMFY4MmgtNDkuNTlMMTQ2IDExMi40MXY3NS42OXptMTYgMzJhNSA1IDAgMSAxLTIgMHYtOTkuNTFMMTg0LjU5IDk2SDMwMC4xYTUgNSAwIDAgMSAzLjktMy45djIuMDdhMyAzIDAgMCAwIDAgNS42NnYyLjA3YTUgNSAwIDAgMS0zLjktMy45SDE4NS40MUwxNjIgMTIxLjQxdjk4LjY5em0tMTQ0LTY0YTUgNSAwIDEgMS0yIDB2LTMuNTFsNDgtNDhWNDhoMzJWMGgydjUwSDY2djU1LjQxbC00OCA0OHYyLjY5ek01MCA1My45djQzLjUxbC00OCA0OFYyMDhoMjYuMWE1IDUgMCAxIDEgMCAySDB2LTY1LjQxbDQ4LTQ4VjUzLjlhNSA1IDAgMSAxIDIgMHptLTE2IDE2djE5LjUxbC0zNCAzNHYtMi44MmwzMi0zMlY2OS45YTUgNSAwIDEgMSAyIDB6TTEyLjEgMzJhNSA1IDAgMSAxIDAgMkg5LjQxTDAgNDMuNDFWNDAuNkw4LjU5IDMyaDMuNTF6bTI2NS44IDE4YTUgNSAwIDEgMSAwLTJoMTguNjlsNy40MS03LjQxdjIuODJMMjk3LjQxIDUwSDI3Ny45em0tMTYgMTYwYTUgNSAwIDEgMSAwLTJIMjg4di03MS40MWwxNi0xNnYyLjgybC0xNCAxNFYyMTBoLTI4LjF6bS0yMDggMzJhNSA1IDAgMSAxIDAtMkg2NHYtMjIuNTlMNDAuNTkgMTk0SDIxLjlhNSA1IDAgMSAxIDAtMmgxOS41MUw2NiAyMTYuNTlWMjQySDUzLjl6bTE1MC4yIDE0YTUgNSAwIDEgMSAwIDJIOTZ2LTU2LjZMNTYuNiAxNjJIMzcuOWE1IDUgMCAxIDEgMC0yaDE5LjVMOTggMjAwLjZWMjU2aDEwNi4xem0tMTUwLjIgMmE1IDUgMCAxIDEgMC0ySDgwdi00Ni41OUw0OC41OSAxNzhIMjEuOWE1IDUgMCAxIDEgMC0yaDI3LjUxTDgyIDIwOC41OVYyNThINTMuOXpNMzQgMzkuOHYxLjYxTDkuNDEgNjZIMHYtMmg4LjU5TDMyIDQwLjU5VjBoMnYzOS44ek0yIDMwMC4xYTUgNSAwIDAgMSAzLjkgMy45SDMuODNBMyAzIDAgMCAwIDAgMzAyLjE3VjI1NmgxOHY0OGgtMnYtNDZIMnY0Mi4xek0zNCAyNDF2NjNoLTJ2LTYySDB2LTJoMzR2MXpNMTcgMThIMHYtMmgxNlYwaDJ2MThoLTF6bTI3My0yaDE0djJoLTE2VjBoMnYxNnptLTMyIDI3M3YxNWgtMnYtMTRoLTE0djE0aC0ydi0xNmgxOHYxek0wIDkyLjFBNS4wMiA1LjAyIDAgMCAxIDYgOTdhNSA1IDAgMCAxLTYgNC45di0yLjA3YTMgMyAwIDEgMCAwLTUuNjZWOTIuMXpNODAgMjcyaDJ2MzJoLTJ2LTMyem0zNy45IDMyaC0yLjA3YTMgMyAwIDAgMC01LjY2IDBoLTIuMDdhNSA1IDAgMCAxIDkuOCAwek01LjkgMEE1LjAyIDUuMDIgMCAwIDEgMCA1LjlWMy44M0EzIDMgMCAwIDAgMy44MyAwSDUuOXptMjk0LjIgMGgyLjA3QTMgMyAwIDAgMCAzMDQgMy44M1Y1LjlhNSA1IDAgMCAxLTMuOS01Ljl6bTMuOSAzMDAuMXYyLjA3YTMgMyAwIDAgMC0xLjgzIDEuODNoLTIuMDdhNSA1IDAgMCAxIDMuOS0zLjl6TTk3IDEwMGEzIDMgMCAxIDAgMC02IDMgMyAwIDAgMCAwIDZ6bTAtMTZhMyAzIDAgMSAwIDAtNiAzIDMgMCAwIDAgMCA2em0xNiAxNmEzIDMgMCAxIDAgMC02IDMgMyAwIDAgMCAwIDZ6bTE2IDE2YTMgMyAwIDEgMCAwLTYgMyAzIDAgMCAwIDAgNnptMCAxNmEzIDMgMCAxIDAgMC02IDMgMyAwIDAgMCAwIDZ6bS00OCAzMmEzIDMgMCAxIDAgMC02IDMgMyAwIDAgMCAwIDZ6bTE2IDE2YTMgMyAwIDEgMCAwLTYgMyAzIDAgMCAwIDAgNnptMzIgNDhhMyAzIDAgMSAwIDAtNiAzIDMgMCAwIDAgMCA2em0tMTYgMTZhMyAzIDAgMSAwIDAtNiAzIDMgMCAwIDAgMCA2em0zMi0xNmEzIDMgMCAxIDAgMC02IDMgMyAwIDAgMCAwIDZ6bTAtMzJhMyAzIDAgMSAwIDAtNiAzIDMgMCAwIDAgMCA2em0xNiAzMmEzIDMgMCAxIDAgMC02IDMgMyAwIDAgMCAwIDZ6bTMyIDE2YTMgMyAwIDEgMCAwLTYgMyAzIDAgMCAwIDAgNnptMC0xNmEzIDMgMCAxIDAgMC02IDMgMyAwIDAgMCAwIDZ6bS0xNi02NGEzIDMgMCAxIDAgMC02IDMgMyAwIDAgMCAwIDZ6bTE2IDBhMyAzIDAgMSAwIDAtNiAzIDMgMCAwIDAgMCA2em0xNiA5NmEzIDMgMCAxIDAgMC02IDMgMyAwIDAgMCAwIDZ6bTAgMTZhMyAzIDAgMSAwIDAtNiAzIDMgMCAwIDAgMCA2em0xNiAxNmEzIDMgMCAxIDAgMC02IDMgMyAwIDAgMCAwIDZ6bTE2LTE0NGEzIDMgMCAxIDAgMC02IDMgMyAwIDAgMCAwIDZ6bTAgMzJhMyAzIDAgMSAwIDAtNiAzIDMgMCAwIDAgMCA2em0xNi0zMmEzIDMgMCAxIDAgMC02IDMgMyAwIDAgMCAwIDZ6bTE2LTE2YTMgMyAwIDEgMCAwLTYgMyAzIDAgMCAwIDAgNnptLTk2IDBhMyAzIDAgMSAwIDAtNiAzIDMgMCAwIDAgMCA2em0wIDE2YTMgMyAwIDEgMCAwLTYgMyAzIDAgMCAwIDAgNnptMTYtMzJhMyAzIDAgMSAwIDAtNiAzIDMgMCAwIDAgMCA2em05NiAwYTMgMyAwIDEgMCAwLTYgMyAzIDAgMCAwIDAgNnptLTE2LTY0YTMgMyAwIDEgMCAwLTYgMyAzIDAgMCAwIDAgNnptMTYtMTZhMyAzIDAgMSAwIDAtNiAzIDMgMCAwIDAgMCA2em0tMzIgMGEzIDMgMCAxIDAgMC02IDMgMyAwIDAgMCAwIDZ6bTAtMTZhMyAzIDAgMSAwIDAtNiAzIDMgMCAwIDAgMCA2em0tMTYgMGEzIDMgMCAxIDAgMC02IDMgMyAwIDAgMCAwIDZ6bS0xNiAwYTMgMyAwIDEgMCAwLTYgMyAzIDAgMCAwIDAgNnptLTE2IDBhMyAzIDAgMSAwIDAtNiAzIDMgMCAwIDAgMCA2ek00OSAzNmEzIDMgMCAxIDAgMC02IDMgMyAwIDAgMCAwIDZ6bS0zMiAwYTMgMyAwIDEgMCAwLTYgMyAzIDAgMCAwIDAgNnptMzIgMTZhMyAzIDAgMSAwIDAtNiAzIDMgMCAwIDAgMCA2ek0zMyA2OGEzIDMgMCAxIDAgMC02IDMgMyAwIDAgMCAwIDZ6bTE2LTQ4YTMgMyAwIDEgMCAwLTYgMyAzIDAgMCAwIDAgNnptMCAyNDBhMyAzIDAgMSAwIDAtNiAzIDMgMCAwIDAgMCA2em0xNiAzMmEzIDMgMCAxIDAgMC02IDMgMyAwIDAgMCAwIDZ6bS0xNi02NGEzIDMgMCAxIDAgMC02IDMgMyAwIDAgMCAwIDZ6bTAgMTZhMyAzIDAgMSAwIDAtNiAzIDMgMCAwIDAgMCA2em0tMTYtMzJhMyAzIDAgMSAwIDAtNiAzIDMgMCAwIDAgMCA2em04MC0xNzZhMyAzIDAgMSAwIDAtNiAzIDMgMCAwIDAgMCA2em0xNiAwYTMgMyAwIDEgMCAwLTYgMyAzIDAgMCAwIDAgNnptLTE2LTE2YTMgMyAwIDEgMCAwLTYgMyAzIDAgMCAwIDAgNnptMzIgNDhhMyAzIDAgMSAwIDAtNiAzIDMgMCAwIDAgMCA2em0xNi0xNmEzIDMgMCAxIDAgMC02IDMgMyAwIDAgMCAwIDZ6bTAtMzJhMyAzIDAgMSAwIDAtNiAzIDMgMCAwIDAgMCA2em0xMTIgMTc2YTMgMyAwIDEgMCAwLTYgMyAzIDAgMCAwIDAgNnptLTE2IDE2YTMgMyAwIDEgMCAwLTYgMyAzIDAgMCAwIDAgNnptMCAxNmEzIDMgMCAxIDAgMC02IDMgMyAwIDAgMCAwIDZ6bTAgMTZhMyAzIDAgMSAwIDAtNiAzIDMgMCAwIDAgMCA2ek0xNyAxODBhMyAzIDAgMSAwIDAtNiAzIDMgMCAwIDAgMCA2em0wIDE2YTMgMyAwIDEgMCAwLTYgMyAzIDAgMCAwIDAgNnptMC0zMmEzIDMgMCAxIDAgMC02IDMgMyAwIDAgMCAwIDZ6bTE2IDBhMyAzIDAgMSAwIDAtNiAzIDMgMCAwIDAgMCA2ek0xNyA4NGEzIDMgMCAxIDAgMC02IDMgMyAwIDAgMCAwIDZ6bTMyIDY0YTMgMyAwIDEgMCAwLTYgMyAzIDAgMCAwIDAgNnptMTYtMTZhMyAzIDAgMSAwIDAtNiAzIDMgMCAwIDAgMCA2eiIgb3BhY2l0eT0iLjA1Ii8+PC9zdmc+)",
      }}
    >
      <div
        className="flex aspect-auto flex-col items-center justify-center"
        style={{ height: "384px", width: "100%" }}
      >
        <h1
          id="test"
          className={`mb-5 mt-2 w-fit max-w-screen-sm rounded-full text-5xl font-extralight text-cyan-900 shadow-lg dark:text-cyan-100 ${
            scrollHeader
              ? "fixed top-0 z-[250] animate-fade-in-slow-75 opacity-75"
              : "fixed top-0 animate-fade-out-fast-75 opacity-0"
          }`}
          style={{ height: "60px", width: "120px" }}
        >
          RJKB
        </h1>
        <h1
          className="mb-5 mt-2 max-w-screen-sm rounded-full text-5xl text-cyan-900 shadow-lg dark:text-cyan-100"
          style={{ height: "64px", width: "250px" }}
        >
          {siteConfig.title}
        </h1>
        <h2
          className={`mb-10 flex flex-col items-center justify-center rounded-full px-10 font-semibold italic text-cyan-200 shadow-lg dark:text-cyan-300 ${
            scrollTagline
              ? "fixed top-20 animate-fade-in-md-50 opacity-50"
              : "fixed top-20 animate-fade-out-md-50 opacity-0"
          }`}
          style={{ height: "30px", width: "355px" }}
        >
          {siteConfig.tagline}
        </h2>
        <h2
          className={`mb-10 flex flex-col items-center justify-center rounded-full px-10 font-light italic text-cyan-200 shadow-lg dark:text-cyan-300 ${
            scrollTagline ? "animate-fade-out-fast-75 opacity-0" : ""
          }`}
          style={{ height: "30px", width: "355px" }}
        >
          {siteConfig.tagline}
        </h2>
        <React.Suspense
          fallback={<div style={{ width: "100%", height: "384px" }}></div>}
        >
          <HomeLogoSlider />
        </React.Suspense>
        <React.Suspense
          fallback={<div style={{ height: "60px", width: "60px" }}></div>}
        >
          <HomeScrollButton />
        </React.Suspense>
      </div>
    </header>
  )
}
