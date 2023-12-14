import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import { Intro } from "@/components/section/intro";
import About from "@/components/section/about";
import Projects from "@/components/section/projects";
import ActiveSectionContextProvider from "@/context/active-section-context-provider";
import Skills from "@/components/section/skills";
import Experience from "@/components/section/experience";
import Contact from "@/components/section/contact";
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
        className={`${inter.className} relative flex flex-col items-center bg-gray-50 text-gray-950 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}
      >
        <div className="absolute right-[11rem] top-[-6rem] -z-10 h-[31.25rem] w-[31.25rem] rounded-full bg-[#ffc5c7] blur-[10rem] dark:bg-[#946263] sm:w-[68.75rem]"></div>
        <div className="md: absolute left-[-20rem] right-[11rem] top-[-6rem] -z-10 h-[31.25rem] w-[31.25rem] rounded-full bg-[#c8c1ff] blur-[10rem] dark:bg-[#676394] sm:w-[68.75rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]"></div>
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
