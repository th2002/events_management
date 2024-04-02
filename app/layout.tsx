import '@/styles/globals.css';
import { Metadata } from 'next';
import { siteConfig } from '@/config/site';
import { fontSans } from '@/config/fonts';
import { Providers } from './providers';
import clsx from 'clsx';
import { Suspense } from 'react';
import Loader from '@/components/common/Loader';

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`
  },
  description: siteConfig.description,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' }
  ],
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png'
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={clsx(
          'font-sans min-h-screen w-screen overflow-x-hidden bg-background antialiased',
          fontSans.variable
        )}
      >
        <Providers
          themeProps={{
            attribute: 'class',
            defaultTheme: 'light'
          }}
        >
          <div className="relative flex min-h-screen w-screen flex-col">
            <div className="dark:bg-boxdark-2 dark:text-bodydark">
              <Suspense fallback={<Loader />}>{children}</Suspense>
            </div>
          </div>
        </Providers>
      </body>
    </html>
  );
}
