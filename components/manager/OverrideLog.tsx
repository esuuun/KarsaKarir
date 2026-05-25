import type { OverrideLog as OverrideLogType } from "@/lib/types";

const C = {
  navy: "#1A3C6E",
};

interface Props {
  logs: OverrideLogType[];
}

export default function OverrideLog({ logs }: Props) {
  return (
    <div
      style={{
        backgroundColor: "#FFFBEB",
        border: "1px solid #FDE68A",
        borderRadius: 12,
        padding: 20,
        marginBottom: 24,
      }}
    >
      <h3
        style={{
          fontSize: 13,
          fontWeight: 700,
          color: C.navy,
          marginBottom: logs.length > 0 ? 12 : 0,
          textTransform: "uppercase",
          letterSpacing: "0.06em",
        }}
      >
        Override Log
      </h3>
      {logs.length === 0 ? (
        <p style={{ fontSize: 13, color: "#92400E" }}>
          Belum ada override yang tercatat.
        </p>
      ) : (
        logs.map((log, i) => (
          <div
            key={i}
            style={{
              fontSize: 13,
              color: "#444",
              padding: "8px 0",
              borderBottom:
                i < logs.length - 1 ? "1px solid #FDE68A" : "none",
              display: "flex",
              flexWrap: "wrap",
              gap: 6,
            }}
          >
            <span style={{ color: "#92400E", fontWeight: 700 }}>
              {log.time}
            </span>
            <span style={{ color: "#ccc" }}>|</span>
            <span>
              <strong>Step:</strong> {log.step}
            </span>
            <span style={{ color: "#ccc" }}>|</span>
            <span>
              <strong>Aksi:</strong> {log.action}
            </span>
            {log.note && (
              <>
                <span style={{ color: "#ccc" }}>|</span>
                <span>
                  <strong>Catatan:</strong> {log.note}
                </span>
              </>
            )}
          </div>
        ))
      )}
    </div>
  );
}
