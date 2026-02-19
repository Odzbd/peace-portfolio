"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Terminal, Cpu, Database, TrendingUp, Search, Layers, Zap, Settings2 } from "lucide-react";
import Link from "next/link";

export default function BacktestingCaseStudy() {
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
                        <div className="flex items-center gap-3 text-purple-400 mb-4">
                            <Settings2 className="w-6 h-6" />
                            <span className="font-mono tracking-widest uppercase text-sm">Algorithmic Trading Case Study</span>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold mb-6">Strategy Backtesting Engine</h1>
                        <p className="text-xl text-neutral-400 leading-relaxed">
                            Applying Bayesian optimization and dynamic risk management to find high-probability trading signals.
                        </p>
                    </motion.div>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
                    <div className="glass p-6 rounded-2xl">
                        <h3 className="text-sm font-semibold text-neutral-500 uppercase mb-2">Algorithm</h3>
                        <p className="text-white">EMA Cross-over + TPE (Tree-structured Parzen Estimator)</p>
                    </div>
                    <div className="glass p-6 rounded-2xl">
                        <h3 className="text-sm font-semibold text-neutral-500 uppercase mb-2">Optimization</h3>
                        <p className="text-white">Optuna (5000+ Trials)</p>
                    </div>
                    <div className="glass p-6 rounded-2xl">
                        <h3 className="text-sm font-semibold text-neutral-500 uppercase mb-2">Risk Strategy</h3>
                        <p className="text-white">Exponential Decay on TP/SL</p>
                    </div>
                </div>

                <div className="space-y-20">
                    <section>
                        <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                            <Search className="text-blue-400" /> The Challenge
                        </h2>
                        <p className="text-neutral-400 leading-relaxed text-lg mb-6">
                            Many trading strategies look good on paper but fail in live markets due to rigid risk parameters. The goal was to build a backtesting engine that simulates <strong>dynamic risk adjustment</strong>—where Take-Profit and Stop-Loss levels decay over time to account for decreasing trade signal conviction.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                            <Layers className="text-purple-400" /> Advanced Logic Components
                        </h2>
                        <div className="space-y-8">
                            <div className="glass rounded-3xl p-8 border-l-4 border-yellow-500">
                                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                                    <Zap className="w-5 h-5 text-yellow-500" /> Dynamic Risk Decay
                                </h3>
                                <p className="text-neutral-400 mb-4">
                                    Unlike traditional static stops, my algorithm applies a <code>p_decay</code> and <code>l_decay</code> factor at every time step:
                                </p>
                                <div className="font-mono text-sm bg-black/40 p-4 rounded-xl text-yellow-200">
                                    # Parameters tuned by Bayesian Optimization<br />
                                    p = list(np.array(p) * p_decay)<br />
                                    l = list(np.array(l) * l_decay)
                                </div>
                            </div>

                            <div className="glass rounded-3xl p-8 border-l-4 border-blue-500">
                                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                                    <Cpu className="w-5 h-5 text-blue-500" /> Bayesian Hyperparameter Tuning
                                </h3>
                                <p className="text-neutral-400 mb-4">
                                    Integrated <strong>Optuna</strong> to automate the search for the best strategy parameters. The engine objective function seeks to maximize a custom P/L ratio while punishing drawdown.
                                </p>
                                <div className="font-mono text-sm bg-black/40 p-4 rounded-xl text-blue-200">
                                    # Seeking global optima across 5,000 simulations<br />
                                    study.optimize(objective, n_trials=5000)
                                </div>
                            </div>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-10">Custom Objective Function</h2>
                        <div className="p-8 glass bg-neutral-900 rounded-3xl">
                            <p className="text-neutral-300 leading-relaxed mb-6">
                                To ensure reality-based results, the engine uses a <strong>modified return-to-risk metric</strong>. It doesn't just look at total returns; it heavily penalizes strategies that suffer from large losing trades:
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="flex items-center gap-3 p-4 bg-white/5 rounded-2xl border border-white/5">
                                    <div className="text-emerald-500 text-2xl font-bold">+</div>
                                    <span className="text-sm text-neutral-400 italic">Sum of returns for winning trades</span>
                                </div>
                                <div className="flex items-center gap-3 p-4 bg-white/5 rounded-2xl border border-white/5">
                                    <div className="text-red-500 text-2xl font-bold">-</div>
                                    <span className="text-sm text-neutral-400 italic">Inverse weighted penalty for losing trades</span>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-6">Outcomes</h2>
                        <div className="space-y-4 text-neutral-400 leading-relaxed border-l-2 border-purple-500 pl-6">
                            <p>
                                "Through 5,000 trials, the system identified a high-alpha strategy for NVDA and BTC-USD, proving that dynamic stop-loss adjustments significantly reduce tail risk compared to static alternatives."
                            </p>
                        </div>
                    </section>
                </div>
            </article>
        </main>
    );
}
