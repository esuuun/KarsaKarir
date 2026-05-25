"use client";

import type { RoadmapStep as RoadmapStepType, LikeState } from "@/lib/types";

const C = {
  navy: "#1A3C6E",
  blue: "#2A5EA8",
  border: "#E8ECF5",
  bg: "#F8FAFF",
};

interface Props {
  step: RoadmapStepType;
  likeState: LikeState;
  onLike: (id: number, dir: "up" | "down") => void;
}

export default function RoadmapStep({ step, likeState, onLike }: Props) {
  const liked = likeState[step.id];
  const barWidth = Math.min((step.gap / 80) * 100, 100);

  return (
    <div
      style={{
        backgroundColor: "#fff",
        border: `1px solid ${C.border}`,
        borderRadius: 12,
        padding: 20,
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          marginBottom: 12,
        }}
      >
        <div>
          <h3
            style={{
              fontSize: 14,
              fontWeight: 700,
              color: C.navy,
              marginBottom: 4,
            }}
          >
            {step.title}
          </h3>
          <p style={{ fontSize: 12, color: "#888" }}>
            Estimasi: {step.est} &bull; Tingkat: {step.level}
          </p>
        </div>
        <div style={{ display: "flex", gap: 6, flexShrink: 0 }}>
          <button
            onClick={() => onLike(step.id, "up")}
            style={{
              width: 32,
              height: 32,
              borderRadius: 6,
              border: `1px solid ${liked === "up" ? C.blue : C.border}`,
              backgroundColor: liked === "up" ? "#EEF3FF" : "#fff",
              color: liked === "up" ? C.blue : "#888",
              fontSize: 14,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            👍
          </button>
          <button
            onClick={() => onLike(step.id, "down")}
            style={{
              width: 32,
              height: 32,
              borderRadius: 6,
              border: `1px solid ${liked === "down" ? "#DC2626" : C.border}`,
              backgroundColor: liked === "down" ? "#FEE2E2" : "#fff",
              color: liked === "down" ? "#DC2626" : "#888",
              fontSize: 14,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            👎
          </button>
        </div>
      </div>

      <div style={{ marginBottom: 12 }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: 5,
          }}
        >
          <span
            style={{
              fontSize: 10,
              fontWeight: 600,
              color: "#888",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
            }}
          >
            Pencapaian Skill
          </span>
          <span style={{ fontSize: 12, color: C.blue, fontWeight: 600 }}>
            {step.gap} / 80 EXP
          </span>
        </div>
        <div
          style={{
            height: 6,
            backgroundColor: C.bg,
            borderRadius: 3,
            overflow: "hidden",
          }}
        >
          <div
            style={{
              height: "100%",
              width: `${barWidth}%`,
              backgroundColor: C.blue,
              borderRadius: 3,
            }}
          />
        </div>
      </div>

      <div
        style={{
          backgroundColor: "#EEF3FF",
          borderLeft: `3px solid ${C.blue}`,
          borderRadius: "0 6px 6px 0",
          padding: "8px 12px",
          fontSize: 12,
          color: C.navy,
          lineHeight: 1.5,
          display: "flex",
          gap: 8,
          alignItems: "flex-start",
        }}
      >
        <span style={{ fontSize: 13, flexShrink: 0 }}>📊</span>
        <span>{step.why}</span>
      </div>
    </div>
  );
}
