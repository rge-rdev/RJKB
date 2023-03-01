import React from "react"
import clsx from "clsx"
import Link from "@docusaurus/Link"
// import mdx_ssg_video from "../../../static/vid/mdx-ssg-x264-crf30-placebo.mp4"
import {
  IconArrowDownCircleBlackSVG,
  IconArrowLeftCircleBlackSVG,
  IconArrowRightCircleBlackSVG,
  IconArrowRopRightCircleBlackSVG,
  IconArrowTopLeftCircleBlackSVG,
  IconArrowUpCircleBlackSVG,
  IconBrainCircleColorSVG,
  IconCodeEditorDiamondColorSVG,
  IconDockerColorSVG,
  IconDocusaurusBlackSVG,
  IconDocusaurusColorSVG,
  IconDocusaurusGreySVG,
  IconDownButtonCyanBlueSVG,
  IconDownButtonDocusaurusGreenSVG,
  IconEsbuildColorSVG,
  IconGitSVG,
  IconHTML5GreySVG,
  IconJavascriptBlackSVG,
  IconNodeJSBlackSVG,
  IconNodeJSColorSVG,
  IconReactBlackSVG,
  IconReactColorSVG,
  IconReactGreySVG,
  IconRjnoteCodeEditorColorSVG,
  IconSpiralLoopBlackSVG,
  IconTailwindcssBlackSVG,
  IconTailwindcssColorSVG,
  IconTypescriptBlackSVG,
  IconTypescriptColorSVG,
  LogoTypesenseColorSVG,
  IconWebassemblyColorSVG,
  LogoMDXColorSVG,
  LogoMDXLightSVG,
  LogoNgrokSVG,
  LogoNodeJSColorSVG,
  IconReactLiveColorSVG,
  IconReduxOfficialColorSVG,
  LogoTailwindcssOfficialColorSVG,
  LogoTSNodeBlackSVG,
  LogoTSNodeColorSVG,
  LogoTSNodeGreySVG,
  LogoSVG,
  LogoTextDockerBlackSVG,
  LogoTextTypescriptBlackSVG,
  LogoTextTypescriptColorSVG,
  UndrawDocusaurusMountainSVG,
  UndrawDocusaurusReactSVG,
  UndrawDocusaurusTreeSVG,
  IconYarnBlackSVG,
  IconYarnColorSVG,
} from "../../../static/img/svg"

type FeatureItem = {
  title: string
  SVG?: React.ComponentType<React.ComponentProps<"svg">>
  VIDEO?: string
  description: JSX.Element
}

const FeatureList: FeatureItem[] = [
  {
    title: "Docusaurus",
    SVG: IconDocusaurusColorSVG,
    description: (
      <>
        Pre-baked solutions for SSG, Routing, Darkmode. Extra Plugins:
        <code>@docusaurus/theme-live-codeblock</code>
        <code>docusaurus-theme-search-typesense</code>
      </>
    ),
  },
  {
    title: "Typesense",
    SVG: LogoTypesenseColorSVG,
    description: (
      <>
        Fully-indexed via <code>typesense-docscraper</code> run on self-hosted
        docker+ngrok instance. <code>Typesense DocSearch</code> Search UI (
        <kbd>Ctrl+K</kbd>) for ⚡ fast typo-tolerant fuzzy search - extended
        with alias collections
      </>
    ),
  },
  {
    title: "Typescript",
    SVG: IconTypescriptColorSVG,
    description: (
      <>
        Fully-typed top-down for Client-side KB app & all other portfolio
        projects
        <Link to="./docs/features#typescript">Typescript</Link>
      </>
    ),
  },
  {
    title: "React",
    SVG: IconReactColorSVG,
    description: (
      <>
        Latest React 18 features in client-side apps including{" "}
        <code>Suspense</code>
      </>
    ),
  },
  {
    title: "Custom SSG to MDX",
    SVG: IconReactColorSVG, //  VIDEO:mdx_ssg_video,
    description: (
      <>
        Custom SSG script to traverse JSON DB & map out dir for Docusaurus
        File-Based Router.
      </>
    ),
  },
  {
    title: "JSON to MDX",
    SVG: LogoMDXLightSVG,
    description: <>Custom Node copy RJScripts to Recursively</>,
  },
  {
    title: "Node.js",
    SVG: IconNodeJSColorSVG,
    description: (
      <>
        Recursively render directories & write to MDX for Docusaurus to process
      </>
    ),
  },
  {
    title: "Docker",
    SVG: IconDockerColorSVG,
    description: <>Typesense & Typsense DocScraper deploy via Docker Compose</>,
  },
  {
    title: "ngrok",
    SVG: LogoNgrokSVG,
    description: (
      <>Reverse Proxy to deploy build for typesense-docscraper to </>
    ),
  },
  {
    title: "RJNote IDE Plugin",
    SVG: IconRjnoteCodeEditorColorSVG,
    description: <>Esbuild/Go + WebAssembly publish separately on NPM</>,
  },
  {
    title: "ESBuild",
    SVG: IconEsbuildColorSVG,
    description: (
      <>
        Replaced Webpack with ESBuild for JSLoader to speed up build times from
        2hrs+ to ??
      </>
    ),
  },
  {
    title: "Fullstack KB",
    SVG: IconBrainCircleColorSVG,
    description: <>RJ's KB extended </>,
  },
  {
    title: "Alternative Client-side KB App",
    SVG: IconBrainCircleColorSVG,
    description: <>Redux Toolkit. </>,
  },

  {
    title: "Redux Toolkit",
    SVG: IconReduxOfficialColorSVG,
    description: (
      <>
        Redux Toolkit + <code>react-redux</code>
      </>
    ),
  },

  {
    title: "React Live Code Editor",
    SVG: IconReactLiveColorSVG,
    description: (
      <>
        Live Code Editor via <code>@docusaurus/theme-live-codeblock</code>
      </>
    ),
  },
  {
    title: "Recursive Madness",
    SVG: IconSpiralLoopBlackSVG,
    description: (
      <>Transform JSON DB from Remnote into MDX, plaintext slugs, </>
    ),
  },
  {
    title: "test",
    SVG: LogoTextDockerBlackSVG,
    description: <>RJ's KB </>,
  },
  {
    title: "tsnodesvg?",
    SVG: LogoTSNodeColorSVG,
    description: <>RJ's KB </>,
  },
  {
    title: "TS-black?",
    SVG: LogoTextTypescriptBlackSVG,
    description: <>RJ's KB </>,
  },
  {
    title: "TS-blue?",
    SVG: LogoTypesenseColorSVG,
    description: <>RJ's KB </>,
  },
  {
    title: "__",
    SVG: IconYarnBlackSVG,
    description: <>RJ's KB </>,
  },
]

const fl = FeatureList.length
//bg-[url('../../../static/img/bg-prism.svg') bg-fixed bg-cover
//opacity-80

function Feature({ title, SVG: Svg, VIDEO, description }: FeatureItem) {
  return (
    <div
      id={title}
      className="col col--4 hover:mix-blend-hard-light"
    >
      <div className="flex justify-center bg-gradient-to-bl  from-cyan-300 to-gray-300 dark:bg-gradient-to-bl  dark:from-sky-500 dark:to-emerald-900  m-1 rounded-tl-3xl rounded-br-3xl opacity-70 dark:opacity-60 transition-all">
        {Svg && (
          <Svg
            className="items-center h-48 w-48"
            role="img"
          />
        )}
        {VIDEO && (
          <video
            autoPlay={true}
            loop={true}
          >
            <source
              src={VIDEO}
              type="video/mp4"
            />
          </video>
        )}
      </div>
      <div className="padding-horiz--md text-center mix-blend-luminosity hover:mix-blend-plus-lighter">
        <h3 className="shadow-teal-400 shadow-inner text-sky-900 dark:text-cyan-100 rounded-t-full font-extrabold">
          {title}
        </h3>
        <p className="text-cyan-900 dark:text-cyan-100 rounded-b-full font-bold">
          {description}
        </p>
      </div>
    </div>
  )
}

//bg-blend-darken

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className="flex items-center p-8 w-full bg-prism-light dark:bg-prism-dark">
      <div className="container">
        <div className="flex flex-wrap my-0 justify-center w-fit">
          {FeatureList.map((props, i) => (
            <Feature
              key={props.title}
              {...props}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
