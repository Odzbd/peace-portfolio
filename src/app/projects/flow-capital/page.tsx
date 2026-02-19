"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Terminal, Cpu, Database, TrendingUp, Search, Layers } from "lucide-react";
import Link from "next/link";
import 'katex/dist/katex.min.css';
import { InlineMath, BlockMath } from 'react-katex';

export default function FlowCapitalCaseStudy() {
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
                        <div className="flex items-center gap-3 text-blue-400 mb-4">
                            <TrendingUp className="w-6 h-6" />
                            <span className="font-mono tracking-widest uppercase text-sm">Quant Research Case Study</span>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold mb-6">Flow Capital Analysis Engine</h1>
                        <p className="text-xl text-neutral-400 leading-relaxed">
                            Decomposing market volume to identify hidden institutional accumulation and distribution patterns.
                        </p>
                    </motion.div>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
                    <div className="glass p-6 rounded-2xl">
                        <h3 className="text-sm font-semibold text-neutral-500 uppercase mb-2">Focus</h3>
                        <p className="text-white">Quantitative Finance & Algorithmic Trading</p>
                    </div>
                    <div className="glass p-6 rounded-2xl">
                        <h3 className="text-sm font-semibold text-neutral-500 uppercase mb-2">Core Tech</h3>
                        <p className="text-white">Pandas, NumPy, Pandas-TA, Matplotlib</p>
                    </div>
                    <div className="glass p-6 rounded-2xl">
                        <h3 className="text-sm font-semibold text-neutral-500 uppercase mb-2">Data Source</h3>
                        <p className="text-white">yFinance (Multi-market Tickers)</p>
                    </div>
                </div>

                <div className="space-y-20">
                    <section>
                        <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                            <Search className="text-blue-400" /> The Hypothesis
                        </h2>
                        <p className="text-neutral-400 leading-relaxed text-lg mb-6">
                            Standard volume indicators like OBV (On-Balance Volume) provide a raw view of market flow but fail to distinguish between <strong>controlled accumulation (Resource)</strong> and <strong>volatile market noise (Unknown)</strong>.
                        </p>
                        <div className="bg-blue-500/5 border border-blue-500/10 p-6 rounded-2xl italic text-neutral-300">
                            "Can we mathematically separate price-volume spikes to detect when 'smart money' is entering a position versus when retail momentum is simply churning?"
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                            <Layers className="text-purple-400" /> Engineering & Logic
                        </h2>
                        <div className="space-y-8">
                            <div className="glass rounded-3xl p-8">
                                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                                    <Database className="w-5 h-5 text-emerald-400" /> Data Pipeline
                                </h3>
                                <p className="text-neutral-400 mb-4">
                                    The system fetches and synchronizes cross-asset data including US Stocks (AAPL, NVDA), Thai Stocks (DELTA.BK), Futures (Gold, Oil), and Crypto (BTC).
                                </p>
                                <div className="font-mono text-sm bg-black/40 p-4 rounded-xl text-blue-300">
                                    # High-concurrency fetching for 100+ global tickers<br />
                                    data = yf.download(tickers, start=start_date, end=end_date, group_by='ticker')
                                </div>
                            </div>

                            <div className="glass rounded-3xl p-8 border-l-4 border-purple-500">
                                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                                    <Cpu className="w-5 h-5 text-purple-400" /> Mathematical Core
                                </h3>
                                <p className="text-neutral-400 mb-6">
                                    The engine uses a state-based buffer system to process the daily change in Money Flow OBV (<InlineMath math="\Delta MF" />).
                                </p>

                                <div className="space-y-6">
                                    <div className="p-8 bg-black/40 rounded-[2rem] border border-white/5 space-y-8 overflow-x-auto">
                                        <div className="space-y-3 min-w-[300px]">
                                            <p className="text-blue-300 text-[10px] font-mono uppercase tracking-[0.2em]"># 1. State: Negative Flow</p>
                                            <div className="text-white py-2">
                                                <InlineMath math="if \enspace \Delta MF_t < 0 \implies U_t = U_{t-1} + |\Delta MF_t|" />
                                            </div>
                                        </div>

                                        <div className="space-y-3 min-w-[300px]">
                                            <p className="text-blue-300 text-[10px] font-mono uppercase tracking-[0.2em]"># 2. State: Absorption Logic</p>
                                            <div className="text-white py-2 space-y-4">
                                                <BlockMath math="\text{if } \Delta MF_t > U_{t-1}: \begin{cases} R_t = R_{t-1} + (\Delta MF_t - U_{t-1}) \\ U_t = 0 \end{cases}" />
                                                <BlockMath math="\text{else}: \quad U_t = U_{t-1} - \Delta MF_t \enspace , \enspace R_t = R_{t-1}" />
                                            </div>
                                        </div>

                                        <div className="space-y-3 min-w-[300px]">
                                            <p className="text-emerald-400 text-[10px] font-mono uppercase tracking-[0.2em]"># 3. System Entropy Control</p>
                                            <div className="text-emerald-400 py-2">
                                                <InlineMath math="R_t = R_t \times 0.999" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="p-4 bg-white/5 rounded-xl border border-white/5">
                                            <span className="text-emerald-400 font-bold block mb-1 underline decoration-emerald-400/30 underline-offset-4">Resource Flow</span>
                                            Filtered institutional &quot;dry powder.&quot; Higher values indicate clean accumulation.
                                        </div>
                                        <div className="p-4 bg-white/5 rounded-xl border border-white/5">
                                            <span className="text-yellow-400 font-bold block mb-1 underline decoration-yellow-400/30 underline-offset-4">Unknown Flow</span>
                                            Market noise and volatility. Acts as a requirement buffer for future growth.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-10">Signal Interpretation Matrix</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="p-8 glass rounded-3xl">
                                <div className="text-3xl font-bold text-gradient mb-4">- Unk / + Res</div>
                                <h3 className="text-xl font-bold mb-2">Institutional Entry</h3>
                                <p className="text-neutral-400">Capital is entering the system while retail 'noise' is decreasing. A strong signal for smart money accumulation.</p>
                            </div>
                            <div className="p-8 glass rounded-3xl">
                                <div className="text-3xl font-bold text-red-400 mb-4">+ Unk / + Res</div>
                                <h3 className="text-xl font-bold mb-2">Distribution / Withdrawal</h3>
                                <p className="text-neutral-400">Both buffers indicate a climax, often signaling institutional exit or a bubble phase.</p>
                            </div>
                        </div>
                    </section>

                    <section className="text-center py-10">
                        <div className="inline-block glass px-6 py-2 rounded-full text-sm text-neutral-500 mb-4">
                            Results
                        </div>
                        <h2 className="text-3xl font-bold mb-6">Proven Outlier Detection</h2>
                        <p className="text-neutral-400 max-w-2xl mx-auto italic">
                            "By applying a 0.999 decay factor and EMA-ratio analysis, the engine successfully identified 'Too Much' capital flow in tickers like ^STI and PLTR days before major volatility events."
                        </p>
                    </section>
                </div>
            </article>
        </main>
    );
}
