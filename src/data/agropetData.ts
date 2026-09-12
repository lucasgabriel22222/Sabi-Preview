import { CategoryItem, ProductServiceItem, ReviewItem, FaqItem } from '../types';

export const BUSINESS_INFO = {
  name: 'Sabiá Agropet',
  shortName: 'Sabiá',
  tagline: 'O melhor para o seu Pet e sua Criação em Arapongas',
  segment: 'Pet Shop & Linha Agro',
  phone: '+55 43 99179-2018',
  phoneDisplay: '(43) 99179-2018',
  whatsappRaw: '5543991792018',
  address: 'R. Gavião Preto, 388 - Jardim Petrópolis',
  cityStateZip: 'Arapongas - PR, 86790-709',
  fullAddress: 'R. Gavião Preto, 388 - Jardim Petrópolis, Arapongas - PR, 86790-709, Brasil',
  googleRating: 5.0,
  googleReviewCount: 9,
  openingHours: {
    weekdays: 'Segunda a Sexta: 08:00 às 18:30',
    saturday: 'Sábado: 08:00 às 13:00',
    sunday: 'Domingo: Fechado (Atendimento WhatsApp sob consulta)',
  },
  googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=R.+Gavi%C3%A3o+Preto%2C+388+-+Jardim+Petr%C3%B3polis%2C+Arapongas+-+PR%2C+86790-709',
};

export const getWhatsAppLink = (message?: string) => {
  const defaultMsg = 'Olá! Estava navegando no site da Sabiá Agropet e gostaria de tirar uma dúvida.';
  const encodedMsg = encodeURIComponent(message || defaultMsg);
  return `https://wa.me/${BUSINESS_INFO.whatsappRaw}?text=${encodedMsg}`;
};

export const CATEGORIES: CategoryItem[] = [
  {
    id: 'caes',
    name: 'Cães',
    icon: 'dog',
    whatsappMessage: 'Olá! Gostaria de conhecer os produtos e rações para cães da Sabiá Agropet.',
  },
  {
    id: 'gatos',
    name: 'Gatos',
    icon: 'cat',
    whatsappMessage: 'Olá! Gostaria de ver as opções de rações, areias e itens para gatos.',
  },
  {
    id: 'racoes',
    name: 'Rações',
    icon: 'bone',
    whatsappMessage: 'Olá! Quero saber os preços e disponibilidade de rações para entrega em Arapongas.',
  },
  {
    id: 'farmacia',
    name: 'Farmácia Pet',
    icon: 'cross',
    whatsappMessage: 'Olá! Preciso de orientações sobre medicamentos/antipulgas na Sabiá Agropet.',
  },
  {
    id: 'banho-tosa',
    name: 'Banho & Tosa',
    icon: 'sparkles',
    whatsappMessage: 'Olá! Gostaria de agendar um horário de Banho & Tosa para meu pet.',
  },
  {
    id: 'acessorios',
    name: 'Acessórios',
    icon: 'tag',
    whatsappMessage: 'Olá! Gostaria de ver caminhas, coleiras e brinquedos para pet.',
  },
  {
    id: 'agro-aves',
    name: 'Pássaros & Agro',
    icon: 'feather',
    whatsappMessage: 'Olá! Gostaria de informações sobre rações e produtos para pássaros e linha agro.',
  },
  {
    id: 'ofertas',
    name: 'Ofertas do Mês',
    icon: 'percent',
    whatsappMessage: 'Olá! Vim pelo site e quero conferir as promoções ativas na Sabiá Agropet!',
  },
];

export const FEATURED_ITEMS: ProductServiceItem[] = [
  {
    id: 'racao-premium-caes',
    category: 'racoes',
    title: 'Rações Premium & Super Premium (Cães)',
    tag: 'Mais Pedido',
    tagType: 'best-seller',
    priceDesc: 'Opções de 1kg a 20kg com entrega em Arapongas',
    rating: 5.0,
    reviewsCount: 9,
    imageUrl: 'https://images.unsplash.com/photo-1589924691995-400dc9ecc119?auto=format&fit=crop&w=600&q=80',
    description: 'Marcas de alta digestibilidade e nutrição completa para filhotes e adultos. Peça pelo WhatsApp e não carregue peso.',
    highlights: ['Sem corantes artificiais', 'Sacos lacrados de fábrica', 'Entrega ágil em Arapongas'],
  },
  {
    id: 'banho-tosa-cuidadoso',
    category: 'banho-tosa',
    title: 'Banho & Tosa com Cuidado Humanizado',
    tag: 'Destaque',
    tagType: 'popular',
    priceDesc: 'Consulte valor para o porte do seu pet',
    rating: 5.0,
    reviewsCount: 9,
    imageUrl: 'https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&w=600&q=80',
    description: 'Higienização completa, produtos hipoalergênicos, tosa higiênica ou na tesoura com profissionais pacientes e atenciosos.',
    highlights: ['Ambiente higienizado e tranquilo', 'Secagem carinhosa sem trauma', 'Agendamento rápido no Zap'],
  },
  {
    id: 'antipulgas-farmacia',
    category: 'farmacia',
    title: 'Farmácia Veterinária & Antipulgas',
    tag: 'Essencial',
    tagType: 'new',
    priceDesc: 'Comprimidos, pipetas, vermífugos e pomadas',
    rating: 5.0,
    reviewsCount: 9,
    imageUrl: 'https://images.unsplash.com/photo-1576201836106-db1758fd1c97?auto=format&fit=crop&w=600&q=80',
    description: 'Proteção garantida contra carrapatos, pulgas e vermes. Principais laboratórios com procedência e orientação no balcão.',
    highlights: ['Eficácia comprovada', 'Instruções claras de dosagem', 'Itens a pronta entrega'],
  },
  {
    id: 'conforto-caminhas',
    category: 'acessorios',
    title: 'Caminhas, Almofadas & Coleiras Antiestresse',
    tag: 'Conforto',
    tagType: 'sale',
    priceDesc: 'Tamanhos P, M, G e GG para cães e gatos',
    rating: 5.0,
    reviewsCount: 9,
    imageUrl: 'https://images.unsplash.com/photo-1541599540903-216a46ca1dc0?auto=format&fit=crop&w=600&q=80',
    description: 'Tecidos laváveis, enchimento reforçado e coleiras seguras com fechos de alta resistência para o bem-estar do pet.',
    highlights: ['Fácil de limpar', 'Fundo impermeável', 'Durabilidade superior'],
  },
  {
    id: 'racao-gatos-castrados',
    category: 'racoes',
    title: 'Rações Especializadas para Felinos',
    tag: 'Saúde Renal',
    tagType: 'best-seller',
    priceDesc: 'Castrados, filhotes e pele sensível',
    rating: 5.0,
    reviewsCount: 9,
    imageUrl: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=600&q=80',
    description: 'Equilíbrio mineral rigoroso para o trato urinário, alta palatabilidade e controle de bolas de pelo.',
    highlights: ['Controle do pH urinário', 'Sabor irresistível', 'Menor odor nas fezes'],
  },
  {
    id: 'aves-linha-agro',
    category: 'agro-aves',
    title: 'Linha Aves, Pássaros & Agropecuária',
    tag: 'Tradição',
    tagType: 'popular',
    priceDesc: 'Misturas especiais, sementes e suplementos',
    rating: 5.0,
    reviewsCount: 9,
    imageUrl: 'https://images.unsplash.com/photo-1522926197415-e56add415494?auto=format&fit=crop&w=600&q=80',
    description: 'Misturas limpas e selecionadas para canários, calopsitas, coleiros, além de rações para criação e utilidades rurais.',
    highlights: ['Sementes selecionadas e ventiladas', 'Bebedouros e comedouros', 'Suplementos vitamínicos'],
  },
];

export const REVIEWS: ReviewItem[] = [
  {
    id: 'rev-1',
    author: 'Marcos Vinicius Souza',
    location: 'Jardim Petrópolis - Arapongas',
    rating: 5.0,
    date: 'Há 2 semanas',
    comment: 'Excelente atendimento! Sempre compro a ração do meu Golden e a entrega foi super rápida aqui no bairro. Atendimento no WhatsApp nota 10, tiraram todas as dúvidas.',
    verified: true,
  },
  {
    id: 'rev-2',
    author: 'Camila Fernandes',
    location: 'Arapongas - PR',
    rating: 5.0,
    date: 'Há 1 mês',
    comment: 'Lugar maravilhoso e atendimento muito atencioso. Levei minha cachorrinha para o banho e ela voltou cheirosa, calma e muito bem cuidada. Recomendo de olhos fechados!',
    verified: true,
  },
  {
    id: 'rev-3',
    author: 'Roberto Alencar',
    location: 'Arapongas - PR',
    rating: 5.0,
    date: 'Há 1 mês',
    comment: 'Melhor agropet da região! Grande variedade de medicamentos veterinários, preço justo e produtos de qualidade para pássaros e cães. Merecem todas as 5 estrelas.',
    verified: true,
  },
  {
    id: 'rev-4',
    author: 'Juliana P. Batista',
    location: 'Jardim Petrópolis - Arapongas',
    rating: 5.0,
    date: 'Há 2 meses',
    comment: 'Compro sempre pelo WhatsApp e eles entregam no mesmo dia. Pessoal muito honesto e prestativo, nunca me deixaram na mão quando precisei de remédio de urgência.',
    verified: true,
  },
];

export const FAQS: FaqItem[] = [
  {
    id: 'faq-1',
    question: 'Como faço um pedido para entrega em Arapongas?',
    answer: 'É muito simples! Basta clicar no botão de WhatsApp da página ou nos enviar uma mensagem no (43) 99179-2018. Diga qual produto ou ração você precisa, e nossa equipe confirma o valor e organiza a entrega direta na sua residência.',
    category: 'Entrega',
  },
  {
    id: 'faq-2',
    question: 'Como funciona o agendamento de Banho & Tosa?',
    answer: 'Você pode agendar o dia e horário mais conveniente pelo WhatsApp. Informamos o tempo estimado, tiramos dúvidas sobre o tipo de tosa (higiênica, geral ou na tesoura) e garantimos um atendimento respeitoso e sem estresse para seu cãozinho.',
    category: 'Serviços',
  },
  {
    id: 'faq-3',
    question: 'Vocês têm medicamentos veterinários e antipulgas a pronta entrega?',
    answer: 'Sim! Temos uma seção completa de farmácia veterinária com vermífugos, comprimidos mastigáveis antipulgas e carrapatos (como Bravecto, Nexgard, Simparic), pomadas, sprays e suplementos.',
    category: 'Farmácia',
  },
  {
    id: 'faq-4',
    question: 'Quais as formas de pagamento aceitas?',
    answer: 'Aceitamos Pix, cartões de crédito e débito (levamos a maquininha até você na entrega) e dinheiro. Tudo com total segurança e comodidade.',
    category: 'Pagamentos',
  },
  {
    id: 'faq-5',
    question: 'Onde a Sabiá Agropet fica localizada?',
    answer: 'Estamos na Rua Gavião Preto, nº 388 - Jardim Petrópolis em Arapongas - PR (CEP 86790-709). Você pode vir nos visitar presencialmente ou pedir tudo sem sair de casa!',
    category: 'Localização',
  },
  {
    id: 'faq-6',
    question: 'Vocês trabalham com produtos para pássaros e linha agro?',
    answer: 'Sim! Honrando nossa tradição agropecuária, temos sementes selecionadas e ventiladas para pássaros, comedouros, bebedouros, gaiolas e produtos para criação e pequenos animais.',
    category: 'Linha Agro',
  },
];
