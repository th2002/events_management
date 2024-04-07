import Footer from '@/components/shared/Footer';
import Header from '@/components/shared/Header';

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
