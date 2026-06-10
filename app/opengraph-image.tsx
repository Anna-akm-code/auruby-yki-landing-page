import { ImageResponse } from "next/og";

export const alt =
  "Auruby — all your YKI keskitaso Finnish exam prep in one app";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// On-brand Open Graph / Twitter card generated from the Auruby palette
// (sand/lilac background, anthracite text, chartreuse + purple accents).
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#EEEDFE",
          padding: "80px",
          fontFamily: "sans-serif",
        }}
      >
        {/* Wordmark */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            fontSize: 40,
            fontWeight: 700,
            color: "#2D2D2D",
          }}
        >
          <div
            style={{
              width: 22,
              height: 22,
              borderRadius: 999,
              backgroundColor: "#D6F549",
              marginRight: 18,
            }}
          />
          Auruby
        </div>

        {/* Headline */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 76,
              fontWeight: 700,
              lineHeight: 1.05,
              color: "#2D2D2D",
              maxWidth: 980,
            }}
          >
            All your YKI keskitaso prep in one app
          </div>
          <div
            style={{
              marginTop: 28,
              fontSize: 34,
              color: "#4A4A4A",
            }}
          >
            Vocabulary · Reading · Listening · Writing · Speaking
          </div>
        </div>

        {/* Accent footer bar */}
        <div style={{ display: "flex", alignItems: "center", fontSize: 28 }}>
          <div
            style={{
              width: 220,
              height: 12,
              borderRadius: 999,
              backgroundColor: "#7C5CFC",
              marginRight: 24,
            }}
          />
          <div style={{ color: "#4A4A4A" }}>
            Designed by language teachers · auruby.io
          </div>
        </div>
      </div>
    ),
    size,
  );
}
