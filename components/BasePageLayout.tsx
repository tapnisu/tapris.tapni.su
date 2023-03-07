import Footer from "@components/Footer.tsx";
import Navbar from "@components/Navbar.tsx";
import { ComponentChildren } from "preact";

export interface BaseLayoutProps {
  title: string;
  description: string;
  children: ComponentChildren;
}

const BasePageLayout = ({ title, description, children }: BaseLayoutProps) => (
  <>
    <header>
      <title>{title}</title>
      <meta name="description" content={description} />
    </header>

    <main className="bg-black text-white min-h-screen flex flex-col justify-between">
      <Navbar />
      {children}
      <Footer />
    </main>
  </>
);

export default BasePageLayout;
