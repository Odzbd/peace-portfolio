"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Database, PieChart, BarChart2, Activity, Zap, Search, Layers, Globe } from "lucide-react";
import Link from "next/link";

export default function MarketAnalysisCaseStudy() {
    return (
        <main className="min-h-screen pb-20">
            <nav className="p-6">
                <div className="max-w-4xl mx-auto">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 text-neutral-400 hover:text-white transition-colors group"
                    >
                        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                        Back to Home
                    </Link>
                </div>
            </nav>

            <article className="max-w-4xl mx-auto px-6">
                <header className="py-12">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                        <div className="flex items-center gap-3 text-emerald-400 mb-4">
                            <Globe className="w-6 h-6" />
                            <span className="font-mono tracking-widest uppercase text-sm">Market Intelligence Case Study</span>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold mb-6">Market Breadth Engine</h1>
                        <p className="text-xl text-neutral-400 leading-relaxed">
                            Decoding market sentiment across capitalization tiers using high-dimensional technical data.
                        </p>
                    </motion.div>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
                    <div className="glass p-6 rounded-2xl">
                        <h3 className="text-sm font-semibold text-neutral-500 uppercase mb-2">Scope</h3>
                        <p className="text-white">Whole Market Analysis (SET/Global)</p>
                    </div>
                    <div className="glass p-6 rounded-2xl">
                        <h3 className="text-sm font-semibold text-neutral-500 uppercase mb-2">Segmentation</h3>
                        <p className="text-white">Dynamic Cap-Tiering (S/M/L)</p>
                    </div>
                    <div className="glass p-6 rounded-2xl">
                        <h3 className="text-sm font-semibold text-neutral-500 uppercase mb-2">KPIs</h3>
                        <p className="text-white">EMA Breadth, RSI, WT Oscillator</p>
                    </div>
                </div>

                <div className="space-y-20">
                    <section>
                        <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                            <Search className="text-blue-400" /> The Objective
                        </h2>
                        <p className="text-neutral-400 leading-relaxed text-lg mb-6">
                            Individual stock prices often hide systemic risks. This engine was designed to analyze <strong>Market Breadth</strong>—the internal health of the market—by aggregating technical signals across every ticker in a dataset to see if "the tide is rising for all boats" or just a few giants.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                            <Layers className="text-purple-400" /> Engineering Highlights
                        </h2>
                        <div className="space-y-6">
                            <div className="glass rounded-3xl p-8 border-l-4 border-emerald-500">
                                <h3 className="text-xl font-bold mb-4">Volume-Weighted Segmentation</h3>
                                <p className="text-neutral-300 mb-4">
                                    Using <code>np.percentile</code> on an Exponentially Weighted Moving Average (EWMA) of Price × Volume, the system dynamically classifies stocks into Small, Medium, and Large caps at every timestamp.
                                </p>
                                <div className="font-mono text-sm bg-black/40 p-4 rounded-xl text-emerald-200">
                                    mean_val = (Volume * Close).ewm(span=20).mean()<br />
                                    percentiles = np.percentile(mean_val, [70, 98], axis=1)
                                </div>
                            </div>

                            <div className="glass rounded-3xl p-8 border-l-4 border-blue-500">
                                <h3 className="text-xl font-bold mb-4">Aggregated Breadth Metrics</h3>
                                <p className="text-neutral-300">
                                    Calculates specialized indicators (EMA Ratios, ADX, WaveTrend) for each segment. This reveals divergence—for instance, when Large caps are hitting new highs but Small caps are losing momentum, signaling a potential market top.
                                </p>
                            </div>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                            <Zap className="text-yellow-400" /> Sentiment Distribution
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="p-8 glass rounded-3xl border border-white/5 bg-neutral-900/50">
                                <PieChart className="w-8 h-8 text-emerald-400 mb-4" />
                                <h3 className="text-xl font-bold mb-2">Category Distribution</h3>
                                <p className="text-neutral-400 text-sm">Visualizes the percentage of "Strong" vs "Weak" stocks based on their 200-day EMA relative position.</p>
                            </div>
                            <div className="p-8 glass rounded-3xl border border-white/5 bg-neutral-900/50">
                                <Activity className="w-8 h-8 text-blue-400 mb-4" />
                                <h3 className="text-xl font-bold mb-2">Breadth Sentiment Line</h3>
                                <p className="text-neutral-400 text-sm">A composite index combining RSI and WaveTrend across segments to identify absolute overbought/oversold market conditions.</p>
                            </div>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-6">Technical Implementation</h2>
                        <div className="p-8 glass rounded-3xl">
                            <ul className="space-y-4 text-neutral-300">
                                <li className="flex gap-3">
                                    <div className="w-2 h-2 rounded-full bg-emerald-500 mt-2 shrink-0" />
                                    Vectorized Pandas-TA operations for high-speed calculation.
                                </li>
                                <li className="flex gap-3">
                                    <div className="w-2 h-2 rounded-full bg-emerald-500 mt-2 shrink-0" />
                                    Feather format (<code>.feather</code>) integration for rapid R/W of large financial datasets.
                                </li>
                                <li className="flex gap-3">
                                    <div className="w-2 h-2 rounded-full bg-emerald-500 mt-2 shrink-0" />
                                    Custom WaveTrend implementation tailored for aggregate market sentiment analysis.
                                </li>
                            </ul>
                        </div>
                    </section>
                </div>
            </article>
        </main>
    );
}
