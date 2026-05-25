"use client";

import { useState } from "react";
import type {
  ValidatedState,
  NotesState,
  OverrideLog,
  TeamMember,
} from "@/lib/types";
import { ROADMAP_STEPS } from "@/lib/constants";
import ReviewStep from "./ReviewStep";

const C = {
  navy: "#1A3C6E",
  green: "#27855A",
  border: "#E8ECF5",
  blue: "#3B82F6",
};

interface Props {
  open: boolean;
  member: TeamMember | null;
  onClose: () => void;
  onLog: (entry: OverrideLog) => void;
}

export default function ReviewPanel({ open, member, onClose, onLog }: Props) {
  const [validated, setValidated] = useState<ValidatedState>({});
  const [notes, setNotes] = useState<NotesState>({});

  if (!open || !member) return null;

  const handleValidate = (
    id: number,
    action: "setuju" | "edit" | "hapus"
  ) => {
    setValidated((prev) => ({
      ...prev,
      [id]: prev[id] === action ? undefined : action,
    }));
  };

  const handleNoteChange = (id: number, note: string) => {
    setNotes((prev) => ({ ...prev, [id]: note }));
  };

  const handleNoteBlur = (id: number, note: string) => {
    if (note.trim()) {
      const step = ROADMAP_STEPS.find((s) => s.id === id);
      onLog({
        time: new Date().toLocaleTimeString("id-ID", {
          hour: "2-digit",
          minute: "2-digit",
        }),
        step: step?.title ?? `Step ${id}`,
        action: "Catatan",
        note,
      });
    }
  };

  const handleValidateAll = () => {
    ROADMAP_STEPS.forEach((step) => {
      const action = validated[step.id];
      if (action) {
        onLog({
          time: new Date().toLocaleTimeString("id-ID", {
            hour: "2-digit",
            minute: "2-digit",
          }),
          step: step.title,
          action: action.charAt(0).toUpperCase() + action.slice(1),
          note: notes[step.id] ?? "",
        });
      }
    });
    setValidated({});
    setNotes({});
    onClose();
  };

  return (
    <>
      <div
        onClick={onClose}
        style={{
          position: "fixed",
          inset: 0,
          backgroundColor: "rgba(0,0,0,0.3)",
          zIndex: 190,
        }}
      />
      <div
        style={{
          position: "fixed",
          top: 0,
          right: 0,
          bottom: 0,
          width: 440,
          backgroundColor: "#fff",
          boxShadow: "-4px 0 24px rgba(0,0,0,0.15)",
          zIndex: 200,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            backgroundColor: C.navy,
            color: "#fff",
            padding: "20px 24px",
            flexShrink: 0,
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
            }}
          >
            <div>
              <h2 style={{ fontSize: 15, fontWeight: 700, marginBottom: 4 }}>
                Review Roadmap — {member.name}
              </h2>
              <p style={{ fontSize: 12, opacity: 0.75, lineHeight: 1.4 }}>
                Menganalisis kesenjangan kompetensi untuk posisi{" "}
                {member.target}
              </p>
            </div>
            <button
              onClick={onClose}
              style={{
                color: "#fff",
                opacity: 0.7,
                fontSize: 22,
                width: 28,
                height: 28,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              ×
            </button>
          </div>
        </div>

        <div style={{ flex: 1, overflow: "auto", padding: "16px 20px" }}>
          {ROADMAP_STEPS.map((step, idx) => (
            <div key={step.id} style={{ display: "flex", gap: 12 }}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  flexShrink: 0,
                }}
              >
                <div
                  style={{
                    width: 14,
                    height: 14,
                    borderRadius: "50%",
                    backgroundColor: idx === 0 ? C.blue : "#D1D5DB",
                    marginTop: 16,
                    flexShrink: 0,
                  }}
                />
                {idx < ROADMAP_STEPS.length - 1 && (
                  <div
                    style={{
                      width: 2,
                      flex: 1,
                      backgroundColor: "#E5E7EB",
                      margin: "4px 0",
                      minHeight: 12,
                    }}
                  />
                )}
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <ReviewStep
                  step={step}
                  validated={validated}
                  notes={notes}
                  onValidate={handleValidate}
                  onNoteBlur={handleNoteBlur}
                  onNoteChange={handleNoteChange}
                />
              </div>
            </div>
          ))}
        </div>

        <div
          style={{
            padding: "14px 20px",
            borderTop: `1px solid ${C.border}`,
            display: "flex",
            gap: 10,
            flexShrink: 0,
          }}
        >
          <button
            onClick={handleValidateAll}
            style={{
              flex: 2,
              padding: "11px",
              backgroundColor: C.green,
              color: "#fff",
              borderRadius: 6,
              fontSize: 13,
              fontWeight: 700,
              letterSpacing: "0.05em",
              textTransform: "uppercase",
            }}
          >
            Validasi Semua
          </button>
          <button
            onClick={onClose}
            style={{
              flex: 1,
              padding: "11px",
              border: `1px solid ${C.navy}`,
              borderRadius: 6,
              fontSize: 13,
              fontWeight: 600,
              color: C.navy,
              backgroundColor: "#fff",
            }}
          >
            Kembalikan
          </button>
        </div>
      </div>
    </>
  );
}
