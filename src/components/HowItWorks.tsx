import { HOW_IT_WORKS_STEPS, OFFICE_CONTACTS } from '../models/legalData';
import { MessageCircle } from 'lucide-react';

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="bg-[#FAF8F5] py-16 text-[#18181B] sm:py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="mb-10 grid gap-4 sm:mb-12 sm:grid-cols-2 sm:items-end">
          <div>
            <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.2em] text-[#71717A] sm:text-xs">
              Um processo transparente
            </p>
            <h2 className="font-cinzel text-3xl font-medium tracking-tight text-[#18181B] sm:text-4xl">
              Como funciona o atendimento?
            </h2>
          </div>
          <p className="max-w-lg text-sm leading-7 text-[#52525B] sm:justify-self-end">
            Um caminho simples para que você saiba o que esperar em cada etapa, sem burocracia
            desnecessária.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-7 md:grid-cols-3 md:gap-8">
          {HOW_IT_WORKS_STEPS.map((step, index) => (
            <article key={step.step} className="border-t border-black/[0.07] py-5">
              <div className="mb-6 flex items-center justify-between">
                <span className="font-cinzel text-4xl font-medium leading-none text-[#5B1422]">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span className="text-[9px] font-medium uppercase tracking-[0.16em] text-[#71717A]">
                  Etapa {step.step}
                </span>
              </div>
              <h3 className="font-cinzel text-xl font-medium text-[#18181B]">
                {step.title}
              </h3>
              <p className="mt-3 min-h-16 text-sm leading-6 text-[#52525B]">
                {step.desc}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-start gap-4 border-t border-black/5 pt-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-[#52525B]">
            O primeiro passo é uma conversa clara e sem compromisso.
          </p>
          <a
            href={OFFICE_CONTACTS.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-12 items-center gap-2 rounded-lg bg-[#5B1422] px-6 text-sm font-semibold text-white transition-colors hover:bg-[#6E1A2B] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5B1422]"
          >
            <MessageCircle className="h-4 w-4 text-white/80" />
            <span>Iniciar conversa no WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
}
