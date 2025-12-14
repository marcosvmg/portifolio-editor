'use client';

import React, { useState } from 'react';

export default function NavBar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // Link do WhatsApp com mensagem geral
    const whatsappLink = "https://wa.me/5513996988700?text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20gostaria%20de%20um%20or%C3%A7amento.";

    return (
        <nav className="fixed w-full z-50 top-0 backdrop-blur-md bg-white/30 border-b border-white/40 transition-all">
            <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
                {/* Logo */}
                <div className="flex items-center gap-2 cursor-pointer">
                    <div className="w-3 h-3 bg-lilac rounded-full animate-pulse" />
                    <span className="font-bold text-xl text-charcoal tracking-tight">
            SEU NOME<span className="font-light text-muted">.EDIT</span>
          </span>
                </div>

                {/* Menu Desktop */}
                <div className="hidden md:flex items-center gap-8">
                    <a href="#portfolio" className="text-sm font-medium text-charcoal hover:text-lilacDark transition-colors">Portfólio</a>
                    <a href="#servicos" className="text-sm font-medium text-charcoal hover:text-lilacDark transition-colors">Serviços</a>
                    <a
                        href={whatsappLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary text-sm py-2 px-5 shadow-none hover:shadow-lg"
                    >
                        Solicitar Orçamento
                    </a>
                </div>

                {/* Menu Mobile Button */}
                <div className="md:hidden">
                    <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-charcoal font-bold text-xl p-2">
                        ☰
                    </button>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            {isMobileMenuOpen && (
                <div className="md:hidden absolute top-20 left-0 w-full bg-cream/95 backdrop-blur-xl border-b border-white/40 p-6 flex flex-col gap-4 shadow-xl">
                    <a href="#portfolio" className="text-lg font-medium text-charcoal" onClick={() => setIsMobileMenuOpen(false)}>Portfólio</a>
                    <a href="#servicos" className="text-lg font-medium text-charcoal" onClick={() => setIsMobileMenuOpen(false)}>Serviços</a>
                    <a href={whatsappLink} target="_blank" className="btn-primary w-full">Solicitar Orçamento</a>
                </div>
            )}
        </nav>
    );
}