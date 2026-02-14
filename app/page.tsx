"use client";

import { useState, useCallback } from "react";
import CircuitIntro from "@/components/circuit-intro";
import Header from "@/components/header";
import Hero from "@/components/hero";
import Services from "@/components/services";
import WhyMe from "@/components/why-me";
import Contact from "@/components/contact";

export default function Home() {
  const [introComplete, setIntroComplete] = useState(false);

  const handleIntroComplete = useCallback(() => {
    setIntroComplete(true);
  }, []);

  return (
    <>
      <CircuitIntro onComplete={handleIntroComplete} />

      <div
        className={`transition-opacity duration-500 ${
          introComplete ? "opacity-100" : "opacity-0"
        }`}
      >
        <Header />
        <main>
          <Hero />
          <Services />
          <WhyMe />
          <Contact />
        </main>
      </div>
    </>
  );
}
