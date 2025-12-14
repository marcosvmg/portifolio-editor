import React from 'react';

export default function Footer() {
    return (
        <footer id="contato" className="py-12 border-t border-white/50 bg-white/40 backdrop-blur-sm">
            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="flex flex-col md:flex-row items-center gap-4">
                    <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-lilac rounded-full" />
                        <span className="font-bold text-lg text-charcoal">SEU NOME.EDIT</span>
                    </div>
                    <a href="mailto:mrsaocwork@gmail.com" className="text-sm text-muted hover:text-charcoal transition-colors">
                        mrsaocwork@gmail.com
                    </a>
                </div>

                <div className="flex gap-8 text-muted text-sm font-medium">
                    <a href="#" className="hover:text-lilacDark transition-colors">Instagram</a>
                    <a href="https://wa.me/5513996988700" target="_blank" rel="noopener noreferrer" className="hover:text-lilacDark transition-colors">WhatsApp</a>
                </div>

                <p className="text-xs text-muted">© 2025. Todos os direitos reservados.</p>
            </div>
        </footer>
    );
}