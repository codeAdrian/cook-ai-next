import { foodEmojis } from '@/constants/foodEmojis'
import { emojiBlast } from 'emoji-blast'

const physics = {
  gravity: 0.4,
  fontSize: { max: 52, min: 40 },
  initialVelocities: {
    y: { max: -25, min: -45 },
    x: { max: 12, min: -12 },
  },
}

const defaultSettings = {
  emojis: foodEmojis,
  uniqueness: foodEmojis.length,
  physics,
}

export const triggerEmojiBlast = () => {
  const element = document.querySelector('.cookie-mascot')

  const { left, width, top, height } = element.getBoundingClientRect()

  const emojiCount = () => Math.random() * 10 + 20

  emojiBlast({
    ...defaultSettings,
    emojiCount,
    position: {
      x: left + width / 2,
      y: top + height / 3,
    },
  })
}
