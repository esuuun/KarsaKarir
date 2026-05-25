const C = {
  navy: "#1A3C6E",
  green: "#27855A",
  border: "#E8ECF5",
};

const STEPS = [
  {
    icon: "◉+",
    title: "Isi Profil & Target",
    desc: "Masukkan skill saat ini dan posisi impian Anda untuk memulai perjalanan.",
    hitl: false,
  },
  {
    icon: "◈",
    title: "AI Analisis Data",
    desc: "Sistem menganalisis data internal perusahaan dan tren industri secara real-time.",
    hitl: false,
  },
  {
    icon: "✓",
    title: "Manajer Validasi",
    desc: "Manajer meninjau dan menyesuaikan rekomendasi AI sesuai kebutuhan tim.",
    hitl: true,
  },
  {
    icon: "⇄",
    title: "Roadmap Siap",
    desc: "Dapatkan rencana pengembangan karir yang tervalidasi dan siap dieksekusi.",
    hitl: false,
  },
];

export default function StepsSection() {
  return (
    <section style={{ backgroundColor: "#fff", padding: "80px 32px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <p
            style={{
              fontSize: 12,
              color: "#888",
              letterSpacing: "0.15em",
              marginBottom: 12,
              textTransform: "uppercase",
            }}
          >
            Proses Kami
          </p>
          <h2 style={{ fontSize: 36, fontWeight: 700, color: C.navy }}>
            Langkah Menuju Karir Impian
          </h2>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 24,
          }}
        >
          {STEPS.map((step) => (
            <div
              key={step.title}
              style={{
                backgroundColor: "#fff",
                border: `1px solid ${step.hitl ? C.green : C.border}`,
                borderRadius: 12,
                padding: 24,
                position: "relative",
              }}
            >
              {step.hitl && (
                <div
                  style={{
                    position: "absolute",
                    top: -13,
                    left: 20,
                    backgroundColor: C.green,
                    color: "#fff",
                    fontSize: 11,
                    padding: "3px 10px",
                    borderRadius: 4,
                    fontWeight: 600,
                    whiteSpace: "nowrap",
                  }}
                >
                  ← HitL (Dow, 2005)
                </div>
              )}
              <div
                style={{
                  width: 48,
                  height: 48,
                  backgroundColor: "#F0F4FF",
                  borderRadius: 10,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 22,
                  marginBottom: 16,
                  color: C.navy,
                }}
              >
                {step.icon}
              </div>
              <h3
                style={{
                  fontSize: 15,
                  fontWeight: 600,
                  color: C.navy,
                  marginBottom: 8,
                }}
              >
                {step.title}
              </h3>
              <p style={{ fontSize: 13, color: "#666", lineHeight: 1.6 }}>
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
