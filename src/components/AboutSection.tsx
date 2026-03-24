"use client";

import Image from "next/image";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const strengths = [
  "Connectedness",
  "Intellection",
  "Adaptability",
  "Learner",
  "Belief",
  "Sales",
];

export function AboutSection() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.from(".strength-card", {
        scrollTrigger: {
          trigger: container.current,
          start: "top 85%",
        },
        y: 20,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.out",
      });
      
      gsap.from(".about-content", {
        scrollTrigger: {
          trigger: container.current,
          start: "top 85%",
        },
        x: -30,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });

      gsap.from(".about-image", {
        scrollTrigger: {
          trigger: container.current,
          start: "top 85%",
        },
        x: 30,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });
    },
    { scope: container }
  );

  return (
    <section ref={container} id="about" className="py-24 px-4 bg-surface flex items-center justify-center overflow-hidden">
      <div className="max-w-[1400px] w-full grid grid-cols-1 lg:grid-cols-2 gap-4">
        
        {/* Left Column */}
        <div className="flex flex-col gap-4 about-content">
          {/* Main Text Content */}
          <div className="bg-[#E8E1DB]/50 p-10 md:p-12 rounded-default border border-[#534434]/5 shadow-sm">
            <h2 className="font-header font-bold text-4xl md:text-5xl text-on-surface mb-8 tracking-tight">
              The Patience to Build Myself
            </h2>
            <div className="space-y-6 font-body text-on-surface/80 text-lg leading-relaxed max-w-2xl">
              <p>
                One of the biggest challenges in life for most people is performing at their
                very best. How would you define it? For me, right now, it&apos;s about the
                process of becoming. I am the best that I can be at this moment.
              </p>
              <p>
                I&apos;m building the skills necessary to become influential and leadership
                material. These are my natural strengths that I embrace and polish every day.
              </p>
            </div>
          </div>

          {/* Strengths Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
            {strengths.map((strength) => (
              <div
                key={strength}
                className="strength-card border border-[#534434]/20 bg-[#E8E1DB] text-[#534434] py-8 px-4 text-sm font-bold tracking-tight uppercase flex items-center justify-center rounded-[4px] shadow-sm text-center transition-colors hover:bg-[#E8E1DB]/80"
              >
                {strength}
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Image */}
        <div className="about-image relative rounded-default overflow-hidden shadow-xl aspect-[4/5] lg:aspect-auto h-full min-h-[500px]">
          <Image
            src="/events/me.jpg"
            alt="Michael McKay"
            fill
            className="object-cover"
            priority
          />
          {/* Overlay Button */}
          <button className="absolute bottom-4 right-4 btn-secondary z-20">
            Learn About Me
          </button>
        </div>

      </div>
    </section>
  );
}
