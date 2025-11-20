export interface ResultadoBatalhaResponse {
  vencedor: string;
  rodadas: RodadaDTO[];
  gladiador1: GladiadorDTO;
  gladiador2: GladiadorDTO;
  arenaFinal: ArenaDTO;
}

export interface RodadaDTO {
  numero: number;
  acaoGladiador1: string | null;
  acaoGladiador2: string | null;
  estadoGladiador1: GladiadorDTO;
  estadoGladiador2: GladiadorDTO;
  estadoArena: ArenaDTO;
}

export interface GladiadorDTO {
  nome: string;
  vidas: number;
  armadura: boolean;
  status: string;
}

export interface ArenaDTO {
  torcedoresGladiador1: number;
  torcedoresGladiador2: number;
  humorTorcidaGladiador1: string;
  humorTorcidaGladiador2: string;
  totalTorcedores: number;
}