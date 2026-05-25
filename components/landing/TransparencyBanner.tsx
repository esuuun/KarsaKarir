export default function TransparencyBanner() {
  return (
    <section style={{ padding: "0 32px 80px" }}>
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          backgroundColor: "#FFFBEB",
          border: "1px solid #FDE68A",
          borderRadius: 12,
          padding: "24px 32px",
          display: "flex",
          gap: 16,
          alignItems: "flex-start",
        }}
      >
        <div
          style={{
            width: 36,
            height: 36,
            backgroundColor: "#FDE68A",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 16,
            flexShrink: 0,
            color: "#92400E",
            fontWeight: 700,
          }}
        >
          i
        </div>
        <div>
          <h4
            style={{
              fontWeight: 700,
              color: "#92400E",
              marginBottom: 6,
              fontSize: 15,
            }}
          >
            Informasi Penting
          </h4>
          <p style={{ fontSize: 14, color: "#78350F", lineHeight: 1.7 }}>
            KarsaKarir adalah alat bantu, bukan penentu keputusan karir.
            Akurasi rekomendasi bergantung pada kelengkapan profil Anda. Semua
            saran AI harus divalidasi oleh manajer untuk memastikan keselarasan
            dengan strategi perusahaan.
          </p>
        </div>
      </div>
    </section>
  );
}
