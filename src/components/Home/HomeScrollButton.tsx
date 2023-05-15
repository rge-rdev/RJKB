/**
 * Copyright(c) Roger Jiang
 */

/**
 * A Completely over-kill scroll button
 */

import React, { useEffect, useState } from "react"
//@ts-ignore
import Link from "@docusaurus/Link"
//@ts-ignore
import { useColorMode } from "@docusaurus/theme-common"

export default function HomeScrollButton() {
  const [scrollUp, setScrollUp] = useState(false)
  const { isDarkTheme } = useColorMode()

  useEffect(() => {
    const threshold = 0
    let lastScrollY = window.pageYOffset
    let ticking = false

    const updateScrollDir = () => {
      const scrollY = window.pageYOffset

      if (Math.abs(scrollY - lastScrollY) < threshold) {
        ticking = false
        return
      }
      setScrollUp(scrollY > lastScrollY ? true : false)
      lastScrollY = scrollY > 0 ? scrollY : 0
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
  }, [scrollUp])

  return (
    <Link
      className="animate-fade-in animate-pulse-2x"
      to={scrollUp || scrollUp ? "#scroll-to-features" : "#"}
      aria-label="button to scroll down to see site features"
      onClick={() => setScrollUp(!scrollUp)}
      style={{
        width: "60px",
        height: "60px",
        display: "block",
        animation: "fadein 10s",
      }}
    >
      <img
        src={`data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' transform='rotate(${
          scrollUp ? "0" : "180"
        })' viewBox='0 0 24 24'%3E%3Cpath fill='%23${
          isDarkTheme ? "00473f" : "369b63"
        }' fill-rule='evenodd' d='M12 4a8 8 0 1 0 0 16 8 8 0 0 0 0-16zM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12zm5.293-.707 4-4a1 1 0 0 1 1.414 0l4 4a1 1 0 0 1-1.414 1.414L13 10.414V16a1 1 0 1 1-2 0v-5.586l-2.293 2.293a1 1 0 0 1-1.414-1.414z' clip-rule='evenodd'/%3E%3C/svg%3E`}
        id="scroll-to-features"
        height="60"
        width="60"
        alt="Nav Button to scroll down to feature highlights of iFullStack.dev"
        className="scroll-smooth active:overflow-hidden"
      />
    </Link>
  )
}
