import type { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ScrollToTop from "../common/ScrollToTop";
import ScrollToTopOnRouteChange from "../common/ScrollonTopRoute";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
    <ScrollToTopOnRouteChange />

     

      <Navbar />

      <main>
        {children}
      </main>

      <Footer />
       <ScrollToTop />
    </>
  );
}