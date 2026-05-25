import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import HeroSection from "@/components/landing/HeroSection";
import StepsSection from "@/components/landing/StepsSection";
import TransparencyBanner from "@/components/landing/TransparencyBanner";

const C = {
  navy: "#1A3C6E",
  border: "#E8ECF5",
};

export default function LandingPage() {
  return (
    <div style={{ backgroundColor: "#F8FAFF", minHeight: "100vh" }}>
      <Navbar />
      <HeroSection />
      <StepsSection />
      <TransparencyBanner />
      <footer
        style={{
          backgroundColor: "#fff",
          borderTop: `1px solid ${C.border}`,
          padding: "20px 32px",
        }}
      >
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <span style={{ fontSize: 13, color: "#888" }}>
            <strong style={{ color: C.navy }}>KarsaKarir</strong> &copy; 2026
            KarsaKarir &mdash; Internal Career Growth Platform
          </span>
          <div
            style={{ display: "flex", gap: 24, fontSize: 13, color: "#888" }}
          >
            <Link href="/">Kebijakan Privasi</Link>
            <Link href="/">Bantuan</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
