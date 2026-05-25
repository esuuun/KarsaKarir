"use client";

import { useState } from "react";

const C = {
  navy: "#1A3C6E",
  green: "#27855A",
  border: "#E8ECF5",
};

export default function EmojiFeedback() {
  const [selected, setSelected] = useState<number | null>(null);
  const [sent, setSent] = useState(false);

  const emojis = ["😞", "😐", "😊"];

  const handleSelect = (i: number) => {
    setSelected(i);
    setSent(true);
  };

  return (
    <div
      style={{
        backgroundColor: "#fff",
        border: `1px solid ${C.border}`,
        borderRadius: 12,
        padding: "20px 24px",
        marginTop: 24,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        gap: 16,
      }}
    >
      <div>
        <h3
          style={{ fontSize: 15, fontWeight: 700, color: C.navy, marginBottom: 4 }}
        >
          Bagaimana kualitas roadmap ini?
        </h3>
        <p style={{ fontSize: 13, color: "#888" }}>
          Bantu AI kami memberikan rekomendasi yang lebih akurat.
        </p>
      </div>
      {sent ? (
        <div
          style={{
            fontSize: 14,
            color: C.green,
            fontWeight: 600,
            flexShrink: 0,
          }}
        >
          ✓ Feedback terkirim!
        </div>
      ) : (
        <div style={{ display: "flex", gap: 10, flexShrink: 0 }}>
          {emojis.map((emoji, i) => (
            <button
              key={i}
              onClick={() => handleSelect(i)}
              style={{
                width: 48,
                height: 48,
                fontSize: 22,
                borderRadius: "50%",
                border: `2px solid ${selected === i ? C.navy : C.border}`,
                backgroundColor: selected === i ? "#EEF3FF" : "#fff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {emoji}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
