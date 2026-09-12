import React, { useState } from 'react';
import { MessageCircle, X, Send, Sparkles, Feather } from 'lucide-react';
import { BUSINESS_INFO, getWhatsAppLink } from '../data/agropetData';

export const FloatingWhatsApp: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const quickOptions = [
    { label: 'Pedir Ração com Entrega', msg: 'Olá! Gostaria de pedir ração para entrega em Arapongas.' },
    { label: 'Agendar Banho & Tosa', msg: 'Olá! Gostaria de agendar um horário de Banho & Tosa para meu pet.' },
    { label: 'Farmácia & Medicamentos', msg: 'Olá! Gostaria de consultar medicamentos/antipulgas na Sabiá Agropet.' },
    { label: 'Pássaros & Linha Agro', msg: 'Olá! Gostaria de informações sobre produtos para aves e linha agro.' },
  ];

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end pointer-events-auto">
      
      {/* Expanded Quick Chat Window */}
      {isOpen && (
        <div className="mb-3 w-80 sm:w-92 bg-white rounded-3xl shadow-2xl border border-[#DDD5C5] overflow-hidden animate-in fade-in slide-in-from-bottom-5 duration-200">
          
          {/* WhatsApp Header */}
          <div className="bg-[#234E26] text-white p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                  <Feather className="w-5 h-5 text-[#E5A93C]" />
                </div>
                <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-emerald-400 ring-2 ring-[#234E26]" />
              </div>
              <div>
                <h4 className="font-bold text-sm leading-tight">Sabiá Agropet</h4>
                <p className="text-[11px] text-[#A7D1AF]">Geralmente responde em instantes</p>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="p-1.5 rounded-full hover:bg-white/10 text-white transition-colors cursor-pointer"
              aria-label="Fechar janela"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Chat Body */}
          <div className="p-4 bg-[#F7F4EE] space-y-3">
            <div className="bg-white rounded-2xl rounded-tl-none p-3.5 shadow-xs border border-[#EAE4D7] text-xs text-[#2A3D30] leading-relaxed max-w-[90%]">
              <p className="font-semibold text-[#19381C] mb-1">Olá! Como podemos ajudar você e seu pet hoje?</p>
              <p>Escolha um assunto rápido ou nos envie uma mensagem direta no WhatsApp:</p>
            </div>

            {/* Quick Option Buttons */}
            <div className="space-y-1.5 pt-1">
              {quickOptions.map((opt, idx) => (
                <a
                  key={idx}
                  href={getWhatsAppLink(opt.msg)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full block bg-white hover:bg-[#F2ECE1] border border-[#DDD5C5] rounded-xl px-3 py-2 text-xs font-semibold text-[#19381C] text-left transition-colors shadow-2xs"
                >
                  {opt.label}
                </a>
              ))}
            </div>
          </div>

          {/* Bottom Direct Trigger */}
          <div className="p-3 bg-white border-t border-[#EAE4D7]">
            <a
              href={getWhatsAppLink('Olá! Vim pelo site da Sabiá Agropet e gostaria de conversar.')}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 bg-[#234E26] hover:bg-[#1A381C] text-white py-2.5 rounded-xl font-bold text-xs shadow-sm transition-colors"
            >
              <MessageCircle className="w-4 h-4 text-[#4ADE80]" />
              <span>Abrir WhatsApp ({BUSINESS_INFO.phoneDisplay})</span>
            </a>
          </div>

        </div>
      )}

      {/* Floating Action Button */}
      <div className="flex items-center gap-2">
        {/* Helper Tooltip if closed */}
        {!isOpen && (
          <button
            type="button"
            onClick={() => setIsOpen(true)}
            className="hidden sm:flex items-center gap-2 bg-white text-[#19381C] border border-[#DDD5C5] px-3.5 py-2 rounded-full shadow-lg text-xs font-bold hover:bg-[#FBF9F5] transition-all cursor-pointer animate-fade-in"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Fale no WhatsApp</span>
          </button>
        )}

        {/* Big Green Round Button */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white flex items-center justify-center shadow-2xl hover:shadow-emerald-500/50 transition-all duration-300 transform hover:scale-108 active:scale-95 cursor-pointer"
          aria-label="Abrir atendimento no WhatsApp"
          id="floating-whatsapp-trigger"
        >
          {isOpen ? (
            <X className="w-7 h-7 text-white" />
          ) : (
            <MessageCircle className="w-8 h-8 text-white fill-white/15" />
          )}

          {/* Pulse Ripple */}
          {!isOpen && (
            <span className="absolute -top-1 -right-1 flex h-4 w-4">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#234E26] opacity-75" />
              <span className="relative inline-flex rounded-full h-4 w-4 bg-[#234E26] text-[9px] font-bold text-white items-center justify-center">
                1
              </span>
            </span>
          )}
        </button>
      </div>

    </div>
  );
};
