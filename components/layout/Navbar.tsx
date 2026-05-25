import Link from "next/link";

const C = {
  navy: "#1A3C6E",
  border: "#E8ECF5",
};

export default function Navbar() {
  return (
    <nav
      style={{
        position: "sticky",
        top: 0,
        zIndex: 100,
        backgroundColor: "#fff",
        borderBottom: `1px solid ${C.border}`,
        padding: "0 32px",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: 64,
        }}
      >
        <Link href="/">
          <div style={{ lineHeight: 1.2 }}>
            <div style={{ fontWeight: 700, fontSize: 18, color: C.navy }}>KarsaKarir</div>
            <div style={{ fontSize: 10, color: "#888", letterSpacing: "0.12em" }}>CAREER EVOLUTION AI</div>
          </div>
        </Link>

        <div style={{ display: "flex", gap: 32, fontSize: 14 }}>
          <Link
            href="/"
            style={{
              fontWeight: 600,
              color: C.navy,
              borderBottom: `2px solid ${C.navy}`,
              paddingBottom: 2,
            }}
          >
            Beranda
          </Link>
          <Link href="/" style={{ color: "#555" }}>
            Tentang
          </Link>
          <Link href="/" style={{ color: "#555" }}>
            Cara Kerja
          </Link>
        </div>

        <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
          <Link href="/manager" style={{ fontSize: 14, color: "#555" }}>
            Portal Manajer
          </Link>
          <Link href="/employee">
            <button
              style={{
                backgroundColor: C.navy,
                color: "#fff",
                padding: "8px 20px",
                borderRadius: 6,
                fontSize: 14,
                fontWeight: 600,
              }}
            >
              Mulai Sekarang
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
