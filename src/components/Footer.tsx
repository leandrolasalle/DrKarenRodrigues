import { Heart, MessageCircle, Share2, Compass } from 'lucide-react';
import { OFFICE_CONTACTS } from '../models/legalData';
import KarenRodriguesLogo from './KarenRodriguesLogo';
import type { ActivePage } from '../models/site';
import ActionButton from './ui/ActionButton';

interface FooterProps {
  onNavigatePage: (page: ActivePage, hash?: string) => void;
  onOpenCalculator: () => void;
  onOpenShareUrl: () => void;
}

export default function Footer({
  onNavigatePage,
  onOpenCalculator,
  onOpenShareUrl,
}: FooterProps) {
  return (
    <footer className="border-t border-black/[0.05] bg-[#F6F3E8] py-12 text-xs text-[#52525B]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          {/* Brand with official logo */}
          <button
            type="button"
            onClick={() => onNavigatePage('home')}
            className="flex items-center gap-3.5 text-left cursor-pointer"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#590907] p-1.5">
              <KarenRodriguesLogo variant="emblem" className="w-full h-full" />
            </div>
            <div>
              <span className="block font-cinzel text-base font-semibold tracking-wider text-[#18181B]">
                Karen Rodrigues
              </span>
              <span className="text-[11px] text-[#71717A]">
                Advocacia · OAB/RJ 265.765
              </span>
            </div>
          </button>

          {/* Quick links */}
          <nav aria-label="Links do rodapé" className="flex flex-wrap items-center justify-center gap-5 text-xs font-medium text-[#52525B]">
            <button
              type="button"
              onClick={() => onNavigatePage('home')}
              className="transition-colors hover:text-[#590907] cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#590907]"
            >
              Página Inicial
            </button>
            <button
              type="button"
              onClick={() => onNavigatePage('sobre')}
              className="inline-flex items-center gap-1 font-semibold text-[#590907] transition-colors hover:text-[#3E0605] cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#590907]"
            >
              <Compass className="w-3.5 h-3.5 text-[#590907]" />
              <span>Sobre Mim · Minha Jornada</span>
            </button>
            <button
              type="button"
              onClick={() => onNavigatePage('home', '#ajuda')}
              className="transition-colors hover:text-[#590907] cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#590907]"
            >
              Áreas de Atuação
            </button>
            <button
              type="button"
              onClick={() => onNavigatePage('home', '#contato')}
              className="transition-colors hover:text-[#590907] cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#590907]"
            >
              Triagem & Contato
            </button>
            <button
              onClick={onOpenCalculator}
              className="font-medium text-[#52525B] transition-colors hover:text-[#590907] cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#590907]"
            >
              Calculadora de Prazos (CPC)
            </button>
            <button
              onClick={onOpenShareUrl}
              className="inline-flex items-center gap-1 font-medium text-[#52525B] transition-colors hover:text-[#590907] cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#590907]"
            >
              <Share2 className="w-3.5 h-3.5 text-[#590907]" />
              <span>Compartilhar Link</span>
            </button>
          </nav>

          {/* WhatsApp CTA */}
          <ActionButton
            as="a"
            href={OFFICE_CONTACTS.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            variant="primary"
            className="px-5 py-2.5 text-xs"
            icon={<MessageCircle className="h-3.5 w-3.5 text-white/80" />}
          >
            Chamar no WhatsApp
          </ActionButton>
        </div>

        {/* Ethical Note & Copyright */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-black/[0.05] pt-6 text-center text-[11px] text-[#71717A] sm:flex-row sm:text-left">
          <p>
            © {new Date().getFullYear()} Dra. Karen Rodrigues Advocacia. Em conformidade com o Provimento CFOAB 205/2021.
          </p>
          <div className="flex items-center justify-center gap-1 font-medium text-[#52525B]">
            <span>Atendimento com dedicação e respeito</span>
            <Heart className="w-3 h-3 fill-[#590907] text-[#590907]" />
          </div>
        </div>
      </div>
    </footer>
  );
}

