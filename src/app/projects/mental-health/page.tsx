"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Brain, BookOpen, Microscope, PenTool, Layout, Database, Search } from "lucide-react";
import Link from "next/link";

export default function MentalHealthResearch() {
    return (
        <main className="min-h-screen bg-[#0a0a0a] text-white font-sans selection:bg-purple-500/30">
            {/* Navigation */}
            <nav className="p-6">
                <Link
                    href="/"
                    aria-label="Back to main portfolio page"
                    className="inline-flex items-center gap-2 text-neutral-400 hover:text-white transition-colors group"
                >
                    <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                    Back to Portfolio
                </Link>
            </nav>

            <article className="max-w-4xl mx-auto px-6 py-12">
                {/* Header */}
                <header className="py-12 border-b border-white/5">
                    <div className="flex items-center gap-3 text-purple-400 font-mono text-xs uppercase tracking-[0.3em] mb-6">
                        <Brain className="w-4 h-4" />
                        <span>Project Proposal • 2301399</span>
                        <span className="px-2 py-0.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-[10px] text-purple-400 animate-pulse ml-2">In Progress</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tighter leading-tight">
                        Mental Health Analysis <br />
                        <span className="text-neutral-500">via Typhoon 2 & CBT Framework</span>
                    </h1>
                    <p className="text-xl text-neutral-400 leading-relaxed max-w-2xl">
                        Developing a research framework utilizing the <span className="text-white font-bold">Typhoon 2 API</span> and <span className="text-white font-bold">RAG</span> architecture to identify cognitive distortions through <span className="text-white font-bold">CBT</span> principles.
                    </p>
                </header>

                {/* Project Meta */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 my-20">
                    {[
                        { label: "Course Name", value: "Project Proposal" },
                        { label: "Course Code", value: "2301399" },
                        { label: "Core Model", value: "Typhoon 2 API" },
                        { label: "Status", value: "In Progress" }
                    ].map((item, i) => (
                        <div key={i} className="p-6 glass rounded-2xl border border-white/5">
                            <p className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest mb-2">{item.label}</p>
                            <p className="text-sm font-semibold text-white">{item.value}</p>
                        </div>
                    ))}
                </div>

                {/* Research Core Section */}
                <section className="space-y-24">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                        <div className="lg:col-span-4">
                            <h2 className="text-sm font-mono text-purple-400 uppercase tracking-[0.2em] mb-4">01. Objective</h2>
                            <h3 className="text-2xl font-bold">Linguistic Diagnosis</h3>
                        </div>
                        <div className="lg:col-span-8">
                            <p className="text-lg text-neutral-400 leading-relaxed">
                                The objective is to design a high-accuracy analysis system that uses the <span className="text-white font-bold">Typhoon 2 API</span> (optimized for Thai linguistic nuances) to process unstructured journals. By integrating <span className="text-white font-bold">Cognitive Behavioral Therapy (CBT)</span> principles through a <span className="text-white font-bold">RAG</span> architecture, the system can retrieve and apply clinical patterns to detect cognitive distortions.
                            </p>
                        </div>
                    </div>

                    {/* Technical Scope */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 py-24 border-y border-white/5 mt-24">
                        <div className="lg:col-span-4">
                            <h2 className="text-sm font-mono text-purple-400 uppercase tracking-[0.2em] mb-4">02. Technical Architecture</h2>
                            <h3 className="text-2xl font-bold">The RAG + CBT Pipeline</h3>
                        </div>
                        <div className="lg:col-span-8 space-y-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-4">
                                    <div className="flex items-center gap-2 text-white font-semibold">
                                        <Database className="w-4 h-4 text-purple-400" />
                                        RAG Retrieval
                                    </div>
                                    <p className="text-sm text-neutral-400 leading-relaxed">
                                        Employing a vector database to store clinical CBT knowledge, allowing the LLM to augment its analysis with verified therapeutic frameworks for better classification accuracy.
                                    </p>
                                </div>
                                <div className="space-y-4">
                                    <div className="flex items-center gap-2 text-white font-semibold">
                                        <Brain className="w-4 h-4 text-purple-400" />
                                        CBT Pattern Analysis
                                    </div>
                                    <p className="text-sm text-neutral-400 leading-relaxed">
                                        Detecting and categorizing cognitive distortions such as &quot;All-or-Nothing Thinking,&quot; &quot;Catastrophizing,&quot; or &quot;Overgeneralization&quot; using Typhoon 2&apos;s advanced semantic understanding.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Academic Reflection */}
                    <div className="py-24">
                        <div className="p-12 glass rounded-[3rem] border border-white/5 bg-purple-500/[0.02] relative overflow-hidden">
                            <motion.div
                                className="absolute top-0 right-0 p-12 opacity-10"
                                animate={{ rotate: 360 }}
                                transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
                            >
                                <Layout className="w-32 h-32 text-purple-400" />
                            </motion.div>
                            <div className="relative z-10 space-y-6 max-w-2xl">
                                <h3 className="text-3xl font-bold tracking-tight">Academic Rigor</h3>
                                <p className="text-neutral-400 leading-relaxed">
                                    Working under direct faculty supervision, this course focuses on the transition from &quot;building code&quot; to &quot;architecting research.&quot; The final proposal serves as the technical blueprint for a full-scale implementation, ensuring every architectural decision is backed by data and peer-reviewed literature.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </article>

            {/* Internal Navigation */}
            <footer className="py-24 px-6 border-t border-white/5">
                <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 text-neutral-500 text-sm">
                    <p>© 2026 Academic Research Proposal • 2301399</p>
                    <div className="flex gap-8">
                        <Link href="/" aria-label="Go to main portfolio" className="hover:text-white transition-colors">Main Portfolio</Link>
                        <Link href="/projects/aroithai" aria-label="View Aroi Thai project" className="hover:text-white transition-colors">Aroi Thai Project</Link>
                        <Link href="/projects/waanboard" aria-label="View Waanboard case study" className="hover:text-white transition-colors">Waanboard Case Study</Link>
                    </div>
                </div>
            </footer>
        </main>
    );
}
