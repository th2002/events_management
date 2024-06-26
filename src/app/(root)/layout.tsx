import Footer from '@/components/shared/Footer';
import Header from '@/components/shared/Header';

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex min-h-screen w-screen flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
