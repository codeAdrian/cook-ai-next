import { foodEmojis } from '@/constants/foodEmojis'
import { emojiBlast } from 'emoji-blast'

export const triggerEmojiBlast = () => {
  const element = document.querySelector('.cookie-mascot')

  const { left, width, top, height } = element.getBoundingClientRect()

  emojiBlast({
    emojiCount: () => Math.random() * 20 + 20,
    emojis: foodEmojis,
    uniqueness: foodEmojis.length,
    physics: {
      gravity: 0.4,
      fontSize: { max: 56, min: 42 },
      initialVelocities: {
        y: { max: -25, min: -45 },
        x: { max: 12, min: -12 },
      },
    },

    position: {
      x: left + width / 2,
      y: top + height / 3,
    },
  })
}
