const C = {
  navy: "#1A3C6E",
  orange: "#D4820A",
  green: "#27855A",
  border: "#E8ECF5",
};

const CARDS = [
  {
    title: "Total Anggota",
    value: "20 Anggota Tim",
    sub: "Update terakhir: Hari ini, 09:00",
    icon: "◉",
    badge: null as string | null,
    accent: null as string | null,
  },
  {
    title: "Perlu Review",
    value: "5 Roadmap",
    sub: "Waktu rata-rata review: 2 jam",
    icon: "▦",
    badge: "MENDESAK",
    accent: C.orange,
  },
  {
    title: "Tervalidasi",
    value: "12 Roadmap",
    sub: "+3 roadmap divalidasi minggu ini",
    icon: "✓",
    badge: "SELESAI",
    accent: C.green,
  },
];

export default function OverviewCards() {
  return (
    <div style={{ display: "flex", gap: 20, marginBottom: 32 }}>
      {CARDS.map((card) => (
        <div
          key={card.title}
          style={{
            flex: 1,
            backgroundColor: "#fff",
            border: `1px solid ${C.border}`,
            borderTop: card.accent
              ? `3px solid ${card.accent}`
              : `1px solid ${C.border}`,
            borderRadius: 12,
            padding: "20px 24px",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
              marginBottom: 8,
            }}
          >
            <span style={{ fontSize: 13, color: "#888", fontWeight: 500 }}>
              {card.title}
            </span>
            <span
              style={{
                fontSize: 18,
                color: card.accent ?? C.navy,
                opacity: 0.7,
              }}
            >
              {card.icon}
            </span>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              marginBottom: 4,
            }}
          >
            <span
              style={{ fontSize: 22, fontWeight: 700, color: C.navy }}
            >
              {card.value}
            </span>
            {card.badge && card.accent && (
              <span
                style={{
                  fontSize: 10,
                  fontWeight: 700,
                  padding: "2px 8px",
                  borderRadius: 4,
                  backgroundColor:
                    card.accent === C.orange ? "#FEF3C7" : "#D1FAE5",
                  color: card.accent,
                  letterSpacing: "0.05em",
                }}
              >
                {card.badge}
              </span>
            )}
          </div>
          <p style={{ fontSize: 12, color: "#888" }}>{card.sub}</p>
        </div>
      ))}
    </div>
  );
}
