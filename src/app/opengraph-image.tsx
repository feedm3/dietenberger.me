import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { ImageResponse } from 'next/og';

export const alt = 'Fabian Dietenberger - Staff Engineer';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

// Generated at build time. Uses Geist, the default font of `next/og`.
export default async function Image() {
  const portrait = await readFile(
    join(process.cwd(), 'src/assets/profi-picture-laughing.jpg'),
  );
  const portraitSrc = `data:image/jpeg;base64,${portrait.toString('base64')}`;

  return new ImageResponse(
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        gap: 72,
        padding: '0 96px',
        background: '#1c1917',
        color: '#fafaf9',
      }}
    >
      {/* biome-ignore lint/performance/noImgElement: next/og renders plain img elements */}
      <img
        src={portraitSrc}
        width={320}
        height={320}
        alt=""
        style={{ borderRadius: 9999, objectFit: 'cover' }}
      />
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        <div style={{ fontSize: 72, letterSpacing: -2 }}>
          Fabian Dietenberger
        </div>
        <div style={{ fontSize: 40, color: '#a8a29e' }}>Staff Engineer</div>
        <div style={{ fontSize: 28, color: '#a8a29e', marginTop: 24 }}>
          dietenberger.me
        </div>
      </div>
    </div>,
    size,
  );
}
