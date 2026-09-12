import React from 'react';
import { ShieldCheck, Heart, Truck, Headphones, MapPin, Phone, MessageCircle, Star, Feather } from 'lucide-react';
import { BUSINESS_INFO, getWhatsAppLink } from '../data/agropetData';

export const TrustFooter: React.FC = () => {
  return (
    <footer className="bg-[#19381C] text-[#D1E2D4] border-t border-[#234E26]">
      
      {/* 4 Guarantees Dark Green Banner (Directly styled after image.png bottom bar!) */}
      <div className="border-b border-[#244C27] bg-[#142E17] py-6 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-xs sm:text-sm">
          
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#234E26] text-[#4ADE80] flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <p className="font-bold text-white leading-tight">100% Procedência</p>
              <p className="text-[11px] text-[#A5C2A9]">Marcas originais e seguras</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#234E26] text-[#E5A93C] flex items-center justify-center shrink-0">
              <Star className="w-5 h-5 fill-[#E5A93C]" />
            </div>
            <div>
              <p className="font-bold text-white leading-tight">Nota 5.0 no Google</p>
              <p className="text-[11px] text-[#A5C2A9]">{BUSINESS_INFO.googleReviewCount} avaliações reais</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#234E26] text-[#4ADE80] flex items-center justify-center shrink-0">
              <Truck className="w-5 h-5" />
            </div>
            <div>
              <p className="font-bold text-white leading-tight">Entrega em Arapongas</p>
              <p className="text-[11px] text-[#A5C2A9]">Comodidade no seu portão</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#234E26] text-[#F87171] flex items-center justify-center shrink-0">
              <Heart className="w-5 h-5" />
            </div>
            <div>
              <p className="font-bold text-white leading-tight">Cuidado com Amor</p>
              <p className="text-[11px] text-[#A5C2A9]">Seu pet em boas mãos</p>
            </div>
          </div>

        </div>
      </div>

      {/* Main Footer Links & Info */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Brand Info */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-[#2E6632] flex items-center justify-center text-white">
                <Feather className="w-5 h-5 text-[#E5A93C]" />
              </div>
              <div className="flex items-center gap-1.5">
                <span className="font-display font-bold text-2xl text-white">Sabiá</span>
                <span className="font-sans font-extrabold text-xs uppercase tracking-wider text-[#19381C] bg-[#E5A93C] px-2 py-0.5 rounded-md">
                  Agropet
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#A8BEAD] leading-relaxed mb-6">
              Pet shop, farmácia veterinária, rações premium e super premium, banho & tosa e produtos para criação agropecuária e aves em Arapongas - PR.
            </p>

            <div className="inline-flex items-center gap-2 bg-[#234E26] px-3.5 py-2 rounded-xl text-xs font-semibold text-white">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Atendendo Arapongas e Região</span>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="lg:col-span-3">
            <h4 className="font-bold text-white text-sm uppercase tracking-wider mb-4">
              Navegação Rápida
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-[#A8BEAD]">
              <li>
                <a href="#inicio" className="hover:text-white transition-colors">Início</a>
              </li>
              <li>
                <a href="#categorias" className="hover:text-white transition-colors">Categorias de Produtos</a>
              </li>
              <li>
                <a href="#produtos-servicos" className="hover:text-white transition-colors">Serviços & Destaques</a>
              </li>
              <li>
                <a href="#diferenciais" className="hover:text-white transition-colors">Por que nos Escolher</a>
              </li>
              <li>
                <a href="#avaliacoes" className="hover:text-white transition-colors">Avaliações 5.0 Google</a>
              </li>
              <li>
                <a href="#localizacao" className="hover:text-white transition-colors">Localização & Mapa</a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">Perguntas Frequentes</a>
              </li>
            </ul>
          </div>

          {/* Business & Location Details */}
          <div className="lg:col-span-5">
            <h4 className="font-bold text-white text-sm uppercase tracking-wider mb-4">
              Informações de Contato
            </h4>
            
            <div className="space-y-3.5 text-xs sm:text-sm text-[#A8BEAD]">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#E5A93C] shrink-0 mt-0.5" />
                <span>{BUSINESS_INFO.fullAddress}</span>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#E5A93C] shrink-0" />
                <a
                  href={`tel:${BUSINESS_INFO.phone}`}
                  className="hover:text-white transition-colors font-mono font-bold text-white"
                >
                  {BUSINESS_INFO.phoneDisplay}
                </a>
              </div>

              <div className="flex items-center gap-3">
                <MessageCircle className="w-4 h-4 text-[#4ADE80] shrink-0" />
                <a
                  href={getWhatsAppLink('Olá! Vim pelo site da Sabiá Agropet.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#4ADE80] hover:underline font-semibold"
                >
                  Falar no WhatsApp: {BUSINESS_INFO.phoneDisplay}
                </a>
              </div>

              <div className="pt-2 border-t border-[#234E26] text-xs text-[#89A38F]">
                <p className="font-semibold text-white mb-1">Horário de Funcionamento:</p>
                <p>{BUSINESS_INFO.openingHours.weekdays}</p>
                <p>{BUSINESS_INFO.openingHours.saturday}</p>
              </div>
            </div>
          </div>

        </div>

        {/* Copyright & Disclaimer */}
        <div className="mt-12 pt-8 border-t border-[#234E26] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#7B9581]">
          <p>© {new Date().getFullYear()} Sabiá Agropet. Todos os direitos reservados. Arapongas - PR.</p>
          <p className="text-[11px]">
            Dedicação e respeito à saúde e nutrição dos animais.
          </p>
        </div>

      </div>
    </footer>
  );
};
