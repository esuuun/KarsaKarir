"use client";

import type { ValidatedState, NotesState, RoadmapStep } from "@/lib/types";

const C = {
  navy: "#1A3C6E",
  blue: "#2A5EA8",
  green: "#27855A",
  orange: "#D4820A",
  border: "#E8ECF5",
  bg: "#F8FAFF",
};

interface Props {
  step: RoadmapStep;
  validated: ValidatedState;
  notes: NotesState;
  onValidate: (id: number, action: "setuju" | "edit" | "hapus") => void;
  onNoteBlur: (id: number, note: string) => void;
  onNoteChange: (id: number, note: string) => void;
}

export default function ReviewStep({
  step,
  validated,
  notes,
  onValidate,
  onNoteBlur,
  onNoteChange,
}: Props) {
  const current = validated[step.id];
  const note = notes[step.id] ?? "";

  const confColor =
    step.conf >= 90 ? C.green : step.conf >= 80 ? C.blue : C.orange;
  const confBg =
    step.conf >= 90 ? "#D1FAE5" : step.conf >= 80 ? "#DBEAFE" : "#FEF3C7";

  return (
    <div
      style={{
        backgroundColor: "#fff",
        border: `1px solid ${C.border}`,
        borderRadius: 10,
        padding: 16,
        marginBottom: 12,
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 12,
          gap: 8,
        }}
      >
        <span style={{ fontSize: 14, fontWeight: 700, color: C.navy }}>
          {step.title}
        </span>
        <span
          style={{
            fontSize: 11,
            fontWeight: 600,
            padding: "3px 8px",
            borderRadius: 4,
            backgroundColor: confBg,
            color: confColor,
            flexShrink: 0,
            whiteSpace: "nowrap",
          }}
        >
          ✦ {step.conf}% AI Confidence
        </span>
      </div>

      <div style={{ display: "flex", gap: 6, marginBottom: 12, flexWrap: "wrap" }}>
        <button
          onClick={() => onValidate(step.id, "setuju")}
          style={{
            padding: "5px 12px",
            borderRadius: 6,
            fontSize: 12,
            fontWeight: 600,
            border: `1px solid ${current === "setuju" ? C.green : C.border}`,
            backgroundColor: current === "setuju" ? C.green : "#fff",
            color: current === "setuju" ? "#fff" : "#555",
          }}
        >
          ✓ Setuju
        </button>
        <button
          onClick={() => onValidate(step.id, "edit")}
          style={{
            padding: "5px 12px",
            borderRadius: 6,
            fontSize: 12,
            fontWeight: 600,
            border: `1px solid ${current === "edit" ? C.blue : C.border}`,
            backgroundColor: current === "edit" ? C.blue : "#fff",
            color: current === "edit" ? "#fff" : "#555",
          }}
        >
          ✎ Edit
        </button>
        <button
          onClick={() => onValidate(step.id, "hapus")}
          style={{
            padding: "5px 12px",
            borderRadius: 6,
            fontSize: 12,
            fontWeight: 600,
            border: `1px solid ${current === "hapus" ? "#DC2626" : C.border}`,
            backgroundColor: current === "hapus" ? "#DC2626" : "#fff",
            color: current === "hapus" ? "#fff" : "#555",
          }}
        >
          🗑 Hapus
        </button>
      </div>

      <div>
        <label
          style={{
            fontSize: 10,
            fontWeight: 600,
            color: "#888",
            letterSpacing: "0.08em",
            display: "block",
            marginBottom: 5,
            textTransform: "uppercase",
          }}
        >
          Catatan Manajer
        </label>
        <textarea
          value={note}
          onChange={(e) => onNoteChange(step.id, e.target.value)}
          onBlur={(e) => onNoteBlur(step.id, e.target.value)}
          placeholder="Berikan arahan tambahan..."
          style={{
            width: "100%",
            minHeight: 68,
            padding: "8px 10px",
            border: `1px solid ${C.border}`,
            borderRadius: 6,
            fontSize: 13,
            resize: "vertical",
            color: "#333",
            backgroundColor: C.bg,
          }}
        />
      </div>
    </div>
  );
}
