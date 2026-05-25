"use client";

import { useState } from "react";
import Link from "next/link";
import Sidebar from "@/components/layout/Sidebar";
import TargetForm from "@/components/employee/TargetForm";
import RoadmapTimeline from "@/components/employee/RoadmapTimeline";
import EmojiFeedback from "@/components/employee/EmojiFeedback";
import { NAV_EMPLOYEE } from "@/lib/constants";

const C = {
  navy: "#1A3C6E",
  border: "#E8ECF5",
  bg: "#F8FAFF",
};

export default function EmployeePage() {
  const [generated, setGenerated] = useState(false);

  return (
    <div style={{ display: "flex", minHeight: "100vh", backgroundColor: C.bg }}>
      <Sidebar
        navItems={NAV_EMPLOYEE}
        activeItem="Dashboard"
        userName="Alif Harits"
        userRole="Jr. Software Engineer"
        basePath="/employee"
      />

      <main style={{ flex: 1, overflowY: "auto", padding: 32 }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 4,
          }}
        >
          <nav style={{ fontSize: 13, color: "#888" }}>
            <Link href="/employee" style={{ color: "#888" }}>
              Dashboard
            </Link>
            <span style={{ margin: "0 6px" }}>›</span>
            <span style={{ color: C.navy }}>Roadmap Saya</span>
          </nav>
          <Link href="/">
            <button
              style={{
                fontSize: 13,
                color: "#555",
                border: `1px solid ${C.border}`,
                padding: "6px 14px",
                borderRadius: 6,
                backgroundColor: "#fff",
              }}
            >
              ← Beranda
            </button>
          </Link>
        </div>

        <h1
          style={{
            fontSize: 28,
            fontWeight: 800,
            color: C.navy,
            marginBottom: 28,
            marginTop: 8,
          }}
        >
          Selamat datang, Alif 👋
        </h1>

        <div
          style={{
            display: "flex",
            gap: 24,
            alignItems: "flex-start",
          }}
        >
          <TargetForm onGenerate={() => setGenerated(true)} />

          {generated && (
            <div style={{ flex: 1, minWidth: 0 }}>
              <RoadmapTimeline />
              <EmojiFeedback />
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
