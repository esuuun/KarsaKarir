"use client";

import { TEAM_ROWS } from "@/lib/constants";
import type { TeamMember } from "@/lib/types";

const C = {
  navy: "#1A3C6E",
  blue: "#2A5EA8",
  orange: "#D4820A",
  green: "#27855A",
  border: "#E8ECF5",
  bg: "#F8FAFF",
};

interface Props {
  onReview: (member: TeamMember) => void;
}

export default function PendingTable({ onReview }: Props) {
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 16,
        }}
      >
        <h2 style={{ fontSize: 17, fontWeight: 700, color: C.navy }}>
          Roadmap Menunggu Validasi
        </h2>
        <button
          style={{
            fontSize: 13,
            color: C.blue,
            fontWeight: 600,
            textDecoration: "underline",
          }}
        >
          Lihat Semua
        </button>
      </div>

      <div
        style={{
          backgroundColor: "#fff",
          border: `1px solid ${C.border}`,
          borderRadius: 12,
          overflow: "hidden",
        }}
      >
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr style={{ backgroundColor: C.bg }}>
              {[
                "Nama Karyawan",
                "Posisi Saat Ini",
                "Target Posisi",
                "Dibuat",
                "Status",
                "",
              ].map((col) => (
                <th
                  key={col}
                  style={{
                    padding: "10px 16px",
                    textAlign: "left",
                    fontSize: 10,
                    fontWeight: 600,
                    color: "#888",
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                    borderBottom: `1px solid ${C.border}`,
                  }}
                >
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {TEAM_ROWS.map((row) => (
              <tr
                key={row.name}
                style={{ borderBottom: `1px solid ${C.border}` }}
              >
                <td style={{ padding: "12px 16px" }}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 10,
                    }}
                  >
                    <div
                      style={{
                        width: 32,
                        height: 32,
                        borderRadius: "50%",
                        backgroundColor: C.blue,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "#fff",
                        fontSize: 13,
                        fontWeight: 600,
                        flexShrink: 0,
                      }}
                    >
                      {row.name[0]}
                    </div>
                    <span
                      style={{
                        fontSize: 14,
                        fontWeight: 600,
                        color: C.navy,
                      }}
                    >
                      {row.name}
                    </span>
                  </div>
                </td>
                <td
                  style={{
                    padding: "12px 16px",
                    fontSize: 13,
                    color: "#555",
                  }}
                >
                  {row.role}
                </td>
                <td style={{ padding: "12px 16px" }}>
                  <span
                    style={{
                      fontSize: 13,
                      color: C.blue,
                      fontWeight: 500,
                    }}
                  >
                    {row.target}
                  </span>
                </td>
                <td
                  style={{
                    padding: "12px 16px",
                    fontSize: 13,
                    color: "#555",
                  }}
                >
                  {row.date}
                </td>
                <td style={{ padding: "12px 16px" }}>
                  <span
                    style={{
                      fontSize: 11,
                      fontWeight: 700,
                      padding: "3px 8px",
                      borderRadius: 4,
                      backgroundColor:
                        row.status === "PENDING" ? "#FEF3C7" : "#D1FAE5",
                      color:
                        row.status === "PENDING" ? C.orange : C.green,
                    }}
                  >
                    {row.status}
                  </span>
                </td>
                <td style={{ padding: "12px 16px" }}>
                  {row.status === "PENDING" && (
                    <button
                      onClick={() => onReview(row)}
                      style={{
                        padding: "6px 16px",
                        backgroundColor: C.navy,
                        color: "#fff",
                        borderRadius: 6,
                        fontSize: 13,
                        fontWeight: 600,
                      }}
                    >
                      Review
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
