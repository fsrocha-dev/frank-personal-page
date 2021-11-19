export default function dynamicImportImage(imageName, imagePath) {
  let payloadImage
  const acceptedPaths = {
    photos() {
      payloadImage = require(`../public/static/photos/${imageName}`)
    },
    images() {
      payloadImage = require(`../public/static/images/${imageName}`)
    }
  }

  const getImage = acceptedPaths[imagePath]
  getImage()

  return {
    src: payloadImage.default.src,
    blurURL: payloadImage.default.blurDataURL
  }
}
