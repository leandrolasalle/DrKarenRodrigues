import { GraduationCap, Award, MapPin, ArrowRight, Compass } from 'lucide-react';
import ProfessionalPortrait from './ProfessionalPortrait';

interface AboutSectionProps {
  onOpenJourneyPage: () => void;
}

export default function AboutSection({ onOpenJourneyPage }: AboutSectionProps) {
  return (
    <section id="sobre" className="border-t border-black/[0.05] bg-white py-16 text-[#18181B] sm:py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-14">
            <div className="flex h-full w-full">
              <ProfessionalPortrait variant="about-card" />
            </div>

            <div className="flex flex-col items-center justify-center gap-y-5 p-2 text-center md:items-start md:text-left">
              <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-[#71717A] sm:text-xs">
                Sobre a advogada
              </p>
              <h2 className="max-w-[22ch] font-cinzel text-2xl font-medium leading-[1.25] tracking-tight text-[#18181B] text-balance sm:text-[1.7rem] lg:max-w-none lg:text-[1.9rem]">
                &ldquo;Cada desafio desde os bancos da faculdade me preparou para{' '}
                <span className="italic font-normal text-[#590907]">defender a sua história hoje.</span>&rdquo;
              </h2>

              <p className="text-sm leading-7 text-[#52525B]">
                Conheça minha trajetória no Direito, iniciada em 2009, com experiência em escritórios, órgãos públicos e tribunais. Sou bacharela pela Universidade Estácio de Sá e pós-graduada em Direito de Família e Sucessões e Direito Previdenciário.
              </p>

              <div className="font-serif text-xl italic text-[#590907] leading-none">
                Dra. Karen Rodrigues
              </div>

              <div className="grid w-full grid-cols-1 gap-x-5 sm:grid-cols-3">
                <div className="flex items-center gap-3 border-t border-black/[0.06] py-3 text-left">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#8B741F]/30 bg-[#FBF6E9] shadow-[0_3px_10px_rgba(184,146,42,0.1)]">
                    <GraduationCap className="h-4 w-4 text-[#590907]" strokeWidth={1.6} />
                  </span>
                  <div className="text-xs">
                    <div className="font-semibold text-[#27272A]">Bacharela em Direito</div>
                    <div className="text-[10px] text-[#71717A]">Universidade Estácio de Sá</div>
                  </div>
                </div>

                <div className="flex items-center gap-3 border-t border-black/[0.06] py-3 text-left">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#8B741F]/30 bg-[#FBF6E9] shadow-[0_3px_10px_rgba(184,146,42,0.1)]">
                    <Award className="h-4 w-4 text-[#590907]" strokeWidth={1.6} />
                  </span>
                  <div className="text-xs">
                    <div className="font-semibold text-[#27272A]">Pós-graduada</div>
                    <div className="text-[10px] text-[#71717A]">Família, Sucessões e Previdenciário</div>
                  </div>
                </div>

                <div className="flex items-center gap-3 border-t border-black/[0.06] py-3 text-left">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#8B741F]/30 bg-[#FBF6E9] shadow-[0_3px_10px_rgba(184,146,42,0.1)]">
                    <MapPin className="h-4 w-4 text-[#590907]" strokeWidth={1.6} />
                  </span>
                  <div className="text-xs">
                    <div className="font-semibold text-[#27272A]">OAB/RJ 265.765</div>
                    <div className="text-[10px] text-[#71717A]">Inscrição principal e regular</div>
                  </div>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap items-center justify-center md:justify-start gap-3">
                <button
                  type="button"
                  onClick={onOpenJourneyPage}
                  className="inline-flex min-h-12 items-center gap-2.5 rounded-lg bg-[#590907] px-6 text-xs font-semibold text-white transition-colors hover:bg-[#3E0605] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#590907] sm:text-sm"
                >
                  <Compass className="w-4 h-4 text-white/80" />
                  <span>Conheça minha trajetória</span>
                  <ArrowRight className="w-4 h-4 text-white/80" />
                </button>
              </div>
          </div>
      </div>
      </div>
    </section>
  );
}

