import { useState } from 'react';
import { Menu, X, CalendarCheck, Calculator, Share2, Compass, Home } from 'lucide-react';
import type { ActivePage } from '../models/site';
import BrandIdentity from './ui/BrandIdentity';
import ActionButton from './ui/ActionButton';

interface HeaderProps {
  currentPage: ActivePage;
  onNavigatePage: (page: ActivePage, hash?: string) => void;
  onOpenCalculator: () => void;
  onOpenConsultation: (subject?: string) => void;
  onOpenShareUrl: () => void;
}

export default function Header({
  currentPage,
  onNavigatePage,
  onOpenCalculator,
  onOpenConsultation,
  onOpenShareUrl,
}: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const runMobileAction = (action: () => void) => {
    setMobileMenuOpen(false);
    action();
  };

  return (
    <header className="sticky top-3 z-40 mx-auto w-full max-w-7xl px-3 sm:px-5 lg:px-6">
      <div className="flex items-center justify-between gap-2 rounded-full border border-black/5 bg-white/70 px-3 py-2 text-[#18181B] shadow-[0_4px_25px_rgba(0,0,0,0.02)] backdrop-blur-md sm:gap-3 sm:px-5 lg:px-6">
        <BrandIdentity
          onClick={() => onNavigatePage('home')}
          aria-label="Karen Rodrigues Advocacia e Consultoria — página inicial"
          className="focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#590907] sm:gap-3"
        />

        {/* Primary site navigation */}
        <nav aria-label="Navegação principal" className="hidden items-center gap-1 text-xs font-semibold text-[#52525B] xl:flex">
          <button
            type="button"
            onClick={() => onNavigatePage('home', '#ajuda')}
            className="whitespace-nowrap rounded-full px-2.5 py-2 transition-colors hover:bg-black/[0.04] hover:text-[#18181B] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#590907] 2xl:px-3"
          >
            Áreas de Atuação
          </button>

          <button
            type="button"
            onClick={() => onNavigatePage('home', '#como-funciona')}
            className="whitespace-nowrap rounded-full px-2.5 py-2 transition-colors hover:bg-black/[0.04] hover:text-[#18181B] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#590907] 2xl:px-3"
          >
            Modo de Atendimento
          </button>

          <button
            type="button"
            onClick={() => onNavigatePage('sobre')}
            aria-current={currentPage === 'sobre' ? 'page' : undefined}
            className={`flex cursor-pointer items-center gap-1.5 whitespace-nowrap rounded-full border px-3 py-2 transition-all 2xl:px-3.5 ${
              currentPage === 'sobre'
                ? 'border-[#590907]/20 bg-[#590907]/[0.06] font-semibold text-[#590907]'
                : 'border-transparent font-medium text-[#52525B] hover:bg-black/[0.04] hover:text-[#18181B]'
            }`}
          >
            <Compass
              className={`w-3.5 h-3.5 ${
                currentPage === 'sobre' ? 'text-[#590907]' : 'text-[#A1A1AA]'
              }`}
            />
            <span>Minha Jornada</span>
          </button>

          <button
            type="button"
            onClick={() => onNavigatePage('home', '#contato')}
            className="whitespace-nowrap rounded-full px-2.5 py-2 transition-colors hover:bg-black/[0.04] hover:text-[#18181B] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#590907] 2xl:px-3"
          >
            Triagem & Contato
          </button>
        </nav>

        {/* Actions */}
        <div className="flex shrink-0 items-center gap-1 sm:gap-2">
          <ActionButton
            variant="ghost"
            onClick={onOpenShareUrl}
            title="Ver e compartilhar o link público do site"
            aria-label="Ver e compartilhar o link público do site"
            className="hidden h-9 w-9 rounded-full p-0 xl:inline-flex"
            icon={<Share2 className="h-3.5 w-3.5 text-[#590907]" />}
          />

          <ActionButton
            variant="ghost"
            onClick={onOpenCalculator}
            title="Calculadora de Prazos Processuais"
            aria-label="Abrir calculadora de prazos processuais"
            className="hidden h-9 w-9 rounded-full p-0 xl:inline-flex"
            icon={<Calculator className="h-3.5 w-3.5 text-[#590907]" />}
          />

          <ActionButton
            variant="primary"
            onClick={() => onOpenConsultation()}
            aria-label="Agendar consulta e iniciar triagem"
            className="h-9 px-2.5 sm:px-4"
            icon={<CalendarCheck className="h-4 w-4 text-white/80" />}
          >
            <span className="hidden sm:inline">Agendar Consulta</span>
          </ActionButton>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((isOpen) => !isOpen)}
            className="rounded-full p-2 text-[#52525B] transition-colors hover:bg-black/[0.04] hover:text-[#18181B] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#590907] xl:hidden"
            aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <nav id="mobile-navigation" aria-label="Navegação móvel" className="mt-2 space-y-1.5 rounded-2xl border border-black/5 bg-white/95 p-4 text-[#18181B] shadow-[0_4px_25px_rgba(0,0,0,0.06)] backdrop-blur-md xl:hidden sm:p-5">
          <button
            type="button"
            onClick={() => runMobileAction(() => onNavigatePage('home'))}
            className="flex min-h-11 w-full items-center gap-2 rounded-lg px-3 text-left text-sm font-semibold text-[#52525B] transition-colors hover:bg-black/[0.04] hover:text-[#18181B] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#590907]"
          >
            <Home className="w-4 h-4 text-[#590907]" />
            <span>Página Inicial</span>
          </button>

          <button
            type="button"
            onClick={() => runMobileAction(() => onNavigatePage('sobre'))}
            aria-current={currentPage === 'sobre' ? 'page' : undefined}
            className="flex min-h-11 w-full items-center justify-between rounded-lg bg-[#590907]/[0.06] px-3.5 text-left text-sm font-semibold text-[#590907] transition-colors hover:bg-[#590907]/[0.1] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#590907]"
          >
            <span className="flex items-center gap-2">
              <Compass className="w-4 h-4 text-[#590907]" />
              <span>Minha Jornada</span>
            </span>
          </button>

          <button
            type="button"
            onClick={() => runMobileAction(() => onNavigatePage('home', '#ajuda'))}
            className="min-h-11 w-full rounded-lg px-3 text-left text-sm font-medium text-[#52525B] transition-colors hover:bg-black/[0.04] hover:text-[#18181B] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#590907]"
          >
            Áreas de Atuação
          </button>

          <button
            type="button"
            onClick={() => runMobileAction(() => onNavigatePage('home', '#contato'))}
            className="min-h-11 w-full rounded-lg px-3 text-left text-sm font-medium text-[#52525B] transition-colors hover:bg-black/[0.04] hover:text-[#18181B] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#590907]"
          >
            Triagem & Contato
          </button>

          <div className="mt-2 flex flex-col gap-2 border-t border-black/5 pt-3 sm:flex-row sm:flex-wrap">
            <button
              type="button"
              onClick={() => runMobileAction(onOpenShareUrl)}
              className="flex min-h-11 w-full items-center justify-center gap-2 rounded-lg border border-black/5 px-4 py-2.5 text-xs font-semibold text-[#52525B] transition-colors hover:bg-black/[0.04] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#590907] sm:flex-1"
            >
              <Share2 className="w-4 h-4 text-[#590907]" />
              <span>Ver & Copiar Link do Site</span>
            </button>
            <button
              type="button"
              onClick={() => runMobileAction(onOpenCalculator)}
              className="flex min-h-11 w-full items-center justify-center gap-2 rounded-lg border border-black/5 px-4 py-2.5 text-xs font-semibold text-[#52525B] transition-colors hover:bg-black/[0.04] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#590907] sm:flex-1"
            >
              <Calculator className="w-4 h-4 text-[#590907]" />
              <span>Calculadora de Prazos Processuais</span>
            </button>
            <button
              type="button"
              onClick={() => runMobileAction(() => onOpenConsultation())}
              className="flex min-h-11 w-full items-center justify-center gap-2 rounded-lg bg-[#590907] px-4 py-3 text-center text-xs font-semibold text-white transition-colors hover:bg-[#3E0605] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#590907]"
            >
              <CalendarCheck className="w-4 h-4 text-white/80" />
              <span>Agendar Consulta (Triagem Rápida)</span>
            </button>
          </div>
        </nav>
      )}
    </header>
  );
}
