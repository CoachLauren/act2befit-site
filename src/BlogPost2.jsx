import React from "react";

export default function BlogPost2() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #0b1f3a 0%, #102a52 70%, #f97316 100%)",
        color: "white",
        fontFamily: "Arial, sans-serif",
        padding: 40,
      }}
    >
      <div style={{ maxWidth: 800, margin: "0 auto" }}>
        <h1 style={{ fontSize: 40 }}>Strength Training in Midlife</h1>

        <p style={{ lineHeight: 1.7, marginTop: 20 }}>
          Strength training becomes more important as we age, especially for women
          navigating menopause.
        </p>

        <p style={{ lineHeight: 1.7 }}>
          Building muscle supports metabolism, bone density, and long-term health.
          It also improves confidence and overall energy levels.
        </p>

        <p style={{ lineHeight: 1.7 }}>
          The goal is not to train harder — it is to train smarter and more consistently.
        </p>

        <a href="/" style={{ color: "#f97316", display: "inline-block", marginTop: 30 }}>
          ← Back to Home
        </a>
      </div>
    </div>
  );
}