import React, { useState } from 'react';
import { MapPin, Clock, Phone, MessageCircle, ExternalLink, Copy, Check, Navigation } from 'lucide-react';
import { BUSINESS_INFO, getWhatsAppLink } from '../data/agropetData';

export const LocationSection: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(BUSINESS_INFO.fullAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="localizacao" className="py-16 sm:py-20 bg-[#FBF9F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-xs font-bold uppercase tracking-widest text-[#234E26] mb-2">
            Localização & Atendimento
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#19381C] tracking-tight">
            Venha nos Visitar ou Peça sem Sair de Casa
          </h2>
          <p className="text-sm sm:text-base text-[#526557] mt-2">
            Localização de fácil acesso no Jardim Petrópolis, com estacionamento facilitado e entrega para Arapongas.
          </p>
        </div>

        {/* 2-Column Info & Map */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left: Contact & Address Details */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            
            {/* Address Card */}
            <div className="bg-white rounded-3xl p-6 sm:p-7 border border-[#E8E2D5] shadow-sm">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-[#E8EFE9] text-[#234E26] flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg text-[#19381C]">Endereço Oficial</h3>
                  <p className="text-sm font-semibold text-[#2F4435] mt-1">
                    {BUSINESS_INFO.address}
                  </p>
                  <p className="text-xs text-[#6B7D70]">
                    {BUSINESS_INFO.cityStateZip}
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 pt-2 border-t border-[#F0EBE1]">
                <button
                  type="button"
                  onClick={handleCopyAddress}
                  className="flex-1 inline-flex items-center justify-center gap-1.5 bg-[#F6F3EC] hover:bg-[#EFE9DC] text-[#234E26] border border-[#DDD5C5] px-3.5 py-2 rounded-xl text-xs font-bold transition-colors cursor-pointer"
                  id="copy-address-btn"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? 'Copiado!' : 'Copiar Endereço'}</span>
                </button>

                <a
                  href={BUSINESS_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-1.5 bg-[#234E26] hover:bg-[#1A381C] text-white px-3.5 py-2 rounded-xl text-xs font-bold transition-colors shadow-xs"
                  id="open-google-maps-btn"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Como Chegar</span>
                  <ExternalLink className="w-3 h-3 opacity-75" />
                </a>
              </div>
            </div>

            {/* Hours Card */}
            <div className="bg-white rounded-3xl p-6 sm:p-7 border border-[#E8E2D5] shadow-sm">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-[#FEF3C7] text-[#D97706] flex items-center justify-center shrink-0">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg text-[#19381C]">Horários de Atendimento</h3>
                  <p className="text-xs text-[#6B7D70] mt-0.5">Balcão da loja física e entregas</p>
                </div>
              </div>

              <div className="space-y-2 text-xs sm:text-sm text-[#384A3D] pt-2 border-t border-[#F0EBE1]">
                <div className="flex justify-between py-1 border-b border-[#F7F4EE]">
                  <span className="font-medium text-[#5C6E61]">Segunda a Sexta:</span>
                  <span className="font-bold text-[#19381C]">08:00 às 18:30</span>
                </div>
                <div className="flex justify-between py-1 border-b border-[#F7F4EE]">
                  <span className="font-medium text-[#5C6E61]">Sábado:</span>
                  <span className="font-bold text-[#19381C]">08:00 às 13:00</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="font-medium text-[#5C6E61]">Domingos e Feriados:</span>
                  <span className="font-semibold text-[#8B6022]">WhatsApp sob consulta</span>
                </div>
              </div>
            </div>

            {/* Direct Contact Card */}
            <div className="bg-[#234E26] text-white rounded-3xl p-6 sm:p-7 shadow-lg flex items-center justify-between gap-4">
              <div>
                <span className="text-xs uppercase tracking-wider text-[#A5D6A7] font-bold block mb-1">
                  Atendimento Imediato
                </span>
                <p className="text-lg sm:text-xl font-bold font-mono text-white">
                  {BUSINESS_INFO.phoneDisplay}
                </p>
                <p className="text-xs text-[#D1E2D4] mt-1">
                  Tire dúvidas, envie receita veterinária ou peça ração.
                </p>
              </div>

              <a
                href={getWhatsAppLink('Olá! Gostaria de conversar com a Sabiá Agropet sobre produtos ou entregas.')}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-2xl bg-[#E5A93C] hover:bg-[#D97706] text-[#19381C] flex items-center justify-center shrink-0 shadow-md transition-transform hover:scale-105"
                id="location-call-whatsapp"
              >
                <MessageCircle className="w-6 h-6" />
              </a>
            </div>

          </div>

          {/* Right: Interactive Map Frame */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-4 sm:p-5 border border-[#E8E2D5] shadow-sm flex flex-col justify-between min-h-[420px]">
            {/* Map Header */}
            <div className="flex items-center justify-between px-2 pb-3 mb-2 border-b border-[#E8E2D5]">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
                <span className="text-xs font-bold text-[#19381C]">
                  R. Gavião Preto, 388 - Jardim Petrópolis
                </span>
              </div>
              <span className="text-xs text-[#6A7B6F]">Arapongas - PR</span>
            </div>

            {/* Map Interactive Embed */}
            <div className="relative flex-1 w-full rounded-2xl overflow-hidden border border-[#DDD5C5] bg-[#E9E5DD]">
              <iframe
                title="Mapa de Localização Sabiá Agropet Arapongas"
                src="https://maps.google.com/maps?q=Rua+Gavi%C3%A3o+Preto%2C+388+-+Jardim+Petr%C3%B3polis%2C+Arapongas+-+PR%2C+86790-709&t=&z=16&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full min-h-[340px] border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            {/* Map Bottom Actions */}
            <div className="mt-3 pt-2 flex flex-wrap items-center justify-between gap-3 text-xs text-[#526557]">
              <span>Ponto de referência: Próximo à praça do Jardim Petrópolis</span>
              <a
                href={BUSINESS_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#234E26] font-bold hover:underline inline-flex items-center gap-1"
              >
                Abrir no app Google Maps
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
