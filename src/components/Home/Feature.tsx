/**
 * Copyright(c) Roger Jiang
 */

import React from "react"
import Video from "../Video"
import kebabCase from "lodash/kebabCase"

type FeatureItem = {
  title: string
  SVG?: React.ComponentType<React.ComponentProps<"svg">>
  img_url?: string
  alt?: string
  vid_path?: string
  poster?: string
  config?: { inline?: boolean; w?: number; h?: number }
  description?: JSX.Element
  lazy?: boolean
}

export default function Feature({
  title,
  SVG: Svg,
  description,
  img_url,
  alt,
  vid_path,
  poster,
  config,
  lazy,
}: FeatureItem) {
  return (
    <div
      id={title}
      className="ml-0 box-border w-full flex-[0_0_100%] px-4 py-0 md:max-w-[50%] lg:max-w-[33.3333%]"
    >
      <div
        className={`group m-1 flex justify-center ${
          img_url
            ? "not:hover:delay-1000 hover:from-neutral-1000 transform-gpu rounded-br-2xl rounded-tl-2xl bg-gradient-to-t from-neutral-300 to-cyan-300 transition-all duration-1000 hover:rounded-3xl hover:from-neutral-100 hover:to-cyan-500 hover:opacity-90 dark:bg-gradient-to-t dark:from-sky-500 dark:to-emerald-900 hover:dark:from-sky-300 hover:dark:to-sky-900"
            : ""
        }`}
      >
        {Svg && (
          <Svg
            className="h-48 w-48 items-center"
            role="img"
          />
        )}
        {img_url && !vid_path && (
          <img
            loading={`${lazy ? "lazy" : "eager"}`}
            alt={alt}
            srcSet={img_url}
            className={`items-center ${config?.h ? "h-64" : "h-48 w-48"}`}
          />
        )}
        {vid_path && !img_url && (
          <Video
            title={title}
            src={vid_path}
            poster={poster}
            w={350}
            className="max-w-full"
          />
        )}
        {img_url && vid_path && (
          <div
            className="block"
            style={{ height: "260px", width: "366px" }}
          >
            <div
              className={`${config?.inline ? "inline-flex " : ""}text-center`}
              style={{
                width: `${config?.inline ? "144px" : "366px"}`,
                height: `${config?.inline ? "260px" : "144px"}`,
                verticalAlign: "top",
              }}
            >
              <img
                loading={`${lazy ? "lazy" : "eager"}`}
                alt={alt}
                srcSet={img_url}
                className="h-36 w-36 items-center"
              />
            </div>
            <div
              className={`${
                config?.inline ? "inline-flex " : ""
              }text-center px-2`}
              style={{
                width: `${config?.w || (config?.h && "132")}px`,
                height: `${config?.h ? config?.h + "px" : "auto"}`,
              }}
            >
              <Video
                title={title}
                src={vid_path}
                poster={poster}
                w={config?.w || 350}
                h={config?.h}
                className="max-w-full"
              />
            </div>
          </div>
        )}
      </div>
      <div className="group h-auto w-auto px-4 text-center">
        <h3 className="transform-gpu rounded-t-full bg-gradient-to-tr from-cyan-50/75 to-cyan-300/75 font-extrabold text-slate-900 shadow-inner shadow-teal-400 duration-1000 group-hover:to-cyan-50 dark:from-cyan-800/75 dark:text-cyan-100 dark:group-hover:to-emerald-700">
          <span
            className="text-neutral-900 dark:text-neutral-50"
            id={kebabCase(title)}
          >
            {title}
          </span>
        </h3>
        <p className="transform-gpu rounded-b-2xl bg-gradient-to-br from-teal-200/25 to-emerald-300/50 font-bold text-zinc-900 duration-1000 group-hover:rounded-b-3xl group-hover:rounded-t-xl group-hover:from-teal-50 group-hover:to-emerald-200/75 dark:from-teal-500/25 dark:text-cyan-100 dark:group-hover:from-teal-500/75 dark:group-hover:to-emerald-700/75">
          {description}
        </p>
      </div>
    </div>
  )
}
