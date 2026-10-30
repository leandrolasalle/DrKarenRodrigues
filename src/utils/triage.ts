import { OFFICE_CONTACTS, openExternalUrl } from '../models/legalData';

export interface TriageSubmission {
  name: string;
  phone: string;
  clientType: string;
  area: string;
  situation: string;
  urgency: string;
  docsStatus: string;
  format?: string;
  details?: string;
}

export function classifyTriagePriority(urgency: string, clientType: string): string {
  if (urgency.includes('Urgente')) {
    return '?? PRIORIDADE ALTA (PRAZO / INTIMA??O)';
  }
  if (clientType.includes('Empresa')) {
    return '?? CLIENTE EMPRESARIAL (PJ)';
  }
  return '?? ORIENTA??O / PLANEJAMENTO';
}

export function buildWhatsAppTriageUrl(data: TriageSubmission): string {
  const priorityTag = classifyTriagePriority(data.urgency, data.clientType);

  const lines = [
    `?? *TRIAGEM DE CONSULTA - DRA. KAREN RODRIGUES*`,
    `??? *Classifica??o:* ${priorityTag}`,
    `??????????????????????`,
    `?? *Cliente:* ${data.name.trim()}`,
    `?? *WhatsApp:* ${data.phone.trim()}`,
    `?? *Perfil:* ${data.clientType}`,
    `?? *?rea:* ${data.area}`,
    `?? *Situa??o Atual:* ${data.situation}`,
    `? *Urg?ncia:* ${data.urgency}`,
    `?? *Documentos:* ${data.docsStatus}`,
    data.format ? `?? *Prefer?ncia:* ${data.format}` : null,
    data.details?.trim() ? `?? *Resumo:* ${data.details.trim()}` : null,
    `??????????????????????`,
    `Ol?, Dra. Karen! Preenchi a triagem no site e gostaria de agendar minha consulta.`,
  ]
    .filter(Boolean)
    .join('\n');

  return `https://wa.me/${OFFICE_CONTACTS.whatsappRaw}?text=${encodeURIComponent(lines)}`;
}

export function sendTriageToWhatsApp(data: TriageSubmission): void {
  const url = buildWhatsAppTriageUrl(data);
  openExternalUrl(url);
}
