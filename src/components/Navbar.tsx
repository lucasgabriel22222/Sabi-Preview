import React, { useState } from 'react';
import { Phone, MessageCircle, Clock, MapPin, Menu, X, Star, Feather } from 'lucide-react';
import { BUSINESS_INFO, getWhatsAppLink } from '../data/agropetData';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-[#FBF9F5]/95 backdrop-blur-md border-b border-[#E8E2D5] transition-all">
      {/* Top micro-bar */}
      <div className="bg-[#234E26] text-[#F4EFE6] text-xs py-1.5 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 font-medium">
              <MapPin className="w-3.5 h-3.5 text-[#E5A93C]" />
              {BUSINESS_INFO.address}, Arapongas - PR
            </span>
            <span className="hidden md:inline-flex items-center gap-1.5 opacity-90">
              <Clock className="w-3.5 h-3.5 text-[#E5A93C]" />
              {BUSINESS_INFO.openingHours.weekdays}
            </span>
          </div>

          <div className="flex items-center gap-3 ml-auto">
            <span className="inline-flex items-center gap-1 bg-[#2E6632] px-2.5 py-0.5 rounded-full text-[11px] font-semibold text-[#FEF3C7]">
              <Star className="w-3 h-3 fill-[#F59E0B] text-[#F59E0B]" />
              <span>{BUSINESS_INFO.googleRating.toFixed(1)} no Google ({BUSINESS_INFO.googleReviewCount} avaliações)</span>
            </span>
            <a
              href={getWhatsAppLink('Olá! Vim pelo site da Sabiá Agropet e gostaria de tirar uma dúvida.')}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#E5A93C] transition-colors font-medium flex items-center gap-1"
              id="top-bar-whatsapp-link"
            >
              <Phone className="w-3 h-3" />
              {BUSINESS_INFO.phoneDisplay}
            </a>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
        <div className="flex items-center justify-between gap-4">
          {/* Brand Logo */}
          <a href="#" className="flex items-center gap-3 group" id="brand-logo-link">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-[#234E26] flex items-center justify-center text-white shadow-sm shadow-[#234E26]/20 transition-transform group-hover:scale-105">
              <Feather className="w-5 h-5 sm:w-6 sm:h-6 text-[#E5A93C]" />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-display font-bold text-2xl sm:text-2xl tracking-tight text-[#1E3F2B] leading-none">
                  Sabiá
                </span>
                <span className="font-sans font-extrabold text-sm uppercase tracking-wider text-[#E5A93C] bg-[#234E26] text-white px-2 py-0.5 rounded-md leading-none">
                  Agropet
                </span>
              </div>
              <span className="text-[11px] text-[#5C6F62] font-medium tracking-tight mt-0.5">
                Pet Shop & Agro • Arapongas - PR
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-7 text-sm font-medium text-[#38493D]">
            <a href="#inicio" className="hover:text-[#234E26] transition-colors">
              Início
            </a>
            <a href="#categorias" className="hover:text-[#234E26] transition-colors">
              Categorias
            </a>
            <a href="#produtos-servicos" className="hover:text-[#234E26] transition-colors">
              Serviços & Produtos
            </a>
            <a href="#diferenciais" className="hover:text-[#234E26] transition-colors">
              Diferenciais
            </a>
            <a href="#avaliacoes" className="hover:text-[#234E26] transition-colors">
              Avaliações 5.0
            </a>
            <a href="#localizacao" className="hover:text-[#234E26] transition-colors">
              Localização
            </a>
            <a href="#faq" className="hover:text-[#234E26] transition-colors">
              Dúvidas
            </a>
          </div>

          {/* Right Action */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={getWhatsAppLink('Olá! Gostaria de fazer um pedido ou tirar dúvidas na Sabiá Agropet.')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#234E26] hover:bg-[#1E3F2B] text-white px-5 py-2.5 rounded-full font-semibold text-sm shadow-md shadow-[#234E26]/20 transition-all hover:shadow-lg active:scale-98"
              id="nav-cta-whatsapp"
            >
              <MessageCircle className="w-4 h-4 text-[#4ADE80]" />
              <span>Chamar no WhatsApp</span>
            </a>
          </div>

          {/* Mobile hamburger button */}
          <div className="lg:hidden flex items-center gap-2">
            <a
              href={getWhatsAppLink('Olá! Gostaria de atendimento via WhatsApp.')}
              target="_blank"
              rel="noopener noreferrer"
              className="sm:hidden p-2 rounded-xl bg-[#234E26] text-white shadow-sm"
              aria-label="WhatsApp"
              id="mobile-nav-whatsapp-icon"
            >
              <MessageCircle className="w-5 h-5 text-[#4ADE80]" />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl border border-[#D5CEC0] text-[#1E3F2B] hover:bg-[#F2ECE1]"
              aria-label="Menu principal"
              id="mobile-menu-toggle-btn"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 pt-3 border-t border-[#E8E2D5] flex flex-col gap-2 pb-2 text-base font-medium text-[#26372B]">
            <a
              href="#inicio"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-[#EFE9DC] transition-colors"
            >
              Início
            </a>
            <a
              href="#categorias"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-[#EFE9DC] transition-colors"
            >
              Categorias
            </a>
            <a
              href="#produtos-servicos"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-[#EFE9DC] transition-colors"
            >
              Serviços & Produtos
            </a>
            <a
              href="#diferenciais"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-[#EFE9DC] transition-colors"
            >
              Diferenciais
            </a>
            <a
              href="#avaliacoes"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-[#EFE9DC] transition-colors"
            >
              Avaliações Google 5.0
            </a>
            <a
              href="#localizacao"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-[#EFE9DC] transition-colors"
            >
              Localização e Horários
            </a>
            <a
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-[#EFE9DC] transition-colors"
            >
              Perguntas Frequentes
            </a>

            <div className="pt-2 mt-1 border-t border-[#E8E2D5]">
              <a
                href={getWhatsAppLink('Olá! Gostaria de atendimento via WhatsApp para a Sabiá Agropet.')}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-[#234E26] text-white py-3 rounded-xl font-semibold shadow-md"
                id="mobile-menu-whatsapp-btn"
              >
                <MessageCircle className="w-5 h-5 text-[#4ADE80]" />
                Falar pelo WhatsApp
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
