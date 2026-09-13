import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default async function SiteLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return (
    <>
      <Navbar locale={locale} />
      <main>{children}</main>
      <Footer locale={locale} />
    </>
  );
}
