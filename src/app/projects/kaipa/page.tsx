"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Cpu, Activity, Zap, Layers, FlaskConical, Target, AlertTriangle } from "lucide-react";
import Link from "next/link";
import 'katex/dist/katex.min.css';
import { InlineMath, BlockMath } from 'react-katex';

export default function KaipaCaseStudy() {
    return (
        <main className="min-h-screen pb-20 bg-[#0d0d0e] text-[#e2e2e6] selection:bg-white selection:text-black">
            <nav className="p-6">
                <div className="max-w-4xl mx-auto">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 text-neutral-500 hover:text-white transition-colors group"
                    >
                        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                        Back to Home
                    </Link>
                </div>
            </nav>

            <article className="max-w-4xl mx-auto px-6">
                <header className="py-12 border-b border-white/5">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                        <div className="flex items-center gap-3 text-red-500 mb-4">
                            <FlaskConical className="w-5 h-5" />
                            <span className="font-mono tracking-widest uppercase text-[10px]">Experimental R&D — Incomplete</span>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tighter">Kaipa</h1>
                        <p className="text-xl text-neutral-400 leading-relaxed max-w-2xl">
                            An exploration into building an Artificial Intelligence from biological first principles, focusing on neural dynamics and signal propagation.
                        </p>
                    </motion.div>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 my-20">
                    {[
                        { label: "Status", value: "R&D Prototype" },
                        { label: "Started", value: "June 2023" },
                        { label: "Language", value: "Python / NumPy" },
                        { label: "Concept", value: "Bio-inspired" }
                    ].map((item, i) => (
                        <div key={i} className="glass p-6 rounded-2xl">
                            <h3 className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest mb-1">{item.label}</h3>
                            <p className="text-sm font-semibold">{item.value}</p>
                        </div>
                    ))}
                </div>

                <div className="space-y-32">
                    {/* Engineering Intent */}
                    <section>
                        <h2 className="text-sm font-mono tracking-[0.3em] uppercase text-neutral-600 mb-10">Scientific Intent</h2>
                        <div className="grid grid-cols-1 gap-12">
                            <div className="group space-y-4">
                                <div className="flex items-center gap-3 text-white">
                                    <Activity className="w-5 h-5 text-red-500" />
                                    <h3 className="text-2xl font-bold">Bio-mimetic Signal Flow</h3>
                                </div>
                                <p className="text-neutral-400 leading-relaxed text-lg pl-8 border-l border-white/5">
                                    Instead of standard neural network weights, this project explored <span className="text-white font-bold">dynamic electrical resistance (<InlineMath math="R" />)</span>. Signals propagate as current (<InlineMath math="I" />) across a 2D grid, where firing depends on voltage (<InlineMath math="V" />) thresholds, mimicking biological synaptic behavior.
                                </p>
                            </div>

                            <div className="glass rounded-[2rem] p-8 border border-white/5 space-y-8">
                                <h3 className="text-sm font-mono text-neutral-500 uppercase tracking-widest">Mathematical Neural Dynamics</h3>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                                    <div className="space-y-4">
                                        <p className="text-xs font-mono text-red-400 uppercase"># Potential Calculation</p>
                                        <div className="text-white py-4 bg-black/20 rounded-xl px-4 overflow-x-auto text-center">
                                            <BlockMath math="V = I_{i,j} \cdot R_{i,j}" />
                                        </div>
                                        <p className="text-neutral-500 text-xs">Node potential (<InlineMath math="V" />) is derived from the product of current energy state (<InlineMath math="I" />) and localized resistance (<InlineMath math="R" />).</p>
                                    </div>

                                    <div className="space-y-4">
                                        <p className="text-xs font-mono text-red-300 uppercase"># Firing Threshold</p>
                                        <div className="text-white py-4 bg-black/20 rounded-xl px-4 overflow-x-auto text-center">
                                            <BlockMath math="S = \begin{cases} 1 & \text{if } V > 0.055 \\ 0 & \text{otherwise} \end{cases}" />
                                        </div>
                                        <p className="text-neutral-500 text-xs">A strict firing threshold of 0.055 determines whether energy propagates to the next computed layer.</p>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-8 border-t border-white/5">
                                    <div className="space-y-4">
                                        <p className="text-xs font-mono text-yellow-500 uppercase"># Clipping Adaptation</p>
                                        <div className="text-white py-4 bg-black/20 rounded-xl px-4 overflow-x-auto text-center">
                                            <BlockMath math="R \leftarrow R \times \text{clip}(\frac{1}{|V|}, 0.8, 1.2)" />
                                        </div>
                                        <p className="text-neutral-500 text-xs">Self-regulating plasticity: Resistance adjusts inversely to potential, bounded by a 20% volatility clip per step.</p>
                                    </div>

                                    <div className="space-y-4">
                                        <p className="text-xs font-mono text-emerald-400 uppercase"># Energy Conservation</p>
                                        <div className="text-white py-4 bg-black/20 rounded-xl px-4 overflow-x-auto text-center">
                                            <BlockMath math="I_{step} = I \times 0.99" />
                                        </div>
                                        <p className="text-neutral-500 text-xs">Systemic entropy is modeled by a 1% energy decay per propagation cycle to simulate biological signal loss.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="group space-y-4">
                                <div className="flex items-center gap-3 text-white">
                                    <Zap className="w-5 h-5 text-yellow-500" />
                                    <h3 className="text-2xl font-bold">Dynamic Plasticity Logic</h3>
                                </div>
                                <p className="text-neutral-400 leading-relaxed text-lg pl-8 border-l border-white/5">
                                    Implemented a <span className="text-white font-bold">clipping-based adaptation algorithm</span> where the resistance of active paths slightly adjusts (0.8x to 1.2x) based on successful signal transfer, attempting to simulate Hebbian learning ("neurons that fire together, wire together").
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Technical Implementation */}
                    <section className="py-20 bg-zinc-900/10 rounded-[3rem] -mx-6 px-6">
                        <h2 className="text-sm font-mono tracking-[0.3em] uppercase text-neutral-600 mb-12 text-center">Implementation Detail</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="glass p-8 rounded-[2rem]">
                                <Layers className="w-8 h-8 text-blue-400 mb-6" />
                                <h4 className="text-lg font-bold mb-4">Vectorized Computation</h4>
                                <p className="text-neutral-500 text-sm leading-relaxed">
                                    Used <span className="text-white font-bold">NumPy&apos;s vectorized operations</span> like <span className="text-white font-mono text-[11px]">np.add.at</span> to handle high-frequency signal mapping across thousands of nodes with minimal CPU latency.
                                </p>
                            </div>
                            <div className="glass p-8 rounded-[2rem]">
                                <Target className="w-8 h-8 text-red-400 mb-6" />
                                <h4 className="text-lg font-bold mb-4">Firing State Machine</h4>
                                <p className="text-neutral-500 text-sm leading-relaxed">
                                    Engineered a boolean-mask state machine that manages the "active" status of nodes, ensuring that only signals meeting specific energy requirements can propagate to the next tier.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Reflection on Failure */}
                    <section>
                        <h2 className="text-sm font-mono tracking-[0.3em] uppercase text-neutral-600 mb-10">Reflection on R&D</h2>
                        <div className="space-y-12">
                            <div className="space-y-4">
                                <h4 className="text-xl font-bold text-white flex gap-2">
                                    <AlertTriangle className="w-5 h-5 text-yellow-500" /> The "Beautiful" Failure
                                </h4>
                                <p className="text-neutral-400 italic pl-7 border-l-2 border-red-500/30">
                                    "Kaipa was a project born out of pure curiosity. While it didn&apos;t result in a functional AI, it taught me more about numerical stability, state management, and the sheer complexity of biological systems than any textbook could. It remains a testament to the fact that in engineering, the process is often as valuable as the product."
                                </p>
                            </div>
                        </div>
                    </section>
                </div>
            </article>

            <footer className="mt-40 py-20 text-center border-t border-white/5">
                <p className="text-[10px] tracking-[0.2em] uppercase text-neutral-600">
                    kaipa — experimental research by peace
                </p>
            </footer>
        </main>
    );
}
