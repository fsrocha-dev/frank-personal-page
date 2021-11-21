import Image from 'next/image'
import dynamicImportImage from '../lib/dynamic-image-import'

export default function ImageItem(
  props = { quality: 100, alt: 'This is a image' }
) {
  const { name, path, quality, alt } = props
  const { src, blurURL } = dynamicImportImage(name, path)

  return (
    <Image
      layout="fill"
      src={src}
      blurDataURL={blurURL}
      placeholder="blur"
      loading="lazy"
      alt={alt}
      quality={quality}
    />
  )
}
