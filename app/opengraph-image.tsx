import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Eran Timothy Perera | Software Engineer · Sri Lanka";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#0a0a0a",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          fontFamily: "monospace",
          position: "relative",
        }}
      >
        {/* Grid overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />

        {/* Top — prompt line */}
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <svg width="18" height="18" viewBox="0 0 32 32" fill="none">
            <rect width="32" height="32" rx="6" fill="#0a0a0a" />
            <polyline
              points="7,11 13,16 7,21"
              stroke="#f59e0b"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <line x1="15" y1="21" x2="25" y2="21" stroke="#f59e0b" strokeWidth="2.5" strokeLinecap="round" />
          </svg>
          <span style={{ color: "#6b7280", fontSize: 18 }}>erantimothy.dev</span>
        </div>

        {/* Middle — headline */}
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <span style={{ color: "#f59e0b", fontSize: 28 }}>$</span>
            <span style={{ color: "#4b5563", fontSize: 24 }}>whoami</span>
          </div>
          <div
            style={{
              color: "#f9fafb",
              fontSize: 72,
              fontWeight: 300,
              lineHeight: 1.05,
              letterSpacing: "-2px",
            }}
          >
            Eran Timothy Perera
          </div>
          <div style={{ color: "#9ca3af", fontSize: 26, marginTop: 8 }}>
            Software Engineering Student · Full-Stack · DevOps · Sri Lanka
          </div>
        </div>

        {/* Bottom — tags + CTA */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
          }}
        >
          <div style={{ display: "flex", gap: 12 }}>
            {["Next.js", "Spring Boot", "NestJS", "FastAPI", "Docker"].map((tag) => (
              <div
                key={tag}
                style={{
                  background: "#1a1a1a",
                  border: "1px solid #27272a",
                  borderRadius: 6,
                  padding: "6px 14px",
                  color: "#6b7280",
                  fontSize: 16,
                  fontFamily: "monospace",
                }}
              >
                {tag}
              </div>
            ))}
          </div>
          <div
            style={{
              background: "#f59e0b",
              borderRadius: 8,
              padding: "12px 28px",
              color: "#0a0a0a",
              fontSize: 18,
              fontWeight: 700,
              fontFamily: "monospace",
            }}
          >
            View Portfolio →
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
