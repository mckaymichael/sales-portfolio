import { UserIcon, HandThumbUpIcon, ArrowTrendingUpIcon } from '@heroicons/react/24/outline';

const qualities = [
  {
    title: "Relentless Resilience",
    description: "Bouncing back from rejection with a stronger strategy and unshakeable confidence every single time.",
    icon: ArrowTrendingUpIcon,
    color: "text-blue-400",
    bg: "bg-blue-500/10",
    border: "border-blue-500/20",
    shadow: "shadow-blue-900/20",
  },
  {
    title: "Empathetic Listening",
    description: "Truly hearing the client's needs to build deep trust, uncover real pain points, and offer tailored solutions.",
    icon: UserIcon,
    color: "text-violet-400",
    bg: "bg-violet-500/10",
    border: "border-violet-500/20",
    shadow: "shadow-violet-900/20",
  },
  {
    title: "Value Engineering",
    description: "Transforming complex product features into undeniable, measurable business outcomes that drive immediate ROI.",
    icon: HandThumbUpIcon,
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/20",
    shadow: "shadow-emerald-900/20",
  }
];

export default function SalesQualities() {
  return (
    <section className="relative px-6 py-32 bg-slate-900 overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-slate-700/50 to-transparent" />
      <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none mix-blend-screen" />
      
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            The DNA of a <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-400">Top Performer</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-slate-400">
            Mastering the art of sales requires more than just knowing the product. It demands a relentless pursuit of excellence across three core pillars.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {qualities.map((quality, idx) => (
            <div 
              key={idx}
              className="group relative p-8 rounded-2xl bg-slate-800/50 border border-slate-700/50 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:bg-slate-800/80 hover:border-slate-600/50 hover:shadow-2xl z-10"
            >
              {/* Card Glow Effect */}
              <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl ${quality.bg} ${quality.shadow}`} />
              
              <div className="relative z-10">
                <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl mb-6 border backdrop-blur-md transition-transform duration-300 group-hover:scale-110 ${quality.bg} ${quality.border} ${quality.color}`}>
                  <quality.icon className="w-7 h-7" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-4 tracking-wide group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-slate-300 transition-all">
                  {quality.title}
                </h3>
                
                <p className="text-slate-400 leading-relaxed transition-colors group-hover:text-slate-300">
                  {quality.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
