import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

/** Monograma quadrado — o logo original é retrato e não serve como favicon. */
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#5c111e",
          color: "#d8b54a",
          fontSize: 34,
          fontWeight: 600,
          letterSpacing: -1,
        }}
      >
        CR
      </div>
    ),
    size,
  );
}
