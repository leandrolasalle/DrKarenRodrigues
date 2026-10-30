import { useState } from 'react';
import {
  Heart,
  CalendarCheck,
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  Share2,
  Check,
  ShieldCheck,
  HeartHandshake,
  Scale,
  MapPin,
  MessageCircle,
  LucideIcon,
} from 'lucide-react';
import KarenRodriguesLogo from './KarenRodriguesLogo';
import ProfessionalPortrait from './ProfessionalPortrait';
import JourneyActPhoto from './JourneyActPhoto';
import {
  OFFICE_CONTACTS,
  HERO_JOURNEY_ACTS,
  JOURNEY_PILLARS,
  JourneyPillar,
  getPublicSiteUrl,
} from '../models/legalData';

interface JourneyLandingPageProps {
  onBackToHome: () => void;
  onOpenConsultation: (subject?: string) => void;
}

const PILLAR_ICONS: Record<JourneyPillar['icon'], LucideIcon> = {
  HeartHandshake,
  Scale,
  ShieldCheck,
};

export default function JourneyLandingPage({
  onBackToHome,
  onOpenConsultation,
}: JourneyLandingPageProps) {
  const [copiedLink, setCopiedLink] = useState(false);
  const [activeActIndex, setActiveActIndex] = useState(0);

  const handleCopyJourneyUrl = async () => {
    const base = getPublicSiteUrl().replace(/#.*$/, '');
    const journeyUrl = `${base}#sobre-mim`;
    try {
      await navigator.clipboard.writeText(journeyUrl);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2500);
    } catch {
      // Fallback
    }
  };

  return (
    <div className="min-h-screen bg-[#F6F3E8] pb-16 text-[#18181B] animate-fadeIn">
      {/* Top Bar for Dedicated Landing Page */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-5">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-black/[0.06] px-1 pb-3">
          <button
            type="button"
            onClick={onBackToHome}
            className="inline-flex min-h-10 items-center gap-2 text-xs font-medium text-[#52525B] transition-colors hover:text-[#590907] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#590907] cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 text-[#590907]" />
            <span>Voltar para a Página Inicial</span>
          </button>

          <div className="flex items-center gap-2.5">
            <span className="hidden sm:inline-block text-[11px] font-medium text-[#71717A]">
              Sobre Mim · Da Estudante à Profissional
            </span>
            <button
              type="button"
              onClick={handleCopyJourneyUrl}
              className="inline-flex min-h-10 items-center gap-1.5 rounded-full border border-black/[0.06] bg-white/70 px-3.5 py-1.5 text-xs font-medium text-[#52525B] backdrop-blur-md transition-colors hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#590907] cursor-pointer"
            >
              {copiedLink ? (
                <>
                  <Check className="w-3.5 h-3.5 text-[#590907]" />
                  <span>Link da Página Copiado!</span>
                </>
              ) : (
                <>
                  <Share2 className="w-3.5 h-3.5 text-[#590907]" />
                  <span>Compartilhar Minha Jornada</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* 1. HERO EDITORIAL - A JORNADA DA HEROÍNA */}
      <section className="relative overflow-hidden pb-14 pt-8 lg:pb-20 lg:pt-12">
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-10">
              {/* Left Narrative Column (7 cols) */}
              <div className="relative space-y-6 text-center lg:col-span-7 lg:text-left">
                <h1 className="font-cinzel text-3xl font-medium leading-[1.14] text-[#18181B] sm:text-4xl lg:text-[3.2rem]">
                  De uma estudante com um sonho de justiça à advogada que{' '}
                  <span className="italic font-normal text-[#590907]">protege o seu futuro.</span>
                </h1>

                <p className="mx-auto max-w-[39rem] text-sm leading-relaxed text-[#52525B] sm:text-base lg:mx-0">
                  Minha trajetória foi construída passo a passo: da graduação em Direito às experiências em escritórios, órgãos públicos e tribunais. Sou pós-graduada em Direito de Família e Sucessões e Direito Previdenciário, e sigo em constante atualização para oferecer uma atuação cuidadosa e acolhedora.
                </p>

                <div className="grid grid-cols-2 gap-x-3 border-y border-black/[0.06] py-4 sm:grid-cols-5">
                  {HERO_JOURNEY_ACTS.map((act, idx) => {
                    const isLast = idx === HERO_JOURNEY_ACTS.length - 1;
                    const isSelected = activeActIndex === idx;
                    return (
                      <a
                        key={act.actNumber}
                        href="#atos-jornada"
                        onClick={() => setActiveActIndex(idx)}
                        className={`group ${
                          isLast ? 'col-span-2 sm:col-span-1' : ''
                        } border-b-2 px-2 py-2.5 text-center transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#590907] ${
                          isSelected
                            ? 'border-[#590907] text-[#18181B]'
                            : isLast
                            ? 'border-transparent hover:border-black/20'
                            : 'border-transparent hover:border-black/20'
                        }`}
                      >
                        <span
                          className={`block text-[9px] font-bold uppercase tracking-wider ${
                            isSelected ? 'text-[#590907]' : 'text-[#71717A]'
                          }`}
                        >
                          {act.actNumber}
                        </span>
                        <span
                          className="mt-0.5 block text-[11px] font-medium text-[#52525B]"
                        >
                          {act.shortLabel}
                        </span>
                      </a>
                    );
                  })}
                </div>

                {/* Primary CTAs */}
                <div className="flex flex-col items-center justify-center gap-3 pt-1 sm:flex-row lg:justify-start">
                  <button
                    type="button"
                    onClick={() => onOpenConsultation()}
                    className="inline-flex min-h-12 w-full items-center justify-center gap-2.5 rounded-lg bg-[#590907] px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#3E0605] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#590907] cursor-pointer sm:w-auto"
                  >
                    <CalendarCheck className="w-4 h-4 text-white/80" />
                    <span>Agendar Consulta Comigo</span>
                  </button>

                  <a
                    href="#atos-jornada"
                    className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-lg px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-[#52525B] transition-colors hover:text-[#590907] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#590907] sm:w-auto"
                  >
                    <span>Explorar os 5 Atos</span>
                  </a>
                </div>
              </div>

              {/* Portrait and personal statement */}
              <div className="flex flex-col items-center gap-7 text-center lg:col-span-5">
                <div className="w-full">
                  <ProfessionalPortrait variant="journey-hero" />
                </div>

                <div className="max-w-sm border-l border-[#590907]/35 pl-4 text-left">
                  <p className="font-serif text-sm italic leading-relaxed text-[#52525B] sm:text-base">
                    &ldquo;A estudante que passava madrugadas grifando códigos tornou-se a advogada que não descansa enquanto o direito do seu cliente não estiver seguro.&rdquo;
                  </p>
                  <p className="mt-2 text-[10px] font-medium uppercase tracking-[0.16em] text-[#71717A]">Karen Rodrigues</p>
                </div>
              </div>
          </div>
        </div>
      </section>

      {/* 2. OS 5 ATOS DA JORNADA */}
      <section
        id="atos-jornada"
        className="border-y border-black/[0.05] bg-white py-14 text-[#18181B] sm:py-20"
      >
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-7 flex flex-col gap-5 sm:mb-9 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-2xl">
              <p className="mb-3 inline-flex items-center gap-2 text-[10px] font-medium uppercase tracking-[0.2em] text-[#71717A] sm:text-[11px]">
                <span className="h-px w-7 bg-[#590907]" />
                Uma trajetória de propósito
              </p>
              <h2 className="font-cinzel text-3xl font-medium leading-[1.12] text-[#18181B] sm:text-4xl">
                Da Sala de Aula à Liderança Jurídica
              </h2>
              <p className="mt-3 max-w-xl text-sm leading-relaxed text-[#52525B] sm:text-base">
                Conheça os momentos que moldaram minha trajetória na advocacia.
              </p>
            </div>
            <p
              className="text-xs font-semibold text-[#71717A]"
              aria-live="polite"
              aria-label={`Etapa ${activeActIndex + 1} de ${HERO_JOURNEY_ACTS.length}`}
            >
              <span className="font-cinzel text-lg font-semibold text-[#590907]">
                {String(activeActIndex + 1).padStart(2, '0')}
              </span>
              <span className="mx-1.5 text-[#A1A1AA]">/</span>
              {String(HERO_JOURNEY_ACTS.length).padStart(2, '0')} atos
            </p>
          </div>

          <div className="w-full">
            <div className="relative grid w-full grid-cols-1">
              {HERO_JOURNEY_ACTS.map((act, index) => {
                const isActive = index === activeActIndex;
                return (
                  <article
                    id={`ato-${index}`}
                    key={act.actNumber}
                    aria-hidden={!isActive}
                    className={`group relative col-start-1 row-start-1 w-full transition-all duration-500 ease-out motion-reduce:transition-none ${
                      isActive
                        ? 'z-10 translate-y-0 opacity-100'
                        : 'pointer-events-none z-0 translate-y-2 opacity-0'
                    }`}
                  >
                    <div className="grid grid-cols-1 items-center gap-6 md:min-h-[420px] md:grid-cols-12 md:gap-10 lg:min-h-[460px] lg:gap-14">
                      <div className="flex min-h-[260px] w-full overflow-hidden rounded-2xl md:col-span-5 md:min-h-[390px] lg:col-span-6">
                        <JourneyActPhoto
                          actIndex={index}
                          actNumber={act.actNumber}
                          caption={act.photoCaption}
                          subcaption={act.archetypeTag}
                        />
                      </div>

                      <div className="flex flex-col justify-center text-left md:col-span-7 md:py-8 lg:col-span-6">
                        <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.2em] text-[#590907]">
                          {act.actNumber}
                          <span className="mx-2 text-[#590907]">·</span>
                          <span className="font-medium normal-case tracking-normal text-[#71717A]">
                            {act.stageTitle}
                          </span>
                        </p>

                        <h3 className="relative max-w-xl font-cinzel text-[1.65rem] font-medium leading-[1.2] text-[#18181B] sm:text-3xl lg:text-[2.1rem]">
                          {act.headline}
                        </h3>

                        <div className="my-5 h-px w-12 bg-[#590907]/50" />

                        <p className="max-w-xl text-sm leading-[1.85] text-[#52525B] sm:text-base">
                          {act.story}
                        </p>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>

          <nav
            aria-label="Navegação pelos atos da jornada"
            className="mt-7 overflow-x-auto border-y border-black/[0.06] sm:mt-9"
          >
          <div className="flex min-w-max sm:min-w-0 sm:justify-between">
            {HERO_JOURNEY_ACTS.map((act, index) => {
              const isActive = index === activeActIndex;
              return (
                <button
                  key={act.actNumber}
                  type="button"
                  onClick={() => setActiveActIndex(index)}
                  aria-pressed={isActive}
                  className={`relative flex min-h-[4.25rem] min-w-[7.5rem] flex-col items-start justify-center gap-1 border-b-2 px-4 py-2.5 text-left transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#590907] motion-reduce:transition-none sm:min-w-0 sm:flex-1 ${
                    isActive
                      ? 'border-[#8B741F] bg-[#FBF6E9]/70 text-[#18181B] shadow-[inset_0_-2px_0_rgba(184,146,42,0.22),0_5px_18px_rgba(184,146,42,0.12)]'
                      : 'border-transparent hover:border-[#8B741F]/45 hover:bg-[#FBF6E9]/35 hover:text-[#590907] hover:shadow-[0_4px_14px_rgba(184,146,42,0.1)]'
                  }`}
                >
                  <span className="flex min-w-0 items-baseline gap-2">
                    <span className={`font-cinzel text-xs font-bold ${isActive ? 'text-[#590907]' : 'text-[#71717A]'}`}>
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span className="block text-[9px] font-semibold uppercase tracking-[0.14em] text-[#A1A1AA]">
                      {act.actNumber}
                    </span>
                  </span>
                  <span className="block truncate text-[11px] font-semibold text-[#52525B] sm:text-xs">{act.shortLabel}</span>
                </button>
              );
            })}
          </div>
          </nav>

          <div className="mt-2 flex items-center justify-between">
            <button
              type="button"
              onClick={() =>
                setActiveActIndex((index) =>
                  index === 0 ? HERO_JOURNEY_ACTS.length - 1 : index - 1
                )
              }
              className="inline-flex min-h-11 items-center gap-2 rounded-full px-4 text-xs font-semibold text-[#52525B] transition-colors hover:bg-black/[0.04] hover:text-[#590907] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#590907] motion-reduce:transition-none"
            >
              <ChevronLeft className="h-4 w-4" />
              Anterior
            </button>
            <span className="text-[11px] font-medium text-[#71717A]">
              {HERO_JOURNEY_ACTS[activeActIndex].shortLabel}
            </span>
            <button
              type="button"
              onClick={() =>
                setActiveActIndex((index) => (index + 1) % HERO_JOURNEY_ACTS.length)
              }
              className="inline-flex min-h-11 items-center gap-2 rounded-full px-4 text-xs font-semibold text-[#52525B] transition-colors hover:bg-black/[0.04] hover:text-[#590907] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#590907] motion-reduce:transition-none"
            >
              Próxima
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </section>

      {/* 3. OS 3 ELIXIRES CONQUISTADOS NA JORNADA (PILARES DO ATENDIMENTO HOJE) */}
      <section className="border-t border-black/[0.05] bg-[#F6F3E8] py-16 text-[#18181B] sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-10 max-w-2xl text-center">
            <span className="mb-3 inline-block border-b border-[#590907]/25 pb-1.5 text-[10px] font-medium uppercase tracking-[0.2em] text-[#71717A]">
              O Legado da Jornada
            </span>
            <h2 className="font-cinzel text-2xl font-medium text-[#18181B] sm:text-3xl">
              O que essa caminhada entrega para você hoje
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {JOURNEY_PILLARS.map((pillar) => {
              const PillarIcon = PILLAR_ICONS[pillar.icon];
              return (
                <div
                  key={pillar.id}
                  className="group space-y-4 border-t border-black/[0.06] px-4 py-7 text-center transition-colors duration-300 hover:border-[#8B741F]/50"
                >
                  <div
                    className="relative mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-[#8B741F]/35 bg-gradient-to-br from-white via-[#FBF6E9] to-[#F3E8CC] shadow-[inset_0_1px_0_rgba(255,255,255,0.95),0_5px_14px_rgba(184,146,42,0.13)] transition-shadow group-hover:shadow-[0_7px_18px_rgba(184,146,42,0.2)] after:absolute after:inset-[4px] after:rounded-full after:border after:border-[#8B741F]/15"
                  >
                    <PillarIcon className="h-5 w-5 text-[#590907]" strokeWidth={1.6} />
                  </div>
                  <h3 className="font-cinzel text-lg font-medium text-[#18181B]">
                    {pillar.title}
                  </h3>
                  <p className="text-xs leading-relaxed text-[#52525B] sm:text-sm">
                    {pillar.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Presence Bar */}
          <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-y border-black/[0.06] py-5 text-xs text-[#71717A]">
            <div className="flex items-center gap-2.5">
              <Heart className="w-4 h-4 shrink-0 fill-[#590907] text-[#590907]" />
              <span className="font-semibold text-[#27272A]">
                Dra. Karen Rodrigues · OAB/RJ 265.765 · Pós-graduada
              </span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 shrink-0 text-[#590907]" />
              <span>Experiência jurídica desde 2009 · Pós-graduada em Direito Previdenciário</span>
            </div>
          </div>
        </div>
      </section>

      {/* 4. BOTTOM CALL TO ACTION */}
      <section className="mx-auto max-w-7xl px-4 pb-8 pt-2 sm:px-6 lg:px-8">
        <div className="border-y border-black/[0.06] bg-white px-7 py-10 text-center text-[#18181B] shadow-[0_4px_25px_rgba(0,0,0,0.02)] sm:px-10 sm:py-12">
          <div className="space-y-5">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-[#8B741F]/35 bg-gradient-to-br from-white via-[#FBF6E9] to-[#F3E8CC] p-2 shadow-[inset_0_1px_0_rgba(255,255,255,0.95),0_6px_18px_rgba(184,146,42,0.16)]">
            <KarenRodriguesLogo variant="emblem" className="w-full h-full" />
          </div>

          <h2 className="mx-auto max-w-3xl font-cinzel text-2xl font-medium text-[#18181B] sm:text-3xl">
            Deixe quem construiu essa jornada cuidar do seu caso agora.
          </h2>

          <p className="mx-auto max-w-xl text-xs leading-relaxed text-[#52525B] sm:text-sm">
            Responda nossa triagem rápida em 1 minuto para que eu conheça sua situação antes de conversarmos sobre a consulta.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-2">
            <button
              type="button"
              onClick={() => onOpenConsultation()}
              className="inline-flex min-h-12 w-full items-center justify-center gap-2.5 rounded-lg bg-[#590907] px-8 py-4 text-sm font-semibold text-white transition-colors hover:bg-[#3E0605] sm:w-auto"
            >
              <CalendarCheck className="w-4 h-4 text-white/80" />
              <span>Fazer Triagem Rápida & Agendar Consulta</span>
            </button>

            <a
              href={OFFICE_CONTACTS.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-lg border border-black/[0.07] px-6 py-4 text-xs font-semibold text-[#52525B] transition-colors hover:bg-[#F6F3E8] sm:w-auto"
            >
              <MessageCircle className="w-4 h-4 text-[#590907]" />
              <span>Falar no WhatsApp</span>
            </a>
          </div>
          </div>
        </div>
      </section>
    </div>
  );
}
