"use client";

import { useRef } from "react";
import { ImageWrapper } from "./ImageWrapper";
import { Trophy } from "@phosphor-icons/react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function SectionRoot() {
  const container = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.from(".bento-item", {
        scrollTrigger: {
          trigger: container.current,
          start: "top 75%",
        },
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.08,
        ease: "power2.out",
      });
    },
    { scope: gridRef }
  );

  return (
    <section ref={container} id="me-plus-nature" className="min-h-screen md:h-screen bg-surface relative overflow-hidden p-4">
      <div className="h-full w-full mx-auto">
        <div 
          ref={gridRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 lg:grid-rows-12 h-auto md:h-full gap-4 text-on-surface"
        >
          
          {/* Block 1: Wide Headline (6x6) */}
          <div className="bento-item lg:col-start-1 lg:row-start-1 lg:col-span-6 lg:row-span-6 relative rounded-default overflow-hidden group shadow-lg">
             <ImageWrapper src="/nature-photos/blur-effect/117.jpg" alt="Nature Larch" fill className="absolute inset-0 object-cover object-bottom transition-transform duration-700 group-hover:scale-105" />
             <div className="absolute inset-0 bg-black/30 z-10 flex flex-col justify-end p-8 md:p-10">
                <h2 className="text-3xl md:text-5xl text-white font-header font-bold mb-4 tracking-tight leading-tight">
                  Love for Nature and<br />Drive to do Good Deeds
                </h2>
                <p className="font-body text-white/90 text-base md:text-lg leading-relaxed max-w-xl">
                  I have always been passionate about nature. My photography has been my catalyst for expressing that love and admiration. For a long time I thought I was supposed to use my photography to speak the message of preserving our planet. Through this process, I realized I could impact more people with storytelling, being a leader, and going beyond just taking photos.
                </p>
             </div>
          </div>

          {/* Block 2: Secret of happiness (3x3) */}
          <div className="bento-item lg:col-start-7 lg:row-start-1 lg:col-span-3 lg:row-span-3 bg-secondary-dark rounded-default p-6 flex flex-col items-center justify-center text-center shadow-lg">
             <p className="font-body italic text-lg md:text-xl text-white/90 leading-snug">
               "The secret of happiness: Find something more important than you are and dedicate your life to it."
             </p>
          </div>

          {/* Block 3: Waterfall vertical (3x6) */}
          <div className="bento-item lg:col-start-10 lg:row-start-1 lg:col-span-3 lg:row-span-6 relative rounded-default overflow-hidden shadow-lg">
             <ImageWrapper src="/nature-photos/111.jpg" alt="Waterfall" fill className="absolute inset-0 object-cover" />
          </div>

          {/* Block 6: Foggy Forest (3x6) */}
          <div className="bento-item lg:col-start-7 lg:row-start-4 lg:col-span-3 lg:row-span-6 relative rounded-default overflow-hidden shadow-lg">
             <ImageWrapper src="/nature-photos/141.jpg" alt="Foggy Forest" fill className="absolute inset-0 object-cover" />
          </div>

          {/* Block 4: My Why (3x4) */}
          <div className="bento-item lg:col-start-1 lg:row-start-7 lg:col-span-3 lg:row-span-4 bg-secondary rounded-default p-8 flex flex-col justify-center shadow-lg">
             <h3 className="font-header text-xl font-bold text-white mb-4 tracking-tight">My Why</h3>
             <p className="font-body text-base md:text-lg text-white/80 leading-relaxed">
               I want to have a social impact on the world. I want to lead a team of people that will help contribute to preserving this world; and most importantly, one day, I hope to inspire my children and that they will look up to me as someone not afraid of big challenges.
             </p>
          </div>

          {/* Block 5: Award label (3x2) */}
          <div className="bento-item lg:col-start-4 lg:row-start-7 lg:col-span-3 lg:row-span-2 bg-surface-variant rounded-default p-6 flex items-center gap-4 shadow-lg">
             <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                <Trophy size={24} weight="bold" className="text-primary" />
             </div>
             <p className="font-header font-bold text-base text-primary tracking-tight leading-tight uppercase">
               Award Winning<br />Landscape Photographer
             </p>
          </div>

          {/* Block 8: Coastal Arch (3x4) */}
          <div className="bento-item lg:col-start-4 lg:row-start-9 lg:col-span-3 lg:row-span-4 relative rounded-default overflow-hidden shadow-lg">
             <ImageWrapper src="/nature-photos/71.jpg" alt="Coastal Arch" fill className="absolute inset-0 object-cover" />
          </div>

          {/* Block 10: Climate Change (3x6) */}
          <div className="bento-item lg:col-start-10 lg:row-start-7 lg:col-span-3 lg:row-span-6 relative rounded-default overflow-hidden shadow-xl group">
             <ImageWrapper src="/nature-photos/blur-effect/122.jpg" alt="Burned Forest" fill className="absolute inset-0 object-cover opacity-60 transition-transform duration-700 group-hover:scale-105" />
             <div className="absolute inset-0 bg-black/40 z-10 p-8 flex flex-col justify-between">
                <h3 className="font-header text-xl md:text-2xl font-bold text-white tracking-tight leading-tight">
                  Climate Change<br />Affected me,<br />Personally.
                </h3>
                <a href="#" className="font-body text-white/90 text-sm md:text-base hover:underline decoration-white/40 underline-offset-8 mt-auto italic">
                  Read about one of the fastest spreading fires ever recorded in British Columbia
                </a>
             </div>
          </div>

          {/* Block 9: Dire need (3x3) */}
          <div className="bento-item lg:col-start-7 lg:row-start-10 lg:col-span-3 lg:row-span-3 bg-secondary-dark rounded-default p-8 flex flex-col justify-center shadow-lg">
             <p className="font-body text-white/90 text-lg leading-relaxed">
               There is a dire need for humanity to preserve our planet. I want to contribute to helping.
             </p>
          </div>

          {/* Block 7: Force of good (3x2) */}
          <div className="bento-item lg:col-start-1 lg:row-start-11 lg:col-span-3 lg:row-span-2 bg-secondary-dark rounded-default p-4 flex flex-col items-center justify-center text-center shadow-lg">
             <p className="font-body italic text-lg text-white/80">
               "Use business as a force of good"
             </p>
          </div>
        </div>
      </div>
    </section>
  );
}
