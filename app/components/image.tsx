import NextImage, { ImageProps as NextImageProps } from 'next/image'

type ImageProps = NextImageProps & {
  alt: string
}

export function Image(props: ImageProps) {
  return (
    <NextImage
      {...props}
      alt={props.alt}
      loading="lazy"
      placeholder="blur"
      blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAACklEQVR4nGMAAQAABQABDQottAAAAABJRU5ErkJggg=="
    />
  )
}

