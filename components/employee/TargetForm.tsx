"use client";

import { useState } from "react";
import { TARGET_POSITIONS, TARGET_TIMES, SKILLS } from "@/lib/constants";

const C = {
  navy: "#1A3C6E",
  border: "#E8ECF5",
  bg: "#F8FAFF",
};

interface TargetFormProps {
  onGenerate: () => void;
}

export default function TargetForm({ onGenerate }: TargetFormProps) {
  const [targetPos, setTargetPos] = useState(TARGET_POSITIONS[0]);
  const [targetTime, setTargetTime] = useState(TARGET_TIMES[1]);
  const [skills, setSkills] = useState<Set<string>>(
    new Set(["Python", "JavaScript"])
  );

  const toggleSkill = (skill: string) => {
    setSkills((prev) => {
      const next = new Set(prev);
      if (next.has(skill)) next.delete(skill);
      else next.add(skill);
      return next;
    });
  };

  return (
    <div
      style={{
        width: 280,
        flexShrink: 0,
        backgroundColor: "#fff",
        border: `1px solid ${C.border}`,
        borderRadius: 12,
        padding: 24,
        alignSelf: "flex-start",
      }}
    >
      <h2
        style={{
          fontSize: 15,
          fontWeight: 700,
          color: C.navy,
          marginBottom: 20,
          display: "flex",
          alignItems: "center",
          gap: 8,
        }}
      >
        <span style={{ fontSize: 16 }}>🎯</span> Target Karir Anda
      </h2>

      <div style={{ marginBottom: 14 }}>
        <label
          style={{
            fontSize: 10,
            fontWeight: 600,
            color: "#888",
            letterSpacing: "0.08em",
            display: "block",
            marginBottom: 6,
            textTransform: "uppercase",
          }}
        >
          Posisi Saat Ini
        </label>
        <input
          type="text"
          readOnly
          value="Junior Software Engineer"
          style={{
            width: "100%",
            padding: "8px 12px",
            border: `1px solid ${C.border}`,
            borderRadius: 6,
            fontSize: 13,
            backgroundColor: C.bg,
            color: "#333",
          }}
        />
      </div>

      <div style={{ marginBottom: 14 }}>
        <label
          style={{
            fontSize: 10,
            fontWeight: 600,
            color: "#888",
            letterSpacing: "0.08em",
            display: "block",
            marginBottom: 6,
            textTransform: "uppercase",
          }}
        >
          Target Posisi
        </label>
        <div style={{ position: "relative" }}>
          <select
            value={targetPos}
            onChange={(e) => setTargetPos(e.target.value)}
            style={{
              width: "100%",
              padding: "8px 32px 8px 12px",
              border: `1px solid ${C.border}`,
              borderRadius: 6,
              fontSize: 13,
              appearance: "none",
              backgroundColor: "#fff",
              color: "#333",
            }}
          >
            {TARGET_POSITIONS.map((p) => (
              <option key={p}>{p}</option>
            ))}
          </select>
          <span
            style={{
              position: "absolute",
              right: 10,
              top: "50%",
              transform: "translateY(-50%)",
              pointerEvents: "none",
              color: "#888",
            }}
          >
            ▾
          </span>
        </div>
      </div>

      <div style={{ marginBottom: 14 }}>
        <label
          style={{
            fontSize: 10,
            fontWeight: 600,
            color: "#888",
            letterSpacing: "0.08em",
            display: "block",
            marginBottom: 6,
            textTransform: "uppercase",
          }}
        >
          Target Waktu
        </label>
        <div style={{ position: "relative" }}>
          <select
            value={targetTime}
            onChange={(e) => setTargetTime(e.target.value)}
            style={{
              width: "100%",
              padding: "8px 32px 8px 12px",
              border: `1px solid ${C.border}`,
              borderRadius: 6,
              fontSize: 13,
              appearance: "none",
              backgroundColor: "#fff",
              color: "#333",
            }}
          >
            {TARGET_TIMES.map((t) => (
              <option key={t}>{t}</option>
            ))}
          </select>
          <span
            style={{
              position: "absolute",
              right: 10,
              top: "50%",
              transform: "translateY(-50%)",
              pointerEvents: "none",
              color: "#888",
            }}
          >
            ▾
          </span>
        </div>
      </div>

      <div style={{ marginBottom: 20 }}>
        <label
          style={{
            fontSize: 10,
            fontWeight: 600,
            color: "#888",
            letterSpacing: "0.08em",
            display: "block",
            marginBottom: 8,
            textTransform: "uppercase",
          }}
        >
          Skill yang Dimiliki
        </label>
        {SKILLS.map((skill) => (
          <label
            key={skill}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              marginBottom: 8,
              cursor: "pointer",
              fontSize: 13,
              color: "#333",
            }}
          >
            <input
              type="checkbox"
              checked={skills.has(skill)}
              onChange={() => toggleSkill(skill)}
              style={{ width: 15, height: 15, accentColor: C.navy }}
            />
            {skill}
          </label>
        ))}
      </div>

      <button
        onClick={onGenerate}
        style={{
          width: "100%",
          backgroundColor: C.navy,
          color: "#fff",
          padding: "12px",
          borderRadius: 6,
          fontSize: 12,
          fontWeight: 700,
          letterSpacing: "0.06em",
          marginBottom: 12,
          textTransform: "uppercase",
        }}
      >
        Generate Roadmap
      </button>
      <p
        style={{
          fontSize: 11,
          color: "#888",
          lineHeight: 1.5,
          textAlign: "center",
        }}
      >
        AI akan menganalisis data Anda. Hasil perlu validasi manajer.
      </p>
    </div>
  );
}
