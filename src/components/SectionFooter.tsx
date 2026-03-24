"use client";

import Image from "next/image";
import { ArrowDown, LinkedinLogo, PhoneCall, InstagramLogo, EnvelopeSimple } from "@phosphor-icons/react";

export function SectionFooter() {
  return (
    <footer className="w-full relative bg-[#1A0A00] overflow-hidden flex flex-col">
      {/* Main CTA / Generalist Section (The new footer core) */}
      <div className="min-h-screen md:h-screen w-full p-4 relative">
        <div className="w-full h-full relative flex flex-col md:flex-row gap-12 lg:gap-20">
          
          {/* Left Side: Image Content Area */}
          <div className="relative w-full md:w-[55%] min-h-[600px] md:h-full group rounded-[2rem] overflow-hidden shadow-2xl">
            <Image
              src="/nature/blur/nature-blur-45.jpg"
              alt="Generalist"
              fill
              className="object-cover opacity-80 transition-transform duration-[3000ms] group-hover:scale-110"
              priority
            />
            <div className="absolute inset-0 bg-black/30"></div>
            
            {/* Overlay Content */}
            <div className="relative z-10 p-8 md:p-14 lg:p-16 h-full flex flex-col justify-end">
              <h2 className="font-header font-bold text-3xl md:text-5xl lg:text-7xl leading-[1.1] mb-8 md:mb-12 max-w-2xl text-shadow-xl select-none text-[#F5F2ED]">
                I&rsquo;m a Generalist<br />and I know it.
              </h2>
              
              <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-3 md:gap-4 mt-auto">
                <button className="h-28 w-full sm:w-28 md:h-32 md:w-32 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 flex flex-col items-center justify-center p-4 text-center group transition-all hover:bg-white/20 hover:scale-105 active:scale-95 shadow-xl text-[#F5F2ED]">
                   <ArrowDown size={24} className="md:mb-3 mb-2 opacity-80 group-hover:opacity-100 transition-opacity" />
                   <span className="font-header font-bold text-[9px] md:text-[10px] uppercase tracking-widest leading-tight opacity-80 group-hover:opacity-100">
                      Download<br />Resume
                   </span>
                </button>
                
                <button className="h-28 w-full sm:w-28 md:h-32 md:w-32 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 flex flex-col items-center justify-center p-4 text-center group transition-all hover:bg-white/20 hover:scale-105 active:scale-95 shadow-xl text-[#F5F2ED]">
                   <LinkedinLogo size={24} className="md:mb-3 mb-2 opacity-80 group-hover:opacity-100 transition-opacity" />
                   <span className="font-header font-bold text-[9px] md:text-[10px] uppercase tracking-widest leading-tight opacity-80 group-hover:opacity-100">
                      Connect on<br />LinkedIn
                   </span>
                </button>
                
                <button className="h-28 col-span-2 sm:col-span-1 sm:w-28 md:h-32 md:w-32 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 flex flex-col items-center justify-center p-4 text-center group transition-all hover:bg-white/20 hover:scale-105 active:scale-95 shadow-xl text-[#F5F2ED]">
                   <PhoneCall size={24} className="md:mb-3 mb-2 opacity-80 group-hover:opacity-100 transition-opacity" />
                   <span className="font-header font-bold text-[9px] md:text-[10px] uppercase tracking-widest leading-tight opacity-80 group-hover:opacity-100">
                      Call Me<br />Anytime
                   </span>
                </button>
              </div>
            </div>
          </div>

          {/* Right Side: Roles Info Area */}
          <div className="relative w-full md:w-[45%] h-auto md:h-full py-12 md:py-16 lg:py-20 flex flex-col justify-center text-white">
            <p className="font-header font-bold text-xs uppercase tracking-[0.3em] mb-12 opacity-80">
              Ready to Lead As...
            </p>
            
            <div className="space-y-6 lg:space-y-8">
              <div className="p-8 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm transition-all hover:bg-white/10 hover:border-white/20">
                <h4 className="font-header font-bold text-xl md:text-2xl tracking-tight mb-3">
                  Business Development Representative
                </h4>
                <p className="font-body text-base md:text-lg opacity-60 leading-relaxed italic">
                  A leader that combines creativity with business strategy.
                </p>
              </div>
              
              <div className="p-8 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm transition-all hover:bg-white/10 hover:border-white/20">
                <h4 className="font-header font-bold text-xl md:text-2xl tracking-tight mb-3">
                  Partnerships Coordinator
                </h4>
                <p className="font-body text-base md:text-lg opacity-60 leading-relaxed italic">
                  A fighter that takes your sustainability goals to the next level.
                </p>
              </div>
              
              <div className="p-8 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm transition-all hover:bg-white/10 hover:border-white/20">
                <h4 className="font-header font-bold text-xl md:text-2xl tracking-tight mb-3">
                  Marketing Coordinator
                </h4>
                <p className="font-body text-base md:text-lg opacity-60 leading-relaxed italic">
                  A creative strategist that will expand your reach and drive revenue.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </footer>
  );
}
