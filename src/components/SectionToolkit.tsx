"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ArrowRight } from "@phosphor-icons/react";

const STRENGTHS = [
  { id: 1, title: "Connectedness", insight: "Finding the hidden links between global systems and human needs." },
  { id: 2, title: "Intellection", insight: "Deep thinking that drives strategic, scalable commercial action." },
  { id: 3, title: "Learner", insight: "Driven by continuous iteration and hungry for new climate technologies." },
  { id: 4, title: "Belief", insight: "A steadfast core value system centered on doing good for the planet." },
  { id: 5, title: "Adaptability", insight: "Pivoting smoothly in the fast-paced, unpredictable green tech sector." },
  { id: 6, title: "Sales", insight: "Moving resources to where they make the most impact." },
];

export function SectionToolkit() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.from(".toolkit-element", {
        scrollTrigger: {
          trigger: container.current,
          start: "top 75%",
        },
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power2.out",
      });
    },
    { scope: container }
  );

  return (
    <section ref={container} className="w-full bg-surface min-h-[100dvh] flex flex-col justify-center py-24 md:py-32 px-6 lg:px-16 overflow-hidden">
      <div className="max-w-[1400px] mx-auto w-full flex-1 flex flex-col justify-center">
        
        {/* Header */}
        <div className="toolkit-element mb-16">
          <h2 className="display-lg text-on-surface">
            The Toolkit
          </h2>
        </div>

        {/* CSS GRID FOR CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
          {STRENGTHS.map((s) => (
            <div
              key={s.id}
              className="toolkit-element group relative bg-surface-container-low rounded-default p-10 flex items-center justify-center cursor-pointer overflow-hidden transition-all duration-500 hover:bg-surface-container-lowest hover:shadow-2xl hover:-translate-y-2 min-h-[260px]"
            >
              {/* Visible Title (Fades out on hover) */}
              <h3 className="absolute p-8 inset-0 flex items-center justify-center font-header text-3xl font-bold tracking-tight text-primary transition-opacity duration-300 opacity-100 group-hover:opacity-0">
                {s.title}
              </h3>

              {/* Hidden Insight (Fades in on hover) */}
              <p className="absolute p-10 inset-0 flex flex-col items-center justify-center text-center text-on-surface font-body text-xl leading-relaxed opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-surface-container-lowest z-10">
                <span className="text-primary font-header text-sm font-bold uppercase tracking-widest mb-3 block w-full text-center">
                  {s.title}
                </span>
                {s.insight}
              </p>
            </div>
          ))}
        </div>

        {/* BCI SKINNY BAR - Using Tonal Shift instead of Borders */}
        <div className="toolkit-element mt-20 mx-auto w-full max-w-[1400px]">
          <div className="w-full py-8 md:py-12 bg-secondary/5 rounded-default flex flex-col md:flex-row items-center justify-between px-10 gap-6">
            <span className="text-primary font-header font-bold tracking-widest uppercase text-sm md:text-base">
              Bachelor of Creative Industries @ BCIT
            </span>
            <span className="text-on-surface opacity-80 font-body italic text-2xl text-center md:text-right max-w-xl">
              Where human-centered design meets commercial strategy.
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
