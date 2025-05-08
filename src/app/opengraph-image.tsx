import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'DRN.today – Dynamic Reality Network'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

export default function ogImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#0b1120',
          color: 'white',
          fontSize: 48,
          fontWeight: 'bold',
          fontFamily: 'sans-serif',
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://drn.today/og-default.png"
          alt="DRN Logo"
          width={200}
          height={200}
          style={{ marginBottom: 32 }}
        />
        drn.today
        <div style={{ fontSize: 28, fontWeight: 'normal', marginTop: 8 }}>
          Dynamic Reality Network
        </div>
      </div>
    ),
    size
  )
}
