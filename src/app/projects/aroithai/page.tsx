"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Globe, Search, Zap, BarChart3, Languages, ExternalLink, MousePointer2, Shield } from "lucide-react";
import Link from "next/link";

export default function AroiThaiCaseStudy() {
    return (
        <main className="min-h-screen pb-20 bg-[#0d0d0e] text-[#e2e2e6] selection:bg-white selection:text-black">
            <nav className="p-6">
                <div className="max-w-4xl mx-auto">
                    <Link
                        href="/"
                        aria-label="Back to main portfolio page"
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
                        <div className="flex items-center gap-3 text-blue-400 mb-4">
                            <Globe className="w-5 h-5" />
                            <span className="font-mono tracking-widest uppercase text-[10px]">Production Web Engineering</span>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tighter">aroithaijapan.jp</h1>
                        <p className="text-xl text-neutral-400 leading-relaxed max-w-2xl">
                            A high-performance, multi-language restaurant platform serving the Kawasaki community. Built for speed, discoverability, and conversion.
                        </p>
                        <div className="mt-8">
                            <a
                                href="https://aroithaijapan.jp"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Visit the live Aroi Thai Japan website"
                                className="inline-flex items-center gap-2 px-6 py-2 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 transition-colors text-sm font-medium"
                            >
                                Visit Live Site <ExternalLink className="w-3 h-3" />
                            </a>
                        </div>
                    </motion.div>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 my-20">
                    {[
                        { label: "Platform", value: "Astro 5.0" },
                        { label: "Host", value: "Vercel / Japan" },
                        { label: "Performance", value: "99/100 LH" },
                        { label: "SEO", value: "Schema.org" }
                    ].map((item, i) => (
                        <div key={i} className="glass p-6 rounded-2xl">
                            <h3 className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest mb-1">{item.label}</h3>
                            <p className="text-sm font-semibold">{item.value}</p>
                        </div>
                    ))}
                </div>

                <div className="space-y-32">
                    {/* Engineering Core */}
                    <section>
                        <h2 className="text-sm font-mono tracking-[0.3em] uppercase text-neutral-600 mb-10">Engineering Core</h2>
                        <div className="grid grid-cols-1 gap-12">
                            <div className="group space-y-4">
                                <div className="flex items-center gap-3 text-white">
                                    <Zap className="w-5 h-5 text-yellow-400" />
                                    <h3 className="text-2xl font-bold">Static-First Architecture</h3>
                                </div>
                                <p className="text-neutral-400 leading-relaxed text-lg pl-8 border-l border-white/5">
                                    Leveraged <span className="text-white font-bold">Astro 5.0</span> to deliver a zero-JavaScript-by-default experience. By shifting all logic to the build phase, I achieved near-instant Time to First Byte (TTFB) and perfect Core Web Vitals, critical for mobile users in Japan.
                                </p>
                            </div>

                            <div className="group space-y-4">
                                <div className="flex items-center gap-3 text-white">
                                    <Languages className="w-5 h-5 text-blue-400" />
                                    <h3 className="text-2xl font-bold">Multi-Language Routing</h3>
                                </div>
                                <p className="text-neutral-400 leading-relaxed text-lg pl-8 border-l border-white/5">
                                    Implemented a sub-directory routing pattern (<span className="text-white font-mono text-sm">/en/</span>, <span className="text-white font-mono text-sm">/th/</span>) to capture diverse market segments including international tourists and local Thai expats, ensuring content resonance across cultures.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Performance & SEO */}
                    <section className="py-20 bg-zinc-900/10 rounded-[3rem] -mx-6 px-6">
                        <h2 className="text-sm font-mono tracking-[0.3em] uppercase text-neutral-600 mb-12 text-center">Performance & SEO Strategy</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="glass p-8 rounded-[2rem]">
                                <Search className="w-8 h-8 text-blue-400 mb-6" />
                                <h4 className="text-lg font-bold mb-4">Semantic SEO</h4>
                                <p className="text-neutral-500 text-sm leading-relaxed">
                                    Integrated deep <span className="text-white font-bold">JSON-LD Schema.org</span> for local business, menu items, and breadcrumbs, allowing Google to display rich snippets and improve local search visibility in the Kawasaki area.
                                </p>
                            </div>
                            <div className="glass p-8 rounded-[2rem]">
                                <BarChart3 className="w-8 h-8 text-emerald-400 mb-6" />
                                <h4 className="text-lg font-bold mb-4">Lighthouse Mastery</h4>
                                <p className="text-neutral-500 text-sm leading-relaxed">
                                    Optimized the critical request chain by reducing unused CSS from Google Fonts and using responsive WebP imagery with <span className="text-white font-bold">fetchpriority="high"</span> for the LCP element.
                                </p>
                            </div>
                            <div className="glass p-8 rounded-[2rem]">
                                <MousePointer2 className="w-8 h-8 text-purple-400 mb-6" />
                                <h4 className="text-lg font-bold mb-4">Conversion Logic</h4>
                                <p className="text-neutral-500 text-sm leading-relaxed">
                                    Streamlined the reservation funnel by integrating LINE Messenger deep-links, making it frictionless for Japanese customers to book tables directly from their mobile devices.
                                </p>
                            </div>
                            <div className="glass p-8 rounded-[2rem]">
                                <Shield className="w-8 h-8 text-yellow-400 mb-6" />
                                <h4 className="text-lg font-bold mb-4">Data Integrity</h4>
                                <p className="text-neutral-500 text-sm leading-relaxed">
                                    Centralized menu data in structured JSON format, allowing for single-source-of-truth updates across JP, EN, and TH versions, preventing pricing or availability discrepancies.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Practical Engineering */}
                    <section>
                        <h2 className="text-sm font-mono tracking-[0.3em] uppercase text-neutral-600 mb-10">Technical Reflection</h2>
                        <div className="space-y-12">
                            <div className="space-y-4">
                                <h4 className="text-xl font-bold text-white flex gap-2">
                                    <Zap className="w-5 h-5 text-yellow-500" /> Bridging Web & Business
                                </h4>
                                <p className="text-neutral-400 italic pl-7 border-l-2 border-yellow-500/30">
                                    "This project taught me that engineering isn't just about code complexity; it's about solving real-world problems. Achieving a near-zero JS payload while managing multi-language SEO was a challenge in architectural restraint."
                                </p>
                            </div>
                        </div>
                    </section>
                </div>
            </article>

            <footer className="mt-40 py-20 text-center border-t border-white/5">
                <p className="text-[10px] tracking-[0.2em] uppercase text-neutral-600">
                    aroithaijapan.jp — performance audit by peace
                </p>
            </footer>
        </main>
    );
}
