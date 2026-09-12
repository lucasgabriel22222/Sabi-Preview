import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { CategoryPills } from './components/CategoryPills';
import { PromoBanners } from './components/PromoBanners';
import { FeaturedProducts } from './components/FeaturedProducts';
import { WhatsAppSimulator } from './components/WhatsAppSimulator';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Testimonials } from './components/Testimonials';
import { LocationSection } from './components/LocationSection';
import { FaqSection } from './components/FaqSection';
import { FinalCta } from './components/FinalCta';
import { TrustFooter } from './components/TrustFooter';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FBF9F5] text-[#1E2922] font-sans">
      {/* Top Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Hero com promessa clara e botão WhatsApp acima da dobra */}
        <Hero />

        {/* Categorias circulares estilo PawVita */}
        <CategoryPills />

        {/* Banners Promocionais (10% OFF, Entrega em Arapongas, Disk Ração) */}
        <PromoBanners />

        {/* 3. Seção de Serviços e Produtos em Destaque */}
        <FeaturedProducts />

        {/* Simulador Interativo de Atendimento / Pedido no WhatsApp */}
        <WhatsAppSimulator />

        {/* 4. Diferenciais com 4 pilares e banner com foto do tutor */}
        <WhyChooseUs />

        {/* 5. Prova Social com Avaliações Google 5.0 (9 avaliações) */}
        <Testimonials />

        {/* 6. Localização com endereço completo e mapa interativo */}
        <LocationSection />

        {/* 7. FAQ - Perguntas Frequentes */}
        <FaqSection />

        {/* 8. CTA Final focado em conversão */}
        <FinalCta />
      </main>

      {/* Rodapé institucional e barra de garantias */}
      <TrustFooter />

      {/* Botão de WhatsApp Flutuante com balão interativo */}
      <FloatingWhatsApp />
    </div>
  );
}
