'use client';

import React, { useState } from 'react';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import Footer from './components/Footer';

// --- TIPAGEM ---
type Category = 'all' | 'social' | 'comercial' | 'eventos';

interface Project {
    id: number;
    title: string;
    category: Category;
    description: string;
    placeholderColor: string;
}

// --- DADOS ---
const projects: Project[] = [
    { id: 1, title: 'Campanha Nike Air', category: 'comercial', description: 'Edição dinâmica 4K', placeholderColor: 'bg-blue-900' },
    { id: 2, title: 'Reels Viral Modas', category: 'social', description: 'Cortes rápidos p/ TikTok', placeholderColor: 'bg-pink-900' },
    { id: 3, title: 'Casamento Ana & Leo', category: 'eventos', description: 'Storytelling emotivo', placeholderColor: 'bg-purple-900' },
    { id: 4, title: 'Menu Degustação', category: 'comercial', description: 'Color grading food porn', placeholderColor: 'bg-yellow-900' },
    { id: 5, title: 'Vlog Viagem Japão', category: 'social', description: 'Transições criativas', placeholderColor: 'bg-red-900' },
    { id: 6, title: 'Evento Tech 2025', category: 'eventos', description: 'Aftermovie oficial', placeholderColor: 'bg-indigo-900' },
];

export default function Home() {
    const [activeFilter, setActiveFilter] = useState<Category>('all');

    // --- LÓGICA DE WHATSAPP ---
    const myNumber = "5513996988700";

    const createWhatsAppLink = (message: string) => {
        return `https://wa.me/${myNumber}?text=${encodeURIComponent(message)}`;
    };

    const filteredProjects = projects.filter(
        (project) => activeFilter === 'all' || project.category === activeFilter
    );

    const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
        const video = e.currentTarget.querySelector('video');
        if (video) video.play().catch(() => {});
    };

    const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
        const video = e.currentTarget.querySelector('video');
        if (video) {
            video.pause();
            video.currentTime = 0;
        }
    };

    return (
        <main className="relative min-h-screen font-sans selection:bg-lilac selection:text-charcoal">

            {/* BACKGROUND LIQUID */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
                <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-lilac/60 rounded-full blur-[100px] animate-morph animate-float opacity-70" />
                <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-[#E0D4FC]/70 rounded-full blur-[80px] animate-morph opacity-60 delay-1000" />
            </div>

            <NavBar />

            <Hero />

            {/* --- PORTFOLIO SECTION --- */}
            <section id="portfolio" className="py-24 relative z-10">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16 space-y-4">
                        <h2 className="text-4xl font-extrabold text-charcoal">Portfólio Selecionado</h2>
                        <p className="text-muted">Navegue pelas categorias.</p>

                        {/* Filtros */}
                        <div className="flex flex-wrap justify-center gap-3 pt-4">
                            {(['all', 'social', 'comercial', 'eventos'] as Category[]).map((cat) => (
                                <button
                                    key={cat}
                                    onClick={() => setActiveFilter(cat)}
                                    className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 capitalize cursor-pointer
                    ${activeFilter === cat
                                        ? 'bg-lilac text-charcoal shadow-lg ring-2 ring-lilac/50'
                                        : 'bg-white/50 text-muted hover:bg-white hover:text-lilacDark border border-transparent hover:border-lilac/30'
                                    }`}
                                >
                                    {cat === 'all' ? 'Todos' : cat}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredProjects.map((project) => (
                            <div
                                key={project.id}
                                className="glass-card group relative h-[450px] rounded-3xl overflow-hidden cursor-pointer transform hover:-translate-y-2 transition-all duration-500"
                                onMouseEnter={handleMouseEnter}
                                onMouseLeave={handleMouseLeave}
                            >
                                <div className={`absolute inset-0 ${project.placeholderColor} transition-transform duration-700 group-hover:scale-105`} />
                                <video
                                    className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                    loop muted playsInline
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                                <div className="absolute bottom-0 left-0 w-full p-8 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <span className="inline-block px-3 py-1 mb-3 text-xs font-bold text-charcoal bg-lilac rounded-lg uppercase tracking-wider shadow-md">
                    {project.category}
                  </span>
                                    <h3 className="text-2xl font-bold text-white mb-2 leading-tight">{project.title}</h3>
                                    <p className="text-gray-200 text-sm opacity-0 group-hover:opacity-100 transition-opacity delay-100 font-medium">
                                        {project.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- SERVICES SECTION (LINKS REAIS) --- */}
            <section id="servicos" className="py-24 bg-white/20 backdrop-blur-sm relative z-10">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-extrabold text-charcoal">Soluções Visuais</h2>
                        <p className="text-muted mt-4">Escolha o pacote ideal e peça um orçamento direto no WhatsApp.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Card 1: Conteúdo Viral */}
                        <div className="glass-card p-10 rounded-[32px] hover:border-lilac transition-colors flex flex-col">
                            <div className="w-14 h-14 bg-lilac/20 rounded-2xl flex items-center justify-center text-lilacDark mb-6">
                                <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                            </div>
                            <h3 className="text-xl font-bold text-charcoal mb-3">Conteúdo Viral</h3>
                            <p className="text-muted text-sm leading-relaxed mb-8 flex-grow">
                                Pacotes de Reels/TikToks focados em retenção. Legendas dinâmicas, hooks visuais e entrega rápida.
                            </p>
                            <a
                                href={createWhatsAppLink("Olá! Tenho interesse no pacote de Conteúdo Viral (Reels/TikToks).")}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-lilacDark font-bold text-sm hover:underline cursor-pointer flex items-center gap-2"
                            >
                                Orçar via WhatsApp
                                <span>→</span>
                            </a>
                        </div>

                        {/* Card 2: Comercial (Destaque) */}
                        <div className="glass-card p-10 rounded-[32px] border-lilac relative transform md:-translate-y-4 shadow-2xl shadow-lilac/10 flex flex-col">
                            <div className="absolute top-0 right-0 bg-lilac text-charcoal text-xs font-bold px-4 py-2 rounded-bl-2xl rounded-tr-2xl">MAIS POPULAR</div>
                            <div className="w-14 h-14 bg-lilac rounded-2xl flex items-center justify-center text-charcoal mb-6">
                                <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                            </div>
                            <h3 className="text-xl font-bold text-charcoal mb-3">Comercial & Ads</h3>
                            <p className="text-muted text-sm leading-relaxed mb-8 flex-grow">
                                Vídeos de alta conversão para tráfego pago (VSL) e institucionais. Roteiro estratégico incluso.
                            </p>
                            <a
                                href={createWhatsAppLink("Olá! Gostaria de um orçamento para Vídeo Comercial/Ads.")}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full py-3 rounded-xl bg-charcoal text-white font-bold text-sm hover:bg-black transition-colors cursor-pointer text-center"
                            >
                                Solicitar Proposta
                            </a>
                        </div>

                        {/* Card 3: Eventos */}
                        <div className="glass-card p-10 rounded-[32px] hover:border-lilac transition-colors flex flex-col">
                            <div className="w-14 h-14 bg-lilac/20 rounded-2xl flex items-center justify-center text-lilacDark mb-6">
                                <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>
                            </div>
                            <h3 className="text-xl font-bold text-charcoal mb-3">Eventos & Social</h3>
                            <p className="text-muted text-sm leading-relaxed mb-8 flex-grow">
                                Cobertura cinematográfica de eventos, casamentos ou lançamentos. Foco na emoção.
                            </p>
                            <a
                                href={createWhatsAppLink("Olá! Gostaria de saber sobre edição para Eventos.")}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-lilacDark font-bold text-sm hover:underline cursor-pointer flex items-center gap-2"
                            >
                                Orçar via WhatsApp
                                <span>→</span>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />

        </main>
    );
}