import { ChevronDown } from 'lucide-react';

const FAQ_ITEMS = [
  {
    question: 'Quais áreas jurídicas são atendidas?',
    answer:
      'Atuo principalmente em Direito de Família e Sucessões, Contratos e Imóveis, Direito Empresarial e Societário, Direito do Consumidor e Direito Previdenciário e Acidentário.',
  },
  {
    question: 'É possível receber orientação antes de entrar com um processo?',
    answer:
      'Sim. A consultoria jurídica pode analisar documentos, esclarecer direitos e avaliar alternativas extrajudiciais antes da adoção de qualquer medida judicial.',
  },
  {
    question: 'Como funciona a primeira consulta?',
    answer:
      'A primeira consulta é destinada à compreensão dos fatos, análise inicial dos documentos disponíveis e definição dos próximos passos possíveis para o caso.',
  },
  {
    question: 'Quais documentos devo levar para o atendimento?',
    answer:
      'Separe documentos pessoais, contratos, comprovantes, notificações, decisões, conversas e demais registros relacionados ao caso. A lista pode variar conforme o assunto.',
  },
  {
    question: 'A consulta pode ser realizada por vídeo?',
    answer:
      'Sim. O atendimento pode ser presencial ou por vídeo, conforme a disponibilidade e a necessidade do caso.',
  },
  {
    question: 'A análise inicial garante o resultado do processo?',
    answer:
      'Não. A análise jurídica apresenta possibilidades e riscos com base nas informações disponíveis, mas nenhum resultado pode ser garantido antes da avaliação completa do caso e de seus desdobramentos.',
  },
];

export default function FaqSection() {
  return (
    <section id="faq" className="border-t border-black/[0.05] bg-white py-16 text-[#18181B] sm:py-20">
      <div className="mx-auto max-w-4xl px-5 sm:px-8">
        <div className="mb-10 text-center sm:mb-12">
          <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.2em] text-[#71717A] sm:text-xs">
            Dúvidas frequentes
          </p>
          <h2 className="font-cinzel text-3xl font-medium tracking-tight sm:text-4xl">
            Perguntas sobre o atendimento jurídico
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-[#52525B]">
            Encontre respostas objetivas para as principais dúvidas antes de agendar sua consulta.
          </p>
        </div>

        <div className="divide-y divide-black/[0.07] border-y border-black/[0.07]">
          {FAQ_ITEMS.map((item) => (
            <details key={item.question} className="group">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-5 py-5 text-left text-sm font-semibold text-[#18181B] marker:hidden focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#590907]">
                <span>{item.question}</span>
                <ChevronDown className="h-4 w-4 shrink-0 text-[#590907] transition-transform group-open:rotate-180" />
              </summary>
              <p className="max-w-3xl pb-5 pr-8 text-sm leading-7 text-[#52525B]">{item.answer}</p>
            </details>
          ))}
        </div>

        <p className="mt-6 text-center text-xs leading-5 text-[#71717A]">
          As informações desta seção são gerais e não substituem uma análise jurídica individualizada.
        </p>
      </div>
    </section>
  );
}
