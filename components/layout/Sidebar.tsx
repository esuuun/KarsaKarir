import Link from "next/link";

interface SidebarProps {
  navItems: string[];
  activeItem?: string;
  userName: string;
  userRole: string;
  greenAvatar?: boolean;
  basePath: string;
}

const C = {
  navy: "#1A3C6E",
  bg: "#F8FAFF",
  border: "#E8ECF5",
};

const ICONS: Record<string, string> = {
  Dashboard: "⊞",
  "Profil Saya": "◎",
  "Roadmap Saya": "⇄",
  Feedback: "☁",
  Pengaturan: "⚙",
  "Tim Saya": "◉",
  "Review Roadmap": "✓",
  Analytics: "▦",
};

export default function Sidebar({
  navItems,
  activeItem,
  userName,
  userRole,
  greenAvatar,
  basePath,
}: SidebarProps) {
  return (
    <div
      style={{
        width: 200,
        minHeight: "100vh",
        backgroundColor: "#fff",
        borderRight: `1px solid ${C.border}`,
        display: "flex",
        flexDirection: "column",
        flexShrink: 0,
      }}
    >
      <div style={{ padding: "20px 20px 24px" }}>
        <Link href="/">
          <div style={{ lineHeight: 1.2 }}>
            <div style={{ fontWeight: 700, fontSize: 16, color: C.navy }}>KarsaKarir</div>
            <div style={{ fontSize: 9, color: "#888", letterSpacing: "0.12em" }}>CAREER EVOLUTION AI</div>
          </div>
        </Link>
      </div>

      <nav style={{ flex: 1 }}>
        {navItems.map((item) => {
          const isActive = item === activeItem;
          return (
            <Link key={item} href={basePath}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  padding: "10px 20px",
                  fontSize: 14,
                  fontWeight: isActive ? 600 : 400,
                  color: isActive ? C.navy : "#666",
                  backgroundColor: isActive ? C.bg : "transparent",
                  borderLeft: isActive
                    ? `3px solid ${C.navy}`
                    : "3px solid transparent",
                }}
              >
                <span style={{ fontSize: 15, opacity: 0.7 }}>
                  {ICONS[item] ?? "○"}
                </span>
                {item}
              </div>
            </Link>
          );
        })}
      </nav>

      <div
        style={{
          padding: "16px 20px",
          borderTop: `1px solid ${C.border}`,
          display: "flex",
          alignItems: "center",
          gap: 10,
        }}
      >
        <div
          style={{
            width: 36,
            height: 36,
            borderRadius: "50%",
            backgroundColor: greenAvatar ? "#27855A" : "#2A5EA8",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#fff",
            fontSize: 14,
            fontWeight: 600,
            flexShrink: 0,
          }}
        >
          {userName[0]}
        </div>
        <div>
          <div style={{ fontSize: 13, fontWeight: 600, color: C.navy }}>{userName}</div>
          <div style={{ fontSize: 11, color: "#888" }}>{userRole}</div>
        </div>
      </div>
    </div>
  );
}
