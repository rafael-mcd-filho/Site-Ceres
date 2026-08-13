import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 10,
          background: "#5c111e",
        }}
      >
        <div style={{ color: "#d8b54a", fontSize: 82, fontWeight: 600, letterSpacing: -2 }}>
          CR
        </div>
        <div style={{ color: "rgba(255,255,255,0.62)", fontSize: 15, letterSpacing: 4 }}>
          ADVOCACIA
        </div>
      </div>
    ),
    size,
  );
}
