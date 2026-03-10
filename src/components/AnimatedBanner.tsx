"use client";

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function AnimatedBanner() {
  const containerRef = useRef<HTMLDivElement>(null);
  const tagRef = useRef<HTMLSpanElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const actionsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Create a timeline for staggered animations
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      // Ensure elements are initially hidden and translated down slightly
      gsap.set([tagRef.current, titleRef.current, descRef.current, actionsRef.current], { 
        y: 30, 
        opacity: 0 
      });

      // Animate them in sequentially
      tl.to(tagRef.current, { y: 0, opacity: 1, duration: 0.8 }, 0.2)
        .to(titleRef.current, { y: 0, opacity: 1, duration: 0.8 }, 0.4)
        .to(descRef.current, { y: 0, opacity: 1, duration: 0.8 }, 0.6)
        .to(actionsRef.current, { y: 0, opacity: 1, duration: 0.8 }, 0.8);

    }, containerRef); // Scope selections to the container

    return () => ctx.revert(); // Cleanup on unmount
  }, []);

  return (
    <section 
      ref={containerRef} 
      className="relative flex items-center justify-center min-h-screen px-6 py-40 overflow-hidden text-center bg-slate-900"
    >
      {/* Background Image */}
      <img 
        src="https://images.unsplash.com/photo-1448375240586-882707db888b?q=80&w=2070&auto=format&fit=crop"
        alt="Lush boreal forest"
        className="absolute inset-0 w-full h-full object-cover opacity-60 pointer-events-none"
      />
      
      {/* Abstract background gradient overlay for styling */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-slate-900/50 to-slate-900/90 pointer-events-none" />
      
      {/* Glowing Orbs */}
      <div className="absolute -top-[100px] -left-[100px] w-[500px] h-[500px] bg-blue-500/15 rounded-full blur-[80px] pointer-events-none mix-blend-screen" />
      <div className="absolute -bottom-[150px] -right-[100px] w-[600px] h-[600px] bg-violet-500/10 rounded-full blur-[100px] pointer-events-none mix-blend-screen" />

      {/* Main Content */}
      <div className="relative z-10 max-w-4xl mx-auto">
        
        <span 
          ref={tagRef}
          className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wider text-blue-400 uppercase bg-blue-500/10 border border-blue-500/20 rounded-full shadow-sm backdrop-blur-sm"
        >
          Welcome to the future
        </span>
        
        <h1 
          ref={titleRef}
          className="mb-6 text-5xl font-extrabold tracking-tight text-white leading-[normal] sm:text-6xl md:text-7xl"
        >
          Build Something Amazing Today
        </h1>
        
        <p 
          ref={descRef}
          className="max-w-2xl mx-auto mb-10 text-lg leading-relaxed text-slate-400 sm:text-xl"
        >
          Experience modern web design at its finest. This Next.js banner section combines 
          beautiful Tailwind CSS styling, fluid gradients, and engaging GSAP animations 
          to capture attention instantly.
        </p>
        
        <div 
          ref={actionsRef}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <a 
            href="#" 
            className="inline-flex items-center justify-center px-8 py-3.5 text-base font-semibold text-white transition-all duration-300 bg-blue-600 border border-transparent rounded-lg shadow-[0_4px_14px_0_rgba(59,130,246,0.39)] hover:bg-blue-700 hover:-translate-y-0.5"
          >
            Get Started
          </a>
          <a 
            href="#" 
            className="inline-flex items-center justify-center px-8 py-3.5 text-base font-semibold text-white transition-all duration-300 bg-transparent border border-white/20 rounded-lg backdrop-blur-sm hover:bg-white/5 hover:border-white/40 hover:-translate-y-0.5"
          >
            Learn More
          </a>
        </div>
        
      </div>
    </section>
  );
}
