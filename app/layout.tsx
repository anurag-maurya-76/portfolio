import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import { Intro } from "@/components/intro";
import About from "@/components/about";
import Projects from "@/components/projects";
import ActiveSectionContextProvider from "@/context/active-section-context-provider";
import Skills from "@/components/skills";
import Experience from "@/components/experience";
import Contact from "@/components/contact";
import { Toaster } from "react-hot-toast";
import Footer from "@/components/footer";
import ThemeSwitch from "@/components/theme-switch";
import ThemeContextProvider from "@/context/theme-context-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Anurag Maurya",
  description: "Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${inter.className} bg-gray-50 text-gray-950 relative flex flex-col items-center dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}
      >
        <div className="-z-10 bg-[#fbe2e3] absolute top-[-6rem] right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#946263]"></div>
        <div className="-z-10 bg-[#dbd7fb] absolute top-[-6rem] right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] md: left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]"></div>
        <ThemeContextProvider>
          <ThemeSwitch />
          <ActiveSectionContextProvider>
            <Toaster position="top-right" />
            <Header />
            <Intro />
            <About />
            <Projects />
            <Skills />
            <Experience />
            <Contact />
            <Footer />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
        {children}
      </body>
    </html>
  );
}
