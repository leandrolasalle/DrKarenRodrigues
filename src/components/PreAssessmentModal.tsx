import { useState, useEffect } from 'react';
import {
  X,
  CheckCircle2,
  MessageCircle,
  CalendarCheck,
  User,
  Building2,
  AlertTriangle,
  Clock,
  HelpCircle,
  FileText,
  Sparkles,
  ArrowRight,
  ArrowLeft,
} from 'lucide-react';
import { SERVICE_TITLES } from '../models/legalData';
import { classifyTriagePriority, sendTriageToWhatsApp } from '../utils/triage';

interface PreAssessmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultSubject?: string;
}

type ClientType = 'Pessoa Física (Para mim / Família)' | 'Empresa / Negócio (PJ)';
type CaseStage =
  | 'Quero dar entrada / resolver agora (Sem processo)'
  | 'Já existe processo na Justiça'
  | 'Revisar contrato ou fazer acordo extrajudicial';
type UrgencyLevel =
  | 'Urgente (Recebi intimação ou tenho prazo correndo)'
  | 'Resolver nos próximos dias'
  | 'Apenas planejamento / dúvida inicial';
type DocsStatus =
  | 'Sim, já tenho documentos ou nº do processo'
  | 'Ainda vou separar os documentos';
type FormatType = 'Online (Vídeo / WhatsApp)' | 'Presencial (a combinar)' | 'Ainda não defini';

export default function PreAssessmentModal({
  isOpen,
  onClose,
  defaultSubject,
}: PreAssessmentModalProps) {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [clientType, setClientType] = useState<ClientType>('Pessoa Física (Para mim / Família)');
  const [subject, setSubject] = useState<string>(defaultSubject || SERVICE_TITLES[0]);
  const [caseStage, setCaseStage] = useState<CaseStage>('Quero dar entrada / resolver agora (Sem processo)');
  const [urgency, setUrgency] = useState<UrgencyLevel>('Resolver nos próximos dias');
  const [docsStatus, setDocsStatus] = useState<DocsStatus>('Sim, já tenho documentos ou nº do processo');
  const [format, setFormat] = useState<FormatType>('Online (Vídeo / WhatsApp)');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [details, setDetails] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (defaultSubject) {
      setSubject(defaultSubject);
    }
  }, [defaultSubject]);

  useEffect(() => {
    if (isOpen) {
      setStep(1);
    }
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const priorityBadge = classifyTriagePriority(urgency, clientType);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;

    setSubmitted(true);
    setTimeout(() => {
      sendTriageToWhatsApp({
        name,
        phone,
        clientType,
        area: subject,
        situation: caseStage,
        urgency,
        docsStatus,
        format,
        details,
      });
      setSubmitted(false);
      onClose();
    }, 600);
  };

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-[#18181B]/40 p-4 backdrop-blur-sm sm:p-6"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative my-4 max-h-[calc(100dvh-2rem)] w-full max-w-2xl space-y-6 overflow-y-auto rounded-2xl border border-black/[0.06] bg-[#FFFEFC] p-5 text-[#18181B] shadow-[0_16px_60px_rgba(24,24,27,0.16)] sm:my-8 sm:p-8"
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-black/[0.06] pb-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#5B1422] text-white">
              <CalendarCheck className="h-4 w-4" />
            </div>
            <div>
              <h3 className="font-cinzel text-lg font-medium text-[#18181B] sm:text-xl">
                Agendar Consulta & Triagem Rápida
              </h3>
              <p className="mt-0.5 text-xs text-[#71717A]">
                Responda 3 passos rápidos para agilizarmos seu atendimento
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

        {/* Stepper Progress Bar */}
        <div className="grid grid-cols-3 gap-2">
          {[
            { num: 1, label: '1. Seu Perfil & Área' },
            { num: 2, label: '2. Momento & Urgência' },
            { num: 3, label: '3. Seus Dados' },
          ].map((item) => {
            const active = step === item.num;
            const completed = step > item.num;
            return (
              <button
                key={item.num}
                type="button"
                onClick={() => setStep(item.num as 1 | 2 | 3)}
                aria-current={active ? 'step' : undefined}
                className={`rounded-lg border px-3 py-2 text-xs font-medium transition-colors cursor-pointer ${
                  active
                      ? 'border-[#5B1422] bg-[#5B1422] text-white'
                    : completed
                      ? 'border-[#5B1422]/20 bg-[#5B1422]/[0.06] text-[#5B1422]'
                      : 'border-black/[0.07] bg-white text-[#71717A]'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* STEP 1: CLIENT TYPE & AREA */}
          {step === 1 && (
            <div className="space-y-6 animate-fadeIn">
              <div>
                <label className="mb-3 block text-[10px] font-semibold uppercase tracking-[0.16em] text-[#71717A]">
                  1. O atendimento é para você ou para uma empresa?
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  <button
                    type="button"
                    onClick={() => setClientType('Pessoa Física (Para mim / Família)')}
                    aria-pressed={clientType === 'Pessoa Física (Para mim / Família)'}
                    className={`flex items-center gap-3 rounded-lg border p-3.5 text-left transition-all cursor-pointer ${
                      clientType === 'Pessoa Física (Para mim / Família)'
                        ? 'border-[#B88622]/70 bg-[#FBF6E9] text-[#5B1422] shadow-[0_0_0_1px_rgba(184,146,42,0.16),0_6px_18px_rgba(184,146,42,0.18)]'
                        : 'border-black/[0.07] bg-white text-[#52525B] hover:border-[#B88622]/40 hover:bg-[#FAF8F5] hover:shadow-[0_5px_16px_rgba(184,146,42,0.11)]'
                    }`}
                  >
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#5B1422]/[0.06] text-[#5B1422]">
                      <User className="h-4 w-4" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold">Para Mim / Família</div>
                      <div className="text-[11px] text-[#71717A]">Pessoa Física</div>
                    </div>
                  </button>

                  <button
                    type="button"
                    onClick={() => setClientType('Empresa / Negócio (PJ)')}
                    aria-pressed={clientType === 'Empresa / Negócio (PJ)'}
                    className={`flex items-center gap-3 rounded-lg border p-3.5 text-left transition-all cursor-pointer ${
                      clientType === 'Empresa / Negócio (PJ)'
                        ? 'border-[#B88622]/70 bg-[#FBF6E9] text-[#5B1422] shadow-[0_0_0_1px_rgba(184,146,42,0.16),0_6px_18px_rgba(184,146,42,0.18)]'
                        : 'border-black/[0.07] bg-white text-[#52525B] hover:border-[#B88622]/40 hover:bg-[#FAF8F5] hover:shadow-[0_5px_16px_rgba(184,146,42,0.11)]'
                    }`}
                  >
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#5B1422]/[0.06] text-[#5B1422]">
                      <Building2 className="h-4 w-4" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold">Para Minha Empresa</div>
                      <div className="text-[11px] text-[#71717A]">Pessoa Jurídica / Sócios</div>
                    </div>
                  </button>
                </div>
              </div>

              <div>
                <label className="mb-3 block text-[10px] font-semibold uppercase tracking-[0.16em] text-[#71717A]">
                  2. Qual assunto descreve melhor o seu caso?
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {SERVICE_TITLES.map((area) => (
                    <button
                      key={area}
                      type="button"
                      onClick={() => setSubject(area)}
                      aria-pressed={subject === area}
                      className={`flex items-center justify-between rounded-lg border px-3.5 py-2.5 text-left text-xs font-medium transition-all cursor-pointer ${
                        subject === area
                          ? 'border-[#5B1422] bg-[#5B1422] font-semibold text-white shadow-[0_0_0_1px_rgba(184,146,42,0.7),0_7px_20px_rgba(184,146,42,0.24)]'
                          : 'border-black/[0.07] bg-white text-[#52525B] hover:border-[#B88622]/40 hover:bg-[#FAF8F5] hover:shadow-[0_5px_16px_rgba(184,146,42,0.11)]'
                      }`}
                    >
                      <span>{area}</span>
                      {subject === area && <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-white/80" />}
                    </button>
                  ))}
                </div>
              </div>

              <div className="pt-2 flex justify-end">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="inline-flex min-h-11 items-center gap-2 rounded-lg bg-[#5B1422] px-6 py-3 text-xs font-semibold text-white transition-colors hover:bg-[#6E1A2B] cursor-pointer"
                >
                  <span>Próximo Passo</span>
                  <ArrowRight className="w-4 h-4 text-white/80" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 2: CASE STAGE, URGENCY & DOCUMENTS */}
          {step === 2 && (
            <div className="space-y-6 animate-fadeIn">
              <div>
                <label className="mb-3 block text-[10px] font-semibold uppercase tracking-[0.16em] text-[#71717A]">
                  3. Em que pé está essa situação hoje?
                </label>
                <div className="space-y-2">
                  {(
                    [
                      'Quero dar entrada / resolver agora (Sem processo)',
                      'Já existe processo na Justiça',
                      'Revisar contrato ou fazer acordo extrajudicial',
                    ] as CaseStage[]
                  ).map((stage) => (
                    <button
                      key={stage}
                      type="button"
                      onClick={() => setCaseStage(stage)}
                      aria-pressed={caseStage === stage}
                      className={`flex w-full items-center justify-between rounded-lg border px-4 py-2.5 text-left text-xs font-medium transition-all cursor-pointer ${
                        caseStage === stage
                          ? 'border-[#B88622]/70 bg-[#FBF6E9] font-semibold text-[#5B1422] shadow-[0_0_0_1px_rgba(184,146,42,0.16),0_6px_18px_rgba(184,146,42,0.18)]'
                          : 'border-black/[0.07] bg-white text-[#52525B] hover:border-[#B88622]/40 hover:bg-[#FAF8F5] hover:shadow-[0_5px_16px_rgba(184,146,42,0.11)]'
                      }`}
                    >
                      <span>{stage}</span>
                      {caseStage === stage && <CheckCircle2 className="w-4 h-4 shrink-0 text-[#5B1422]" />}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="mb-3 block text-[10px] font-semibold uppercase tracking-[0.16em] text-[#71717A]">
                  4. Qual é a sua urgência?
                </label>
                <div className="space-y-2">
                  <button
                    type="button"
                    onClick={() => setUrgency('Urgente (Recebi intimação ou tenho prazo correndo)')}
                    aria-pressed={urgency.startsWith('Urgente')}
                    className={`flex w-full items-center gap-3 rounded-lg border p-3 text-left text-xs transition-all cursor-pointer ${
                      urgency.startsWith('Urgente')
                        ? 'border-[#B88622]/70 bg-[#FBF6E9] font-semibold text-[#5B1422] shadow-[0_0_0_1px_rgba(184,146,42,0.16),0_6px_18px_rgba(184,146,42,0.18)]'
                        : 'border-black/[0.07] bg-white text-[#52525B] hover:border-[#B88622]/40 hover:bg-[#FAF8F5] hover:shadow-[0_5px_16px_rgba(184,146,42,0.11)]'
                    }`}
                  >
                    <AlertTriangle className="w-4 h-4 shrink-0 text-[#5B1422]" />
                    <span>
                      <strong>Urgente:</strong> Recebi intimação, citação ou tenho prazo correndo
                    </span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setUrgency('Resolver nos próximos dias')}
                    aria-pressed={urgency === 'Resolver nos próximos dias'}
                    className={`flex w-full items-center gap-3 rounded-lg border p-3 text-left text-xs transition-all cursor-pointer ${
                      urgency === 'Resolver nos próximos dias'
                        ? 'border-[#B88622]/70 bg-[#FBF6E9] font-semibold text-[#5B1422] shadow-[0_0_0_1px_rgba(184,146,42,0.16),0_6px_18px_rgba(184,146,42,0.18)]'
                        : 'border-black/[0.07] bg-white text-[#52525B] hover:border-[#B88622]/40 hover:bg-[#FAF8F5] hover:shadow-[0_5px_16px_rgba(184,146,42,0.11)]'
                    }`}
                  >
                    <Clock className="w-4 h-4 shrink-0 text-[#5B1422]" />
                    <span>
                      <strong>Quero iniciar logo:</strong> Busco contratar ou agendar nos próximos dias
                    </span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setUrgency('Apenas planejamento / dúvida inicial')}
                    aria-pressed={urgency === 'Apenas planejamento / dúvida inicial'}
                    className={`flex w-full items-center gap-3 rounded-lg border p-3 text-left text-xs transition-all cursor-pointer ${
                      urgency === 'Apenas planejamento / dúvida inicial'
                        ? 'border-[#B88622]/70 bg-[#FBF6E9] font-semibold text-[#5B1422] shadow-[0_0_0_1px_rgba(184,146,42,0.16),0_6px_18px_rgba(184,146,42,0.18)]'
                        : 'border-black/[0.07] bg-white text-[#52525B] hover:border-[#B88622]/40 hover:bg-[#FAF8F5] hover:shadow-[0_5px_16px_rgba(184,146,42,0.11)]'
                    }`}
                  >
                    <HelpCircle className="w-4 h-4 shrink-0 text-[#5B1422]" />
                    <span>
                      <strong>Planejamento:</strong> Quero entender meus direitos e planejar com calma
                    </span>
                  </button>
                </div>
              </div>

              <div>
                <label className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.16em] text-[#71717A]">
                  5. Você já tem documentos ou número do processo?
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {(
                    [
                      'Sim, já tenho documentos ou nº do processo',
                      'Ainda vou separar os documentos',
                    ] as DocsStatus[]
                  ).map((docOpt) => (
                    <button
                      key={docOpt}
                      type="button"
                      onClick={() => setDocsStatus(docOpt)}
                      aria-pressed={docsStatus === docOpt}
                      className={`flex items-center gap-2 rounded-lg border p-2.5 text-left text-xs font-medium transition-all cursor-pointer ${
                        docsStatus === docOpt
                          ? 'border-[#B88622]/70 bg-[#FBF6E9] font-semibold text-[#5B1422] shadow-[0_0_0_1px_rgba(184,146,42,0.16),0_6px_18px_rgba(184,146,42,0.18)]'
                          : 'border-black/[0.07] bg-white text-[#52525B] hover:border-[#B88622]/40 hover:bg-[#FAF8F5] hover:shadow-[0_5px_16px_rgba(184,146,42,0.11)]'
                      }`}
                    >
                      <FileText className="h-3.5 w-3.5 shrink-0 text-[#5B1422]" />
                      <span>{docOpt}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="pt-2 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="inline-flex min-h-11 items-center gap-1.5 rounded-lg border border-black/[0.07] px-4 py-2.5 text-xs font-semibold text-[#52525B] transition-colors hover:bg-[#FAF8F5] hover:text-[#18181B] cursor-pointer"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Voltar</span>
                </button>

                <button
                  type="button"
                  onClick={() => setStep(3)}
                  className="inline-flex min-h-11 items-center gap-2 rounded-lg bg-[#5B1422] px-6 py-3 text-xs font-semibold text-white transition-colors hover:bg-[#6E1A2B] cursor-pointer"
                >
                  <span>Último Passo</span>
                  <ArrowRight className="w-4 h-4 text-white/80" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 3: CONTACT DETAILS & FORMAT */}
          {step === 3 && (
            <div className="space-y-6 animate-fadeIn">
              <div className="flex items-center justify-between gap-2 border-y border-black/[0.06] py-3 text-xs">
                <div className="flex items-center gap-2">
                  <Sparkles className="h-4 w-4 shrink-0 text-[#5B1422]" />
                  <span className="font-semibold text-[#27272A]">{priorityBadge}</span>
                </div>
                <span className="truncate text-[11px] font-medium text-[#5B1422]">{subject}</span>
              </div>

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.14em] text-[#71717A]">
                    Seu Nome Completo *
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Como prefere ser chamada(o)?"
                    className="w-full rounded-lg border border-black/[0.08] bg-white px-4 py-3 text-sm text-[#18181B] placeholder:text-[#A1A1AA] outline-none transition-colors focus:border-[#5B1422]/50"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.14em] text-[#71717A]">
                    Seu WhatsApp com DDD *
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="(DDD) 99999-9999"
                    className="w-full rounded-lg border border-black/[0.08] bg-white px-4 py-3 text-sm text-[#18181B] placeholder:text-[#A1A1AA] outline-none transition-colors focus:border-[#5B1422]/50"
                  />
                </div>
              </div>

              <div>
                <label className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.14em] text-[#71717A]">
                  Como prefere realizar a consulta?
                </label>
                <div className="grid grid-cols-3 gap-2 text-xs">
                  {(
                    [
                      'Online (Vídeo / WhatsApp)',
                      'Presencial (a combinar)',
                      'Ainda não defini',
                    ] as FormatType[]
                  ).map((fmt) => (
                    <button
                      key={fmt}
                      type="button"
                      onClick={() => setFormat(fmt)}
                      aria-pressed={format === fmt}
                      className={`rounded-lg border px-2 py-2 text-center transition-all cursor-pointer ${
                        format === fmt
                          ? 'border-[#5B1422] bg-[#5B1422] font-semibold text-white shadow-[0_0_0_1px_rgba(184,146,42,0.7),0_7px_20px_rgba(184,146,42,0.24)]'
                          : 'border-black/[0.07] bg-white text-[#52525B] hover:border-[#B88622]/40 hover:bg-[#FAF8F5] hover:shadow-[0_5px_16px_rgba(184,146,42,0.11)]'
                      }`}
                    >
                      {fmt}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.14em] text-[#71717A]">
                  Quer acrescentar algum detalhe rápido? (Opcional)
                </label>
                <textarea
                  rows={2}
                  value={details}
                  onChange={(e) => setDetails(e.target.value)}
                  placeholder="Ex: Melhor horário para falar ou resumo em 1 frase..."
                  className="w-full resize-none rounded-lg border border-black/[0.08] bg-white p-3 text-sm text-[#18181B] placeholder:text-[#A1A1AA] outline-none transition-colors focus:border-[#5B1422]/50"
                />
              </div>

              <div className="pt-2 flex items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="inline-flex min-h-11 items-center gap-1.5 rounded-lg border border-black/[0.07] px-4 py-3 text-xs font-semibold text-[#52525B] transition-colors hover:bg-[#FAF8F5] cursor-pointer"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Voltar</span>
                </button>

                <button
                  type="submit"
                  className="flex min-h-12 flex-1 items-center justify-center gap-2 rounded-lg bg-[#5B1422] px-6 py-3.5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-[#6E1A2B] active:scale-[0.99] cursor-pointer"
                >
                  {submitted ? (
                    <>
                      <CheckCircle2 className="w-4 h-4 text-white/80" />
                      <span>Enviando Triagem para a Dra. Karen...</span>
                    </>
                  ) : (
                    <>
                      <MessageCircle className="w-4 h-4 text-white/80" />
                      <span>Enviar Triagem e Agendar no WhatsApp</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          )}
        </form>

        <div className="border-t border-black/[0.06] pt-3 text-center text-[11px] text-[#71717A]">
          🔒 Suas respostas chegam organizadas diretamente no WhatsApp da Dra. Karen Rodrigues (OAB/RJ 265.765) sob sigilo legal.
        </div>
      </div>
    </div>
  );
}
