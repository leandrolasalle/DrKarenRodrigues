import { useState, useEffect } from 'react';
import { X, Copy, Check, Share2, MessageCircle, Globe, Sparkles } from 'lucide-react';
import { getPublicSiteUrl, openExternalUrl } from '../models/legalData';
import KarenRodriguesLogo from './KarenRodriguesLogo';

interface ShareUrlModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ShareUrlModal({ isOpen, onClose }: ShareUrlModalProps) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const publicUrl = getPublicSiteUrl();

  const handleCopy = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(publicUrl).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2500);
      });
    }
  };

  const handleWhatsAppShare = () => {
    const message = encodeURIComponent(
      `Olá! Confira o site oficial da Dra. Karen Rodrigues | Advocacia & Consultoria Jurídica (OAB/RJ 265.765):\n\n${publicUrl}`
    );
    openExternalUrl(`https://wa.me/?text=${message}`);
  };

  const handleNativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Dra. Karen Rodrigues | Advocacia & Consultoria Jurídica',
          text: 'Advocacia com experiência em Direito de Família, Sucessões e Previdenciário.',
          url: publicUrl,
        });
      } catch {
        // User cancelled or share failed silently
      }
    } else {
      handleCopy();
    }
  };

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-[#18181B]/40 p-4 backdrop-blur-sm sm:p-6"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative my-8 w-full max-w-lg space-y-6 rounded-2xl border border-black/[0.06] bg-[#FFFEFC] p-6 text-[#18181B] shadow-[0_16px_60px_rgba(24,24,27,0.16)] sm:p-8"
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between border-b border-black/[0.06] pb-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#5B1422]/[0.06] text-[#5B1422]">
              <Globe className="h-5 w-5 text-[#5B1422]" />
            </div>
            <div>
              <h3 className="font-cinzel text-lg font-medium text-[#18181B]">
                Link Público do Seu Site
              </h3>
              <p className="mt-0.5 text-xs font-medium text-[#71717A]">
                Pronto para enviar no WhatsApp e colocar na Bio do Instagram
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="rounded-full p-2 text-[#71717A] transition-colors hover:bg-black/[0.04] hover:text-[#18181B] cursor-pointer"
            aria-label="Fechar"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Social Card Preview (How it looks on WhatsApp & Instagram) */}
        <div className="space-y-2">
          <div className="flex items-center gap-1.5 text-xs font-semibold text-[#52525B]">
            <Sparkles className="w-3.5 h-3.5 text-[#5B1422]" />
            <span>Prévia do Cartão ao Compartilhar no WhatsApp / Instagram:</span>
          </div>

          <div className="overflow-hidden rounded-xl border border-black/[0.06] bg-white shadow-[0_4px_25px_rgba(0,0,0,0.02)]">
            {/* Top visual banner of the social card */}
            <div className="flex flex-col items-center justify-center border-b border-black/[0.05] bg-[#FAF8F5] p-5">
              <KarenRodriguesLogo variant="full" className="w-44 h-auto" />
            </div>

            {/* Social meta text preview */}
            <div className="space-y-1 bg-white p-4">
              <div className="truncate font-mono text-[11px] font-semibold text-[#5B1422]">
                {publicUrl.replace(/^https?:\/\//, '')}
              </div>
              <div className="font-cinzel text-sm font-medium text-[#18181B]">
                Karen Rodrigues | Advocacia Estratégica & Consultoria Jurídica
              </div>
              <p className="line-clamp-2 text-xs leading-relaxed text-[#52525B]">
                Advogada inscrita na OAB/RJ, bacharela em Direito e pós-graduada em Direito de Família e Sucessões e Direito Previdenciário.
              </p>
            </div>
          </div>
        </div>

        {/* Public Link Box + Copy Button */}
        <div className="space-y-2">
          <label className="block text-xs font-semibold uppercase tracking-wider text-[#71717A]">
            Sua URL Gratuita Publicada:
          </label>
          <div className="flex items-center gap-2 rounded-lg border border-black/[0.07] bg-white p-1.5 pl-4">
            <input
              type="text"
              readOnly
              value={publicUrl}
              onClick={(e) => (e.target as HTMLInputElement).select()}
              className="w-full truncate bg-transparent font-mono text-xs text-[#18181B] focus:outline-none"
              aria-label="URL pública do site"
            />
            <button
              type="button"
              onClick={handleCopy}
              className="inline-flex shrink-0 items-center gap-1.5 rounded-lg bg-[#5B1422] px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-[#6E1A2B] cursor-pointer"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-white/80" />
                  <span>Copiado!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-white/80" />
                  <span>Copiar Link</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Direct Share Actions */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
          <button
            type="button"
            onClick={handleWhatsAppShare}
            className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#5B1422] px-4 py-3 text-xs font-semibold text-white transition-colors hover:bg-[#6E1A2B] cursor-pointer"
          >
            <MessageCircle className="w-4 h-4 text-white/80" />
            <span>Enviar no WhatsApp</span>
          </button>

          <button
            type="button"
            onClick={handleNativeShare}
            className="flex w-full items-center justify-center gap-2 rounded-lg border border-black/[0.07] px-4 py-3 text-xs font-semibold text-[#52525B] transition-colors hover:bg-[#FAF8F5] cursor-pointer"
          >
            <Share2 className="w-4 h-4 text-[#5B1422]" />
            <span>Compartilhar Link</span>
          </button>
        </div>

        <div className="pt-1 text-center text-[11px] text-[#71717A]">
          💡 Dica: Você pode colar este link diretamente na biografia do seu Instagram ou no perfil comercial do WhatsApp Business.
        </div>
      </div>
    </div>
  );
}
