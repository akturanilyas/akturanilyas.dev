import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ReactNode } from 'react';
import BaseView from '@/components/base-view/BaseView';
import { GoogleAnalytics, GoogleTagManager } from '@next/third-parties/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Ilyas AKTURAN - Computer Engineer',
  // eslint-disable-next-line max-len
  description: 'Ilyas AKTURAN is a computer engineer who is passionate about software development and web technologies. Full-stack developer with 3+ years of experience in software development.',
  icons: '/assets/img/akturanilyas.png',
  openGraph: {
    type: 'website',
    siteName: 'Ilyas AKTURAN - Software Engineer',
    title: 'Ilyas AKTURAN - Software Engineer',
    description:
      'Ilyas AKTURAN, Full-stack developer with 3+ years of experience in software development. Passionate about software development and web technologies.',
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang={'en'}>
      <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_ENV_GA_ID as string} />
      <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_ENV_GA_ID as string} />

      <body
        className={'bg-primary px-4'}
        style={{
          backgroundImage: 'url(/assets/background.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <BaseView className={'bg-primary relative h-full w-full items-center'}>
          <BaseView className={'h-full w-full md:w-full lg:w-2/3'}>{children}</BaseView>
        </BaseView>
      </body>
    </html>
  );
}
