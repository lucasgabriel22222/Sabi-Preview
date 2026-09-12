import React, { useState } from 'react';
import { Truck, RotateCcw, Copy, Check, MessageCircle, ArrowRight } from 'lucide-react';
import { getWhatsAppLink } from '../data/agropetData';

export const PromoBanners: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyCoupon = () => {
    navigator.clipboard.writeText('SABIA10');
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section className="py-10 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
          
          {/* Main Hero Promo Card (Forest Green, like the reference image) */}
          <div className="lg:col-span-6 bg-[#234E26] rounded-3xl p-6 sm:p-8 text-white relative overflow-hidden flex flex-col justify-between shadow-xl">
            {/* Background pattern */}
            <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-[#2D6632]/40 rounded-full blur-2xl pointer-events-none" />

            <div className="relative z-10 max-w-sm">
              <span className="inline-block bg-[#E5A93C] text-[#19381C] text-xs font-black uppercase px-3 py-1 rounded-full mb-3 tracking-wide">
                Primeira Compra?
              </span>
              <h3 className="font-display text-3xl sm:text-4xl font-bold tracking-tight mb-2 leading-tight">
                Ganhe 10% OFF
              </h3>
              <p className="text-sm text-[#D1E2D4] mb-6 leading-relaxed">
                No seu primeiro pedido de ração ou agendamento de Banho & Tosa pelo WhatsApp na Sabiá Agropet.
              </p>

              <div className="flex flex-wrap items-center gap-3">
                {/* Coupon Box */}
                <button
                  type="button"
                  onClick={handleCopyCoupon}
                  className="flex items-center gap-2 bg-[#1A3A1D] hover:bg-[#153018] border border-[#37693C] text-white px-4 py-2.5 rounded-xl font-mono font-bold text-sm tracking-widest transition-all cursor-pointer shadow-inner"
                  title="Clique para copiar cupom"
                  id="coupon-copy-btn"
                >
                  <span>SABIA10</span>
                  {copied ? (
                    <Check className="w-4 h-4 text-[#4ADE80]" />
                  ) : (
                    <Copy className="w-4 h-4 text-[#A3C0A7]" />
                  )}
                </button>

                {/* Direct WhatsApp trigger */}
                <a
                  href={getWhatsAppLink('Olá! Gostaria de usar meu cupom SABIA10 de 10% OFF para fazer um pedido na Sabiá Agropet.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#E5A93C] hover:bg-[#D97706] text-[#19381C] font-bold text-sm px-4 py-2.5 rounded-xl shadow-md transition-all active:scale-98"
                  id="coupon-whatsapp-cta"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Ativar no Zap</span>
                </a>
              </div>
            </div>

            {/* Adorable puppy in box image on right side */}
            <div className="mt-6 sm:mt-0 sm:absolute sm:bottom-0 sm:right-4 w-44 sm:w-56 shrink-0 self-end">
              <img
                src="https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&w=500&q=80"
                alt="Filhote feliz na Sabiá Agropet"
                referrerPolicy="no-referrer"
                className="rounded-2xl shadow-lg border-2 border-white/20 object-cover aspect-square"
              />
            </div>
          </div>

          {/* Secondary Cards Column */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-5">
            
            {/* Card 2: Entrega Residencial */}
            <a
              href={getWhatsAppLink('Olá! Gostaria de saber como funciona a entrega de ração no meu endereço em Arapongas.')}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-[#F4EFE6] hover:bg-[#EDE6D8] border border-[#E2DAD0] rounded-3xl p-6 transition-all duration-200 flex items-center justify-between gap-4 shadow-sm hover:shadow-md"
              id="promo-delivery-card"
            >
              <div>
                <h4 className="font-display text-xl sm:text-2xl font-bold text-[#19381C] mb-1">
                  Entrega Residencial em Arapongas
                </h4>
                <p className="text-xs sm:text-sm text-[#546759] leading-relaxed max-w-sm">
                  Não carregue sacos pesados de 15kg ou 20kg. Peça pelo WhatsApp e receba diretamente na sua residência.
                </p>
                <div className="mt-3 inline-flex items-center gap-1 text-xs font-bold text-[#234E26] group-hover:translate-x-1 transition-transform">
                  <span>Solicitar entrega</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>

              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-white border border-[#DDD5C5] flex items-center justify-center text-[#234E26] shrink-0 shadow-xs group-hover:scale-105 transition-transform">
                <Truck className="w-8 h-8 text-[#234E26]" />
              </div>
            </a>

            {/* Card 3: Reposição Programada */}
            <a
              href={getWhatsAppLink('Olá! Gostaria de consultar o preço e programar a compra da ração do meu pet.')}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-[#F4EFE6] hover:bg-[#EDE6D8] border border-[#E2DAD0] rounded-3xl p-6 transition-all duration-200 flex items-center justify-between gap-4 shadow-sm hover:shadow-md"
              id="promo-reorder-card"
            >
              <div>
                <h4 className="font-display text-xl sm:text-2xl font-bold text-[#19381C] mb-1">
                  Reposição Programada de Ração
                </h4>
                <p className="text-xs sm:text-sm text-[#546759] leading-relaxed max-w-sm">
                  Deixe agendada a ração habitual do seu pet para garantir nutrição equilibrada sem interrupções.
                </p>
                <div className="mt-3 inline-flex items-center gap-1 text-xs font-bold text-[#234E26] group-hover:translate-x-1 transition-transform">
                  <span>Consultar marcas e valores</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>

              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-white border border-[#DDD5C5] flex items-center justify-center text-[#E5A93C] shrink-0 shadow-xs group-hover:scale-105 transition-transform">
                <RotateCcw className="w-8 h-8 text-[#D97706]" />
              </div>
            </a>

          </div>

        </div>
      </div>
    </section>
  );
};
