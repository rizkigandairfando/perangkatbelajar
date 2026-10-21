import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'EduSmart AI | Platform Pembelajaran',
  description: 'Platform pembelajaran digital untuk guru dan siswa.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="id"><body>{children}</body></html>;
}
