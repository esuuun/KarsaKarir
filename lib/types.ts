export interface RoadmapStep {
  id: number;
  title: string;
  est: string;
  level: string;
  gap: number;
  why: string;
  conf: number;
}

export interface TeamMember {
  name: string;
  role: string;
  target: string;
  date: string;
  status: "PENDING" | "SELESAI";
}

export interface OverrideLog {
  time: string;
  step: string;
  action: string;
  note: string;
}

export type LikeState = Record<number, "up" | "down" | undefined>;
export type ValidatedState = Record<number, "setuju" | "edit" | "hapus" | undefined>;
export type NotesState = Record<number, string>;
