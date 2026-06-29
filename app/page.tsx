import AnimatedBackground from "@/components/landing/background/animated-background";
import Hero from "@/components/landing/hero/hero";
import Navbar from "@/components/landing/navbar/navbar";
import Features from "@/components/landing/features/features";
import Companies from "@/components/landing/companies/companies";
import Categories from "@/components/landing/categories/categories";
import Stats from "@/components/landing/stats/stats";
import Testimonials from "@/components/landing/testimonials/testimonials";
import FAQ from "@/components/landing/faq/faq";
import CTA from "@/components/landing/cta/cta";
import Footer from "@/components/landing/footer/footer";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-black">
      <AnimatedBackground />
      <Hero />
      <Navbar />
      <Features />
      <Companies />
      <Categories />
      <Stats />
      <Testimonials />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}