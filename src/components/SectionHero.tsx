"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

import { ImageWrapper } from "./ImageWrapper";

export function SectionHero() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // Intro animations
      gsap.from(".hero-text", {
        y: 40,
        opacity: 0,
        duration: 1.2,
        stagger: 0.2,
        ease: "power3.out",
        delay: 0.2,
      });

      gsap.from(".hero-nav", {
        y: -30,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
        delay: 0.8,
      });
    },
    { scope: container }
  );

  const handleScrollToWork = () => {
    gsap.to(window, { duration: 1, scrollTo: "#section-impact", ease: "power2.inOut" });
  };

  return (
    <section
      ref={container}
      className="relative min-h-[100dvh] w-full flex flex-col items-center justify-center overflow-hidden bg-secondary"
    >
      {/* Full Viewport Background Image */}
      <div className="absolute inset-0 z-0">
        <ImageWrapper 
          src="/nature-photos/blur-effect/118.jpg" 
          alt="Refined Hero Background" 
          fill
          priority
          className="w-full h-full"
        />
      </div>

      {/* Header Navigation Array - Clean Transparent Header */}
      <header className="hero-nav absolute top-0 left-0 w-full p-6 md:p-8 lg:px-16 flex justify-between items-center z-50 text-white bg-transparent">
        <div className="text-xl md:text-2xl font-header tracking-[0.2em] font-bold uppercase truncate pr-4">
          Michael McKay
        </div>
        <div className="flex items-center gap-6 md:gap-12">
          <nav className="hidden lg:flex gap-10 text-xs font-header font-bold tracking-[0.2em] uppercase">
            <button onClick={handleScrollToWork} className="hover:text-primary-container transition-colors">My Impact</button>
            <button className="hover:text-primary-container transition-colors">Love of Nature</button>
            <button className="hover:text-primary-container transition-colors">About Me</button>
          </nav>
          <button className="hidden sm:block btn-outlined-dark">
            Download Resume
          </button>
        </div>
      </header>

      <div className="max-w-[1200px] w-full mx-auto px-6 text-center relative z-10 flex flex-col justify-center items-center mt-24">
        <h1 className="hero-text display-lg text-white mb-10 tracking-tight leading-[1.1]">
          Helping Climate-Focused<br />
          Companies Grow
        </h1>
        
        <p className="hero-text text-lg md:text-xl text-white/90 leading-relaxed max-w-[70ch] mb-16 font-body">
          I bring a mix of B2B & B2C sales, partnership development, and creative design to teams fighting climate change. My job is to secure the funding, build the relationships, and handle the execution so your company can scale its impact.
        </p>
        
        <div className="hero-text flex flex-col sm:flex-row items-center gap-8">
          <button
            onClick={handleScrollToWork}
            className="btn-primary"
          >
            See My Impact
          </button>
          
          <button
            className="btn-outlined-dark"
          >
            Download Resume
          </button>
        </div>
      </div>
    </section>
  );
}
