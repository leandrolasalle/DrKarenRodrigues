export interface DeadlineCalculationResult {
  disponibilizacaoDate: Date;
  publicacaoDate: Date;
  inicioContagemDate: Date;
  vencimentoDate: Date;
  totalDiasUteis: number;
  diasComputados: {
    numeroDia: number;
    data: Date;
    diaSemana: string;
    isRecesso: boolean;
  }[];
  diasIgnorados: {
    data: Date;
    motivo: string;
  }[];
  fundamentosLegais: string[];
}

const FIXED_HOLIDAYS: Record<string, string> = {
  '0-1': 'Confraterniza??o Universal',
  '3-21': 'Tiradentes',
  '4-1': 'Dia Mundial do Trabalho',
  '7-11': 'Dia do Advogado (Feriado da Justi?a)',
  '8-7': 'Independ?ncia do Brasil',
  '9-12': 'Nossa Senhora Aparecida',
  '9-28': 'Dia do Servidor P?blico',
  '10-2': 'Finados',
  '10-15': 'Proclama??o da Rep?blica',
  '10-20': 'Dia da Consci?ncia Negra',
  '11-8': 'Dia da Justi?a (Lei 5.010/66)',
  '11-25': 'Natal',
};

const MOVABLE_HOLIDAY_OFFSETS: Record<number, string> = {
  [-48]: 'Segunda-feira de Carnaval',
  [-47]: 'Ter?a-feira de Carnaval',
  [-46]: 'Quarta-feira de Cinzas',
  [-2]: 'Sexta-feira da Paix?o',
  [60]: 'Corpus Christi',
};

const WEEKDAY_NAMES = [
  'Domingo',
  'Segunda-feira',
  'Ter?a-feira',
  'Quarta-feira',
  'Quinta-feira',
  'Sexta-feira',
  'S?bado',
] as const;

const LEGAL_FOUNDATIONS = [
  'Art. 219, Lei 13.105/2015 (CPC): Contagem exclusivamente em dias ?teis.',
  'Art. 220, CPC: Suspens?o do prazo durante as f?rias forenses (20/dez a 20/jan).',
  'Art. 224, ?? 2? e 3?, CPC: Publica??o no primeiro dia ?til p?s-disponibiliza??o no DJe e in?cio no dia subsequente.',
  'Art. 231, CPC: Crit?rios da cita??o e intima??o eletr?nica.',
];

function isRecessoForense(date: Date): boolean {
  const mes = date.getMonth();
  const dia = date.getDate();
  return (mes === 11 && dia >= 20) || (mes === 0 && dia <= 20);
}

function getEasterDate(year: number): Date {
  const a = year % 19;
  const b = Math.floor(year / 100);
  const c = year % 100;
  const d = Math.floor(b / 4);
  const e = b % 4;
  const f = Math.floor((b + 8) / 25);
  const g = Math.floor((b - f + 1) / 3);
  const h = (19 * a + b - d - g + 15) % 30;
  const i = Math.floor(c / 4);
  const k = c % 4;
  const l = (32 + 2 * e + 2 * i - h - k) % 7;
  const m = Math.floor((a + 11 * h + 22 * l) / 451);
  const month = Math.floor((h + l - 7 * m + 114) / 31) - 1;
  const day = ((h + l - 7 * m + 114) % 31) + 1;
  return new Date(year, month, day);
}

function isFeriadoNacionalOuForense(date: Date): { isFeriado: boolean; nome?: string } {
  // F?rias forenses / Recesso Judici?rio: 20 de dezembro a 20 de janeiro (art. 220 CPC)
  if (isRecessoForense(date)) {
    return { isFeriado: true, nome: 'Recesso Forense (Art. 220, CPC)' };
  }

  const fixedKey = `${date.getMonth()}-${date.getDate()}`;
  if (FIXED_HOLIDAYS[fixedKey]) {
    return { isFeriado: true, nome: FIXED_HOLIDAYS[fixedKey] };
  }

  const pascoa = getEasterDate(date.getFullYear());
  const diffDays = Math.round((date.getTime() - pascoa.getTime()) / (1000 * 60 * 60 * 24));
  if (MOVABLE_HOLIDAY_OFFSETS[diffDays]) {
    return { isFeriado: true, nome: MOVABLE_HOLIDAY_OFFSETS[diffDays] };
  }

  return { isFeriado: false };
}

function isDiaUtil(date: Date): { util: boolean; motivo?: string } {
  const dayOfWeek = date.getDay();
  if (dayOfWeek === 0) return { util: false, motivo: 'Domingo (Fim de Semana)' };
  if (dayOfWeek === 6) return { util: false, motivo: 'S?bado (Fim de Semana)' };

  const feriado = isFeriadoNacionalOuForense(date);
  if (feriado.isFeriado) {
    return { util: false, motivo: feriado.nome };
  }

  return { util: true };
}

export function getProximoDiaUtil(from: Date): Date {
  const cur = new Date(from);
  while (true) {
    cur.setDate(cur.getDate() + 1);
    if (isDiaUtil(cur).util) {
      return new Date(cur);
    }
  }
}

export function calcularPrazoProcessual(
  dataDisponibilizacaoStr: string,
  diasDePrazo: number,
  isDjeEletronico: boolean = true
): DeadlineCalculationResult {
  const [ano, mes, dia] = dataDisponibilizacaoStr.split('-').map(Number);
  const dataDisp = new Date(ano, (mes || 1) - 1, dia || 1);

  // 1. Data de Publica??o (DJe) - Art. 224, ? 2? CPC
  const dataPub = isDjeEletronico ? getProximoDiaUtil(dataDisp) : new Date(dataDisp);

  // 2. Data de In?cio da Contagem - Art. 224, ? 3? CPC
  const dataInicio = getProximoDiaUtil(dataPub);

  // 3. Contagem dos dias ?teis
  const diasComputados: DeadlineCalculationResult['diasComputados'] = [];
  const diasIgnorados: DeadlineCalculationResult['diasIgnorados'] = [];

  const cursor = new Date(dataInicio);
  let diasContados = 0;

  while (diasContados < diasDePrazo) {
    const status = isDiaUtil(cursor);
    if (status.util) {
      diasContados++;
      diasComputados.push({
        numeroDia: diasContados,
        data: new Date(cursor),
        diaSemana: WEEKDAY_NAMES[cursor.getDay()],
        isRecesso: isRecessoForense(cursor),
      });

      if (diasContados === diasDePrazo) {
        break;
      }
    } else {
      diasIgnorados.push({
        data: new Date(cursor),
        motivo: status.motivo || 'Dia n?o ?til',
      });
    }
    cursor.setDate(cursor.getDate() + 1);
  }

  return {
    disponibilizacaoDate: dataDisp,
    publicacaoDate: dataPub,
    inicioContagemDate: dataInicio,
    vencimentoDate: new Date(cursor),
    totalDiasUteis: diasDePrazo,
    diasComputados,
    diasIgnorados,
    fundamentosLegais: LEGAL_FOUNDATIONS,
  };
}

export function formatarDataBrasileira(d: Date): string {
  const dia = String(d.getDate()).padStart(2, '0');
  const mes = String(d.getMonth() + 1).padStart(2, '0');
  const ano = d.getFullYear();
  return `${dia}/${mes}/${ano}`;
}
