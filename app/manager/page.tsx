"use client";

import { useState } from "react";
import Link from "next/link";
import Sidebar from "@/components/layout/Sidebar";
import OverviewCards from "@/components/manager/OverviewCards";
import PendingTable from "@/components/manager/PendingTable";
import ReviewPanel from "@/components/manager/ReviewPanel";
import OverrideLog from "@/components/manager/OverrideLog";
import type { TeamMember, OverrideLog as OverrideLogType } from "@/lib/types";
import { NAV_MANAGER } from "@/lib/constants";

const C = {
  navy: "#1A3C6E",
  border: "#E8ECF5",
  bg: "#F8FAFF",
};

export default function ManagerPage() {
  const [reviewOpen, setReviewOpen] = useState(false);
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);
  const [overrideLogs, setOverrideLogs] = useState<OverrideLogType[]>([]);
  const [showLog, setShowLog] = useState(false);

  const handleReview = (member: TeamMember) => {
    setSelectedMember(member);
    setReviewOpen(true);
  };

  const handleLog = (entry: OverrideLogType) => {
    setOverrideLogs((prev) => [...prev, entry]);
  };

  const handleClose = () => {
    setReviewOpen(false);
    setSelectedMember(null);
  };

  return (
    <div style={{ display: "flex", minHeight: "100vh", backgroundColor: C.bg }}>
      <Sidebar
        navItems={NAV_MANAGER}
        activeItem="Dashboard"
        userName="Hasyim Kurniawan"
        userRole="Head of Engineering"
        greenAvatar
        basePath="/manager"
      />

      <main style={{ flex: 1, overflowY: "auto", padding: 32 }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 32,
          }}
        >
          <h1 style={{ fontSize: 24, fontWeight: 800, color: C.navy }}>
            Dashboard Manager
          </h1>
          <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
            <input
              type="text"
              placeholder="Cari roadmap atau anggota..."
              style={{
                padding: "8px 14px",
                border: `1px solid ${C.border}`,
                borderRadius: 6,
                fontSize: 13,
                width: 240,
                backgroundColor: "#fff",
                color: "#333",
              }}
            />
            <button
              onClick={() => setShowLog((p) => !p)}
              style={{
                padding: "8px 14px",
                border: `1px solid ${C.border}`,
                borderRadius: 6,
                fontSize: 13,
                backgroundColor: showLog ? C.navy : "#fff",
                color: showLog ? "#fff" : "#555",
              }}
            >
              Override Log
            </button>
            <Link href="/">
              <button
                style={{
                  padding: "8px 14px",
                  border: `1px solid ${C.border}`,
                  borderRadius: 6,
                  fontSize: 13,
                  backgroundColor: "#fff",
                  color: "#555",
                }}
              >
                ← Beranda
              </button>
            </Link>
          </div>
        </div>

        <OverviewCards />

        {showLog && <OverrideLog logs={overrideLogs} />}

        <PendingTable onReview={handleReview} />
      </main>

      <ReviewPanel
        open={reviewOpen}
        member={selectedMember}
        onClose={handleClose}
        onLog={handleLog}
      />
    </div>
  );
}
