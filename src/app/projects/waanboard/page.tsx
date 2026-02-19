"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Map, Shield, Zap, Layers, Lock, Globe, Database, Cpu, Users, Coins, ExternalLink } from "lucide-react";
import Link from "next/link";

export default function WaanboardCaseStudy() {
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
                        <div className="flex items-center gap-3 text-emerald-500 mb-4">
                            <Map className="w-5 h-5" />
                            <span className="font-mono tracking-widest uppercase text-[10px]">Full-Stack Systems Architecture</span>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tighter">Waanboard.com</h1>
                        <p className="text-xl text-neutral-400 leading-relaxed max-w-2xl">
                            A Hyper-Local Quest Marketplace. Solving trust in micro-tasking through spatial intelligence and atomic token escrow.
                        </p>
                        <div className="mt-8">
                            <a
                                href="https://waanboard.com"
                                target="_blank"
                                className="inline-flex items-center gap-2 px-6 py-2 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 transition-colors text-sm font-medium"
                            >
                                Visit Live Site <ExternalLink className="w-3 h-3" />
                            </a>
                        </div>
                    </motion.div>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 my-20">
                    {[
                        { label: "Role", value: "Full Stack Architect" },
                        { label: "Backend", value: "FastAPI / SQLAlchemy" },
                        { label: "Frontend", value: "React / Leaflet" },
                        { label: "DB", value: "PostgreSQL" }
                    ].map((item, i) => (
                        <div key={i} className="glass p-6 rounded-2xl">
                            <h3 className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest mb-1">{item.label}</h3>
                            <p className="text-sm font-semibold">{item.value}</p>
                        </div>
                    ))}
                </div>

                <div className="space-y-32">
                    {/* Engineering Architecture */}
                    <section>
                        <h2 className="text-sm font-mono tracking-[0.3em] uppercase text-neutral-600 mb-10">Systems Logic</h2>
                        <div className="grid grid-cols-1 gap-12">
                            <div className="group space-y-4">
                                <div className="flex items-center gap-3 text-white">
                                    <Database className="w-5 h-5 text-emerald-500" />
                                    <h3 className="text-2xl font-bold">Atomic Token Escrow</h3>
                                </div>
                                <p className="text-neutral-400 leading-relaxed text-lg pl-8 border-l border-white/5">
                                    Engineered a "Digital Escrow" system where tokens are staked upon quest creation. Using <span className="text-white font-bold">SQLAlchemy's Atomic Transactions</span>, every payout, refund, or penalty (20% cancellation fee) is processed as a single unit of work to prevent database inconsistencies and balance leaks.
                                </p>
                            </div>

                            <div className="group space-y-4">
                                <div className="flex items-center gap-3 text-white">
                                    <Layers className="w-5 h-5 text-blue-500" />
                                    <h3 className="text-2xl font-bold">Quest Lifecycle State Machine</h3>
                                </div>
                                <p className="text-neutral-400 leading-relaxed text-lg pl-8 border-l border-white/5">
                                    Managed complex workflows for job progress. Implemented a <span className="text-white font-bold">4-hour Time-Lock</span> mechanism for cancellations with active applicants, ensuring contract transparency and giving parties time to negotiate before automated refunds occur.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Technical Implementation */}
                    <section className="py-20 bg-zinc-900/10 rounded-[3rem] -mx-6 px-6">
                        <h2 className="text-sm font-mono tracking-[0.3em] uppercase text-neutral-600 mb-12 text-center">Implementation Detail</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="glass p-8 rounded-[2rem]">
                                <Globe className="w-8 h-8 text-blue-400 mb-6" />
                                <h4 className="text-lg font-bold mb-4">Spatial Querying</h4>
                                <p className="text-neutral-500 text-sm leading-relaxed">
                                    Optimized location searches using a squared-distance approximation for SQL sorting, followed by a <span className="text-white font-bold">Hybrid Geolocation Resolving</span> system on the frontend to improve TTI (Time to Interactive).
                                </p>
                            </div>
                            <div className="glass p-8 rounded-[2rem]">
                                <Lock className="w-8 h-8 text-emerald-400 mb-6" />
                                <h4 className="text-lg font-bold mb-4">Contextual Masking</h4>
                                <p className="text-neutral-500 text-sm leading-relaxed">
                                    Implemented a conditional middleware that dynamically hides `contact` and `precision_location` fields unless a secure 'Friendship' or 'Accepted Applicant' relationship is verified at the API layer.
                                </p>
                            </div>
                            <div className="glass p-8 rounded-[2rem]">
                                <Zap className="w-8 h-8 text-yellow-400 mb-6" />
                                <h4 className="text-lg font-bold mb-4">JWT Invalidation</h4>
                                <p className="text-neutral-500 text-sm leading-relaxed">
                                    Enhanced standard JWT security with a `token_version` system. This allows for <span className="text-white font-bold">instant global session invalidation</span> (Force Logout) upon password change, bridging the gap between stateless tokens and stateful control.
                                </p>
                            </div>
                            <div className="glass p-8 rounded-[2rem]">
                                <Users className="w-8 h-8 text-purple-400 mb-6" />
                                <h4 className="text-lg font-bold mb-4">Concurrency Safety</h4>
                                <p className="text-neutral-500 text-sm leading-relaxed">
                                    Solved race conditions in applicant slot management using <span className="text-white font-bold">Database-level Locking Mechanisms</span> to handle multiple users applying for the final opening simultaneously.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Gamification & Quotas */}
                    <section>
                        <h2 className="text-sm font-mono tracking-[0.3em] uppercase text-neutral-600 mb-10">Gamification Engineering</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                            <div className="space-y-4">
                                <div className="flex items-center gap-2 text-white">
                                    <Coins className="w-5 h-5 text-yellow-500" />
                                    <h4 className="text-xl font-bold">Dynamic Quota Logic</h4>
                                </div>
                                <p className="text-neutral-400 text-sm leading-relaxed">
                                    Engineered a tier-based limit system. Active free quest quotas are calculated dynamically based on <span className="text-white font-bold">User Level</span> (Lv1-4: 1 quest, Lv5-9: 2 quests, etc.), incentivizing platform engagement.
                                </p>
                            </div>
                            <div className="space-y-4">
                                <div className="flex items-center gap-2 text-white">
                                    <Cpu className="w-5 h-5 text-neutral-400" />
                                    <h4 className="text-xl font-bold">Asynchronous Experience</h4>
                                </div>
                                <p className="text-neutral-400 text-sm leading-relaxed">
                                    Developed a reactive UI that masks asynchronous GPS resolution. Using the database's last-known location as the initial state allows for instant map rendering while GPS precise coordinates update in the background.
                                </p>
                            </div>
                        </div>
                    </section>
                </div>
            </article>

            <footer className="mt-40 py-20 text-center border-t border-white/5">
                <p className="text-[10px] tracking-[0.2em] uppercase text-neutral-600">
                    waanboard.com — architectural documentation by peace
                </p>
            </footer>
        </main>
    );
}
