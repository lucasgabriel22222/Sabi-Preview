import React, { useState } from 'react';
import { ChevronDown, MessageCircle, HelpCircle } from 'lucide-react';
import { FAQS, getWhatsAppLink } from '../data/agropetData';

export const FaqSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>('faq-1');

  const toggleAccordion = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-16 sm:py-20 bg-white border-t border-[#E8E1D2]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-xs font-bold uppercase tracking-widest text-[#234E26] mb-2">
            Dúvidas Frequentes
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#19381C] tracking-tight">
            Perguntas Frequentes sobre a Sabiá Agropet
          </h2>
          <p className="text-sm sm:text-base text-[#526557] mt-2">
            Respondemos tudo com clareza para você ter total segurança ao comprar conosco.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5 mb-12">
          {FAQS.map((faq) => {
            const isOpen = openId === faq.id;

            return (
              <div
                key={faq.id}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'bg-[#FBF9F5] border-[#234E26]/40 shadow-sm'
                    : 'bg-[#FDFCF9] border-[#E8E2D5] hover:border-[#DDD5C5]'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(faq.id)}
                  className="w-full flex items-center justify-between p-5 text-left transition-colors cursor-pointer"
                  aria-expanded={isOpen}
                  id={`faq-btn-${faq.id}`}
                >
                  <span className="font-display font-bold text-base sm:text-lg text-[#19381C] pr-4">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen
                        ? 'bg-[#234E26] text-white rotate-180'
                        : 'bg-[#EFE9DC] text-[#234E26]'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-[#4E6152] leading-relaxed border-t border-[#F0EBE1]">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions CTA card */}
        <div className="bg-[#EFE9DC] rounded-3xl p-6 sm:p-8 border border-[#DDD5C5] text-center flex flex-col items-center">
          <div className="w-12 h-12 rounded-2xl bg-[#234E26] text-white flex items-center justify-center mb-3 shadow-xs">
            <HelpCircle className="w-6 h-6" />
          </div>
          <h3 className="font-display font-bold text-xl text-[#19381C] mb-1">
            Não encontrou o que precisava?
          </h3>
          <p className="text-xs sm:text-sm text-[#546759] max-w-md mb-5 leading-relaxed">
            Nossa equipe em Arapongas está à disposição no WhatsApp para tirar dúvidas sobre marcas de ração, dosagens ou agendamentos.
          </p>

          <a
            href={getWhatsAppLink('Olá! Tenho uma dúvida que não encontrei no site da Sabiá Agropet. Poderiam me ajudar?')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#234E26] hover:bg-[#1A381C] text-white px-6 py-3 rounded-full font-bold text-sm shadow-md transition-all active:scale-98"
            id="faq-whatsapp-cta"
          >
            <MessageCircle className="w-4 h-4 text-[#4ADE80]" />
            <span>Tirar Dúvida no WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
};
