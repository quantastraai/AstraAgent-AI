import sharp from 'sharp'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const brandDir = join(__dirname, '../public/brand')

async function removeBackground(input, output, { mode = 'light', recolorDarkToWhite = false } = {}) {
  const { data, info } = await sharp(input).ensureAlpha().raw().toBuffer({ resolveWithObject: true })
  const { width, height, channels } = info

  for (let i = 0; i < data.length; i += channels) {
    const r = data[i]
    const g = data[i + 1]
    const b = data[i + 2]
    const brightness = (r + g + b) / 3

    const isLightBg = brightness > 210 && Math.abs(r - g) < 25 && Math.abs(g - b) < 25
    const isDarkBg = brightness < 45 && Math.abs(r - g) < 20 && Math.abs(g - b) < 20

    if ((mode === 'light' && isLightBg) || (mode === 'dark' && isDarkBg)) {
      data[i + 3] = 0
      continue
    }

    if (recolorDarkToWhite && brightness < 90) {
      data[i] = 248
      data[i + 1] = 250
      data[i + 2] = 252
    }
  }

  await sharp(data, { raw: { width, height, channels } }).png().toFile(output)
  console.log('Wrote', output)
}

await removeBackground(
  join(brandDir, 'logo-icon-source.png'),
  join(brandDir, 'logo-icon.png'),
  { mode: 'dark' },
)

await removeBackground(
  join(brandDir, 'logo-wordmark-source.png'),
  join(brandDir, 'logo-wordmark.png'),
  { mode: 'light', recolorDarkToWhite: true },
)
