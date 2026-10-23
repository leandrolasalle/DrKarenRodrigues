import { ArrowRight, CalendarCheck, GraduationCap, ShieldCheck, Sparkles } from 'lucide-react';
import ProfessionalPortrait from './ProfessionalPortrait';

interface HeroProps {
  onOpenConsultation: () => void;
  onOpenJourneyPage: () => void;
}

const credentials = [
  { label: 'Pós-graduação lato sensu', detail: 'Família, Sucessões e Previdenciário', icon: GraduationCap },
  { label: 'Experiência jurídica desde 2009', detail: 'Escritórios, órgãos públicos e tribunais', icon: ShieldCheck },
];

export default function Hero({ onOpenConsultation, onOpenJourneyPage }: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-[#FAF8F5] pb-16 pt-12 text-[#18181B] sm:pb-20 sm:pt-16 lg:pb-24 lg:pt-20">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -right-40 -top-40 h-[34rem] w-[34rem] rounded-full bg-[#EFE8E2]/65 blur-3xl" />
      </div>

      <div className="relative mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 px-5 sm:px-8 lg:grid-cols-12 lg:gap-10 lg:px-10">
        <div className="text-center lg:col-span-7 lg:text-left">
          <div className="mb-6 inline-flex items-center gap-3 text-[10px] font-medium uppercase tracking-[0.2em] text-[#71717A] sm:text-xs">
            <span className="h-px w-8 bg-[#5B1422]" />
            Advocacia com clareza e acolhimento
            <span className="hidden h-px w-8 bg-black/10 sm:block" />
          </div>

          <h1 className="mx-auto max-w-4xl font-cinzel text-[2.6rem] font-medium leading-[1.08] tracking-[-0.04em] text-[#18181B] text-balance sm:text-5xl lg:mx-0 lg:text-[4.4rem]">
            Segurança jurídica.
            <br />
            <span className="font-normal italic text-[#5B1422]">Atendimento humano.</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-[#52525B] sm:text-lg lg:mx-0">
            Orientação clara para decisões importantes. Conte com uma advocacia próxima,
            estratégica e comprometida com a sua história.
          </p>

          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start">
            <button
              type="button"
              onClick={onOpenConsultation}
              className="inline-flex min-h-14 w-full items-center justify-center gap-3 rounded-lg bg-[#5B1422] px-7 text-sm font-semibold text-white shadow-[0_4px_20px_rgba(91,20,34,0.14)] transition-colors hover:bg-[#6E1A2B] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5B1422] sm:w-auto"
            >
              <CalendarCheck className="h-4 w-4 text-white/80" />
              Agendar uma consulta
            </button>
            <button
              type="button"
              onClick={onOpenJourneyPage}
              className="group inline-flex min-h-12 items-center justify-center gap-2 px-3 text-sm font-medium text-[#52525B] transition-colors hover:text-[#5B1422] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5B1422]"
            >
              Conheça minha trajetória
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>

          <div className="mx-auto mt-10 grid max-w-2xl grid-cols-2 border-y border-black/5 text-left lg:mx-0">
            {credentials.map(({ label, detail, icon: Icon }, index) => (
              <div
                key={label}
                className={`flex items-center gap-3 py-4 ${
                  index === 0 ? 'border-r border-black/5 pr-3 sm:pr-5' : 'pl-3 sm:pl-5'
                }`}
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#B88622]/30 bg-gradient-to-br from-white to-[#FBF6E9] shadow-[0_3px_12px_rgba(184,146,42,0.12)]">
                  <Icon className="h-4 w-4 text-[#5B1422]" strokeWidth={1.6} />
                </span>
                <div>
                  <p className="text-xs font-semibold text-[#27272A]">{label}</p>
                  <p className="mt-0.5 text-[11px] text-[#71717A]">{detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mx-auto w-full max-w-md lg:col-span-5 lg:max-w-[26rem]">
          <div className="relative">
            <div className="relative">
              <ProfessionalPortrait variant="hero" />
              <div className="absolute inset-x-0 bottom-0 rounded-b-[1.35rem] bg-gradient-to-t from-[#18181B]/80 via-[#18181B]/25 to-transparent px-6 pb-5 pt-20 text-left">
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/80">
                  OAB/RJ 265.765
                </p>
                <p className="mt-1 font-cinzel text-xl font-medium text-white">
                  Karen Rodrigues
                </p>
                <p className="mt-1 text-xs text-white/85">Advocacia & Consultoria Jurídica</p>
              </div>
            </div>
          </div>

          <div className="mt-5 flex items-start gap-3 px-2">
            <Sparkles className="mt-0.5 h-4 w-4 shrink-0 text-[#5B1422]" />
            <p className="text-xs leading-relaxed text-[#52525B]">
              Atendimento cuidadoso e individual em cada etapa.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
