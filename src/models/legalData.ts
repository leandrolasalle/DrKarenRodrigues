export type ServiceIconName =
  | 'HeartHandshake'
  | 'FileCheck'
  | 'Briefcase'
  | 'Building2'
  | 'ShieldCheck'
  | 'Sparkles';

export interface SimpleService {
  id: string;
  title: string;
  shortDesc: string;
  tag: string;
  icon: ServiceIconName;
  whatsappMsg: string;
}

export interface HowItWorksStep {
  step: string;
  title: string;
  desc: string;
}

export interface HeroAct {
  actNumber: string;
  shortLabel: string;
  archetypeTag: string;
  stageTitle: string;
  headline: string;
  story: string;
  photoCaption: string;
}

export interface JourneyPillar {
  id: string;
  title: string;
  description: string;
  icon: 'HeartHandshake' | 'Scale' | 'ShieldCheck';
  accentBg: string;
  accentBorder: string;
  iconColor: string;
}

export const SIMPLE_SERVICES: SimpleService[] = [
  {
    id: 'familia',
    title: 'Família (Divórcio, Pensão, Guarda)',
    shortDesc: 'Divórcio amigável ou litigioso, pensão alimentícia, guarda dos filhos e partilha de bens.',
    tag: 'Mais Procurado',
    icon: 'HeartHandshake',
    whatsappMsg: 'Olá, Dra. Karen! Gostaria de agendar uma consulta sobre Direito de Família.',
  },
  {
    id: 'contratos',
    title: 'Contratos & Imóveis',
    shortDesc: 'Análise antes de assinar contratos de compra, venda, aluguel ou distrato imobiliário.',
    tag: 'Segurança',
    icon: 'FileCheck',
    whatsappMsg: 'Olá, Dra. Karen! Gostaria de analisar um contrato/imóvel com segurança.',
  },
  {
    id: 'empresas',
    title: 'Empresarial & Societário',
    shortDesc: 'Proteção jurídica para sócios, contratos comerciais, cobranças e prevenção de processos.',
    tag: 'Corporativo',
    icon: 'Building2',
    whatsappMsg: 'Olá, Dra. Karen! Gostaria de consultoria jurídica para minha empresa/negócio.',
  },
  {
    id: 'consumidor',
    title: 'Consumidor, Golpes ou Indenização',
    shortDesc: 'Defesa contra cobranças indevidas, fraudes bancárias, negativação injusta e danos morais.',
    tag: 'Defesa Rápida',
    icon: 'ShieldCheck',
    whatsappMsg: 'Olá, Dra. Karen! Gostaria de ajuda com um problema de consumidor/indenização.',
  },
  {
    id: 'previdenciario',
    title: 'Direito Previdenciário e Acidentário',
    shortDesc: 'Orientação em benefícios previdenciários, pensão por morte e questões relacionadas a acidentes de trabalho.',
    tag: 'Pós-graduação',
    icon: 'FileCheck',
    whatsappMsg: 'Olá, Dra. Karen! Gostaria de orientação sobre um caso previdenciário ou acidentário.',
  },
];

export const SERVICE_TITLES: string[] = SIMPLE_SERVICES.map((service) => service.title);

export const HOW_IT_WORKS_STEPS: HowItWorksStep[] = [
  {
    step: '1',
    title: 'Triagem rápida em 1 minuto',
    desc: 'Você responde perguntas simples sobre seu caso (assunto, urgência e se já tem processo) para agilizar tudo.',
  },
  {
    step: '2',
    title: 'Atendimento já direcionado',
    desc: 'Sua ficha chega organizada no meu WhatsApp para eu já saber sua necessidade antes mesmo da consulta.',
  },
  {
    step: '3',
    title: 'Consulta e solução segura',
    desc: 'Na consulta, avaliamos sua situação e conversamos sobre os caminhos possíveis para proteger seus direitos.',
  },
];

export const HERO_JOURNEY_ACTS: HeroAct[] = [
  {
    actNumber: 'Ato I',
    shortLabel: 'O Início',
    archetypeTag: 'Primeiras experiências',
    stageTitle: 'Os primeiros passos no meio jurídico',
    headline: 'Uma trajetória profissional iniciada em 2009',
    story:
      'Minha experiência profissional começou em 2009 como assistente técnica em um escritório pericial de edificações. Essa etapa me aproximou da análise técnica e da rotina de processos, antes de seguir para estágios e funções em instituições jurídicas.',
    photoCaption: 'Primeira experiência profissional',
  },
  {
    actNumber: 'Ato II',
    shortLabel: 'A Travessia',
    archetypeTag: 'A Travessia do Limiar',
    stageTitle: 'Os Primeiros Passos nos Fóruns e Estágios',
    headline: 'Vivência prática em instituições, fóruns e escritórios',
    story:
      'A partir de 2010, atuei em experiências no Procon, nos Juizados Especiais e em estágios jurídicos, incluindo a Procuradoria Geral do Município de Niterói. Trabalhei com atendimento, conciliação, acompanhamento processual, pesquisa e apoio na elaboração de peças.',
    photoCaption: 'Experiência em órgãos e tribunais',
  },
  {
    actNumber: 'Ato III',
    shortLabel: 'A Conquista',
    archetypeTag: 'As Provas & A Conquista',
    stageTitle: 'Graduação em Direito e inscrição na OAB/RJ',
    headline: 'Formação jurídica e atuação profissional',
    story:
      'Sou bacharela em Direito pela Universidade Estácio de Sá e advogada inscrita na OAB/RJ sob o nº 265.765. Minha trajetória inclui atuação em escritórios e equipes jurídicas, com experiência em demandas cíveis, de família, previdenciárias, trabalhistas e de consumidor.',
    photoCaption: 'Bacharelado e inscrição profissional',
  },
  {
    actNumber: 'Ato IV',
    shortLabel: 'Especialização',
    archetypeTag: 'Formação e atualização',
    stageTitle: 'Pós-graduação em Família, Sucessões e Previdenciário',
    headline: 'Formação especializada para lidar com questões que mudam vidas',
    story:
      'Aperfeiçoei minha formação por meio de pós-graduação lato sensu em Direito de Família e Sucessões e em Direito Previdenciário, pela Faculdade Líbano. Desde então, mantenho constante aprimoramento dos meus conhecimentos jurídicos e da minha prática profissional.',
    photoCaption: 'Pós-graduação e atualização jurídica',
  },
  {
    actNumber: 'Ato V',
    shortLabel: 'A Plenitude',
    archetypeTag: 'Experiência prática',
    stageTitle: 'Uma trajetória construída em diferentes frentes jurídicas',
    headline: 'Karen Rodrigues Advocacia: Toda essa jornada a serviço do seu caso',
    story:
      'Minha experiência prática no meio jurídico começou em 2009 e passou por escritórios, órgãos públicos e tribunais. Atuei em demandas de família, sucessões, previdenciárias, trabalhistas, cíveis, imobiliárias e de consumidor, sempre com atenção à análise cuidadosa de cada caso.',
    photoCaption: 'Experiência em diferentes áreas do Direito',
  },
];

export const JOURNEY_PILLARS: JourneyPillar[] = [
  {
    id: 'escuta',
    title: 'Escuta Humana & Acolhedora',
    description:
      'Você fala diretamente comigo em um ambiente seguro e respeitoso, onde sua história é ouvida com calma e sem termos complicados.',
    icon: 'HeartHandshake',
    accentBg: 'bg-[#FAF0F2]',
    accentBorder: 'border-[#DEC0C7]',
    iconColor: 'text-[#5C1828]',
  },
  {
    id: 'estrategia',
    title: 'Formação e atualização contínua',
    description:
      'Pós-graduação em Direito de Família e Sucessões e Direito Previdenciário, além de cursos de atualização em temas jurídicos e prática profissional.',
    icon: 'Scale',
    accentBg: 'bg-[#FAF5E6]',
    accentBorder: 'border-[#E6D5A7]',
    iconColor: 'text-[#8B741F]',
  },
  {
    id: 'agilidade',
    title: 'Agilidade & Transparência',
    description:
      'Priorizo o caminho mais rápido para resolver seu problema e mantenho você sempre informada diretamente pelo WhatsApp.',
    icon: 'ShieldCheck',
    accentBg: 'bg-[#FAF0F2]',
    accentBorder: 'border-[#DEC0C7]',
    iconColor: 'text-[#5C1828]',
  },
];

export const SITE_METADATA = {
  name: 'Dra. Karen Rodrigues Advocacia',
  title: 'Karen Rodrigues | Advocacia Estratégica & Consultoria Jurídica',
  description:
    'Advogada inscrita na OAB/RJ, com experiência em Direito de Família e Sucessões, Previdenciário, Trabalhista, Imobiliário e do Consumidor.',
  legalDescription:
    'Conheça a trajetória e a formação de Dra. Karen Rodrigues, advogada inscrita na OAB/RJ, com pós-graduação em Direito de Família e Sucessões e Direito Previdenciário.',
  fallbackPublicUrl:
    'https://ais-pre-52eaue4tcyndq325etrcct-89955689891.us-east1.run.app',
  ogImagePath: '/images+15anos-removebg-preview.png',
  whatsappShareMessage: (publicUrl: string) =>
    `Olá! Confira o site oficial da Dra. Karen Rodrigues | Consultoria Jurídica Especializada (OAB/RJ 265.765):\n\n${publicUrl}`,
};

export const OFFICE_CONTACTS = {
  phone: '(21) 99791-9078',
  whatsappRaw: '5521997919078',
  whatsappUrl:
    'https://wa.me/5521997919078?text=Ol%C3%A1%2C%20Dra.%20Karen%20Rodrigues!%20Gostaria%20de%20agendar%20uma%20consulta.',
  messagesPhone: '(21) 99569-0638',
  messagesPhoneRaw: '5521995690638',
  email: 'drakarenrodrigues.adv.42@gmail.com',
  linkedIn: 'https://www.linkedin.com/in/karenrodrigues-34059979/',
  instagram: 'https://www.instagram.com/advkarenrodrigues?cplk=djdpY2U1ajQwY3Vp',
  publicUrl: SITE_METADATA.fallbackPublicUrl,
};

export function getPublicSiteUrl(): string {
  if (typeof window !== 'undefined') {
    const { origin, pathname } = window.location;
    if (!origin.includes('ais-dev-') && !origin.includes('localhost')) {
      return `${origin}${pathname}`;
    }
  }
  return OFFICE_CONTACTS.publicUrl;
}

export function getPublicSiteImageUrl(): string {
  return new URL(SITE_METADATA.ogImagePath, getPublicSiteUrl()).toString();
}

export function buildWhatsAppShareUrl(publicUrl: string, message?: string): string {
  const text = message ?? SITE_METADATA.whatsappShareMessage(publicUrl);
  return `https://wa.me/?text=${encodeURIComponent(text)}`;
}

export function syncSeoMetadata(): void {
  if (typeof document === 'undefined') return;

  const publicUrl = getPublicSiteUrl();
  const imageUrl = getPublicSiteImageUrl();

  const canonical = document.querySelector('link[rel="canonical"]');
  const ogUrl = document.querySelector('meta[property="og:url"]');
  const ogTitle = document.querySelector('meta[property="og:title"]');
  const ogDescription = document.querySelector('meta[property="og:description"]');
  const ogImage = document.querySelector('meta[property="og:image"]');
  const twitterImage = document.querySelector('meta[name="twitter:image"]');

  canonical?.setAttribute('href', publicUrl);
  ogUrl?.setAttribute('content', publicUrl);
  ogTitle?.setAttribute('content', SITE_METADATA.title);
  ogDescription?.setAttribute('content', SITE_METADATA.legalDescription);
  ogImage?.setAttribute('content', imageUrl);
  twitterImage?.setAttribute('content', imageUrl);
}

export function openExternalUrl(url: string): void {
  if (typeof document === 'undefined') return;
  const anchor = document.createElement('a');
  anchor.href = url;
  anchor.target = '_blank';
  anchor.rel = 'noopener noreferrer';
  document.body.appendChild(anchor);
  anchor.click();
  document.body.removeChild(anchor);
}
