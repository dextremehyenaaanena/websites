/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ArrowRight,
  CheckCircle2,
  Clock,
  MapPin,
  Phone,
  Mail,
  Globe,
  Smartphone,
  Search,
  Menu,
  X,
  Sparkles,
  Code,
  ShoppingBag,
  Layers,
  Copy,
  Check,
  ShieldCheck,
  Zap,
  Download,
  ExternalLink
} from 'lucide-react';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [showCodeModal, setShowCodeModal] = useState(false);
  const [activeModal, setActiveModal] = useState<number | null>(null);
  
  // Contact Form State
  const [formState, setFormState] = useState({ name: '', email: '', phone: '', message: '' });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [web3FormsKey, setWeb3FormsKey] = useState('206e86f2-934d-43c6-86a1-f60c6ca26b25');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');

  // Raw HTML template that matches the visual design exactly.
  // The user requested a 100% complete single-file HTML template they can save directly.
  const rawHtmlTemplate = `<!DOCTYPE html>
<html lang="it">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Pixel Graft Studio - Premium Web Design & Local SEO</title>
    <!-- Google Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=Space+Grotesk:wght@400;500;600;700&display=swap" rel="stylesheet">
    <!-- Tailwind CSS v4 Play CDN -->
    <script src="https://unpkg.com/@tailwindcss/browser@4"></script>
    <style>
        body {
            font-family: "Plus Jakarta Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
            background-color: #f8fafc;
            color: #0f172a;
        }
        .font-display {
            font-family: "Space Grotesk", sans-serif;
        }
    </style>
</head>
<body class="antialiased selection:bg-indigo-500 selection:text-white">

    <!-- NAVIGATION -->
    <nav class="sticky top-0 z-50 bg-[#0f172a]/95 backdrop-blur-md border-b border-slate-800 text-white">
        <div class="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
            <!-- Logo -->
            <a href="#" class="flex items-center space-x-3 group">
                <div class="w-10 h-10 rounded-xl bg-indigo-600 flex items-center justify-center font-display font-bold text-xl text-white shadow-lg shadow-indigo-500/30 group-hover:scale-105 transition-transform duration-300">
                    P
                </div>
                <span class="font-display font-bold tracking-wider text-xl">Pixel Graft Studio</span>
            </a>

            <!-- Desktop Navigation -->
            <div class="hidden md:flex items-center space-x-10 text-sm font-medium tracking-wide text-slate-300">
                <a href="#home" class="hover:text-white hover:translate-y-[-1px] transition-all duration-200">Home</a>
                <a href="#chi-siamo" class="hover:text-white hover:translate-y-[-1px] transition-all duration-200">Chi Siamo</a>
                <a href="#servizi" class="hover:text-white hover:translate-y-[-1px] transition-all duration-200">Servizi</a>
                <a href="#contatti" class="hover:text-white hover:translate-y-[-1px] transition-all duration-200">Contatti</a>
            </div>

            <!-- CTA Button -->
            <div class="hidden md:block">
                <a href="#contatti" class="inline-flex items-center px-6 py-3 rounded-xl bg-indigo-600 text-white font-semibold text-sm hover:bg-indigo-500 hover:shadow-lg hover:shadow-indigo-500/20 active:scale-95 transition-all duration-200">
                    Contattaci
                </a>
            </div>

            <!-- Mobile Menu Toggle -->
            <button id="mobile-menu-btn" class="md:hidden p-2 text-slate-300 hover:text-white focus:outline-none">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
            </button>
        </div>

        <!-- Mobile Menu (Hidden by default) -->
        <div id="mobile-menu" class="hidden md:hidden border-t border-slate-800 bg-[#0f172a] px-6 py-6 space-y-4">
            <a href="#home" class="block text-slate-300 hover:text-white text-base font-medium py-2">Home</a>
            <a href="#chi-siamo" class="block text-slate-300 hover:text-white text-base font-medium py-2">Chi Siamo</a>
            <a href="#servizi" class="block text-slate-300 hover:text-white text-base font-medium py-2">Servizi</a>
            <a href="#contatti" class="block text-slate-300 hover:text-white text-base font-medium py-2">Contatti</a>
            <a href="#contatti" class="block w-full text-center py-3 rounded-xl bg-indigo-600 text-white font-semibold text-sm">Contattaci</a>
        </div>
    </nav>

    <!-- HERO SECTION (ERO COMPONENT) -->
    <header id="home" class="relative bg-[#0f172a] text-white overflow-hidden py-24 md:py-32 border-b border-slate-900">
        <!-- Abstract BG patterns -->
        <div class="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(79,70,229,0.15),transparent_60%)]"></div>
        <div class="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20"></div>

        <div class="max-w-7xl mx-auto px-6 relative z-10 grid md:grid-cols-12 gap-12 items-center">
            <div class="md:col-span-7 space-y-8 text-center md:text-left">
                <div class="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold tracking-wider uppercase">
                    <span>✨ Web Design Professionale a Modena</span>
                </div>
                <h1 class="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-none text-white">
                    Sviluppiamo la tua <span class="text-indigo-400 bg-clip-text">Presenza Digitale</span> con Eleganza.
                </h1>
                <p class="text-slate-300 text-lg md:text-xl font-light max-w-2xl leading-relaxed">
                    Creiamo siti web su misura e strategie SEO locali ad altissimo impatto per posizionare il tuo business al vertice. Design raffinato, codice pulito e orientamento costante al risultato.
                </p>
                <div class="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
                    <a href="#contatti" class="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-base shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200">
                        Inizia Ora
                        <svg class="w-5 h-5 ml-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                    </a>
                    <a href="#servizi" class="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-base border border-slate-700 hover:border-slate-600 transition-all duration-200">
                        Scopri i Servizi
                    </a>
                </div>
            </div>

            <!-- Tech Illustration / Device mockup -->
            <div class="md:col-span-5 relative mt-8 md:mt-0 flex justify-center">
                <div class="relative w-full max-w-sm">
                    <!-- Glow -->
                    <div class="absolute -inset-1 rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-600 opacity-30 blur-2xl"></div>
                    <!-- Mockup Container -->
                    <div class="relative bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl p-4 overflow-hidden">
                        <div class="flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
                            <div class="flex space-x-1.5">
                                <span class="w-3 h-3 rounded-full bg-red-500 inline-block"></span>
                                <span class="w-3 h-3 rounded-full bg-yellow-500 inline-block"></span>
                                <span class="w-3 h-3 rounded-full bg-green-500 inline-block"></span>
                            </div>
                            <span class="text-xs font-mono text-slate-500">pixelgraft.studio</span>
                            <span class="w-4 h-4 text-slate-500">
                                <svg fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                            </span>
                        </div>
                        <div class="space-y-3">
                            <div class="h-32 rounded-xl bg-indigo-950/50 border border-indigo-500/20 flex flex-col justify-end p-3 relative overflow-hidden">
                                <div class="absolute top-3 right-3 w-8 h-8 rounded-full bg-indigo-500/20 flex items-center justify-center text-indigo-400">⚡</div>
                                <span class="text-[10px] font-mono tracking-wider text-indigo-400 uppercase font-bold">Performance</span>
                                <span class="text-sm font-bold font-display text-white">Caricamento in 0.4s</span>
                            </div>
                            <div class="grid grid-cols-2 gap-3">
                                <div class="p-3 rounded-xl bg-slate-800/50 border border-slate-700/50 space-y-1">
                                    <span class="text-[10px] font-bold text-indigo-400">SEO Score</span>
                                    <p class="text-lg font-bold text-white">100/100</p>
                                </div>
                                <div class="p-3 rounded-xl bg-slate-800/50 border border-slate-700/50 space-y-1">
                                    <span class="text-[10px] font-bold text-indigo-400">Mobile Friendly</span>
                                    <p class="text-lg font-bold text-white">Ottimo</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>

    <!-- CHI SIAMO SECTION -->
    <section id="chi-siamo" class="py-24 md:py-32 bg-white border-b border-slate-100">
        <div class="max-w-7xl mx-auto px-6 grid md:grid-cols-12 gap-12 lg:gap-20 items-center">
            <!-- Text Content -->
            <div class="md:col-span-7 space-y-6">
                <span class="text-xs font-bold text-indigo-600 tracking-wider uppercase font-display">Chi Siamo</span>
                <h2 class="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight">
                    Esperienza Artigianale, <br />Standard Tecnologici Globali.
                </h2>
                <p class="text-slate-600 text-base sm:text-lg leading-relaxed font-light">
                    Siamo uno studio di ingegneria web e design fondato con l'obiettivo chiaro di digitalizzare le imprese locali di Modena e provincia con la stessa cura e qualità dedicate alle grandi multinazionali.
                </p>
                <p class="text-slate-600 text-base sm:text-lg leading-relaxed font-light">
                    Non utilizziamo template standard pronti all'uso o soluzioni pre-confezionate. Ogni riga di codice viene scritta su misura per massimizzare la velocità, la sicurezza e, soprattutto, l'efficacia nel convertire i visitatori in clienti reali per il tuo business.
                </p>
                <div class="pt-4 border-t border-slate-100">
                    <div class="space-y-1">
                        <span class="text-3xl font-bold font-display text-indigo-600">100%</span>
                        <p class="text-sm text-slate-500 font-medium">Siti Personalizzati</p>
                    </div>
                </div>
            </div>

            <!-- Interactive Visual Card -->
            <div class="md:col-span-5 flex justify-center">
                <div class="w-full max-w-sm rounded-2xl bg-[#0f172a] text-slate-100 p-6 shadow-2xl relative border border-slate-800 flex flex-col justify-between overflow-hidden group hover:-translate-y-1 transition-all duration-300">
                    <div class="absolute -top-12 -right-12 w-32 h-32 rounded-full bg-indigo-500/10 blur-2xl group-hover:bg-indigo-500/20 transition-all duration-300"></div>
                    
                    <!-- Mock Browser Top bar -->
                    <div class="flex items-center justify-between border-b border-slate-800 pb-4 mb-4">
                        <div class="flex items-center space-x-1.5">
                            <span class="w-2.5 h-2.5 rounded-full bg-rose-500 inline-block"></span>
                            <span class="w-2.5 h-2.5 rounded-full bg-amber-500 inline-block"></span>
                            <span class="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block"></span>
                        </div>
                        <span class="text-[10px] font-mono text-slate-500 tracking-wider">PIXELGRAFT.DEV</span>
                    </div>

                    <!-- Main Stats Section -->
                    <div class="space-y-4">
                        <div class="flex items-center justify-between">
                            <span class="text-xs font-mono text-slate-400">Core Web Vitals</span>
                            <span class="text-[10px] bg-emerald-500/10 text-emerald-400 px-2 py-0.5 rounded-full font-mono font-bold">Ottimo</span>
                        </div>
                        
                        <!-- Mini Lighthouse Gauges -->
                        <div class="grid grid-cols-4 gap-2 py-2">
                            <div class="flex flex-col items-center space-y-1">
                                <div class="w-10 h-10 rounded-full border-2 border-emerald-500 flex items-center justify-center text-[10px] font-bold text-emerald-400 bg-emerald-500/5">99</div>
                                <span class="text-[9px] text-slate-400 font-mono">Perf</span>
                            </div>
                            <div class="flex flex-col items-center space-y-1">
                                <div class="w-10 h-10 rounded-full border-2 border-emerald-500 flex items-center justify-center text-[10px] font-bold text-emerald-400 bg-emerald-500/5">100</div>
                                <span class="text-[9px] text-slate-400 font-mono">Access</span>
                            </div>
                            <div class="flex flex-col items-center space-y-1">
                                <div class="w-10 h-10 rounded-full border-2 border-emerald-500 flex items-center justify-center text-[10px] font-bold text-emerald-400 bg-emerald-500/5">100</div>
                                <span class="text-[9px] text-slate-400 font-mono">Best P.</span>
                            </div>
                            <div class="flex flex-col items-center space-y-1">
                                <div class="w-10 h-10 rounded-full border-2 border-emerald-500 flex items-center justify-center text-[10px] font-bold text-emerald-400 bg-emerald-500/5">100</div>
                                <span class="text-[9px] text-slate-400 font-mono">SEO</span>
                            </div>
                        </div>

                        <!-- Mini Code mockup block -->
                        <div class="bg-slate-950 p-3 rounded-xl border border-slate-800/80 font-mono text-[10px] leading-relaxed text-slate-300">
                            <p class="text-indigo-400">&lt;<span class="text-rose-400">ModenaBusiness</span></p>
                            <p class="pl-3 text-slate-400">velocità="istante"</p>
                            <p class="pl-3 text-slate-400">seo="ottimizzato"</p>
                            <p class="pl-3 text-slate-400">codice="nazionale"</p>
                            <p class="text-indigo-400">/&gt;</p>
                        </div>
                    </div>

                    <!-- Footer Details -->
                    <div class="mt-4 pt-4 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-500">
                        <span class="font-mono">Pixel Graft Quality</span>
                        <span class="text-indigo-400 font-semibold flex items-center space-x-1">
                            <span>Senza compromessi</span>
                            <span>→</span>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- I NOSTRI SERVIZI SECTION -->
    <section id="servizi" class="py-24 md:py-32 bg-slate-50 border-b border-slate-100">
        <div class="max-w-7xl mx-auto px-6 space-y-16">
            <div class="text-center space-y-4 max-w-3xl mx-auto">
                <span class="text-xs font-bold text-indigo-600 tracking-wider uppercase font-display">I Nostri Servizi</span>
                <h2 class="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
                    Soluzioni Digitali ad Alte Prestazioni
                </h2>
                <p class="text-slate-500 text-base sm:text-lg font-light">
                    Combiniamo design minimale e tecnologie moderne per costruire siti web e applicazioni veloci, sicure e ottimizzate per vendere.
                </p>
            </div>

            <!-- 3-Column Grid -->
            <div class="grid md:grid-cols-3 gap-8">
                <!-- Card 1 -->
                <div class="bg-white p-8 rounded-2xl border border-slate-100 hover:border-indigo-100 hover:shadow-xl hover:shadow-slate-200/50 hover:-translate-y-1 transition-all duration-300 flex flex-col h-full group cursor-pointer animate-fade-in" onclick="openModal(1)">
                    <div class="w-12 h-12 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>
                    </div>
                    <h3 class="font-display font-bold text-slate-900 text-xl mb-3">Siti Web Custom</h3>
                    <p class="text-slate-500 text-sm font-light leading-relaxed mb-6 flex-grow">
                        Sviluppiamo siti vetrina e portali istituzionali interamente personalizzati su codice nativo, eliminando i pesanti plugin di WordPress per garantire prestazioni fulminee.
                    </p>
                    <div class="flex items-center text-sm font-bold text-indigo-600 mt-auto group-hover:translate-x-1.5 transition-transform duration-300">
                        <span>Scopri di più</span>
                        <svg class="w-4 h-4 ml-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
                    </div>
                </div>

                <!-- Card 2 -->
                <div class="bg-white p-8 rounded-2xl border border-slate-100 hover:border-indigo-100 hover:shadow-xl hover:shadow-slate-200/50 hover:-translate-y-1 transition-all duration-300 flex flex-col h-full group cursor-pointer animate-fade-in" onclick="openModal(2)">
                    <div class="w-12 h-12 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path></svg>
                    </div>
                    <h3 class="font-display font-bold text-slate-900 text-xl mb-3">E-Commerce Professionali</h3>
                    <p class="text-slate-500 text-sm font-light leading-relaxed mb-6 flex-grow">
                        Realizziamo negozi online solidi, ultra-veloci e ottimizzati per massimizzare il tasso di conversione. Facili da gestire ed estremamente sicuri per i pagamenti.
                    </p>
                    <div class="flex items-center text-sm font-bold text-indigo-600 mt-auto group-hover:translate-x-1.5 transition-transform duration-300">
                        <span>Scopri di più</span>
                        <svg class="w-4 h-4 ml-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
                    </div>
                </div>

                <!-- Card 3 -->
                <div class="bg-white p-8 rounded-2xl border border-slate-100 hover:border-indigo-100 hover:shadow-xl hover:shadow-slate-200/50 hover:-translate-y-1 transition-all duration-300 flex flex-col h-full group cursor-pointer animate-fade-in" onclick="openModal(3)">
                    <div class="w-12 h-12 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path></svg>
                    </div>
                    <h3 class="font-display font-bold text-slate-900 text-xl mb-3">Ottimizzazione Locale & SEO</h3>
                    <p class="text-slate-500 text-sm font-light leading-relaxed mb-6 flex-grow">
                        Posizioniamo il tuo sito internet al vertice delle ricerche a Modena. Ottimizziamo la tua scheda Google Business Profile per attirare una pioggia costante di contatti qualificati.
                    </p>
                    <div class="flex items-center text-sm font-bold text-indigo-600 mt-auto group-hover:translate-x-1.5 transition-transform duration-300">
                        <span>Scopri di più</span>
                        <svg class="w-4 h-4 ml-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- PREMIUM BANNER: PERCHÉ LAVORARE CON ME? -->
    <section class="py-24 bg-gradient-to-b from-[#0f172a] to-slate-950 text-white relative overflow-hidden">
        <div class="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(79,70,229,0.1),transparent_50%)]"></div>
        <div class="max-w-7xl mx-auto px-6 relative z-10 space-y-16">
            <div class="text-center space-y-4 max-w-2xl mx-auto">
                <span class="text-xs font-bold text-indigo-400 tracking-wider uppercase font-display">Il Nostro Impegno</span>
                <h2 class="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
                    Perché Lavorare Con Me?
                </h2>
                <p class="text-slate-400 text-base font-light">
                    Azzeriamo le distanze e i rischi, offrendo garanzie reali su design, velocità e posizionamento sui motori di ricerca.
                </p>
            </div>

            <div class="grid md:grid-cols-3 gap-8">
                <!-- Card 1 -->
                <div class="bg-slate-900/60 border border-slate-800 p-8 rounded-2xl flex flex-col space-y-4 hover:border-slate-700 hover:bg-slate-900/80 transition-all duration-300">
                    <div class="w-10 h-10 rounded-lg bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 flex items-center justify-center font-bold">01</div>
                    <h3 class="font-display font-bold text-white text-lg">Nessun Rischio Finanziario</h3>
                    <p class="text-slate-400 text-sm font-light leading-relaxed">
                        Sviluppiamo un prototipo iniziale di design completamente gratuito per farti toccare con mano la qualità del nostro lavoro. Paghi solamente a lavoro completato e approvato al 100%.
                    </p>
                </div>

                <!-- Card 2 -->
                <div class="bg-slate-900/60 border border-slate-800 p-8 rounded-2xl flex flex-col space-y-4 hover:border-slate-700 hover:bg-slate-900/80 transition-all duration-300">
                    <div class="w-10 h-10 rounded-lg bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 flex items-center justify-center font-bold">02</div>
                    <h3 class="font-display font-bold text-white text-lg">Design Mobile Premium</h3>
                    <p class="text-slate-400 text-sm font-light leading-relaxed">
                        Oltre l'80% del traffico locale avviene da smartphone. I nostri siti sono interamente progettati mobile-first per garantire prestazioni fulminee, interfacce intuitive e massima reattività.
                    </p>
                </div>

                <!-- Card 3 -->
                <div class="bg-slate-900/60 border border-slate-800 p-8 rounded-2xl flex flex-col space-y-4 hover:border-slate-700 hover:bg-slate-900/80 transition-all duration-300">
                    <div class="w-10 h-10 rounded-lg bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 flex items-center justify-center font-bold">03</div>
                    <h3 class="font-display font-bold text-white text-lg">Ottimizzazione SEO Locale</h3>
                    <p class="text-slate-400 text-sm font-light leading-relaxed">
                        Strutturiamo i siti web secondo le più rigide linee guida di Google. Massimizziamo la tua visibilità locale a Modena, portando la tua azienda davanti ai clienti pronti ad acquistare.
                    </p>
                </div>
            </div>
        </div>
    </section>

    <!-- INFO E ORARI / CONTACT SECTION -->
    <section id="contatti" class="py-24 md:py-32 bg-white relative">
        <div class="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-12 lg:gap-20 items-stretch">
            <!-- Left Info Card -->
            <div class="lg:col-span-5 bg-slate-50 border border-slate-100 rounded-3xl p-8 sm:p-10 flex flex-col justify-between space-y-12">
                <div class="space-y-6">
                    <span class="text-xs font-bold text-indigo-600 tracking-wider uppercase font-display">Contatti</span>
                    <h2 class="font-display text-3xl font-extrabold tracking-tight text-slate-900">Contatti & Disponibilità</h2>
                    <p class="text-slate-500 text-base font-light">
                        Fissa una videochiamata o una consulenza telefonica gratuita da remoto per parlare del tuo progetto digitale e definire i tuoi obiettivi commerciali.
                    </p>
                </div>

                <div class="space-y-6">
                    <!-- Phone -->
                    <div class="flex items-start space-x-4">
                        <div class="w-10 h-10 rounded-xl bg-indigo-100 text-indigo-600 flex items-center justify-center flex-shrink-0">
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                        </div>
                        <div>
                            <span class="text-xs font-bold uppercase tracking-wider text-slate-400">Telefono</span>
                            <a href="tel:+393882596241" class="text-slate-800 hover:text-indigo-600 transition-colors font-semibold mt-0.5 block">
                                +39 388 2596241
                            </a>
                        </div>
                    </div>

                    <!-- Gmail -->
                    <div class="flex items-start space-x-4">
                        <div class="w-10 h-10 rounded-xl bg-indigo-100 text-indigo-600 flex items-center justify-center flex-shrink-0">
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                        </div>
                        <div>
                            <span class="text-xs font-bold uppercase tracking-wider text-slate-400">Gmail</span>
                            <a href="mailto:pixelgraftstudio@gmail.com" class="text-slate-800 hover:text-indigo-600 transition-colors font-semibold mt-0.5 block break-all">
                                pixelgraftstudio@gmail.com
                            </a>
                        </div>
                    </div>
                </div>

                <div class="pt-6 border-t border-slate-200 text-xs text-slate-400">
                    Pixel Graft Studio • P.IVA 01234567890
                </div>
            </div>

            <!-- Right Contact Form -->
            <div class="lg:col-span-7 bg-white border border-slate-100 rounded-3xl p-8 sm:p-10 shadow-sm flex flex-col justify-between">
                <div class="space-y-6">
                    <h3 class="font-display font-bold text-slate-900 text-2xl">Invia un Messaggio</h3>
                    <p class="text-slate-500 text-sm font-light">
                        Compila il modulo sottostante per richiedere il tuo prototipo gratuito. Riceverai una risposta entro 24 ore lavorative.
                    </p>
                    
                    <form id="contact-form" class="space-y-4">
                        <div class="grid sm:grid-cols-2 gap-4">
                            <div class="space-y-1.5">
                                <label for="name" class="text-xs font-semibold text-slate-600">Nome e Cognome</label>
                                <input type="text" id="name" required class="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:border-indigo-600 focus:bg-white transition-all duration-200" placeholder="Mario Rossi">
                            </div>
                            <div class="space-y-1.5">
                                <label for="email" class="text-xs font-semibold text-slate-600">Email</label>
                                <input type="email" id="email" required class="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:border-indigo-600 focus:bg-white transition-all duration-200" placeholder="mario@email.it">
                            </div>
                        </div>

                        <div class="space-y-1.5">
                            <label for="phone" class="text-xs font-semibold text-slate-600">Telefono</label>
                            <input type="tel" id="phone" required class="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:border-indigo-600 focus:bg-white transition-all duration-200" placeholder="+39 333 1234567">
                        </div>

                        <div class="space-y-1.5">
                            <label for="message" class="text-xs font-semibold text-slate-600">Dettagli del Progetto</label>
                            <textarea id="message" rows="4" required class="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:border-indigo-600 focus:bg-white transition-all duration-200" placeholder="Descrivi brevemente la tua attività e le tue necessità..."></textarea>
                        </div>

                        <button type="submit" class="w-full py-4 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-xl text-sm hover:shadow-lg hover:shadow-indigo-500/25 active:scale-[0.99] transition-all duration-200">
                            Invia Richiesta Prototipo Gratuito
                        </button>
                    </form>
                    <div id="form-success" class="hidden p-6 bg-green-50 border border-green-200 rounded-2xl text-center space-y-2">
                        <span class="text-2xl">🎉</span>
                        <h4 class="font-bold text-green-800">Messaggio Inviato!</h4>
                        <p class="text-sm text-green-600">Grazie per averci contattato. Ti risponderemo prontamente entro 24 ore lavorative.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- MODALS FOR SERVICES -->
    <!-- Modal 1: Siti Web Custom -->
    <div id="html-modal-1" class="hidden fixed inset-0 z-50 flex items-center justify-center p-4">
        <div class="absolute inset-0 bg-slate-900/40" style="backdrop-filter: blur(5px);" onclick="closeModal(1)"></div>
        <div class="relative bg-white rounded-[12px] shadow-2xl max-w-lg w-full p-8 border border-slate-100 relative z-10 text-left">
            <button onclick="closeModal(1)" class="absolute top-4 right-4 text-slate-400 hover:text-slate-600 transition-colors p-1 rounded-lg hover:bg-slate-50 cursor-pointer border-0 bg-transparent">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
            </button>
            <div class="space-y-6">
                <div class="space-y-2 pr-6">
                    <h3 class="font-display font-extrabold text-slate-900 text-2xl tracking-tight">Sviluppo Siti Web Su Misura</h3>
                    <p class="text-sm text-indigo-600 font-medium">Una presenza online unica, senza compromessi.</p>
                </div>
                <div class="border-t border-slate-100 pt-5 space-y-4">
                    <div class="flex items-start space-x-3">
                        <span class="text-[#4f46e5] font-bold mt-0.5 flex-shrink-0 text-lg">✓</span>
                        <div class="space-y-0.5">
                            <h4 class="font-semibold text-slate-900 text-sm">Codice Nativo Pulito</h4>
                            <p class="text-xs text-slate-500 font-light leading-relaxed">Nessun costruttore pesante come WordPress o Elementor. Il sito carica istantaneamente.</p>
                        </div>
                    </div>
                    <div class="flex items-start space-x-3">
                        <span class="text-[#4f46e5] font-bold mt-0.5 flex-shrink-0 text-lg">✓</span>
                        <div class="space-y-0.5">
                            <h4 class="font-semibold text-slate-900 text-sm">Design Esclusivo</h4>
                            <p class="text-xs text-slate-500 font-light leading-relaxed">Creato da zero per riflettere l'identità e i valori del tuo brand.</p>
                        </div>
                    </div>
                    <div class="flex items-start space-x-3">
                        <span class="text-[#4f46e5] font-bold mt-0.5 flex-shrink-0 text-lg">✓</span>
                        <div class="space-y-0.5">
                            <h4 class="font-semibold text-slate-900 text-sm">100% Mobile Responsive</h4>
                            <p class="text-xs text-slate-500 font-light leading-relaxed">Navigazione perfetta e fluida su qualsiasi smartphone o tablet.</p>
                        </div>
                    </div>
                    <div class="flex items-start space-x-3">
                        <span class="text-[#4f46e5] font-bold mt-0.5 flex-shrink-0 text-lg">✓</span>
                        <div class="space-y-0.5">
                            <h4 class="font-semibold text-slate-900 text-sm">Sicurezza Avanzata</h4>
                            <p class="text-xs text-slate-500 font-light leading-relaxed">Architettura protetta contro attacchi esterni e certificato SSL incluso.</p>
                        </div>
                    </div>
                </div>
                <div class="pt-2">
                    <button onclick="closeModal(1); document.getElementById('contatti').scrollIntoView({ behavior: 'smooth' })" class="w-full py-3 bg-[#4f46e5] hover:bg-indigo-500 text-white font-bold rounded-xl text-sm transition-all duration-200 cursor-pointer text-center block">
                        Richiedi Prototipo Gratuito
                    </button>
                </div>
            </div>
        </div>
    </div>

    <!-- Modal 2: E-Commerce Professionali -->
    <div id="html-modal-2" class="hidden fixed inset-0 z-50 flex items-center justify-center p-4">
        <div class="absolute inset-0 bg-slate-900/40" style="backdrop-filter: blur(5px);" onclick="closeModal(2)"></div>
        <div class="relative bg-white rounded-[12px] shadow-2xl max-w-lg w-full p-8 border border-slate-100 relative z-10 text-left">
            <button onclick="closeModal(2)" class="absolute top-4 right-4 text-slate-400 hover:text-slate-600 transition-colors p-1 rounded-lg hover:bg-slate-50 cursor-pointer border-0 bg-transparent">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
            </button>
            <div class="space-y-6">
                <div class="space-y-2 pr-6">
                    <h3 class="font-display font-extrabold text-slate-900 text-2xl tracking-tight">Soluzioni E-Commerce ad Alte Prestazioni</h3>
                    <p class="text-sm text-indigo-600 font-medium">Trasforma i visitatori in clienti paganti.</p>
                </div>
                <div class="border-t border-slate-100 pt-5 space-y-4">
                    <div class="flex items-start space-x-3">
                        <span class="text-[#4f46e5] font-bold mt-0.5 flex-shrink-0 text-lg">✓</span>
                        <div class="space-y-0.5">
                            <h4 class="font-semibold text-slate-900 text-sm">Carrello e Checkout Rapidi</h4>
                            <p class="text-xs text-slate-500 font-light leading-relaxed">Processo di acquisto ottimizzato in pochi passaggi per ridurre l'abbandono.</p>
                        </div>
                    </div>
                    <div class="flex items-start space-x-3">
                        <span class="text-[#4f46e5] font-bold mt-0.5 flex-shrink-0 text-lg">✓</span>
                        <div class="space-y-0.5">
                            <h4 class="font-semibold text-slate-900 text-sm">Pagamenti Sicuri</h4>
                            <p class="text-xs text-slate-500 font-light leading-relaxed">Integrazione nativa con Stripe, PayPal e carte di credito con crittografia avanzata.</p>
                        </div>
                    </div>
                    <div class="flex items-start space-x-3">
                        <span class="text-[#4f46e5] font-bold mt-0.5 flex-shrink-0 text-lg">✓</span>
                        <div class="space-y-0.5">
                            <h4 class="font-semibold text-slate-900 text-sm">Pannello di Controllo Intuitivo</h4>
                            <p class="text-xs text-slate-500 font-light leading-relaxed">Gestione autonoma e semplicissima di prodotti, scorte e ordini.</p>
                        </div>
                    </div>
                    <div class="flex items-start space-x-3">
                        <span class="text-[#4f46e5] font-bold mt-0.5 flex-shrink-0 text-lg">✓</span>
                        <div class="space-y-0.5">
                            <h4 class="font-semibold text-slate-900 text-sm">Velocità Ottimizzata</h4>
                            <p class="text-xs text-slate-500 font-light leading-relaxed">Caricamento ultra-rapido del catalogo per massimizzare le vendite.</p>
                        </div>
                    </div>
                </div>
                <div class="pt-2">
                    <button onclick="closeModal(2); document.getElementById('contatti').scrollIntoView({ behavior: 'smooth' })" class="w-full py-3 bg-[#4f46e5] hover:bg-indigo-500 text-white font-bold rounded-xl text-sm transition-all duration-200 cursor-pointer text-center block">
                        Richiedi Prototipo Gratuito
                    </button>
                </div>
            </div>
        </div>
    </div>

    <!-- Modal 3: Ottimizzazione Locale & SEO -->
    <div id="html-modal-3" class="hidden fixed inset-0 z-50 flex items-center justify-center p-4">
        <div class="absolute inset-0 bg-slate-900/40" style="backdrop-filter: blur(5px);" onclick="closeModal(3)"></div>
        <div class="relative bg-white rounded-[12px] shadow-2xl max-w-lg w-full p-8 border border-slate-100 relative z-10 text-left">
            <button onclick="closeModal(3)" class="absolute top-4 right-4 text-slate-400 hover:text-slate-600 transition-colors p-1 rounded-lg hover:bg-slate-50 cursor-pointer border-0 bg-transparent">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
            </button>
            <div class="space-y-6">
                <div class="space-y-2 pr-6">
                    <h3 class="font-display font-extrabold text-slate-900 text-2xl tracking-tight">Local SEO & Posizionamento Google</h3>
                    <p class="text-sm text-indigo-600 font-medium">Fatti trovare dai clienti che cercano i tuoi prodotti a Modena.</p>
                </div>
                <div class="border-t border-slate-100 pt-5 space-y-4">
                    <div class="flex items-start space-x-3">
                        <span class="text-[#4f46e5] font-bold mt-0.5 flex-shrink-0 text-lg">✓</span>
                        <div class="space-y-0.5">
                            <h4 class="font-semibold text-slate-900 text-sm">Dominio delle Ricerche Locali</h4>
                            <p class="text-xs text-slate-500 font-light leading-relaxed">Ottimizzazione mirata per apparire tra i primi risultati di ricerca nella tua zona.</p>
                        </div>
                    </div>
                    <div class="flex items-start space-x-3">
                        <span class="text-[#4f46e5] font-bold mt-0.5 flex-shrink-0 text-lg">✓</span>
                        <div class="space-y-0.5">
                            <h4 class="font-semibold text-slate-900 text-sm">Google Maps Specialist</h4>
                            <p class="text-xs text-slate-500 font-light leading-relaxed">Configurazione e posizionamento strategico sulla mappa per attirare clienti fisici in negozio.</p>
                        </div>
                    </div>
                    <div class="flex items-start space-x-3">
                        <span class="text-[#4f46e5] font-bold mt-0.5 flex-shrink-0 text-lg">✓</span>
                        <div class="space-y-0.5">
                            <h4 class="font-semibold text-slate-900 text-sm">Analisi delle Parole Chiave</h4>
                            <p class="text-xs text-slate-500 font-light leading-relaxed">Studio approfondito dei termini più cercati dai tuoi potenziali clienti.</p>
                        </div>
                    </div>
                    <div class="flex items-start space-x-3">
                        <span class="text-[#4f46e5] font-bold mt-0.5 flex-shrink-0 text-lg">✓</span>
                        <div class="space-y-0.5">
                            <h4 class="font-semibold text-slate-900 text-sm">Integrazione Google Business Profile</h4>
                            <p class="text-xs text-slate-500 font-light leading-relaxed">Ottimizzazione completa della scheda per recensioni e contatti diretti.</p>
                        </div>
                    </div>
                </div>
                <div class="pt-2">
                    <button onclick="closeModal(3); document.getElementById('contatti').scrollIntoView({ behavior: 'smooth' })" class="w-full py-3 bg-[#4f46e5] hover:bg-indigo-500 text-white font-bold rounded-xl text-sm transition-all duration-200 cursor-pointer text-center block">
                        Richiedi Prototipo Gratuito
                    </button>
                </div>
            </div>
        </div>
    </div>

    <!-- FOOTER -->
    <footer class="bg-[#0f172a] text-slate-400 py-12 border-t border-slate-900 text-center text-sm font-light">
        <div class="max-w-7xl mx-auto px-6 space-y-4">
            <p>© 2026 Pixel Graft Studio. Tutti i diritti riservati.</p>
            <p class="text-slate-600 text-xs">Realizzato con standard di programmazione avanzati per massimizzare la velocità d'esecuzione e il posizionamento locale a Modena.</p>
        </div>
    </footer>

    <!-- SCRIPT FOR MENU & CONTACT FORM SUBMIT -->
    <script>
        // Mobile menu toggle
        const btn = document.getElementById('mobile-menu-btn');
        const menu = document.getElementById('mobile-menu');
        btn.addEventListener('click', () => {
            menu.classList.toggle('hidden');
        });

        // Simple form submit handler
        const form = document.getElementById('contact-form');
        const success = document.getElementById('form-success');
        const submitBtn = form.querySelector('button[type="submit"]');
        form.addEventListener('submit', async (e) => {
            e.preventDefault();
            if (submitBtn) {
                submitBtn.disabled = true;
                submitBtn.innerHTML = 'Invio in corso...';
            }
            try {
                const response = await fetch("https://api.web3forms.com/submit", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "Accept": "application/json"
                    },
                    body: JSON.stringify({
                        access_key: "206e86f2-934d-43c6-86a1-f60c6ca26b25",
                        name: document.getElementById('name').value,
                        email: document.getElementById('email').value,
                        phone: document.getElementById('phone').value,
                        message: document.getElementById('message').value,
                        subject: "Nuovo messaggio da Pixel Graft Studio (HTML)",
                        from_name: "Pixel Graft Studio"
                    })
                });
                const data = await response.json();
                if (data.success) {
                    form.classList.add('hidden');
                    success.classList.remove('hidden');
                } else {
                    alert(data.message || "Errore durante l'invio del messaggio. Riprova.");
                }
            } catch (err) {
                alert("Impossibile connettersi al servizio di posta. Controlla la tua connessione.");
            } finally {
                if (submitBtn) {
                    submitBtn.disabled = false;
                    submitBtn.innerHTML = 'Invia Richiesta Prototipo Gratuito';
                }
            }
        });

        // Modal handlers
        window.openModal = function(id) {
            const modal = document.getElementById('html-modal-' + id);
            if (modal) {
                modal.classList.remove('hidden');
                document.body.style.overflow = 'hidden';
            }
        };

        window.closeModal = function(id) {
            const modal = document.getElementById('html-modal-' + id);
            if (modal) {
                modal.classList.add('hidden');
                document.body.style.overflow = '';
            }
        };
    </script>
</body>
</html>`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(rawHtmlTemplate);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const downloadHtmlFile = () => {
    const blob = new Blob([rawHtmlTemplate], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'index.html';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleFormSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');

    if (!web3FormsKey) {
      // Simulation mode
      setTimeout(() => {
        setIsSubmitting(false);
        setFormSubmitted(true);
      }, 800);
      return;
    }

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: web3FormsKey,
          name: formState.name,
          email: formState.email,
          phone: formState.phone,
          message: formState.message,
          subject: "Nuovo messaggio da Pixel Graft Studio",
          from_name: "Pixel Graft Studio",
        }),
      });

      const data = await response.json();
      if (data.success) {
        setFormSubmitted(true);
      } else {
        setSubmitError(data.message || "Errore durante l'invio del messaggio. Riprova.");
      }
    } catch (error) {
      setSubmitError("Impossibile connettersi al servizio di posta. Controlla la tua connessione.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 selection:bg-indigo-500 selection:text-white flex flex-col relative" id="app-root">
      
      {/* CORE LANDING PAGE NAVIGATION */}
      <nav className="sticky top-0 z-40 bg-[#0f172a]/95 backdrop-blur-md border-b border-slate-800 text-white" id="nav-bar">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          {/* Logo */}
          <a href="#hero" className="flex items-center space-x-3 group" id="logo-link">
            <div className="w-10 h-10 rounded-xl bg-indigo-600 flex items-center justify-center font-display font-bold text-xl text-white shadow-lg shadow-indigo-500/30 group-hover:scale-105 transition-transform duration-300">
              P
            </div>
            <span className="font-display font-bold tracking-wider text-xl">Pixel Graft Studio</span>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-10 text-sm font-medium tracking-wide text-slate-300" id="desktop-nav-links">
            <a href="#hero" className="hover:text-white hover:translate-y-[-1px] transition-all duration-200">Home</a>
            <a href="#chi-siamo" className="hover:text-white hover:translate-y-[-1px] transition-all duration-200">Chi Siamo</a>
            <a href="#servizi" className="hover:text-white hover:translate-y-[-1px] transition-all duration-200">Servizi</a>
            <a href="#contatti" className="hover:text-white hover:translate-y-[-1px] transition-all duration-200">Contatti</a>
          </div>

          {/* Action CTA Button */}
          <div className="hidden md:block" id="desktop-cta-container">
            <a 
              href="#contatti" 
              className="inline-flex items-center px-6 py-3 rounded-xl bg-indigo-600 text-white font-semibold text-sm hover:bg-indigo-500 hover:shadow-lg hover:shadow-indigo-500/20 active:scale-95 transition-all duration-200 cursor-pointer"
              id="desktop-cta-btn"
            >
              Contattaci
            </a>
          </div>

          {/* Mobile Menu Icon */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-slate-300 hover:text-white focus:outline-none cursor-pointer"
            id="mobile-hamburger-btn"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
              className="md:hidden border-t border-slate-800 bg-[#0f172a] px-6 py-6 space-y-4"
              id="mobile-nav-drawer"
            >
              <a 
                href="#hero" 
                onClick={() => setMobileMenuOpen(false)}
                className="block text-slate-300 hover:text-white text-base font-medium py-2"
              >
                Home
              </a>
              <a 
                href="#chi-siamo" 
                onClick={() => setMobileMenuOpen(false)}
                className="block text-slate-300 hover:text-white text-base font-medium py-2"
              >
                Chi Siamo
              </a>
              <a 
                href="#servizi" 
                onClick={() => setMobileMenuOpen(false)}
                className="block text-slate-300 hover:text-white text-base font-medium py-2"
              >
                Servizi
              </a>
              <a 
                href="#contatti" 
                onClick={() => setMobileMenuOpen(false)}
                className="block text-slate-300 hover:text-white text-base font-medium py-2"
              >
                Contatti
              </a>
              <a 
                href="#contatti"
                onClick={() => setMobileMenuOpen(false)}
                className="block w-full text-center py-3 rounded-xl bg-indigo-600 text-white font-semibold text-sm cursor-pointer"
              >
                Contattaci
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* 1. HERO COMPONENT (ERO COMPONENT) */}
      <header id="hero" className="relative bg-[#0f172a] text-white overflow-hidden py-24 md:py-32 border-b border-slate-900">
        {/* Radial Ambient Glows & Grid SVG overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(79,70,229,0.15),transparent_60%)]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 grid md:grid-cols-12 gap-12 items-center">
          
          {/* Main Hero Copy Column */}
          <div className="md:col-span-7 space-y-8 text-center md:text-left" id="hero-left-column">
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold tracking-wider uppercase"
              id="hero-badge"
            >
              <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
              <span>Web Design Professionale a Modena</span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-none text-white"
              id="hero-heading"
            >
              Sviluppiamo la tua <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-indigo-200">Presenza Digitale</span> con Eleganza.
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-slate-300 text-lg md:text-xl font-light max-w-2xl leading-relaxed"
              id="hero-paragraph"
            >
              Creiamo siti web su misura e strategie SEO locali ad altissimo impatto per posizionare il tuo business al vertice. Design raffinato, codice pulito e orientamento costante al risultato.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4"
              id="hero-actions"
            >
              <a 
                href="#contatti" 
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-base shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 cursor-pointer"
                id="hero-cta-primary"
              >
                Inizia Ora
                <ArrowRight className="w-5 h-5 ml-2.5" />
              </a>
              <a 
                href="#servizi" 
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-base border border-slate-700 hover:border-slate-600 transition-all duration-200 cursor-pointer"
                id="hero-cta-secondary"
              >
                Scopri i Servizi
              </a>
            </motion.div>
          </div>

          {/* Premium Tech Mockup Column */}
          <div className="md:col-span-5 relative mt-8 md:mt-0 flex justify-center" id="hero-right-column">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative w-full max-w-sm"
            >
              {/* Radial gradient glow behind the mockup */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-600 opacity-30 blur-2xl"></div>

              {/* Minimal Web Mockup */}
              <div className="relative bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl p-4 overflow-hidden" id="hero-mockup-frame">
                {/* Browser bar */}
                <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
                  <div className="flex space-x-1.5">
                    <span className="w-3 h-3 rounded-full bg-rose-500 inline-block"></span>
                    <span className="w-3 h-3 rounded-full bg-amber-500 inline-block"></span>
                    <span className="w-3 h-3 rounded-full bg-emerald-500 inline-block"></span>
                  </div>
                  <span className="text-[10px] font-mono text-slate-500">pixelgraft.studio</span>
                  <span className="w-4 h-4 text-slate-500 flex items-center justify-center">
                    <ExternalLink className="w-3 h-3" />
                  </span>
                </div>

                {/* Simulated Content inside mockup */}
                <div className="space-y-4">
                  <div className="h-32 rounded-xl bg-indigo-950/50 border border-indigo-500/20 flex flex-col justify-end p-3 relative overflow-hidden">
                    <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-indigo-500/20 flex items-center justify-center text-indigo-400">
                      <Zap className="w-4 h-4" />
                    </div>
                    <span className="text-[10px] font-mono tracking-wider text-indigo-400 uppercase font-bold">Performance</span>
                    <span className="text-sm font-bold font-display text-white">Caricamento in 0.4s</span>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="p-3 rounded-xl bg-slate-800/50 border border-slate-700/50 space-y-1">
                      <span className="text-[10px] font-bold text-indigo-400">SEO Score</span>
                      <p className="text-lg font-bold text-white">100/100</p>
                    </div>
                    <div className="p-3 rounded-xl bg-slate-800/50 border border-slate-700/50 space-y-1">
                      <span className="text-[10px] font-bold text-indigo-400">Mobile Friendly</span>
                      <p className="text-lg font-bold text-white">Ottimo</p>
                    </div>
                  </div>

                  {/* Wireframe lines mimicking layout */}
                  <div className="space-y-2 pt-2 border-t border-slate-800/50">
                    <div className="h-2 w-1/3 rounded bg-slate-800"></div>
                    <div className="h-2 w-5/6 rounded bg-slate-800"></div>
                    <div className="h-2 w-2/3 rounded bg-slate-800"></div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </header>

       {/* 2. CHI SIAMO SECTION (Split Layout) */}
      <section id="chi-siamo" className="py-24 md:py-32 bg-white border-b border-slate-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* Text Content Column */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="md:col-span-7 space-y-6" 
            id="chi-siamo-text-column"
          >
            <span className="text-xs font-bold text-indigo-600 tracking-wider uppercase font-display">Chi Siamo</span>
            
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight">
              Esperienza Artigianale, <br />Standard Tecnologici Globali.
            </h2>
            
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-light">
              Siamo uno studio di ingegneria web e design fondato con l'obiettivo chiaro di digitalizzare le imprese locali di Modena e provincia con la stessa cura e qualità dedicate alle grandi multinazionali.
            </p>
            
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-light">
              Non utilizziamo template standard pronti all'uso o soluzioni pre-confezionate. Ogni riga di codice viene scritta su misura per massimizzare la velocità, la sicurezza e, soprattutto, l'efficacia nel convertire i visitatori in clienti reali per il tuo business.
            </p>

            {/* Micro Stats Counter row */}
            <div className="pt-4 border-t border-slate-100" id="chi-siamo-stats">
              <div className="space-y-1">
                <span className="text-3xl font-bold font-display text-indigo-600">100%</span>
                <p className="text-sm text-slate-500 font-medium">Siti Personalizzati</p>
              </div>
            </div>
          </motion.div>

          {/* Interactive Visual Card (Core Web Vitals & Premium standard) */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="md:col-span-5 flex justify-center" 
            id="chi-siamo-media-column"
          >
            <motion.div 
              whileHover={{ y: -6, scale: 1.02 }}
              className="w-full max-w-sm rounded-2xl bg-[#0f172a] text-slate-100 p-6 shadow-2xl relative border border-slate-800 flex flex-col justify-between overflow-hidden group transition-all duration-300"
              id="chi-siamo-performance-card"
            >
              <div className="absolute -top-12 -right-12 w-32 h-32 rounded-full bg-indigo-500/10 blur-2xl group-hover:bg-indigo-500/20 transition-all duration-300"></div>
              
              {/* Mock Browser Top bar */}
              <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-4">
                <div className="flex items-center space-x-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-500 inline-block"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500 inline-block"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block"></span>
                </div>
                <span className="text-[10px] font-mono text-slate-500 tracking-wider">PIXELGRAFT.DEV</span>
              </div>

              {/* Main Stats Section */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-slate-400">Core Web Vitals</span>
                  <span className="text-[10px] bg-emerald-500/10 text-emerald-400 px-2 py-0.5 rounded-full font-mono font-bold">Ottimo</span>
                </div>
                
                {/* Mini Lighthouse Gauges */}
                <div className="grid grid-cols-4 gap-2 py-2">
                  <div className="flex flex-col items-center space-y-1">
                    <motion.div 
                      initial={{ scale: 0.8, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 }}
                      className="w-10 h-10 rounded-full border-2 border-emerald-500 flex items-center justify-center text-[10px] font-bold text-emerald-400 bg-emerald-500/5"
                    >
                      99
                    </motion.div>
                    <span className="text-[9px] text-slate-400 font-mono">Perf</span>
                  </div>
                  <div className="flex flex-col items-center space-y-1">
                    <motion.div 
                      initial={{ scale: 0.8, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 }}
                      className="w-10 h-10 rounded-full border-2 border-emerald-500 flex items-center justify-center text-[10px] font-bold text-emerald-400 bg-emerald-500/5"
                    >
                      100
                    </motion.div>
                    <span className="text-[9px] text-slate-400 font-mono">Access</span>
                  </div>
                  <div className="flex flex-col items-center space-y-1">
                    <motion.div 
                      initial={{ scale: 0.8, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 }}
                      className="w-10 h-10 rounded-full border-2 border-emerald-500 flex items-center justify-center text-[10px] font-bold text-emerald-400 bg-emerald-500/5"
                    >
                      100
                    </motion.div>
                    <span className="text-[9px] text-slate-400 font-mono">Best P.</span>
                  </div>
                  <div className="flex flex-col items-center space-y-1">
                    <motion.div 
                      initial={{ scale: 0.8, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 }}
                      className="w-10 h-10 rounded-full border-2 border-emerald-500 flex items-center justify-center text-[10px] font-bold text-emerald-400 bg-emerald-500/5"
                    >
                      100
                    </motion.div>
                    <span className="text-[9px] text-slate-400 font-mono">SEO</span>
                  </div>
                </div>

                {/* Mini Code mockup block */}
                <div className="bg-slate-950 p-3 rounded-xl border border-slate-800/80 font-mono text-[10px] leading-relaxed text-slate-300">
                  <p className="text-indigo-400">&lt;<span className="text-rose-400">ModenaBusiness</span></p>
                  <p className="pl-3 text-slate-400">velocità="istante"</p>
                  <p className="pl-3 text-slate-400">seo="ottimizzato"</p>
                  <p className="pl-3 text-slate-400">codice="nazionale"</p>
                  <p className="text-indigo-400">/&gt;</p>
                </div>
              </div>

              {/* Footer Details */}
              <div className="mt-4 pt-4 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-500">
                <span className="font-mono">Pixel Graft Quality</span>
                <span className="text-indigo-400 font-semibold flex items-center space-x-1">
                  <span>Senza compromessi</span>
                  <span>→</span>
                </span>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </section>

      {/* 3. I NOSTRI SERVIZI SECTION (3-Column Grid) */}
      <section id="servizi" className="py-24 md:py-32 bg-slate-50 border-b border-slate-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 space-y-16">
          
          {/* Section title & subtitle block */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-4 max-w-3xl mx-auto" 
            id="servizi-header"
          >
            <span className="text-xs font-bold text-indigo-600 tracking-wider uppercase font-display">I Nostri Servizi</span>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
              Soluzioni Digitali ad Alte Prestazioni
            </h2>
            <p className="text-slate-500 text-base sm:text-lg font-light">
              Combiniamo design minimale e tecnologie moderne per costruire siti web e applicazioni veloci, sicure e ottimizzate per vendere.
            </p>
          </motion.div>

          {/* 3-Column Services Grid */}
          <div className="grid md:grid-cols-3 gap-8" id="servizi-grid">
            
            {/* Service card 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              whileHover={{ y: -8, scale: 1.01, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.05)" }}
              onClick={() => setActiveModal(1)}
              className="bg-white p-8 rounded-2xl border border-slate-100 hover:border-indigo-100 hover:shadow-xl transition-all duration-300 flex flex-col h-full group cursor-pointer"
              id="service-card-1"
            >
              <div className="w-12 h-12 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Code className="w-6 h-6" />
              </div>
              <h3 className="font-display font-bold text-slate-900 text-xl mb-3">Siti Web Custom</h3>
              <p className="text-slate-500 text-sm font-light leading-relaxed mb-6 flex-grow">
                Sviluppiamo siti vetrina e portali istituzionali interamente personalizzati su codice nativo, eliminando i pesanti plugin di WordPress per garantire prestazioni fulminee.
              </p>
              <div className="flex items-center text-sm font-bold text-indigo-600 mt-auto group-hover:translate-x-1.5 transition-transform duration-300">
                <span>Scopri di più</span>
                <ArrowRight className="w-4 h-4 ml-1.5" />
              </div>
            </motion.div>

            {/* Service card 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ y: -8, scale: 1.01, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.05)" }}
              onClick={() => setActiveModal(2)}
              className="bg-white p-8 rounded-2xl border border-slate-100 hover:border-indigo-100 hover:shadow-xl transition-all duration-300 flex flex-col h-full group cursor-pointer"
              id="service-card-2"
            >
              <div className="w-12 h-12 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <ShoppingBag className="w-6 h-6" />
              </div>
              <h3 className="font-display font-bold text-slate-900 text-xl mb-3">E-Commerce Professionali</h3>
              <p className="text-slate-500 text-sm font-light leading-relaxed mb-6 flex-grow">
                Realizziamo negozi online solidi, ultra-veloci e ottimizzati per massimizzare il tasso di conversione. Facili da gestire ed estremamente sicuri per i pagamenti.
              </p>
              <div className="flex items-center text-sm font-bold text-indigo-600 mt-auto group-hover:translate-x-1.5 transition-transform duration-300">
                <span>Scopri di più</span>
                <ArrowRight className="w-4 h-4 ml-1.5" />
              </div>
            </motion.div>

            {/* Service card 3 */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ y: -8, scale: 1.01, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.05)" }}
              onClick={() => setActiveModal(3)}
              className="bg-white p-8 rounded-2xl border border-slate-100 hover:border-indigo-100 hover:shadow-xl transition-all duration-300 flex flex-col h-full group cursor-pointer"
              id="service-card-3"
            >
              <div className="w-12 h-12 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Globe className="w-6 h-6" />
              </div>
              <h3 className="font-display font-bold text-slate-900 text-xl mb-3">Ottimizzazione Locale & SEO</h3>
              <p className="text-slate-500 text-sm font-light leading-relaxed mb-6 flex-grow">
                Posizioniamo il tuo sito internet al vertice delle ricerche a Modena. Ottimizziamo la tua scheda Google Business Profile per attirare una pioggia costante di contatti qualificati.
              </p>
              <div className="flex items-center text-sm font-bold text-indigo-600 mt-auto group-hover:translate-x-1.5 transition-transform duration-300">
                <span>Scopri di più</span>
                <ArrowRight className="w-4 h-4 ml-1.5" />
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 4. PREMIUM BANNER SECTION: PERCHÉ LAVORARE CON ME? (Closing Pitch) */}
      <section className="py-24 bg-gradient-to-b from-[#0f172a] to-slate-950 text-white relative overflow-hidden" id="perche-me">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(79,70,229,0.1),transparent_50%)]"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 space-y-16">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-4 max-w-2xl mx-auto" 
            id="perche-me-header"
          >
            <span className="text-xs font-bold text-indigo-400 tracking-wider uppercase font-display">Il Nostro Impegno</span>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
              Perché Lavorare Con Me?
            </h2>
            <p className="text-slate-400 text-base font-light">
              Azzeriamo le distanze e i rischi, offrendo garanzie reali su design, velocità e posizionamento sui motori di ricerca.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8" id="perche-me-grid">
            
            {/* Guarantee Card 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              whileHover={{ y: -6, borderColor: "rgba(99, 102, 241, 0.4)", backgroundColor: "rgba(15, 23, 42, 0.8)", boxShadow: "0 15px 30px -10px rgba(79, 70, 229, 0.15)" }}
              className="bg-slate-900/60 border border-slate-800 p-8 rounded-2xl flex flex-col space-y-4 transition-all duration-300"
              id="pitch-card-1"
            >
              <div className="w-10 h-10 rounded-lg bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 flex items-center justify-center font-bold">
                01
              </div>
              <h3 className="font-display font-bold text-white text-lg">Nessun Rischio Finanziario</h3>
              <p className="text-slate-400 text-sm font-light leading-relaxed">
                Sviluppiamo un prototipo iniziale di design completamente gratuito per farti toccare con mano la qualità del nostro lavoro. Paghi solamente a lavoro completato e approvato al 100%.
              </p>
            </motion.div>

            {/* Guarantee Card 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ y: -6, borderColor: "rgba(99, 102, 241, 0.4)", backgroundColor: "rgba(15, 23, 42, 0.8)", boxShadow: "0 15px 30px -10px rgba(79, 70, 229, 0.15)" }}
              className="bg-slate-900/60 border border-slate-800 p-8 rounded-2xl flex flex-col space-y-4 transition-all duration-300"
              id="pitch-card-2"
            >
              <div className="w-10 h-10 rounded-lg bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 flex items-center justify-center font-bold">
                02
              </div>
              <h3 className="font-display font-bold text-white text-lg">Design Mobile Premium</h3>
              <p className="text-slate-400 text-sm font-light leading-relaxed">
                Oltre l'80% del traffico locale avviene da smartphone. I nostri siti sono interamente progettati mobile-first per garantire prestazioni fulminee, interfacce intuitive e massima reattività.
              </p>
            </motion.div>

            {/* Guarantee Card 3 */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ y: -6, borderColor: "rgba(99, 102, 241, 0.4)", backgroundColor: "rgba(15, 23, 42, 0.8)", boxShadow: "0 15px 30px -10px rgba(79, 70, 229, 0.15)" }}
              className="bg-slate-900/60 border border-slate-800 p-8 rounded-2xl flex flex-col space-y-4 transition-all duration-300"
              id="pitch-card-3"
            >
              <div className="w-10 h-10 rounded-lg bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 flex items-center justify-center font-bold">
                03
              </div>
              <h3 className="font-display font-bold text-white text-lg">Ottimizzazione SEO Locale</h3>
              <p className="text-slate-400 text-sm font-light leading-relaxed">
                Strutturiamo i siti web secondo le più rigide linee guida di Google. Massimizziamo la tua visibilità locale a Modena, portando la tua azienda davanti ai clienti pronti ad acquistare.
              </p>
            </motion.div>

          </div>

        </div>
      </section>

      {/* 5. INFO E ORARI / CONTACT SECTION */}
      <section id="contatti" className="py-24 md:py-32 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-12 lg:gap-20 items-stretch">
          
          {/* Left Info Column */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="lg:col-span-5 bg-slate-50 border border-slate-100 rounded-3xl p-8 sm:p-10 flex flex-col justify-between space-y-12" 
            id="contatti-info-column"
          >
            
            <div className="space-y-6">
              <span className="text-xs font-bold text-indigo-600 tracking-wider uppercase font-display">Contatti</span>
              <h2 className="font-display text-3xl font-extrabold tracking-tight text-slate-900">Contatti & Disponibilità</h2>
              <p className="text-slate-500 text-base font-light">
                Fissa una videochiamata o una consulenza telefonica gratuita da remoto per parlare del tuo progetto digitale e definire i tuoi obiettivi commerciali.
              </p>
            </div>

            <div className="space-y-6">
              {/* Phone Row */}
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-xl bg-indigo-100 text-indigo-600 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Telefono</span>
                  <a href="tel:+393882596241" className="text-slate-800 hover:text-indigo-600 transition-colors font-semibold mt-0.5 block">
                    +39 388 2596241
                  </a>
                </div>
              </div>

              {/* Email / Gmail Row */}
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-xl bg-indigo-100 text-indigo-600 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Gmail</span>
                  <a href="mailto:pixelgraftstudio@gmail.com" className="text-slate-800 hover:text-indigo-600 transition-colors font-semibold mt-0.5 block break-all">
                    pixelgraftstudio@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-slate-200 text-xs text-slate-400">
              Pixel Graft Studio • P.IVA 01234567890
            </div>
          </motion.div>

          {/* Right Interactive Form Column */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="lg:col-span-7 bg-white border border-slate-100 rounded-3xl p-8 sm:p-10 shadow-sm flex flex-col justify-between" 
            id="contatti-form-column"
          >
            <div className="space-y-6 w-full">
              <h3 className="font-display font-bold text-slate-900 text-2xl">Invia un Messaggio</h3>
              <p className="text-slate-500 text-sm font-light">
                Compila il modulo sottostante per richiedere il tuo prototipo gratuito. Riceverai una risposta entro 24 ore lavorative.
              </p>

              {!formSubmitted ? (
                <form onSubmit={handleFormSubmit} className="space-y-4" id="contact-form">
                  {submitError && (
                    <div className="p-3 bg-red-50 border border-red-100 text-red-600 rounded-xl text-xs text-left font-light">
                      {submitError}
                    </div>
                  )}

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label htmlFor="name" className="text-xs font-semibold text-slate-600">Nome e Cognome</label>
                      <input 
                        type="text" 
                        id="name" 
                        required 
                        value={formState.name}
                        onChange={(e) => setFormState({...formState, name: e.target.value})}
                        disabled={isSubmitting}
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:border-indigo-600 focus:bg-white transition-all duration-200 disabled:opacity-50" 
                        placeholder="Mario Rossi" 
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label htmlFor="email" className="text-xs font-semibold text-slate-600">Email</label>
                      <input 
                        type="email" 
                        id="email" 
                        required 
                        value={formState.email}
                        onChange={(e) => setFormState({...formState, email: e.target.value})}
                        disabled={isSubmitting}
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:border-indigo-600 focus:bg-white transition-all duration-200 disabled:opacity-50" 
                        placeholder="mario@email.it" 
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="phone" className="text-xs font-semibold text-slate-600">Telefono</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      required 
                      value={formState.phone}
                      onChange={(e) => setFormState({...formState, phone: e.target.value})}
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:border-indigo-600 focus:bg-white transition-all duration-200 disabled:opacity-50" 
                      placeholder="+39 388 2596241" 
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="message" className="text-xs font-semibold text-slate-600">Dettagli del Progetto</label>
                    <textarea 
                      id="message" 
                      rows={4} 
                      required 
                      value={formState.message}
                      onChange={(e) => setFormState({...formState, message: e.target.value})}
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:border-indigo-600 focus:bg-white transition-all duration-200 disabled:opacity-50" 
                      placeholder="Descrivi brevemente la tua attività e le tue necessità..."
                    ></textarea>
                  </div>

                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full py-4 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-xl text-sm hover:shadow-lg hover:shadow-indigo-500/25 active:scale-[0.99] transition-all duration-200 cursor-pointer disabled:opacity-50 flex items-center justify-center space-x-2"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin inline-block"></span>
                        <span>Invio in corso...</span>
                      </>
                    ) : (
                      <span>Invia Richiesta Prototipo Gratuito</span>
                    )}
                  </button>
                </form>
              ) : (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-8 bg-emerald-50 border border-emerald-100 rounded-2xl text-center space-y-4"
                  id="form-success-box"
                >
                  <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-sm">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <div className="space-y-1.5">
                    <h4 className="font-bold text-emerald-800 text-lg">Grazie, {formState.name}!</h4>
                    <p className="text-sm text-emerald-600">
                      Il tuo messaggio è stato registrato nel nostro sistema. Il nostro team ti contatterà all'indirizzo <strong>{formState.email}</strong> entro 24 ore lavorative.
                    </p>
                  </div>
                  <button 
                    onClick={() => { setFormSubmitted(false); setFormState({ name: '', email: '', phone: '', message: '' }); }}
                    className="text-xs font-bold text-emerald-700 hover:text-emerald-800 underline cursor-pointer"
                  >
                    Invia un altro messaggio
                  </button>
                </motion.div>
              )}
            </div>
          </motion.div>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#0f172a] text-slate-400 py-12 border-t border-slate-900 text-center text-sm font-light mt-auto">
        <div className="max-w-7xl mx-auto px-6 space-y-4">
          <p>© 2026 Pixel Graft Studio. Tutti i diritti riservati.</p>
          <p className="text-slate-600 text-xs max-w-2xl mx-auto leading-relaxed">
            Realizzato con standard di programmazione avanzati per massimizzare la velocità d'esecuzione e il posizionamento locale a Modena.
          </p>
        </div>
      </footer>

      {/* EXPORT DI CODE MODAL (Slide-over / popup) */}
      <AnimatePresence>
        {showCodeModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4" id="modal-container">
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowCodeModal(false)}
              className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm"
              id="modal-backdrop"
            ></motion.div>

            {/* Modal Box */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              className="relative w-full max-w-4xl bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl flex flex-col h-[85vh]"
              id="modal-content"
            >
              {/* Header */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800">
                <div className="space-y-0.5">
                  <h3 className="font-display font-bold text-white text-lg">Codice Sorgente HTML del Template</h3>
                  <p className="text-xs text-slate-400">Template 100% autogestito, reattivo e integrato con Tailwind CSS v4 CDN.</p>
                </div>
                <button 
                  onClick={() => setShowCodeModal(false)}
                  className="p-1.5 rounded-lg hover:bg-slate-800 text-slate-400 hover:text-white transition-all cursor-pointer"
                  id="modal-close-btn"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Code display area */}
              <div className="flex-grow overflow-auto p-6 font-mono text-xs text-slate-300 bg-slate-950/50 leading-relaxed">
                <pre className="whitespace-pre">{rawHtmlTemplate}</pre>
              </div>

              {/* Footer action buttons */}
              <div className="flex items-center justify-between px-6 py-4 border-t border-slate-800 bg-slate-900">
                <p className="text-xs text-slate-400 hidden sm:block">Salva questo codice come <strong>index.html</strong> per utilizzarlo ovunque.</p>
                <div className="flex items-center space-x-3 w-full sm:w-auto justify-end">
                  <button 
                    onClick={copyToClipboard}
                    className="flex items-center justify-center space-x-2 px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-xs border border-slate-700 transition-all cursor-pointer w-full sm:w-auto"
                    id="modal-copy-btn"
                  >
                    {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4 text-indigo-400" />}
                    <span>{copied ? 'Copiato!' : 'Copia negli Appunti'}</span>
                  </button>
                  <button 
                    onClick={() => { downloadHtmlFile(); setShowCodeModal(false); }}
                    className="flex items-center justify-center space-x-2 px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs shadow-lg shadow-indigo-500/25 transition-all cursor-pointer w-full sm:w-auto"
                    id="modal-download-btn"
                  >
                    <Download className="w-4 h-4" />
                    <span>Scarica index.html</span>
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* DYNAMIC SERVICE DETAIL MODALS */}
      <AnimatePresence>
        {activeModal !== null && (() => {
          const modalData = serviceModals.find(m => m.id === activeModal);
          if (!modalData) return null;
          return (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4" id={`react-service-modal-${activeModal}`}>
              {/* Backdrop */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setActiveModal(null)}
                className="absolute inset-0 bg-slate-900/40 backdrop-blur-[5px]"
                id="service-modal-backdrop"
              ></motion.div>

              {/* Modal Box */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.95, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 15 }}
                className="relative bg-white rounded-[12px] shadow-2xl max-w-lg w-full p-8 border border-slate-100 relative z-10 text-left"
                id="service-modal-box"
              >
                {/* Close Button */}
                <button 
                  onClick={() => setActiveModal(null)}
                  className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 transition-colors p-1.5 rounded-lg hover:bg-slate-50 cursor-pointer border-0 bg-transparent"
                  id="service-modal-close"
                  aria-label="Chiudi"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Content */}
                <div className="space-y-6">
                  <div className="space-y-2 pr-6">
                    <h3 className="font-display font-extrabold text-slate-900 text-2xl tracking-tight">
                      {modalData.title}
                    </h3>
                    <p className="text-sm text-indigo-600 font-medium">
                      {modalData.subtitle}
                    </p>
                  </div>

                  <div className="border-t border-slate-100 pt-5 space-y-4">
                    {modalData.bullets.map((bullet, idx) => (
                      <div key={idx} className="flex items-start space-x-3">
                        <span className="text-[#4f46e5] font-bold mt-0.5 flex-shrink-0 text-lg">✓</span>
                        <div className="space-y-0.5">
                          <h4 className="font-semibold text-slate-900 text-sm">{bullet.title}</h4>
                          <p className="text-xs text-slate-500 font-light leading-relaxed">{bullet.text}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="pt-2">
                    <button
                      onClick={() => {
                        setActiveModal(null);
                        const contactSection = document.getElementById("contatti");
                        if (contactSection) {
                          contactSection.scrollIntoView({ behavior: "smooth" });
                        }
                      }}
                      className="w-full py-3 bg-[#4f46e5] hover:bg-indigo-500 text-white font-bold rounded-xl text-sm transition-all duration-200 cursor-pointer text-center block"
                    >
                      Richiedi Prototipo Gratuito
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>
          );
        })()}
      </AnimatePresence>

    </div>
  );
}

const serviceModals = [
  {
    id: 1,
    title: "Sviluppo Siti Web Su Misura",
    subtitle: "Una presenza online unica, senza compromessi.",
    bullets: [
      {
        title: "Codice Nativo Pulito",
        text: "Nessun costruttore pesante come WordPress o Elementor. Il sito carica istantaneamente."
      },
      {
        title: "Design Esclusivo",
        text: "Creato da zero per riflettere l'identità e i valori del tuo brand."
      },
      {
        title: "100% Mobile Responsive",
        text: "Navigazione perfetta e fluida su qualsiasi smartphone o tablet."
      },
      {
        title: "Sicurezza Avanzata",
        text: "Architettura protetta contro attacchi esterni e certificato SSL incluso."
      }
    ]
  },
  {
    id: 2,
    title: "Soluzioni E-Commerce ad Alte Prestazioni",
    subtitle: "Trasforma i visitatori in clienti paganti.",
    bullets: [
      {
        title: "Carrello e Checkout Rapidi",
        text: "Processo di acquisto ottimizzato in pochi passaggi per ridurre l'abbandono."
      },
      {
        title: "Pagamenti Sicuri",
        text: "Integrazione nativa con Stripe, PayPal e carte di credito con crittografia avanzata."
      },
      {
        title: "Pannello di Controllo Intuitivo",
        text: "Gestione autonoma e semplicissima di prodotti, scorte e ordini."
      },
      {
        title: "Velocità Ottimizzata",
        text: "Caricamento ultra-rapido del catalogo per massimizzare le vendite."
      }
    ]
  },
  {
    id: 3,
    title: "Local SEO & Posizionamento Google",
    subtitle: "Fatti trovare dai clienti che cercano i tuoi prodotti a Modena.",
    bullets: [
      {
        title: "Dominio delle Ricerche Locali",
        text: "Ottimizzazione mirata per apparire tra i primi risultati di ricerca nella tua zona."
      },
      {
        title: "Google Maps Specialist",
        text: "Configurazione e posizionamento strategico sulla mappa per attirare clienti fisici in negozio."
      },
      {
        title: "Analisi delle Parole Chiave",
        text: "Studio approfondito dei termini più cercati dai tuoi potenziali clienti."
      },
      {
        title: "Integrazione Google Business Profile",
        text: "Ottimizzazione completa della scheda per recensioni e contatti diretti."
      }
    ]
  }
];
