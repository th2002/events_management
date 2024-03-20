import { Encode_Sans as FontSans, Mulish } from 'next/font/google';

export const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans'
});

export const fontMulish = Mulish({
  subsets: ['latin'],
  variable: '--font-mulish'
});
