"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Image from "next/image";

export function SectionImpact() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.from(".impact-row > *", {
        scrollTrigger: {
          trigger: container.current,
          start: "top 75%",
        },
        y: 60,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out",
      });

      gsap.from(".impact-title", {
        scrollTrigger: {
          trigger: container.current,
          start: "top 80%",
        },
        y: -30,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
      });
    },
    { scope: container }
  );

  return (
    <section id="section-impact" ref={container} className="w-full bg-surface py-24 px-4 md:py-32 overflow-hidden">
      <div className="max-w-[1400px] mx-auto w-full">
        
        {/* Header Section */}
        <div className="impact-title text-center mb-16 max-w-[800px] mx-auto">
          <h2 className="font-header font-bold text-4xl md:text-5xl lg:text-6xl text-on-surface leading-tight tracking-tight">
            Helping BCIT Student-Led Businesses Solve Global Issues
          </h2>
        </div>

        {/* The Row */}
        <div className="impact-row flex flex-col lg:flex-row gap-4 items-stretch lg:h-[600px]">
          
          {/* Left Card: Sponsorship Strategy */}
          <div className="lg:w-[40%] bg-[#241508] p-10 md:p-14 rounded-default text-[#EEE7E1] flex flex-col justify-between shadow-xl">
            <div>
              <h3 className="font-header font-bold text-3xl md:text-4xl mb-8 tracking-tight leading-tight">
                I Lead Sponsorship Strategy at Enactus BCIT
              </h3>
              <div className="space-y-6 font-body text-[#EEE7E1]/80 text-lg leading-relaxed">
                <p>
                  Enactus has a special place in my heart. Our club at BCIT is a breeding ground for innovative ideas
                  that address the 17 UN Sustainability Development Goals. This is where the two worlds
                  of sustainable futures and business collide.
                </p>
                <p>
                  It has sparked my great interest in fundraising, partnership building, and making a social impact,
                  all with sustainability in mind.
                </p>
              </div>
            </div>
            <button className="btn-outlined border-[#EEE7E1]/30 text-[#EEE7E1] mt-10 hover:bg-[#EEE7E1] hover:text-[#241508] self-start py-4 px-10 rounded-[4px] font-header font-bold uppercase tracking-widest text-xs transition-all duration-300">
              Explore my Enactus Projects
            </button>
          </div>

          {/* Image 1: hscc.jpg (Center-Top align) */}
          <div className="lg:w-[20%] relative rounded-default overflow-hidden shadow-lg h-[400px] lg:h-[80%] lg:mt-10 group">
            <Image
              src="/hscc.jpg"
              alt="Enactus Presentation"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
          </div>

          {/* Image 2: lumora.jpg (Bottom align) */}
          <div className="lg:w-[20%] relative rounded-default overflow-hidden shadow-lg h-[400px] lg:h-[75%] lg:self-end group">
            <Image
              src="/lumora.jpg"
              alt="Lumora Project"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
          </div>

          {/* Image 3: ecometer.jpg (Top align, tallest) */}
          <div className="lg:w-[20%] relative rounded-default overflow-hidden shadow-lg h-[400px] lg:h-full group">
            <Image
              src="/ecometer.jpg"
              alt="EcoMeter Project"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
          </div>

        </div>

      </div>
    </section>
  );
}
