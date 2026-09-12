import React from 'react';
import { MessageCircle, ArrowRight, ShieldCheck, Heart, Sparkles, Star } from 'lucide-react';
import { BUSINESS_INFO, getWhatsAppLink } from '../data/agropetData';

export const FinalCta: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-[#FBF9F5] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Card Container in Deep Forest Green */}
        <div className="bg-[#1C3E21] rounded-3xl sm:rounded-[36px] p-8 sm:p-14 lg:p-16 text-white relative overflow-hidden shadow-2xl border border-[#2A592F]">
          
          {/* Decorative background glows */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#2E6632]/50 rounded-full blur-3xl pointer-events-none -mr-32 -mt-32" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#E5A93C]/15 rounded-full blur-3xl pointer-events-none -ml-20 -mb-20" />

          <div className="relative z-10 max-w-3xl mx-auto text-center">
            
            {/* Heading */}
            <h2 className="font-display text-3xl sm:text-5xl lg:text-5xl font-bold tracking-tight mb-6 leading-tight">
              Seu pet merece o melhor cuidado de Arapongas.{' '}
              <span className="text-[#E5A93C]">Fale conosco agora!</span>
            </h2>

            {/* Persuasive copy */}
            <p className="text-base sm:text-lg text-[#D1E2D4] leading-relaxed mb-9 max-w-2xl mx-auto">
              Peça sua ração pelo WhatsApp, agende o banho e tosa ou consulte disponibilidade de medicamentos 
              direto com quem realmente entende e ama animais.
            </p>

            {/* WhatsApp Big CTA Button */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
              <a
                href={getWhatsAppLink('Olá! Vim pelo site da Sabiá Agropet e gostaria de solicitar um atendimento.')}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#E5A93C] hover:bg-[#D97706] text-[#19381C] px-9 py-5 rounded-full font-black text-lg shadow-xl hover:shadow-2xl transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0"
                id="final-cta-whatsapp-btn"
              >
                <div className="w-8 h-8 rounded-full bg-[#19381C] text-white flex items-center justify-center shrink-0">
                  <MessageCircle className="w-5 h-5 text-[#4ADE80]" />
                </div>
                <span>Conversar no WhatsApp</span>
                <ArrowRight className="w-5 h-5 text-[#19381C]" />
              </a>

              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-transparent hover:bg-white/10 text-white border border-white/30 px-7 py-5 rounded-full font-bold text-base transition-colors"
                id="final-cta-phone-btn"
              >
                <span>Ligar: {BUSINESS_INFO.phoneDisplay}</span>
              </a>
            </div>

            {/* Bottom trust assurances */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8 border-t border-[#2A592F]/80 text-xs text-[#BED8C3]">
              <div className="flex items-center justify-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#4ADE80]" />
                <span>Rações com procedência garantida</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <Star className="w-4 h-4 fill-[#F59E0B] text-[#F59E0B]" />
                <span>Nota 5.0 no Google (9 avaliações)</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <Heart className="w-4 h-4 text-[#F87171]" />
                <span>Atendimento humanizado e sem estresse</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
