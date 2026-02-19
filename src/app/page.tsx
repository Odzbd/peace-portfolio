"use client";

import { motion } from "framer-motion";
import { ArrowRight, Terminal, Cpu, Database, BarChart3, Mail, Map, MapPin, Globe, ExternalLink, Brain } from "lucide-react";
import Link from "next/link";

const projects = [
  {
    title: "Aroi Thai Japan: SEO & Perf",
    description: "High-performance multi-language website for an authentic Thai restaurant in Japan. Optimized for local SEO and extreme load speeds.",
    tags: ["Astro", "SEO", "Performance"],
    icon: <Globe className="w-5 h-5 text-blue-400" />,
    features: [
      "Sub-directory based multi-language (JP/EN/TH) routing",
      "Advanced SEO with JSON-LD Schema.org for local business",
      "Near-perfect Lighthouse scores via Astro zero-JS architecture"
    ],
    path: "/projects/aroithai"
  },
  {
    title: "Waanboard: Gamified Quest Marketplace",
    description: "A hyper-local tasking platform featuring token-based escrow and location-aware quest distribution.",
    tags: ["Full Stack", "FastAPI", "Geospatial"],
    icon: <Map className="w-5 h-5 text-emerald-400" />,
    features: [
      "Atomic Token Economy for secure peer-to-peer escrow payments",
      "Context-aware information masking for user privacy protection",
      "Geospatial radius search optimized with Spatial Indexing"
    ],
    path: "/projects/waanboard"
  },
  {
    title: "Portfolio Analytics",
    description: "High-precision financial engine for multi-asset management. Recalculates complex state from raw transaction ledgers to ensure 100% data integrity.",
    tags: ["Data Engineering", "Financial Analytics"],
    icon: <BarChart3 className="w-5 h-5 text-emerald-400" />,
    features: [
      "Immutable ledger system for precise cost-basis tracking",
      "Dynamic USD/THB historical normalization",
      "Advanced risk metrics (MDD, RRR, Win Rate)"
    ],
    path: "/projects/investment"
  },
  {
    title: "Flow Analysis Engine",
    description: "Algorithmic detection of institutional capital movement using advanced volume decomposition across global markets.",
    tags: ["Quant", "Algorithm Design"],
    icon: <Database className="w-5 h-5 text-blue-400" />,
    features: [
      "Money Flow OBV decomposition (Price × Volume)",
      "State-tracking with 0.999 decay factor for Resource Flow",
      "Signal Matrix for 'Too Much' capital inflow detection"
    ],
    path: "/projects/flow-capital"
  },
  {
    title: "Market Breadth Diagnostic",
    description: "Systemic health monitoring tool for stock markets. Segments thousands of tickers to identify underlying sentiment trends.",
    tags: ["Macro", "Technical Analysis"],
    icon: <Terminal className="w-5 h-5 text-purple-400" />,
    features: [
      "Dynamic capital-tier segmentation (Small/Mid/Big)",
      "Multi-indicator sentiment aggregation (RSI, WaveTrend)",
      "Systemic trend strength attribution using ADX"
    ],
    path: "/projects/market-analysis"
  },
  {
    title: "Strategy Backtester",
    description: "Trading simulation engine with Bayesian hyperparameter optimization and dynamic risk-decay management.",
    tags: ["Simulation", "ML Optimization"],
    icon: <Cpu className="w-5 h-5 text-yellow-400" />,
    features: [
      "Automated tuning with Optuna optimization",
      "Dynamic TP/SL decay to manage longevity risk",
      "Event-driven simulation with trailing stop logic"
    ],
    path: "/projects/backtesting"
  },
  {
    title: "Kaipa: Experimental Neural Dynamics",
    description: "Bio-inspired signal propagation research. An exploration into building custom AI architectures from biological first principles.",
    tags: ["R&D", "Neural Simulation", "Python"],
    icon: <Cpu className="w-5 h-5 text-red-400" />,
    features: [
      "Dynamic resistance (R) adaptation based on voltage thresholds",
      "Event-driven simulation of signal 'firing' across 2D grids",
      "Real-time visual diagnostic of energy flow and state retention"
    ],
    path: "/projects/kaipa"
  },
  {
    title: "Project Proposal: AI Mental Health Analysis",
    description: "Course 2301399 (Project Proposal). Currently developing a research framework utilizing Typhoon 2 and RAG for CBT-based journal analysis.",
    tags: ["In Progress", "Typhoon 2", "RAG", "CBT"],
    icon: <Brain className="w-5 h-5 text-purple-400" />,
    features: [
      "Literature research and clinical framework design (CBT)",
      "System architecture planning using Typhoon 2 and RAG",
      "Drafting formal research proposal under faculty supervision"
    ],
    path: "/projects/mental-health"
  }
];

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 px-6 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-8"
        >
          <div className="space-y-4">
            <span className="text-emerald-500 font-mono text-sm tracking-widest uppercase">Available for select projects</span>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
              Peace. <span className="text-neutral-500">Software Engineer.</span>
            </h1>
          </div>

          <p className="text-xl text-neutral-400 max-w-2xl leading-relaxed">
            I build robust, high-performance software at the intersection of <span className="text-white">logical systems</span> and <span className="text-white">financial logic</span>. Currently focused on algorithmic analysis and research.
          </p>

          <div className="flex flex-wrap gap-6 items-center pt-4">
            <Link
              href="#projects"
              aria-label="Scroll to projects section"
              className="px-8 py-3 bg-white text-black font-semibold rounded-full hover:bg-neutral-200 transition-all duration-300 shadow-lg shadow-white/5"
            >
              Explore Work
            </Link>
            <a
              href="mailto:peacetfm@gmail.com"
              aria-label="Send an email to Peace"
              className="group flex items-center gap-3 text-neutral-400 hover:text-white transition-colors duration-300"
            >
              <div className="p-2 rounded-full bg-white/5 group-hover:bg-white/10 transition-colors">
                <Mail className="w-4 h-4" />
              </div>
              <span className="font-medium">peacetfm@gmail.com</span>
            </a>
          </div>
        </motion.div>
      </section>

      {/* Identity Section: The Story */}
      <section className="py-24 px-6 max-w-6xl mx-auto border-t border-white/5">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-8 glass rounded-[2.5rem] space-y-4"
          >
            <h2 className="text-emerald-500 font-mono text-[10px] tracking-[0.3em] uppercase">The Foundation</h2>
            <h3 className="text-xl font-bold tracking-tight">Hardware Intuition</h3>
            <p className="text-neutral-400 text-xs leading-relaxed">
              Dismantling appliances to reviving computers. I enjoy finding unconventional solutions to technical puzzles and understanding the underlying mechanics of how things work.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="p-8 glass rounded-[2.5rem] space-y-4"
          >
            <h2 className="text-purple-400 font-mono text-[10px] tracking-[0.3em] uppercase">The Perspective</h2>
            <h3 className="text-xl font-bold tracking-tight">Celestial View</h3>
            <p className="text-neutral-400 text-xs leading-relaxed">
              Exploring the cosmos with my Orion StarBlast and analyzing the complexities of human psychology. Always seeking to broaden my perspective through diverse fields of study.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="p-8 glass rounded-[2.5rem] space-y-4"
          >
            <h2 className="text-blue-400 font-mono text-[10px] tracking-[0.3em] uppercase">The Strategy</h2>
            <h3 className="text-xl font-bold tracking-tight">Strategic Logic</h3>
            <p className="text-neutral-400 text-xs leading-relaxed">
              Daily practitioner with a <span className="text-white font-bold">1644 Elo in Chess Puzzles</span> (97.7th percentile). Focused on high-speed pattern recognition and tactical decision-making.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="p-8 glass rounded-[2.5rem] space-y-4"
          >
            <h2 className="text-yellow-500 font-mono text-[10px] tracking-[0.3em] uppercase">The Domain</h2>
            <h3 className="text-xl font-bold tracking-tight">Financial Depth</h3>
            <p className="text-neutral-400 text-xs leading-relaxed">
              Equities since 2021. I combine technical and fundamental analysis—a strategic mindset influenced by <span className="text-white/60 italic leading-loose">Sun Tzu&apos;s Art of War</span>, where I view capital as &quot;troops&quot; to be deployed.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-6 bg-neutral-900/20">
        <div className="max-w-5xl mx-auto">
          <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-4">
              <h2 className="text-emerald-500 font-mono text-xs tracking-[0.3em] uppercase">Case Studies</h2>
              <h3 className="text-3xl font-bold">Engineering Deep-dives</h3>
            </div>
            <p className="text-neutral-500 max-w-xs text-sm">
              Detailed analysis of complex problems, architectural decisions, and technical implementation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group p-8 glass rounded-3xl flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="p-3 bg-white/5 rounded-2xl group-hover:bg-white/10 transition-colors">
                      {project.icon}
                    </div>
                    <div className="flex gap-2">
                      {project.tags.map(tag => (
                        <span key={tag} className="text-[10px] font-mono text-neutral-500 uppercase tracking-wider">{tag}</span>
                      ))}
                    </div>
                  </div>

                  <h4 className="text-2xl font-bold mb-4 group-hover:text-emerald-400 transition-colors">
                    {project.title}
                  </h4>

                  <p className="text-neutral-400 mb-8 leading-relaxed">
                    {project.description}
                  </p>

                  <ul className="space-y-3 mb-8">
                    {project.features.map((feature, i) => (
                      <li key={i} className="text-sm text-neutral-500 flex items-start gap-2">
                        <div className="w-1 h-1 rounded-full bg-emerald-500 mt-2 shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  href={project.path}
                  aria-label={`View case study for ${project.title}`}
                  className="inline-flex items-center gap-2 font-semibold text-sm text-white hover:gap-3 transition-all"
                >
                  View Case Study
                  <ArrowRight className="w-4 h-4 text-emerald-500" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Academic Foundation Section */}
      <section className="py-24 px-6 border-t border-white/5 bg-white/[0.01]">
        <div className="max-w-5xl mx-auto">
          <div className="mb-16">
            <h2 className="text-emerald-500 font-mono text-xs tracking-[0.3em] uppercase mb-4">Education</h2>
            <h3 className="text-3xl font-bold tracking-tight">Academic Foundation</h3>
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mt-4">
              <p className="text-neutral-500 max-w-2xl">
                Computer Science @ Chulalongkorn University. A curriculum centered on rigorous mathematical foundations and systems engineering.
              </p>
              <div className="flex gap-4">
                <div className="px-4 py-2 glass rounded-2xl border border-white/5">
                  <span className="text-[10px] font-mono text-neutral-500 uppercase block leading-none mb-1">Cumulative</span>
                  <span className="text-sm font-bold text-white">3.02</span>
                </div>
                <div className="px-4 py-2 glass rounded-2xl border border-emerald-500/20 bg-emerald-500/5">
                  <span className="text-[10px] font-mono text-emerald-500 uppercase block leading-none mb-1">Major GPA</span>
                  <span className="text-sm font-bold text-emerald-400">3.21</span>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                category: "Intelligence & Data",
                courses: [
                  "Deep Learning",
                  "Data Warehouse & Mining",
                  "Database Systems",
                  "ML Algorithms"
                ]
              },
              {
                category: "Systems & Theory",
                courses: [
                  "Computer Systems",
                  "Software Engineering",
                  "Theory of Computation",
                  "Modern Cryptography"
                ]
              },
              {
                category: "Mathematical Rigor",
                courses: [
                  "Probability & Statistics",
                  "DS & Algorithm Design",
                  "Fundamental Physics",
                  "Linear Algebra"
                ]
              }
            ].map((group, idx) => (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-8 glass rounded-[2rem] border border-white/5"
              >
                <h4 className="text-xs font-mono text-neutral-500 uppercase tracking-widest mb-6">{group.category}</h4>
                <div className="space-y-4">
                  {group.courses.map((course, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-1 h-1 rounded-full bg-emerald-500/50" />
                      <span className="text-sm text-neutral-400">{course}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-8 p-6 glass rounded-[2rem] border border-blue-500/20 bg-blue-500/5 flex flex-col md:flex-row items-center justify-between gap-6"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center border border-blue-500/20">
                <Globe className="w-6 h-6 text-blue-400" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white uppercase tracking-tight">Professional Certificate</h4>
                <p className="text-xs text-neutral-400 mt-1">
                  Data Mining & Knowledge Discovery — HKUST (Earned via Chula MSBD curriculum)
                </p>
              </div>
            </div>
            <a
              href="https://courses.edx.org/certificates/e4ea7651523c4c28b3aeb130fab7a881"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Verify professional certificate in Data Mining and Knowledge Discovery"
              className="text-[10px] font-mono text-blue-400 uppercase tracking-widest hover:text-blue-300 transition-colors flex items-center gap-2 border border-blue-400/20 px-4 py-2 rounded-xl"
            >
              Verify Credential
              <ExternalLink className="w-3 h-3" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-24 px-6 text-center border-t border-white/5">
        <div className="max-w-4xl mx-auto space-y-6">
          <p className="text-neutral-500 text-sm italic">
            "Simple can be harder than complex: You have to work hard to get your thinking clean to make it simple."
          </p>
          <div className="flex justify-center items-center gap-2 text-neutral-600 font-mono text-xs uppercase tracking-widest">
            <MapPin className="w-3 h-3" />
            <span>Bangkok, Thailand</span>
            <span className="mx-2">•</span>
            <span>© 2026 Peace</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
