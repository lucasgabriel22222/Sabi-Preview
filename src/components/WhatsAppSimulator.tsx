import React, { useState } from 'react';
import { MessageCircle, Sparkles, Send, CheckCircle2, Feather } from 'lucide-react';
import { BUSINESS_INFO, getWhatsAppLink } from '../data/agropetData';

export const WhatsAppSimulator: React.FC = () => {
  const [serviceType, setServiceType] = useState('racao');
  const [petType, setPetType] = useState('cachorro');
  const [petName, setPetName] = useState('');
  const [neighborhood, setNeighborhood] = useState('Jardim Petrópolis');

  const getCustomMessage = () => {
    let serviceLabel = 'Ração e Nutrição';
    if (serviceType === 'banho') serviceLabel = 'Banho & Tosa';
    if (serviceType === 'farmacia') serviceLabel = 'Medicamento / Antipulgas';
    if (serviceType === 'aves') serviceLabel = 'Linha Aves / Agro';
    if (serviceType === 'outro') serviceLabel = 'Dúvidas Gerais';

    const petNameText = petName.trim() ? ` do meu ${petType} (${petName.trim()})` : ` para o meu ${petType}`;
    const neighborhoodText = neighborhood.trim() ? ` no bairro ${neighborhood.trim()} em Arapongas.` : ' em Arapongas.';

    return `Olá, equipe Sabiá Agropet! Gostaria de consultar sobre ${serviceLabel}${petNameText}${neighborhoodText} Poderiam me passar os detalhes?`;
  };

  const currentMessage = getCustomMessage();

  return (
    <section className="py-14 sm:py-16 bg-[#234E26] text-white relative overflow-hidden">
      {/* Background aesthetics */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#2E6632] rounded-full blur-3xl opacity-40 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#E5A93C]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="inline-flex items-center gap-1.5 bg-[#E5A93C] text-[#19381C] text-xs font-black uppercase px-3 py-1 rounded-full mb-3 tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            Atendimento Expresso no WhatsApp
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight mb-3">
            Monte sua mensagem e receba resposta rápida
          </h2>
          <p className="text-sm sm:text-base text-[#D4E5D8]">
            Selecione o que precisa e enviamos as opções, valores e horários direto no seu WhatsApp em instantes.
          </p>
        </div>

        {/* Interactive Form Card */}
        <div className="bg-white text-[#19381C] rounded-3xl p-6 sm:p-8 shadow-2xl border border-white/20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
            
            {/* Left Steps */}
            <div className="space-y-5">
              
              {/* Step 1: O que você precisa? */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#4A5D4F] mb-2">
                  1. O que você precisa hoje?
                </label>
                <div className="grid grid-cols-2 gap-2 text-xs font-semibold">
                  {[
                    { id: 'racao', label: 'Ração / Nutrição' },
                    { id: 'banho', label: 'Banho & Tosa' },
                    { id: 'farmacia', label: 'Medicamento / Farmácia' },
                    { id: 'aves', label: 'Pássaros / Linha Agro' },
                  ].map((s) => (
                    <button
                      key={s.id}
                      type="button"
                      onClick={() => setServiceType(s.id)}
                      className={`p-2.5 rounded-xl border text-left transition-all cursor-pointer ${
                        serviceType === s.id
                          ? 'bg-[#234E26] text-white border-[#234E26] shadow-xs'
                          : 'bg-[#F8F5EE] border-[#DDD5C5] text-[#293B2F] hover:border-[#234E26]'
                      }`}
                    >
                      {s.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 2: Qual seu animalzinho? */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#4A5D4F] mb-2">
                  2. Para quem é o atendimento?
                </label>
                <div className="flex gap-2">
                  {[
                    { id: 'cachorro', label: 'Cão' },
                    { id: 'gato', label: 'Gato' },
                    { id: 'pássaro', label: 'Pássaro' },
                    { id: 'outro', label: 'Outro' },
                  ].map((p) => (
                    <button
                      key={p.id}
                      type="button"
                      onClick={() => setPetType(p.id)}
                      className={`flex-1 py-2 px-2 rounded-xl text-xs font-bold border transition-all cursor-pointer text-center ${
                        petType === p.id
                          ? 'bg-[#234E26] text-white border-[#234E26]'
                          : 'bg-[#F8F5EE] border-[#DDD5C5] text-[#293B2F] hover:border-[#234E26]'
                      }`}
                    >
                      {p.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 3: Nome do Pet & Bairro */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#4A5D4F] mb-1.5">
                    Nome do Pet (opcional)
                  </label>
                  <input
                    type="text"
                    value={petName}
                    onChange={(e) => setPetName(e.target.value)}
                    placeholder="Ex: Thor, Mel, Luna..."
                    className="w-full text-xs sm:text-sm px-3.5 py-2.5 rounded-xl border border-[#DDD5C5] bg-[#FBF9F5] focus:outline-none focus:ring-2 focus:ring-[#234E26]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#4A5D4F] mb-1.5">
                    Seu Bairro em Arapongas
                  </label>
                  <input
                    type="text"
                    value={neighborhood}
                    onChange={(e) => setNeighborhood(e.target.value)}
                    placeholder="Ex: Jardim Petrópolis, Centro..."
                    className="w-full text-xs sm:text-sm px-3.5 py-2.5 rounded-xl border border-[#DDD5C5] bg-[#FBF9F5] focus:outline-none focus:ring-2 focus:ring-[#234E26]"
                  />
                </div>
              </div>

            </div>

            {/* Right Preview Card */}
            <div className="bg-[#F6F3EC] rounded-2xl p-5 border border-[#DDD5C5] flex flex-col justify-between h-full">
              <div>
                <div className="flex items-center justify-between gap-2 pb-3 mb-3 border-b border-[#DDD5C5]">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-[#234E26] flex items-center justify-center text-white text-xs font-bold">
                      <Feather className="w-4 h-4 text-[#E5A93C]" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-[#19381C]">Sabiá Agropet WhatsApp</p>
                      <p className="text-[10px] text-emerald-600 font-semibold flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block animate-pulse" />
                        Online agora para Arapongas
                      </p>
                    </div>
                  </div>
                  <span className="text-[10px] text-[#6E7F72]">{BUSINESS_INFO.phoneDisplay}</span>
                </div>

                <div className="bg-white rounded-xl p-4 border border-[#E4DDD0] shadow-xs mb-4">
                  <span className="text-[10px] font-bold text-[#6E8073] uppercase block mb-1">
                    Pré-visualização da mensagem:
                  </span>
                  <p className="text-xs sm:text-sm text-[#19381C] italic leading-relaxed">
                    "{currentMessage}"
                  </p>
                </div>

                <ul className="space-y-1.5 text-xs text-[#4E6152] mb-4">
                  <li className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>Sem compromisso de compra</span>
                  </li>
                  <li className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>Atendimento humano e atencioso</span>
                  </li>
                </ul>
              </div>

              {/* Action Button */}
              <a
                href={getWhatsAppLink(currentMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2.5 bg-[#234E26] hover:bg-[#19381C] text-white py-3.5 px-5 rounded-xl font-bold text-sm shadow-md transition-all active:scale-98"
                id="simulator-send-whatsapp"
              >
                <MessageCircle className="w-4 h-4 text-[#4ADE80]" />
                <span>Enviar no WhatsApp</span>
                <Send className="w-3.5 h-3.5 opacity-80" />
              </a>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
