import { SIMPLE_SERVICES, ServiceIconName } from '../models/legalData';
import {
  HeartHandshake,
  FileCheck,
  Briefcase,
  Building2,
  ShieldCheck,
  Sparkles,
  CalendarCheck,
  ArrowRight,
  LucideIcon,
} from 'lucide-react';

interface ServicesSectionProps {
  onSelectService: (serviceTitle: string) => void;
}

const SERVICE_ICONS: Record<ServiceIconName, LucideIcon> = {
  HeartHandshake,
  FileCheck,
  Briefcase,
  Building2,
  ShieldCheck,
  Sparkles,
};

export default function ServicesSection({ onSelectService }: ServicesSectionProps) {
  return (
    <section id="ajuda" className="border-y border-black/[0.04] bg-white py-16 text-[#18181B] sm:py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="mb-10 flex flex-col gap-4 sm:mb-12 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.2em] text-[#71717A] sm:text-xs">
              Áreas de atuação
            </p>
            <h2 className="font-cinzel text-3xl font-medium tracking-tight text-[#18181B] sm:text-4xl">
            Como posso te ajudar hoje?
            </h2>
          </div>
          <p className="max-w-md text-sm leading-7 text-[#52525B]">
            Escolha o assunto que mais se aproxima da sua necessidade. Vamos entender seu caso
            com cuidado desde o primeiro contato.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-x-8 gap-y-5 md:grid-cols-2 xl:grid-cols-3">
          {SIMPLE_SERVICES.map((service, index) => {
            const IconComponent = SERVICE_ICONS[service.icon] || Sparkles;
            return (
              <article
                key={service.id}
                className="group flex min-h-[230px] flex-col justify-between border border-[#B88622]/20 bg-white p-6 shadow-[0_8px_28px_rgba(184,146,42,0.09)] transition-all duration-300 hover:-translate-y-1 hover:border-[#B88622]/45 hover:shadow-[0_16px_38px_rgba(184,146,42,0.2)] sm:p-7"
              >
                <div>
                  <div className="mb-6 flex items-center justify-between pb-1">
                    <span className="font-cinzel text-sm text-[#A1A1AA]">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span className="relative flex h-11 w-11 items-center justify-center rounded-full border border-[#B88622]/35 bg-gradient-to-br from-white via-[#FBF6E9] to-[#F3E8CC] shadow-[inset_0_1px_0_rgba(255,255,255,0.95),0_5px_14px_rgba(184,146,42,0.13)] after:absolute after:inset-[4px] after:rounded-full after:border after:border-[#B88622]/15">
                      <IconComponent className="h-5 w-5 text-[#5B1422]" strokeWidth={1.6} />
                    </span>
                  </div>
                  <p className="mb-2 text-[9px] font-medium uppercase tracking-[0.16em] text-[#71717A]">
                    {service.tag}
                  </p>
                  <h3 className="font-cinzel text-xl font-medium leading-snug text-[#18181B] transition-colors group-hover:text-[#5B1422]">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-[#52525B]">
                    {service.shortDesc}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => onSelectService(service.title)}
                  className="mt-6 inline-flex min-h-11 w-fit items-center gap-2 text-xs font-semibold text-[#5B1422] transition-colors hover:text-[#85263E] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5B1422]"
                >
                  <CalendarCheck className="h-4 w-4 text-[#5B1422]" />
                  Conversar sobre este assunto
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </button>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
