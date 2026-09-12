import React from 'react';
import { Star, CheckCircle, Quote, MessageCircle } from 'lucide-react';
import { BUSINESS_INFO, REVIEWS, getWhatsAppLink } from '../data/agropetData';

export const Testimonials: React.FC = () => {
  return (
    <section id="avaliacoes" className="py-16 sm:py-20 bg-white border-b border-[#E8E1D2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header with Google Rating Overview */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-[#234E26] mb-2">
              Avaliações Verificadas no Google
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#19381C] tracking-tight">
              A Opinião de Quem Confia na Sabiá Agropet
            </h2>
            <p className="text-sm sm:text-base text-[#526557] mt-2 max-w-2xl">
              Transparência total e compromisso com cada tutor. Veja o que nossos clientes dizem sobre nosso atendimento e serviços.
            </p>
          </div>

          {/* Google Summary Box */}
          <div className="bg-[#FBF9F5] border border-[#E8E2D5] rounded-2xl p-4 sm:p-5 flex items-center gap-4 shrink-0 shadow-xs">
            <div className="w-12 h-12 rounded-xl bg-white border border-[#DDD5C5] flex items-center justify-center font-black text-2xl text-[#19381C] shadow-xs">
              G
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-black text-xl text-[#19381C]">5.0</span>
                <div className="flex text-[#F59E0B]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#F59E0B] text-[#F59E0B]" />
                  ))}
                </div>
              </div>
              <p className="text-xs text-[#526557] font-medium mt-0.5">
                Baseado em <strong>{BUSINESS_INFO.googleReviewCount} avaliações</strong> no Google
              </p>
            </div>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {REVIEWS.map((review) => (
            <div
              key={review.id}
              className="bg-[#FBF9F5] rounded-2xl p-6 border border-[#E8E2D5] flex flex-col justify-between hover:shadow-md hover:border-[#234E26]/40 transition-all duration-300"
            >
              <div>
                {/* Rating stars & verified tag */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className="flex text-[#F59E0B]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#F59E0B] text-[#F59E0B]" />
                    ))}
                  </div>
                  <span className="text-[10px] text-[#78897E]">{review.date}</span>
                </div>

                {/* Comment */}
                <p className="text-xs sm:text-sm text-[#38493D] leading-relaxed mb-6 italic">
                  "{review.comment}"
                </p>
              </div>

              {/* Author */}
              <div className="pt-3 border-t border-[#EAE4D7] flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#234E26] text-white flex items-center justify-center font-bold text-xs shrink-0">
                  {review.author.charAt(0)}
                </div>
                <div className="min-w-0">
                  <div className="flex items-center gap-1">
                    <h4 className="font-bold text-xs text-[#19381C] truncate">{review.author}</h4>
                    <CheckCircle className="w-3 h-3 text-emerald-600 shrink-0" />
                  </div>
                  <p className="text-[11px] text-[#697B6F] truncate">{review.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to action bar */}
        <div className="bg-[#F4EFE6] rounded-2xl p-5 sm:p-6 border border-[#DDD5C5] flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h3 className="font-display font-bold text-base sm:text-lg text-[#19381C]">
              Venha fazer parte dos tutores satisfeitos da Sabiá Agropet!
            </h3>
            <p className="text-xs sm:text-sm text-[#546759]">
              Faça seu primeiro pedido de ração ou agende um banho com 10% de desconto no WhatsApp.
            </p>
          </div>

          <a
            href={getWhatsAppLink('Olá! Vi as excelentes avaliações no site da Sabiá Agropet e gostaria de solicitar um atendimento.')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#234E26] hover:bg-[#19381C] text-white px-5 py-2.5 rounded-full font-bold text-xs sm:text-sm shadow-md transition-all shrink-0"
            id="reviews-cta-whatsapp"
          >
            <MessageCircle className="w-4 h-4 text-[#4ADE80]" />
            <span>Falar com a Equipe</span>
          </a>
        </div>

      </div>
    </section>
  );
};
