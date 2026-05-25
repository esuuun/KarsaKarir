import type { RoadmapStep, TeamMember } from "./types";

export const ROADMAP_STEPS: RoadmapStep[] = [
  {
    id: 1,
    title: "Perkuat Dasar Cloud Computing",
    est: "3 Bulan",
    level: "Menengah",
    gap: 40,
    why: "Skill gap 40% di Cloud Computing untuk target Senior Engineer.",
    conf: 85,
  },
  {
    id: 2,
    title: "System Design Practice",
    est: "4 Bulan",
    level: "Lanjut",
    gap: 72,
    why: "Selaras kebutuhan tim Backend Q3 yang fokus pada skalabilitas.",
    conf: 92,
  },
  {
    id: 3,
    title: "Leadership & Mentoring",
    est: "6 Bulan",
    level: "Soft Skill",
    gap: 78,
    why: "Pembinaan anggota tim junior dan manajemen proyek internal.",
    conf: 78,
  },
];

export const TEAM_ROWS: TeamMember[] = [
  { name: "Alif Harits", role: "Junior Dev", target: "Backend Lead", date: "12 Okt 2023", status: "PENDING" },
  { name: "Sarah Putri", role: "UI Designer", target: "Design System Lead", date: "14 Okt 2023", status: "PENDING" },
  { name: "Reza Maulana", role: "Data Analyst", target: "Senior Data Eng", date: "15 Okt 2023", status: "SELESAI" },
];

export const TARGET_POSITIONS = [
  "Senior Software Engineer",
  "Tech Lead",
  "Engineering Manager",
];

export const TARGET_TIMES = ["6 Bulan", "12 Bulan", "1.5 Tahun", "2 Tahun"];

export const SKILLS = ["Python", "JavaScript", "Cloud Computing", "System Design"];

export const NAV_EMPLOYEE = ["Dashboard", "Profil Saya", "Roadmap Saya", "Feedback", "Pengaturan"];

export const NAV_MANAGER = ["Dashboard", "Tim Saya", "Review Roadmap", "Analytics", "Pengaturan"];
