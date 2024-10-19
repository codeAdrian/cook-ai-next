import { ImageResponse } from 'next/og'

// Route segment config
export const runtime = 'edge'

// Image metadata
export const size = {
  width: 32,
  height: 32,
}
export const contentType = 'image/png'

// Image generation
export default function Icon() {
  return new ImageResponse(
    (
      // ImageResponse JSX element
      <div
        style={{
          background:
            'linear-gradient(90deg,#ff4e50 0%,#f39c12 50%,#f8cf0a 100%)',
          width: '100%',
          height: '100%',
          borderRadius: '100%',
        }}
      ></div>
    ),
    {
      ...size,
    }
  )
}
