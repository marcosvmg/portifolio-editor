import React from 'react';

export default function Hero() {
    return (
        <section className="relative pt-40 pb-20 px-6 z-10">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                {/* Texto Hero */}
                <div className="text-center lg:text-left space-y-8">
                    <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-lilac/50 bg-white/40 backdrop-blur-sm text-sm font-medium text-lilacDark animate-float">
                        <span className="w-2 h-2 rounded-full bg-green-400 mr-2 animate-pulse" />
                        Agenda Aberta para Freelance
                    </div>

                    <h1 className="text-5xl lg:text-7xl font-extrabold text-charcoal leading-[1.1]">
                        Edição que <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-lilacDark to-lilac">
              Vende & Converte.
            </span>
                    </h1>

                    <p className="text-lg text-muted max-w-lg mx-auto lg:mx-0">
                        Transformo gravações brutas em narrativas visuais estratégicas. Especialista em retenção e ritmo para marcas e creators.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
                        <a href="#portfolio" className="btn-primary text-center">
                            Ver Projetos
                        </a>
                        <a
                            href="https://wa.me/5513996988700?text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20gostaria%20de%20conversar."
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-6 py-3 rounded-xl border border-charcoal/10 bg-white/30 backdrop-blur-sm text-charcoal font-medium hover:bg-white/60 transition-all text-center cursor-pointer"
                        >
                            Falar no WhatsApp
                        </a>
                    </div>
                </div>

                {/* Visual Hero (Mockup 3D Glass) */}
                <div className="relative h-[600px] flex items-center justify-center lg:justify-end">
                    {/* O Celular */}
                    <div className="relative w-[300px] h-[580px] bg-black rounded-[40px] border-[8px] border-white shadow-2xl overflow-hidden transform -rotate-6 hover:rotate-0 transition-all duration-500 group">
                        {/* Simulação de Showreel (Fundo Escuro) */}
                        <div className="absolute inset-0 bg-charcoal flex flex-col items-center justify-center text-white/50">
                            <span className="text-4xl animate-pulse">▶</span>
                            <p className="mt-4 text-sm font-mono tracking-widest">SHOWREEL.MP4</p>
                        </div>

                        {/* UI Overlay no Celular */}
                        <div className="absolute bottom-0 w-full p-6 bg-gradient-to-t from-black/90 to-transparent z-20">
                            <p className="text-white font-bold text-lg">Showreel 2025</p>
                            <p className="text-white/70 text-sm">Edição • Color • Sound</p>
                        </div>
                    </div>

                    {/* Card Flutuante de Estatística */}
                    <div className="absolute top-20 right-0 lg:right-10 glass-card p-4 rounded-2xl animate-float shadow-xl z-20" style={{ animationDelay: '1s' }}>
                        <div className="flex items-center gap-3">
                            <div className="bg-green-100 p-2 rounded-full text-green-600">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>
                            </div>
                            <div>
                                <p className="text-xs text-muted font-bold uppercase">Retenção</p>
                                <p className="text-lg font-bold text-charcoal">+45%</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}