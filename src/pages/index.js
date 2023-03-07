import Head from 'next/head'
import { Inter } from 'next/font/google'
import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Brands from "@/components/Brands";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Video from "@/components/Video";
import { ThemeProvider } from "next-themes";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Astrus</title>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/images/favicon.ico" />
      </Head>

      <ThemeProvider attribute="class" enableSystem="false" defaultTheme="dark">
        <Header />
        <Hero />
        <Features />
        <Video />
        <Brands />
        <AboutSectionOne />
        <AboutSectionTwo />
        {/*<Testimonials />
        <Pricing />
        <Blog blogs={blogs} />*/}
        <Contact />
        <Footer />
        <ScrollToTop />
      </ThemeProvider>
    </>
  )
}
