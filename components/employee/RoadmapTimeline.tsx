"use client";

import { useState } from "react";
import type { LikeState } from "@/lib/types";
import { ROADMAP_STEPS } from "@/lib/constants";
import RoadmapStep from "./RoadmapStep";

const C = {
  navy: "#1A3C6E",
  blue: "#2A5EA8",
  orange: "#D4820A",
  border: "#E8ECF5",
};

interface Props {
  validated?: boolean;
}

export default function RoadmapTimeline({ validated = false }: Props) {
  const [likeState, setLikeState] = useState<LikeState>({});

  const handleLike = (id: number, dir: "up" | "down") => {
    setLikeState((prev) => ({
      ...prev,
      [id]: prev[id] === dir ? undefined : dir,
    }));
  };

  return (
    <div style={{ flex: 1, minWidth: 0 }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          marginBottom: 20,
        }}
      >
        <div>
          <h2
            style={{
              fontSize: 20,
              fontWeight: 700,
              color: C.navy,
              marginBottom: 4,
            }}
          >
            Roadmap Karir Anda
          </h2>
          <p style={{ fontSize: 13, color: "#888" }}>
            Personalisasi AI berdasarkan profil dan kebutuhan perusahaan.
          </p>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 6,
            padding: "6px 14px",
            backgroundColor: validated ? "#F0FFF4" : "#FFFBEB",
            border: `1px solid ${validated ? "#6EE7B7" : "#FDE68A"}`,
            borderRadius: 6,
            fontSize: 11,
            fontWeight: 700,
            color: validated ? "#065F46" : C.orange,
            flexShrink: 0,
            letterSpacing: "0.04em",
            textTransform: "uppercase",
          }}
        >
          {validated ? "✓ Tervalidasi" : "⏳ Menunggu Validasi Manajer"}
        </div>
      </div>

      <div style={{ position: "relative", paddingLeft: 28 }}>
        <div
          style={{
            position: "absolute",
            left: 6,
            top: 22,
            bottom: 22,
            width: 2,
            backgroundColor: C.blue,
            opacity: 0.25,
          }}
        />
        {ROADMAP_STEPS.map((step, idx) => (
          <div
            key={step.id}
            style={{ position: "relative", marginBottom: 16 }}
          >
            <div
              style={{
                position: "absolute",
                left: -22,
                top: 18,
                width: 14,
                height: 14,
                borderRadius: "50%",
                backgroundColor: idx === 0 ? C.blue : "#CBD5E1",
                border: "2px solid #fff",
                boxShadow: `0 0 0 2px ${idx === 0 ? C.blue : "#CBD5E1"}`,
              }}
            />
            <RoadmapStep step={step} likeState={likeState} onLike={handleLike} />
          </div>
        ))}
      </div>

      <div style={{ display: "flex", gap: 12, marginTop: 4 }}>
        <button
          style={{
            flex: 1,
            padding: "10px",
            border: `1px solid ${C.navy}`,
            borderRadius: 6,
            fontSize: 13,
            fontWeight: 600,
            color: C.navy,
            backgroundColor: "#fff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 6,
          }}
        >
          ↺ Regenerate Alternatif
        </button>
        <button
          style={{
            flex: 1,
            padding: "10px",
            backgroundColor: C.navy,
            borderRadius: 6,
            fontSize: 13,
            fontWeight: 600,
            color: "#fff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 6,
          }}
        >
          ✎ Edit Roadmap
        </button>
      </div>
    </div>
  );
}
