"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Terminal, BarChart3, ShieldCheck, Zap, Layers } from "lucide-react";
import Link from "next/link";

export default function CaseStudyPage() {
    return (
        <main className="min-h-screen pb-20">
            {/* Navigation */}
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
                {/* Header */}
                <header className="py-12 border-b border-white/5">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <div className="flex items-center gap-3 text-emerald-400 mb-4">
                            <Terminal className="w-6 h-6" />
                            <span className="font-mono tracking-widest uppercase text-[10px]">Financial Engineering Case Study</span>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tighter">Smart Portfolio Tracker</h1>
                        <p className="text-xl text-neutral-400 leading-relaxed max-w-2xl mb-12">
                            A high-precision financial analytics engine built for multi-asset management and performance attribution.
                        </p>

                        {/* Real Investment Chart Image */}
                        <div className="relative group rounded-[2rem] overflow-hidden glass border border-white/10 mb-12">
                            <img
                                src="/port_chart.png"
                                alt="Real Investment Portfolio Performance"
                                className="w-full h-auto opacity-90 group-hover:opacity-100 transition-opacity duration-500"
                            />
                            <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                                <p className="text-xs font-mono text-emerald-500 uppercase tracking-widest">Fig 1. Real-time Equity Curve with Drawdown Visualization</p>
                            </div>
                        </div>
                    </motion.div>
                </header>

                {/* Overview Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
                    <div className="glass p-6 rounded-2xl">
                        <h3 className="text-sm font-semibold text-neutral-500 uppercase mb-2">Role</h3>
                        <p className="text-white">Lead Software Engineer</p>
                    </div>
                    <div className="glass p-6 rounded-2xl">
                        <h3 className="text-sm font-semibold text-neutral-500 uppercase mb-2">Tech Stack</h3>
                        <p className="text-white">Python, Streamlit, Plotly, Pandas, yFinance</p>
                    </div>
                    <div className="glass p-6 rounded-2xl">
                        <h3 className="text-sm font-semibold text-neutral-500 uppercase mb-2">Focus</h3>
                        <p className="text-white">Data Integrity & Risk Analytics</p>
                    </div>
                </div>

                {/* Content Sections */}
                <div className="space-y-20">
                    {/* Section 1: The Problem */}
                    <section>
                        <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                            <BarChart3 className="text-blue-400" /> The Objective
                        </h2>
                        <div className="space-y-4 text-neutral-400 leading-relaxed text-lg">
                            <p>
                                Professional investors need more than just a list of assets; they need to understand <strong>Cost Basis</strong>,
                                <strong>Risk-Adjusted Returns</strong>, and <strong>Historical Drawdowns</strong> across multiple currencies (USD & THB).
                            </p>
                            <p>
                                The challenge was to build a system that maintains 100% data integrity by recalculating the entire portfolio state
                                from a raw transaction ledger, ensuring that every buy, sell, and currency fluctuation is accounted for.
                            </p>
                        </div>
                    </section>

                    {/* Section 2: Architecture & Engineering */}
                    <section>
                        <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                            <Layers className="text-purple-400" /> Engineering Architecture
                        </h2>
                        <div className="space-y-6">
                            <div className="glass rounded-3xl p-8 border-l-4 border-emerald-500">
                                <h3 className="text-xl font-bold mb-4 text-white">Immutable Ledger System</h3>
                                <p className="text-neutral-300 mb-4">
                                    Rather than storing current balances, the engine uses an <strong>Event Sourcing</strong> approach. It re-processes the
                                    entire transaction ledger to compute:
                                </p>
                                <ul className="space-y-2 text-neutral-400">
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-emerald-500 rounded-full" /> Weighted Average Cost (WAC) tracking</li>
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-emerald-500 rounded-full" /> Proportional cost-basis reduction on partial sales</li>
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-emerald-500 rounded-full" /> Cash flow synchronization with transaction lifecycle</li>
                                </ul>
                            </div>

                            <div className="glass rounded-3xl p-8 border-l-4 border-blue-500">
                                <h3 className="text-xl font-bold mb-4 text-white">Cross-Currency Normalization</h3>
                                <p className="text-neutral-300 mb-4">
                                    Implemented a dynamic currency conversion layer that fetches historical <code>USDTHB=X</code> rates to standardize
                                    all P/L metrics into THB, allowing for accurate comparison between local and foreign assets.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Section 3: Advanced Risk Metrics */}
                    <section>
                        <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                            <ShieldCheck className="text-emerald-400" /> Advanced Risk Metrics
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="p-8 glass rounded-3xl">
                                <h3 className="text-lg font-bold mb-2">Performance Attribution</h3>
                                <p className="text-neutral-400 text-sm">Real-time calculation of Win Rate, Average P/L, and Risk-Reward Ratio (RRR) based on realized transaction data.</p>
                            </div>
                            <div className="p-8 glass rounded-3xl">
                                <h3 className="text-lg font-bold mb-2">Max Drawdown (MDD)</h3>
                                <p className="text-neutral-400 text-sm">Dynamic peak-to-trough analysis across the selected timeframe to visualize portfolio resilience during market stress.</p>
                            </div>
                        </div>
                    </section>

                    {/* Section 4: Reflection */}
                    <section>
                        <h2 className="text-2xl font-bold mb-6">Learnings & Results</h2>
                        <div className="space-y-4 text-neutral-400 leading-relaxed italic border-l-2 border-emerald-500 pl-6">
                            <p>
                                "This project taught me the importance of data integrity. When dealing with finances, an off-by-one error in a date index can completely invalidate a Sharpe Ratio. I implemented strict validation for every step of the pipeline."
                            </p>
                        </div>
                    </section>
                </div>
            </article>
        </main>
    );
}

function Cpu(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <rect width="16" height="16" x="4" y="4" rx="2" />
            <rect width="6" height="6" x="9" y="9" rx="1" />
            <path d="M15 2v2" />
            <path d="M15 20v2" />
            <path d="M2 15h2" />
            <path d="M2 9h2" />
            <path d="M20 15h2" />
            <path d="M20 9h2" />
            <path d="M9 2v2" />
            <path d="M9 20v2" />
        </svg>
    );
}
