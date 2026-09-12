import React, { useState } from 'react';
import { Star, MessageCircle, Check, ArrowRight, ShieldAlert } from 'lucide-react';
import { FEATURED_ITEMS, getWhatsAppLink } from '../data/agropetData';

export const FeaturedProducts: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('todos');

  const filteredItems = activeTab === 'todos' 
    ? FEATURED_ITEMS 
    : FEATURED_ITEMS.filter(item => item.category === activeTab);

  return (
    <section id="produtos-servicos" className="py-14 sm:py-20 bg-white border-y border-[#E8E1D2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#234E26] mb-1">
              <span>Soluções Completas na Sabiá Agropet</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#19381C] tracking-tight">
              Produtos & Serviços em Destaque
            </h2>
            <p className="text-sm sm:text-base text-[#526557] mt-1 max-w-2xl">
              Qualidade certificada, rações balanceadas, carinho no banho e tosa e farmácia veterinária pronta entrega.
            </p>
          </div>

          <a
            href={getWhatsAppLink('Olá! Gostaria de consultar o catálogo completo ou tirar dúvidas sobre produtos e serviços da Sabiá Agropet.')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-bold text-[#234E26] hover:text-[#19381C] group shrink-0"
            id="featured-view-all-whatsapp"
          >
            <span>Consultar Catálogo no Zap</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {[
            { id: 'todos', label: 'Todos os Destaques' },
            { id: 'racoes', label: 'Rações & Nutrição' },
            { id: 'banho-tosa', label: 'Banho & Tosa' },
            { id: 'farmacia', label: 'Farmácia Veterinária' },
            { id: 'acessorios', label: 'Acessórios & Camas' },
            { id: 'agro-aves', label: 'Aves & Linha Agro' },
          ].map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap transition-all cursor-pointer ${
                activeTab === tab.id
                  ? 'bg-[#234E26] text-white shadow-sm'
                  : 'bg-[#F4EFE6] text-[#3E5244] hover:bg-[#EAE4D7] border border-[#DDD5C5]'
              }`}
              id={`filter-tab-${tab.id}`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Product Cards Grid matching PawVita card architecture */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 sm:gap-7">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group bg-[#FBF9F5] rounded-3xl border border-[#E8E2D5] overflow-hidden flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:border-[#234E26]/40 hover:-translate-y-1"
              id={`product-card-${item.id}`}
            >
              <div>
                {/* Image Container */}
                <div className="relative bg-white aspect-[4/3] overflow-hidden border-b border-[#E8E2D5]">
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Card Content */}
                <div className="p-5 sm:p-6">
                  {/* Rating row */}
                  <div className="flex items-center gap-1 mb-2">
                    <div className="flex text-[#F59E0B]">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-[#F59E0B] text-[#F59E0B]" />
                      ))}
                    </div>
                    <span className="text-xs font-bold text-[#1A381C] ml-1">5.0</span>
                    <span className="text-[11px] text-[#6E8073]">({item.reviewsCount} avaliações)</span>
                  </div>

                  {/* Title */}
                  <h3 className="font-display text-lg sm:text-xl font-bold text-[#19381C] leading-snug group-hover:text-[#234E26] transition-colors mb-2">
                    {item.title}
                  </h3>

                  {/* Short Description */}
                  <p className="text-xs sm:text-sm text-[#4A5D4F] leading-relaxed mb-4">
                    {item.description}
                  </p>

                  {/* Highlights checklist */}
                  <ul className="space-y-1.5 pt-2 border-t border-[#EAE4D7] mb-4">
                    {item.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-xs text-[#3B4D40]">
                        <Check className="w-3.5 h-3.5 text-[#234E26] shrink-0" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Card Footer with Price/Condition and WhatsApp Button */}
              <div className="p-5 sm:p-6 pt-0 mt-auto flex items-center justify-between gap-3">
                <div>
                  <span className="text-[11px] font-medium text-[#77897C] block uppercase tracking-wider">
                    Disponibilidade
                  </span>
                  <span className="text-xs sm:text-sm font-extrabold text-[#19381C]">
                    {item.priceDesc}
                  </span>
                </div>

                {/* Direct Action Button */}
                <a
                  href={getWhatsAppLink(
                    `Olá! Vim pelo site da Sabiá Agropet e tenho interesse em: "${item.title}". Como podemos prosseguir?`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-2xl bg-[#234E26] hover:bg-[#1A381C] text-white flex items-center justify-center shadow-md shadow-[#234E26]/20 transition-all hover:scale-105 active:scale-95 shrink-0"
                  title={`Pedir ${item.title} pelo WhatsApp`}
                  id={`btn-order-item-${item.id}`}
                >
                  <MessageCircle className="w-5 h-5 text-[#4ADE80]" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Reassurance Banner under products */}
        <div className="mt-10 p-5 rounded-2xl bg-[#EFE9DC] border border-[#DDD4C3] flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#234E26] text-white flex items-center justify-center shrink-0">
              <MessageCircle className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="font-bold text-sm text-[#19381C]">Procurando uma marca específica de ração ou medicamento?</p>
              <p className="text-xs text-[#55695A]">Temos diversas opções no estoque físico da loja. Fale conosco agora!</p>
            </div>
          </div>
          <a
            href={getWhatsAppLink('Olá! Gostaria de saber se vocês têm um produto específico na loja física em Arapongas.')}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#234E26] hover:bg-[#1A381C] text-white font-bold text-xs px-5 py-2.5 rounded-full shadow-xs transition-colors shrink-0"
            id="ask-specific-product-whatsapp"
          >
            Consultar no WhatsApp
          </a>
        </div>

      </div>
    </section>
  );
};
