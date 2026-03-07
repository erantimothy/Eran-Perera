import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Eran Timothy Perera | Software Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#0a0a0a",
          padding: "64px",
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
              "linear-gradient(rgba(250,250,250,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(250,250,250,0.03) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />

        {/* Top — terminal prompt */}
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          {/* Chevron + underline icon */}
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
            <polyline
              points="4,9 10,14 4,19"
              stroke="#f59e0b"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <line
              x1="12"
              y1="19"
              x2="20"
              y2="19"
              stroke="#f59e0b"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
          </svg>
          <span style={{ color: "#525252", fontSize: "18px", letterSpacing: "2px" }}>
            etp<span style={{ color: "#f59e0b" }}>@</span>dev
          </span>
        </div>

        {/* Centre — name + tagline */}
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <div
            style={{
              fontSize: "72px",
              fontWeight: 300,
              color: "#fafafa",
              letterSpacing: "-2px",
              lineHeight: 1.05,
            }}
          >
            Eran Timothy{" "}
            <span style={{ color: "#a3a3a3" }}>Perera</span>
          </div>
          <div
            style={{
              fontSize: "24px",
              color: "#a3a3a3",
              fontStyle: "italic",
              fontWeight: 300,
            }}
          >
            "I build things that run quietly and reliably."
          </div>
        </div>

        {/* Bottom — URL + tags */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <span style={{ color: "#525252", fontSize: "16px", letterSpacing: "1px" }}>
            erantimothy.dev
          </span>
          <div style={{ display: "flex", gap: "10px" }}>
            {["Next.js", "TypeScript", "DevOps", "AI"].map((tag) => (
              <span
                key={tag}
                style={{
                  fontSize: "13px",
                  color: "#525252",
                  border: "1px solid #262626",
                  borderRadius: "4px",
                  padding: "4px 10px",
                  backgroundColor: "#111111",
                  fontFamily: "monospace",
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
