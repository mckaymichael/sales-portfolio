"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "@phosphor-icons/react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const TESTIMONIALS = [
  {
    id: 1,
    quote: "Michael was one of the most engaged students I've had in the Bachelor of Creative Industries program. In my innovation and entrepreneurship class, he consistently asked sharp, practical questions that helped create a better learning environment for all of us. What sets Michael apart is his focus on application. His team's business pitch to a panel of industry experts was amazing. Instead of just learning the theory, he worked on building something real. Michael is down to earth, hard-working and has a genuine ability to lead and gets things done. He would be a huge asset to any organization and I wouldn't hesitate to recommend him!",
    name: "Danielle Rockel",
    title: "Strategy Advisor and Instructor",
    background: "/nature-photos/blur-effect/133_0015_87.jpg",
    avatar: "/portraits/danielle.png" // Currently missing but path reserved
  },
  {
    id: 2,
    quote: "Michael seems to genuinely care about his classmates' success. He give tons of feedback to others and offers advice (and photography service!) that is actually useful. He's also a sponge for knowledge, whether it's through books, podcasts, events, etc. \n\nAlso: He's super punctual. People notice that stuff.",
    name: "Jayme Cochrane",
    title: "Creative Technologist and BCI Program Head",
    background: "/nature-photos/blur-effect/13_0009_6.jpg",
    avatar: "/portraits/jayme.png"
  },
  {
    id: 3,
    quote: "Michael makes an effort to talk to everyone and connect with them, I think that makes him stand out.",
    name: "Rawan Aladdin",
    title: "BCI Student",
    background: "/nature-photos/blur-effect/13_0011_4.jpg",
    avatar: "/portraits/rawan.png"
  }
];

export function SectionVoices() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0); // 1 for next, -1 for prev
  const container = useRef<HTMLDivElement>(null);
  const rowRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // Push animation: slides out and the new one slides in
      const slides = gsap.utils.toArray(".voice-slide");
      gsap.to(rowRef.current, {
        xPercent: -currentIndex * 100,
        duration: 0.8,
        ease: "power3.inOut"
      });

      // Individual content animations per slide
      gsap.fromTo(
        `.voice-slide:nth-child(${currentIndex + 1}) .animate-content`,
        { opacity: 0, x: 50 },
        { opacity: 1, x: 0, duration: 0.8, delay: 0.3, stagger: 0.1, ease: "power2.out", overwrite: "auto" }
      );
    },
    { scope: container, dependencies: [currentIndex] }
  );

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  return (
    <section 
      ref={container} 
      className="min-h-[850px] md:h-screen w-full p-4 relative bg-surface overflow-hidden"
    >
      {/* Outer Card Frame with 16px gap (p-4) */}
      <div className="w-full h-full relative rounded-default overflow-hidden shadow-2xl bg-[#1E1B18] text-white">
        
        {/* Sliding Row of Testimonials */}
        <div 
          ref={rowRef}
          className="flex h-full w-full will-change-transform"
        >
          {TESTIMONIALS.map((t, idx) => (
            <div 
              key={t.id}
              className="voice-slide relative flex-shrink-0 w-full h-full p-8 md:p-16 lg:p-24 flex flex-col pt-20 md:pt-24 lg:pt-32"
            >
              {/* Individual Blurred Background */}
              <div className="absolute inset-0 z-0 overflow-hidden">
                <Image
                  src={t.background}
                  alt="Testimonial Background"
                  fill
                  className="object-cover opacity-50 transition-transform duration-[2000ms] group-hover:scale-105"
                  priority
                />
                <div className="absolute inset-0 bg-black/50 backdrop-blur-[4px]"></div>
              </div>

              {/* Slide Content */}
              <div className="relative z-10 flex-1 flex flex-col justify-start">
                <p className="animate-content font-header font-bold text-[10px] md:text-xs uppercase tracking-[0.3em] mb-8 md:mb-12 opacity-80">
                  Voices of Impact
                </p>
                
                <h3 className="animate-content font-body text-lg md:text-xl lg:text-3xl italic leading-snug md:leading-relaxed max-w-4xl mb-12 md:mb-16 select-none whitespace-pre-line tracking-tight">
                  &ldquo;{t.quote}&rdquo;
                </h3>
              </div>

              {/* Bottom Info Row */}
              <div className="relative z-10 flex-row items-end justify-between mt-auto flex">
                <div className="animate-content flex items-center gap-6">
                  <div className="relative w-16 h-16 md:w-20 md:h-20 rounded-xl overflow-hidden shadow-2xl border border-white/10 shrink-0 bg-white/5">
                    {t.avatar.includes("danielle") ? (
                      <div className="w-full h-full flex items-center justify-center text-xs opacity-50 bg-[#251204]">DR</div>
                    ) : (
                      <Image
                        src={t.avatar}
                        alt={t.name}
                        fill
                        className="object-cover"
                      />
                    )}
                  </div>
                  <div>
                    <h4 className="font-header font-bold text-xl md:text-2xl tracking-tight">
                      {t.name}
                    </h4>
                    <p className="font-header text-xs md:text-sm opacity-60 font-bold uppercase tracking-widest mt-1">
                      {t.title}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Static Arrows (Relative to the card frame, not the sliding row) */}
        <div className="absolute bottom-8 right-8 md:bottom-16 md:right-16 z-20 flex gap-4">
          <button
            onClick={handlePrev}
            className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-white/10 backdrop-blur-md flex items-center justify-center transition-all hover:bg-white/20 active:scale-90 border border-white/10"
            aria-label="Previous"
          >
            <ArrowLeft size={24} />
          </button>
          <button
            onClick={handleNext}
            className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-white/10 backdrop-blur-md flex items-center justify-center transition-all hover:bg-white/20 active:scale-90 border border-white/10"
            aria-label="Next"
          >
            <ArrowRight size={24} />
          </button>
        </div>

      </div>
    </section>
  );
}
