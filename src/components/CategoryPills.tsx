import React from 'react';
import { 
  Dog, 
  Cat, 
  Utensils, 
  Pill, 
  Scissors, 
  ShoppingBag, 
  Feather, 
  Percent,
  Sparkles
} from 'lucide-react';
import { CATEGORIES, getWhatsAppLink } from '../data/agropetData';

interface CategoryPillsProps {
  onSelectCategory?: (id: string) => void;
  selectedCategory?: string;
}

export const CategoryPills: React.FC<CategoryPillsProps> = ({ onSelectCategory, selectedCategory }) => {
  const renderCategoryIcon = (iconType: string, isSelected: boolean) => {
    const iconClass = `w-7 h-7 sm:w-8 sm:h-8 transition-transform group-hover:scale-110 ${
      isSelected ? 'text-white' : 'text-[#234E26]'
    }`;

    switch (iconType) {
      case 'dog':
        return <Dog className={iconClass} />;
      case 'cat':
        return <Cat className={iconClass} />;
      case 'bone':
        return <Utensils className={iconClass} />;
      case 'cross':
        return <Pill className={iconClass} />;
      case 'sparkles':
        return <Scissors className={iconClass} />;
      case 'tag':
        return <ShoppingBag className={iconClass} />;
      case 'feather':
        return <Feather className={iconClass} />;
      case 'percent':
        return <Percent className={iconClass} />;
      default:
        return <Sparkles className={iconClass} />;
    }
  };

  return (
    <section id="categorias" className="py-8 sm:py-10 bg-[#F5F1E8]/70 border-y border-[#E8E1D2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 mb-6">
          <div>
            <span className="text-xs font-bold tracking-widest text-[#234E26] uppercase">
              Departamentos & Atendimento
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#19381C] tracking-tight">
              O que você procura hoje para o seu companheiro?
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#5C6F62]">
            Consulte disponibilidade e valores diretamente no WhatsApp
          </p>
        </div>

        {/* Category Pills Grid */}
        <div className="grid grid-cols-4 sm:grid-cols-4 md:grid-cols-8 gap-3 sm:gap-4">
          {CATEGORIES.map((cat) => {
            const isSelected = selectedCategory === cat.id;

            return (
              <a
                key={cat.id}
                href={getWhatsAppLink(cat.whatsappMessage)}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => onSelectCategory && onSelectCategory(cat.id)}
                className="group flex flex-col items-center text-center focus:outline-none transition-all"
                id={`category-pill-${cat.id}`}
              >
                {/* Circular Icon Container */}
                <div
                  className={`relative w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center transition-all duration-300 shadow-sm ${
                    isSelected
                      ? 'bg-[#234E26] text-white ring-4 ring-[#234E26]/20 scale-105'
                      : 'bg-white text-[#19381C] border border-[#E2DAD0] group-hover:border-[#234E26] group-hover:shadow-md group-hover:-translate-y-1'
                  }`}
                >
                  {renderCategoryIcon(cat.icon, isSelected)}
                </div>

                {/* Category Name */}
                <span className="mt-2.5 text-xs sm:text-sm font-semibold text-[#223528] group-hover:text-[#234E26] transition-colors line-clamp-1">
                  {cat.name}
                </span>
              </a>
            );
          })}
        </div>

      </div>
    </section>
  );
};
