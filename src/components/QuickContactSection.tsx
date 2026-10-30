import { useState } from 'react';
import contactPortrait from '../../watermarked_img_16837427052121350212.jpg';
import { OFFICE_CONTACTS, SERVICE_TITLES } from '../models/legalData';
import { classifyTriagePriority, sendTriageToWhatsApp } from '../utils/triage';
import {
  MessageCircle,
  CheckCircle2,
  User,
  Building2,
  AlertTriangle,
  CalendarCheck,
  Sparkles,
  Mail,
  Linkedin,
  Instagram,
  X,
} from 'lucide-react';

export default function QuickContactSection() {
  const [securityBannerVisible, setSecurityBannerVisible] = useState(true);
  const [clientType, setClientType] = useState<'Para Mim / Família (PF)' | 'Para Empresa (PJ)'>(
    'Para Mim / Família (PF)'
  );
  const [area, setArea] = useState<string>(SERVICE_TITLES[0]);
  const [situation, setSituation] = useState<string>('Quero dar entrada / resolver agora');
  const [urgency, setUrgency] = useState<string>('Resolver nos próximos dias');
  const [hasDocs, setHasDocs] = useState<string>('Sim, já tenho documentos ou nº do processo');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [topic, setTopic] = useState('');
  const [sent, setSent] = useState(false);

  const profileClassification = classifyTriagePriority(urgency, clientType);

  const handleSendToWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;

    setSent(true);
    setTimeout(() => {
      sendTriageToWhatsApp({
        name,
        phone,
        clientType,
        area,
        situation,
        urgency,
        docsStatus: hasDocs,
        details: topic,
      });
      setSent(false);
    }, 600);
  };

  return (
    <>
    <section id="contato" className="border-t border-black/[0.05] bg-[#F6F3E8] pb-32 pt-16 text-[#18181B] sm:pb-36 sm:pt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="mb-3 inline-flex items-center gap-1.5 text-[10px] font-medium uppercase tracking-[0.2em] text-[#71717A] sm:text-xs">
            <CalendarCheck className="h-3.5 w-3.5 text-[#590907]" />
            <span>Agendamento com Triagem Inteligente</span>
          </span>
          <h2 className="font-cinzel text-2xl font-medium tracking-tight text-[#18181B] sm:text-3xl">
            Agende sua consulta já direcionada
          </h2>
          <p className="mt-3 text-sm leading-7 text-[#52525B]">
            Marque as opções abaixo em poucos segundos. Assim eu já recebo seu caso classificado no WhatsApp e agilizo seu atendimento:
          </p>
        </div>

        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12">
          {/* Interactive Client Triage Card (7 cols) */}
          <div className="bg-white p-5 shadow-[0_4px_25px_rgba(0,0,0,0.02)] sm:p-8 lg:col-span-7">
            <div className="mb-7 flex flex-wrap items-center justify-between gap-3 border-b border-black/[0.05] pb-5">
              <div>
                <h3 className="font-cinzel text-xl font-medium text-[#18181B]">
                  Ficha Rápida de Triagem
                </h3>
                <p className="mt-1 text-xs text-[#71717A]">
                  Selecione as opções que melhor descrevem sua necessidade:
                </p>
              </div>
              <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-[#590907]">
                <Sparkles className="h-3.5 w-3.5 text-[#590907]" />
                <span>{profileClassification}</span>
              </span>
            </div>

            <form onSubmit={handleSendToWhatsApp} className="space-y-6">
              {/* 1. Client Type: PF vs PJ */}
              <div>
                <label className="mb-3 block text-[10px] font-semibold uppercase tracking-[0.16em] text-[#71717A]">
                  1. Para quem é o atendimento?
                </label>
                <div className="grid grid-cols-2 gap-2.5">
                  <button
                    type="button"
                    onClick={() => setClientType('Para Mim / Família (PF)')}
                    aria-pressed={clientType === 'Para Mim / Família (PF)'}
                    className={`flex min-h-11 items-center gap-2.5 rounded-lg border px-3 py-2.5 text-left text-xs font-medium transition-all cursor-pointer ${
                      clientType === 'Para Mim / Família (PF)'
                        ? 'border-[#8B741F]/70 bg-[#FBF6E9] text-[#590907] shadow-[0_0_0_1px_rgba(184,146,42,0.16),0_6px_18px_rgba(184,146,42,0.18)]'
                        : 'border-black/[0.07] bg-white text-[#52525B] hover:border-[#8B741F]/40 hover:bg-[#F6F3E8] hover:shadow-[0_5px_16px_rgba(184,146,42,0.11)]'
                    }`}
                  >
                    <User className="w-4 h-4 text-[#590907] shrink-0" />
                    <span>Para Mim / Família</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setClientType('Para Empresa (PJ)')}
                    aria-pressed={clientType === 'Para Empresa (PJ)'}
                    className={`flex min-h-11 items-center gap-2.5 rounded-lg border px-3 py-2.5 text-left text-xs font-medium transition-all cursor-pointer ${
                      clientType === 'Para Empresa (PJ)'
                        ? 'border-[#8B741F]/70 bg-[#FBF6E9] text-[#590907] shadow-[0_0_0_1px_rgba(184,146,42,0.16),0_6px_18px_rgba(184,146,42,0.18)]'
                        : 'border-black/[0.07] bg-white text-[#52525B] hover:border-[#8B741F]/40 hover:bg-[#F6F3E8] hover:shadow-[0_5px_16px_rgba(184,146,42,0.11)]'
                    }`}
                  >
                    <Building2 className="w-4 h-4 text-[#590907] shrink-0" />
                    <span>Para Minha Empresa</span>
                  </button>
                </div>
              </div>

              {/* 2. Legal Area */}
              <div>
                <label className="mb-3 block text-[10px] font-semibold uppercase tracking-[0.16em] text-[#71717A]">
                  2. Qual é o assunto principal?
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {SERVICE_TITLES.map((item) => (
                    <button
                      key={item}
                      type="button"
                      onClick={() => setArea(item)}
                      aria-pressed={area === item}
                      className={`flex min-h-10 items-center justify-between rounded-lg border px-3.5 py-2.5 text-left text-xs transition-all cursor-pointer ${
                        area === item
                          ? 'border-[#8B741F]/70 bg-[#FBF6E9] font-semibold text-[#590907] shadow-[0_0_0_1px_rgba(184,146,42,0.16),0_6px_18px_rgba(184,146,42,0.18)]'
                          : 'border-black/[0.07] bg-white font-medium text-[#52525B] hover:border-[#8B741F]/40 hover:bg-[#F6F3E8] hover:shadow-[0_5px_16px_rgba(184,146,42,0.11)]'
                      }`}
                    >
                      <span className="truncate">{item}</span>
                      {area === item && <CheckCircle2 className="w-3.5 h-3.5 text-[#590907] shrink-0" />}
                    </button>
                  ))}
                </div>
              </div>

              {/* 3. Current Situation */}
              <div>
                <label className="mb-3 block text-[10px] font-semibold uppercase tracking-[0.16em] text-[#71717A]">
                  3. Em que momento está o caso?
                </label>
                <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-4">
                  {[
                    'Quero dar entrada / resolver agora',
                    'Já tenho processo em andamento',
                    'Analisar contrato ou acordo',
                    'Consultoria Extrajudicial',
                  ].map((sit) => (
                    <button
                      key={sit}
                      type="button"
                      onClick={() => setSituation(sit)}
                      aria-pressed={situation === sit}
                      className={`min-h-10 rounded-lg border px-3 py-2.5 text-center text-xs font-medium transition-all cursor-pointer ${
                        situation === sit
                          ? 'border-[#590907] bg-[#590907] font-semibold text-white shadow-[0_0_0_1px_rgba(184,146,42,0.7),0_7px_20px_rgba(184,146,42,0.24)]'
                          : 'border-black/[0.07] bg-white text-[#52525B] hover:border-[#8B741F]/40 hover:bg-[#F6F3E8] hover:shadow-[0_5px_16px_rgba(184,146,42,0.11)]'
                      }`}
                    >
                      {sit}
                    </button>
                  ))}
                </div>
              </div>

              {/* 4. Urgency & Docs */}
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.16em] text-[#71717A]">
                    4. Qual a sua urgência?
                  </label>
                  <select
                    value={urgency}
                    onChange={(e) => setUrgency(e.target.value)}
                    className="min-h-11 w-full rounded-lg border border-black/[0.07] bg-white px-3.5 py-2.5 text-xs text-[#18181B] outline-none transition-colors focus:border-[#590907]/50"
                  >
                    <option value="Urgente (Recebi intimação ou prazo correndo)">
                      🚨 Urgente (Intimação / Prazo correndo)
                    </option>
                    <option value="Resolver nos próximos dias">
                      ✅ Quero iniciar nos próximos dias
                    </option>
                    <option value="Apenas planejamento / tirar dúvida">
                      💬 Apenas planejar / tirar dúvida
                    </option>
                  </select>
                </div>

                <div>
                  <label className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.16em] text-[#71717A]">
                    5. Já tem documentos em mãos?
                  </label>
                  <select
                    value={hasDocs}
                    onChange={(e) => setHasDocs(e.target.value)}
                    className="min-h-11 w-full rounded-lg border border-black/[0.07] bg-white px-3.5 py-2.5 text-xs text-[#18181B] outline-none transition-colors focus:border-[#590907]/50"
                  >
                    <option value="Sim, já tenho documentos ou nº do processo">
                      📂 Sim, já tenho documentos / nº processo
                    </option>
                    <option value="Ainda vou separar os documentos">
                      📄 Ainda vou separar os documentos
                    </option>
                  </select>
                </div>
              </div>

              {/* 5. Name & WhatsApp */}
              <div className="grid grid-cols-1 gap-5 pt-1 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.14em] text-[#71717A]">
                    Como posso te chamar? *
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Seu nome completo"
                    className="min-h-11 w-full rounded-lg border border-black/[0.07] bg-white px-3.5 py-2.5 text-sm text-[#18181B] placeholder:text-[#A1A1AA] outline-none transition-colors focus:border-[#590907]/50"
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
                    className="min-h-11 w-full rounded-lg border border-black/[0.07] bg-white px-3.5 py-2.5 text-sm text-[#18181B] placeholder:text-[#A1A1AA] outline-none transition-colors focus:border-[#590907]/50"
                  />
                </div>
              </div>

              <div>
                <label className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.14em] text-[#71717A]">
                  Quer resumir em 1 frase ou informar melhor horário? (Opcional)
                </label>
                <textarea
                  rows={2}
                  value={topic}
                  onChange={(e) => setTopic(e.target.value)}
                  placeholder="Ex: Prefiro atendimento na parte da tarde..."
                  className="w-full resize-none rounded-lg border border-black/[0.07] bg-white p-3.5 text-sm text-[#18181B] placeholder:text-[#A1A1AA] outline-none transition-colors focus:border-[#590907]/50"
                />
              </div>

              <button
                type="submit"
                className="flex min-h-12 w-full items-center justify-center gap-2 rounded-lg bg-[#590907] py-3.5 text-sm font-semibold text-white shadow-[0_4px_20px_rgba(91,20,34,0.14)] transition-colors duration-200 hover:bg-[#3E0605] active:scale-[0.99] cursor-pointer"
              >
                {sent ? (
                  <>
                    <CheckCircle2 className="w-4 h-4 text-white/80" />
                    <span>Enviando Triagem para o WhatsApp da Dra. Karen...</span>
                  </>
                ) : (
                  <>
                    <MessageCircle className="w-4 h-4 text-white/80" />
                    <span>Enviar Triagem e Agendar Consulta no WhatsApp</span>
                  </>
                )}
              </button>
            </form>

            <div className="mt-4 text-center text-[11px] text-[#71717A]">
              🔒 Seus dados chegam já classificados para a Dra. Karen Rodrigues com sigilo total da OAB.
            </div>
          </div>

          {/* Locations & Info + Why Triage Helps (5 cols) */}
          <aside className="space-y-8 lg:col-span-5">
            <figure className="overflow-hidden rounded-2xl bg-white shadow-[0_4px_25px_rgba(0,0,0,0.06)]">
              <img
                src={contactPortrait}
                alt="Dra. Karen Rodrigues"
                className="h-64 w-full object-cover object-center sm:h-80"
              />
            </figure>

            <div className="space-y-3 border-t border-black/[0.06] py-5">
              <div className="flex items-center gap-2">
                <AlertTriangle className="h-4 w-4 text-[#590907]" />
                <h4 className="text-xs font-semibold uppercase tracking-wider text-[#18181B]">
                  Por que fazemos essa triagem rápida?
                </h4>
              </div>
              <p className="text-xs leading-relaxed text-[#52525B]">
                Com essas 5 respostas simples, a Dra. Karen já recebe no WhatsApp se o seu caso tem <strong>prazo urgente correndo</strong>, se é <strong>Pessoa Física ou Empresa</strong> e se você <strong>já possui processo ou documentos</strong>, garantindo um atendimento muito mais rápido e objetivo.
              </p>
            </div>

            <div className="space-y-4 border-t border-black/[0.06] py-5">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-[#18181B]">
                Contato profissional
              </h4>
              <p className="text-xs leading-relaxed text-[#52525B]">
                Fale comigo para consultar disponibilidade e modalidade de atendimento.
              </p>
              <div className="space-y-3 text-xs">
                <a
                  href={OFFICE_CONTACTS.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 font-semibold text-[#590907] hover:underline"
                >
                  <MessageCircle className="h-4 w-4 shrink-0" />
                  WhatsApp: {OFFICE_CONTACTS.phone}
                </a>
                <a
                  href={`mailto:${OFFICE_CONTACTS.email}`}
                  className="flex items-center gap-3 break-all text-[#52525B] hover:text-[#590907]"
                >
                  <Mail className="h-4 w-4 shrink-0 text-[#590907]" />
                  {OFFICE_CONTACTS.email}
                </a>
                <a
                  href={OFFICE_CONTACTS.linkedIn}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-[#52525B] hover:text-[#590907]"
                >
                  <Linkedin className="h-4 w-4 shrink-0 text-[#590907]" />
                  Perfil profissional no LinkedIn
                </a>
                <a
                  href={OFFICE_CONTACTS.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-[#52525B] hover:text-[#590907]"
                >
                  <Instagram className="h-4 w-4 shrink-0 text-[#590907]" />
                  Perfil profissional no Instagram
                </a>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
    {securityBannerVisible && (
      <aside
        role="alert"
        className="fixed inset-x-0 bottom-0 z-40 border-t border-[#E8D285]/40 bg-[#590907] px-4 py-3 text-white shadow-[0_-4px_20px_rgba(0,0,0,0.16)] sm:px-6"
      >
        <div className="mx-auto flex max-w-6xl items-start gap-3 pr-8 text-xs leading-5 sm:items-center sm:text-sm">
          <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-[#E8D285] sm:mt-0" />
          <p>
            <strong>Aviso de Segurança:</strong> <strong>NUNCA</strong> solicitamos transferências
            via PIX para pagamentos de honorários, custas ou liberação de alvarás por WhatsApp sem
            uma reunião prévia (presencial ou por vídeo). Caso receba mensagens suspeitas em nome da
            Dra. Karen Rodrigues, denuncie.
          </p>
          <button
            type="button"
            onClick={() => setSecurityBannerVisible(false)}
            aria-label="Fechar aviso de segurança"
            className="absolute right-4 top-3 rounded-full p-1 text-white/80 transition-colors hover:bg-white/10 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#E8D285] sm:right-6 sm:top-1/2 sm:-translate-y-1/2"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      </aside>
    )}
    </>
  );
}
