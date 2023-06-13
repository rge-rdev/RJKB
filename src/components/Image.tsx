interface ImageProps {
  images: {
    srcSet: string
    type: "png" | "webp" | "avif" | "svg"
    media: string
    alt: string
  }[]
}

export default function Image({ images }: ImageProps) {
  return (
    <picture>
      {images.map(({ srcSet, type, media, alt }) => (
        <source
          srcSet={`${srcSet}`}
          media={`${media}`}
          type={`image/${type}${type === "svg" ? "+xml" : ""}`}
        />
      ))}
    </picture>
  )
}
