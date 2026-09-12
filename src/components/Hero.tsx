import React from 'react';
import { MessageCircle, Star, Truck, ShieldCheck, Heart, ArrowRight, Sparkles } from 'lucide-react';
import { BUSINESS_INFO, getWhatsAppLink } from '../data/agropetData';

export const Hero: React.FC = () => {
  return (
    <section id="inicio" className="relative pt-6 sm:pt-10 pb-12 sm:pb-16 overflow-hidden">
      {/* Subtle organic background glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#234E26]/5 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-[#E5A93C]/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Copy & CTAs */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left">
            
            {/* Editorial Serif Heading matching reference style */}
            <h1 className="font-display text-4xl sm:text-5xl lg:text-[54px] font-bold text-[#19381C] tracking-tight leading-[1.12] mb-5">
              Tudo para o seu Pet e Criação com Amor e Cuidado
            </h1>

            {/* Persuasive subtitle */}
            <p className="text-base sm:text-lg text-[#4A5D4F] leading-relaxed mb-7 max-w-2xl">
              Rações selecionadas com entrega ágil no seu portão, farmácia veterinária com orientação séria, 
              banho & tosa com respeito absoluto e produtos para aves e agropecuária no Jardim Petrópolis.
            </p>

            {/* 3 Key Trust Pillars above the fold */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8 pt-1 border-t border-[#E8E2D5]">
              <div className="flex items-center gap-2.5 text-xs sm:text-sm font-medium text-[#293B2F] pt-2">
                <div className="w-7 h-7 rounded-full bg-[#E8EFE9] flex items-center justify-center text-[#234E26] shrink-0">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <span>Qualidade & Procedência</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm font-medium text-[#293B2F] pt-2">
                <div className="w-7 h-7 rounded-full bg-[#E8EFE9] flex items-center justify-center text-[#234E26] shrink-0">
                  <Truck className="w-4 h-4" />
                </div>
                <span>Entrega Ágil em Arapongas</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm font-medium text-[#293B2F] pt-2">
                <div className="w-7 h-7 rounded-full bg-[#FEF3C7] flex items-center justify-center text-[#D97706] shrink-0">
                  <Star className="w-4 h-4 fill-[#F59E0B] text-[#F59E0B]" />
                </div>
                <span>Nota Máxima 5.0 (Google)</span>
              </div>
            </div>

            {/* High Conversion Action Buttons (WhatsApp Above the Fold) */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <a
                href={getWhatsAppLink('Olá! Vim pelo site da Sabiá Agropet e gostaria de tirar uma dúvida ou fazer um pedido.')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-[#234E26] hover:bg-[#1A3B1D] text-white px-7 py-4 rounded-full font-bold text-base shadow-lg shadow-[#234E26]/25 hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 text-center"
                id="hero-whatsapp-cta"
              >
                <div className="w-6 h-6 rounded-full bg-[#2E6632] flex items-center justify-center">
                  <MessageCircle className="w-4 h-4 text-[#4ADE80]" />
                </div>
                <span>Pedir pelo WhatsApp</span>
                <ArrowRight className="w-4 h-4 opacity-80" />
              </a>

              <a
                href="#produtos-servicos"
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-[#F3EFE6] text-[#234E26] border border-[#DDD5C5] px-6 py-4 rounded-full font-semibold text-base transition-colors text-center"
                id="hero-services-cta"
              >
                <span>Ver Serviços & Produtos</span>
              </a>
            </div>

            {/* Quick reassurance */}
            <p className="text-xs text-[#6B7E70] mt-3.5 flex items-center gap-1.5">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-500" />
              Atendimento ágil pelo WhatsApp: <strong>{BUSINESS_INFO.phoneDisplay}</strong>
            </p>

          </div>

          {/* Right Column: Clean, Elegant Visual Presentation */}
          <div className="lg:col-span-5 relative mt-4 lg:mt-0">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Pet Image Frame */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-gradient-to-b from-[#EAE4D7] to-[#DDD4C1] aspect-[4/5] sm:aspect-[4/4.8]">
                <img
                  src="https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=1000&q=85"
                  alt="Cão saudável e bem cuidado na Sabiá Agropet em Arapongas"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center transform hover:scale-102 transition-transform duration-500"
                />
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
