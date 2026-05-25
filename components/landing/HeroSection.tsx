import Link from "next/link";

const C = {
  navy: "#1A3C6E",
  green: "#27855A",
};

export default function HeroSection() {
  return (
    <section
      style={{
        maxWidth: 1200,
        margin: "0 auto",
        padding: "80px 32px",
        display: "flex",
        alignItems: "center",
        gap: 64,
      }}
    >
      <div style={{ flex: 1 }}>
        <h1
          style={{
            fontSize: 48,
            fontWeight: 800,
            color: C.navy,
            lineHeight: 1.15,
            marginBottom: 20,
          }}
        >
          Bangun Jalur Karir
          <br />
          Anda dengan
          <br />
          Bantuan AI
        </h1>
        <p
          style={{
            fontSize: 16,
            color: "#444",
            marginBottom: 32,
            maxWidth: 420,
            lineHeight: 1.7,
          }}
        >
          KarsaKarir menganalisis skill Anda, tren industri, dan data internal
          perusahaan untuk menyusun roadmap karir personal. Hasil rekomendasi
          akan divalidasi oleh manajer Anda.
        </p>
        <div style={{ display: "flex", gap: 20, alignItems: "center" }}>
          <Link href="/employee">
            <button
              style={{
                backgroundColor: C.green,
                color: "#fff",
                padding: "12px 28px",
                borderRadius: 6,
                fontSize: 15,
                fontWeight: 600,
              }}
            >
              Mulai Eksplorasi Karir
            </button>
          </Link>
          <Link
            href="/employee"
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              fontSize: 15,
              color: "#333",
            }}
          >
            <span
              style={{
                width: 32,
                height: 32,
                borderRadius: "50%",
                border: "2px solid #333",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 11,
              }}
            >
              ▶
            </span>
            Lihat Demo
          </Link>
        </div>
      </div>

      <div style={{ flex: 1, display: "flex", justifyContent: "center" }}>
        <div
          style={{
            width: "100%",
            maxWidth: 480,
            height: 300,
            backgroundColor: "#0F172A",
            borderRadius: 16,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#4ECDC4",
            fontSize: 80,
            fontWeight: 700,
            letterSpacing: "0.04em",
            position: "relative",
            overflow: "hidden",
          }}
        >
          AI
          <div
            style={{
              position: "absolute",
              bottom: 24,
              left: 24,
              right: 24,
              backgroundColor: "rgba(255,255,255,0.08)",
              borderRadius: 10,
              padding: 14,
            }}
          >
            <div
              style={{
                fontSize: 11,
                color: "rgba(255,255,255,0.6)",
                marginBottom: 8,
              }}
            >
              Potential Career Paths
            </div>
            <div style={{ display: "flex", gap: 8 }}>
              {["#3B82F6", "#10B981", "#8B5CF6"].map((color) => (
                <div
                  key={color}
                  style={{
                    width: 28,
                    height: 28,
                    borderRadius: 6,
                    backgroundColor: color,
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
