import { JSX } from "preact/jsx-runtime";
import Footer from "./Footer.tsx";
import Navbar from "./Navbar.tsx";

export interface BaseLayoutProps {
  title: string;
  description: string;
  children: string | JSX.Element | JSX.Element[];
}

const BasePageLayout = ({ title, description, children }: BaseLayoutProps) => (
  <>
    <header>
      <title>{title}</title>
      <meta name="description" content={description} />
    </header>

    <main className="bg-white text-black dark:bg-black dark:text-white min-h-screen flex flex-col justify-between">
      <Navbar />
      {children}
      <Footer />
    </main>
  </>
);

export default BasePageLayout;
