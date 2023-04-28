/**
 * Copyright(c) Roger Jiang
 */

import React, { Suspense, lazy } from "react"
const FeatureList = lazy(() => import("./FeatureList"))

const PreviewHWLTjZrhernsLocy7 = lazy(
  () => import("../../../static/preview/PreviewHWLTjZrhernsLocy7")
)

export default function HomepageFeatures(): JSX.Element {
  return (
    <main
      id="features"
      className="flex w-full items-center bg-prism-light p-1 dark:bg-prism-dark sm:p-2 md:p-4 lg:p-6 xl:p-8"
    >
      {/* container */}
      <div className="mx-auto my-0 box-border w-full max-w-screen-xl px-4 py-0 2xl:max-w-screen-2xl">
        {/* row */}
        <div className="my-0 ml-[-1rem] mr-[-1rem] flex flex-wrap">
          <Suspense
            fallback={<div style={{ width: "100%", height: "400px" }}></div>}
          >
            <FeatureList />
          </Suspense>
        </div>
      </div>
      <Suspense fallback={null}>
        <PreviewHWLTjZrhernsLocy7 />
      </Suspense>
    </main>
  )
}
