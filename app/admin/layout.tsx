import { Header } from "@/components/header/header";
import { Footer } from "@/components/footer/footer";

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer></Footer>
    </>
  );
}