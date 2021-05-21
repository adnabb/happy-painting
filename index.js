const canvas = document.querySelector('canvas')
const ctx    = canvas.getContext('2d')

const image = new Image()
image.src = 'image.png'

image.onload = function () {
  canvas.width  = image.width
  canvas.height = image.height
  ctx.drawImage(image, 0, 0)

  const imageData = ctx.getImageData(0, 0, image.width, image.height).data
  ctx.fillStyle = '#fff'
  ctx.fillRect(0, 0, image.width, image.height)


  const gap = 4

  for (let x = 0; x < image.width; x += gap) {

    for (let y = 0; y < image.height; y += gap) {

      const positionInImageData = y * 4 * image.width + x * 4
      const r = imageData[positionInImageData]
      const g = imageData[positionInImageData + 1]
      const b = imageData[positionInImageData + 2]

      if (r + g + b < 738) {
        ctx.fillStyle = '#000'
        ctx.fillRect( x, y, 3, 3 )
      }

    }

  }


}
