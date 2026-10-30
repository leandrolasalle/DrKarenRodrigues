import { useState, useId, useEffect } from 'react';
import {
  calcularPrazoProcessual,
  formatarDataBrasileira,
  DeadlineCalculationResult,
} from '../utils/prazosCalculadora';
import { X, Copy, Check } from 'lucide-react';

interface DeadlinesModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const PRAZO_PRESETS = [
  { label: '5 dias (Embargos)', dias: 5 },
  { label: '8 dias (Trabalhista/CLT)', dias: 8 },
  { label: '15 dias (Apelação / Defesa CPC)', dias: 15 },
  { label: '30 dias (Fazenda Pública)', dias: 30 },
] as const;

export default function DeadlinesModal({ isOpen, onClose }: DeadlinesModalProps) {
  const todayStr = new Date().toISOString().split('T')[0];
  const dateInputId = useId();

  const [dataDisp, setDataDisp] = useState<string>(todayStr);
  const [selectedPrazoDias, setSelectedPrazoDias] = useState<number>(15);
  const [copied, setCopied] = useState<boolean>(false);

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const resultado: DeadlineCalculationResult = calcularPrazoProcessual(
    dataDisp,
    selectedPrazoDias,
    true
  );

  const handleCopyResumo = () => {
    const texto = `CERTIDÃO DE PRAZO (CPC/2015)
Disponibilização: ${formatarDataBrasileira(resultado.disponibilizacaoDate)}
Publicação: ${formatarDataBrasileira(resultado.publicacaoDate)}
Início Contagem: ${formatarDataBrasileira(resultado.inicioContagemDate)}
Prazo: ${resultado.totalDiasUteis} dias úteis
VENCIMENTO FATAL: ${formatarDataBrasileira(resultado.vencimentoDate)}
Dra. Karen Rodrigues Advocacia · OAB/RJ 265.765`;

    navigator.clipboard.writeText(texto).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-[#18181B]/40 p-4 backdrop-blur-sm sm:p-6"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative my-8 w-full max-w-lg space-y-6 rounded-2xl border border-black/[0.06] bg-[#FFFEFC] p-6 text-[#18181B] shadow-[0_16px_60px_rgba(24,24,27,0.16)] sm:p-7"
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-black/[0.06] pb-4">
          <div>
            <h3 className="font-cinzel text-lg font-medium text-[#18181B]">
              Calculadora de Prazos em Dias Úteis
            </h3>
            <p className="mt-0.5 text-xs font-medium text-[#71717A]">
              Regras oficiais do Novo CPC (Lei 13.105/15)
            </p>
          </div>
          <button
            onClick={onClose}
            className="rounded-full p-2 text-[#71717A] transition-colors hover:bg-black/[0.04] hover:text-[#18181B] cursor-pointer"
            aria-label="Fechar"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Input date */}
        <div className="space-y-4">
          <div>
            <label
              htmlFor={dateInputId}
              className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-[#71717A]"
            >
              Data que constou no Diário (DJe):
            </label>
            <input
              id={dateInputId}
              type="date"
              value={dataDisp}
              onChange={(e) => setDataDisp(e.target.value)}
              className="w-full rounded-lg border border-black/[0.07] bg-white px-4 py-2.5 text-sm text-[#18181B] focus:outline-none focus:border-[#590907]/50"
            />
          </div>

          {/* Quick presets */}
          <div>
            <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-[#71717A]">
              Escolha o Prazo Legal:
            </label>
            <div className="grid grid-cols-2 gap-2">
              {PRAZO_PRESETS.map((p) => (
                <button
                  key={p.dias}
                  type="button"
                  onClick={() => setSelectedPrazoDias(p.dias)}
                  className={`py-2 px-3 rounded-full text-xs font-medium border text-center transition-colors cursor-pointer ${
                    selectedPrazoDias === p.dias
                      ? 'border-[#590907] bg-[#590907] font-semibold text-white'
                      : 'border-black/[0.07] bg-white text-[#52525B] hover:border-[#590907]/30 hover:bg-[#F6F3E8]'
                  }`}
                >
                  {p.label}
                </button>
              ))}
            </div>
          </div>

          {/* Result card */}
          <div className="space-y-2 border-y border-black/[0.06] bg-white p-5 text-center">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#590907]">
              Data Fatal de Vencimento
            </span>
            <div className="font-cinzel text-3xl font-medium tabular-nums text-[#18181B]">
              {formatarDataBrasileira(resultado.vencimentoDate)}
            </div>
            <p className="text-[11px] text-[#71717A]">
              Exclui fins de semana, feriados nacionais e recesso forense.
            </p>
          </div>
        </div>

        {/* Modal footer */}
        <div className="flex items-center justify-between gap-3 border-t border-black/[0.06] pt-2">
          <button
            type="button"
            onClick={handleCopyResumo}
            className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-lg border border-black/[0.07] py-2.5 text-xs font-semibold text-[#52525B] transition-colors hover:bg-[#F6F3E8] cursor-pointer"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-600" />
                <span>Copiado!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5 text-[#590907]" />
                <span>Copiar Resumo</span>
              </>
            )}
          </button>

          <button
            type="button"
            onClick={onClose}
            className="rounded-lg bg-[#590907] px-6 py-2.5 text-xs font-semibold text-white transition-colors hover:bg-[#3E0605] cursor-pointer"
          >
            Fechar
          </button>
        </div>
      </div>
    </div>
  );
}

