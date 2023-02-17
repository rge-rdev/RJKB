//@ts-nocheck
import React from "react"
import TS_SVG from "../../static/img/icon-typescript-black.svg"
import REACT_SVG from "../../static/img/icon-react-black.svg"
import NODEJS_SVG from "../../static/img/icon-node.js-black.svg"
import DOCUSAURUS_SVG from "../../static/img/icon-docusaurus-black.svg"
import DOCKER_SVG from "../../static/img/docker-working.svg"
import TSNODE_SVG from "../../static/img/logo-ts-node-black.svg"
import HTML5_SVG from "../../static/img/icon-html5-grey.svg"
import TAIL_SVG from "../../static/img/icon-tailwindcss-color.svg"

interface SliderProps {
  children?: React.ReactNode
}

const square = {
  height: 60,
  width: 60,
}
const rect = {
  height: 60,
}
const top = [
  <REACT_SVG {...square} />,
  <TAIL_SVG {...square} />,
  <NODEJS_SVG {...square} />,
  <DOCUSAURUS_SVG {...square} />,
  <TSNODE_SVG {...rect} />,
  <DOCKER_SVG {...rect} />,
  <HTML5_SVG {...square} />,
]
const bot = [
  <HTML5_SVG {...square} />,
  <DOCKER_SVG {...rect} />,
  <TSNODE_SVG {...rect} />,
  <DOCUSAURUS_SVG {...square} />,
  <NODEJS_SVG {...square} />,
  <TS_SVG {...square} />,
]

// <REACT_SVG {...square} />,
interface SliderRowProps {
  arr_row: JSX.Element[]
}

function SliderRow({ arr_row }: SliderRowProps) {
  function Slides() {
    return (
      <div className="inline-block ">
        {arr_row.map((component) => (
          <div className="inline-block opacity-10 hover:opacity-90 transition-all px-5 shadow-sm hover:shadow-lg rounded-sm hover:rounded-br-3xl hover:rounded-tl-3xl hover:animate-bounce">
            {component}
          </div>
        ))}
      </div>
    )
  }

  return (
    <>
      <Slides />
      <Slides />
    </>
  )
}

export default function Slider(props: SliderProps) {
  return (
    <div className="mt-1 pb-5">
      <div className="inline-block whitespace-nowrap overflow-visible animate-slide-100">
        <SliderRow arr_row={top} />
      </div>
      <div className="pt-5 mb-1 inline-block whitespace-nowrap overflow-hidden animate-slide-80 ">
        <SliderRow arr_row={bot} />
      </div>
    </div>
  )
}
