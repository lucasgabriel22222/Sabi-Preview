import React from 'react';
import { ShieldCheck, HeartHandshake, Sparkles, Truck, Star, Quote } from 'lucide-react';
import { BUSINESS_INFO, getWhatsAppLink } from '../data/agropetData';

export const WhyChooseUs: React.FC = () => {
  const pillars = [
    {
      icon: ShieldCheck,
      title: 'Curadoria Rigorosa',
      desc: 'Rações de procedência garantida e medicamentos de laboratórios certificados.',
    },
    {
      icon: HeartHandshake,
      title: 'Atendimento Confiável',
      desc: 'Orientação franca e carinhosa para indicar exatamente o que seu pet necessita.',
    },
    {
      icon: Sparkles,
      title: 'Banho & Tosa Sem Trauma',
      desc: 'Profissionais pacientes, toalhas higienizadas e cosméticos de primeira linha.',
    },
    {
      icon: Truck,
      title: 'Entrega Residencial em Arapongas',
      desc: 'Comodidade para você receber rações pesadas e produtos sem sair de casa.',
    },
  ];

  return (
    <section id="diferenciais" className="py-16 sm:py-20 bg-[#FBF9F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-xs font-bold uppercase tracking-widest text-[#234E26] mb-2">
            Nosso Compromisso
          </p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-4xl font-bold text-[#19381C] tracking-tight">
            Por que os Tutores de Arapongas Escolhem a{' '}
            <span className="text-[#234E26]">Sabiá Agropet</span>?
          </h2>
          <p className="text-sm sm:text-base text-[#526557] mt-3">
            Combinamos a tradição agropecuária com o cuidado mais moderno e afetuoso que seu melhor amigo pode receber.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 border border-[#E8E2D5] shadow-xs hover:shadow-md transition-all duration-300 hover:border-[#234E26]/40 flex flex-col items-start"
              >
                <div className="w-12 h-12 rounded-xl bg-[#E8EFE9] text-[#234E26] flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-display text-lg font-bold text-[#19381C] mb-2">
                  {pillar.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#526557] leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Spotlight Testimonial Banner (Directly styled after the image banner!) */}
        <div className="bg-[#F4EFE6] rounded-3xl border border-[#E0D8C8] overflow-hidden shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            
            {/* Left Photo of Pet Parent hugging happy dog */}
            <div className="lg:col-span-5 h-72 sm:h-80 lg:h-full relative overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=800&q=80"
                alt="Tutora com seu animal de estimação bem cuidado"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Right Quote Body */}
            <div className="lg:col-span-7 p-7 sm:p-10 relative">
              {/* Giant quote mark decoration */}
              <div className="text-6xl text-[#E5A93C] font-serif leading-none mb-2 select-none opacity-80">
                “
              </div>

              <blockquote className="text-base sm:text-lg lg:text-xl font-medium text-[#19381C] leading-relaxed mb-6">
                A Sabiá Agropet tem tudo o que meus pets precisam! A qualidade das rações é impecável,
                a entrega no Jardim Petrópolis é rápida e o carinho com que tratam os bichinhos
                nos faz sentir verdadeiramente seguros. É nota 10!
              </blockquote>

              <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-[#DED5C5]">
                <div>
                  <div className="flex text-[#F59E0B] mb-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#F59E0B] text-[#F59E0B]" />
                    ))}
                  </div>
                  <h4 className="font-bold text-sm text-[#19381C]">Marcos Vinicius & Luna</h4>
                  <p className="text-xs text-[#6A7B6F]">Cliente Verificado no Google • Arapongas - PR</p>
                </div>

                <a
                  href={getWhatsAppLink('Olá! Vi o depoimento no site da Sabiá Agropet e gostaria de conhecer mais sobre os produtos.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#234E26] hover:bg-[#19381C] text-white px-4 py-2 rounded-xl text-xs font-bold transition-colors shadow-xs"
                >
                  <span>Experimentar Atendimento</span>
                </a>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
