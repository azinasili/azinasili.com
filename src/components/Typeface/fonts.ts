import { Azeret_Mono } from 'next/font/google';

export const azeretMono = Azeret_Mono({
  adjustFontFallback: true,
  display: 'swap',
  fallback: ['monospace'],
  preload: true,
  subsets: ['latin'],
  variable: '--azeret-mono',
  weight: 'variable',
});
