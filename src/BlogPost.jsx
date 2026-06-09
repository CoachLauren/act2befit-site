import React from "react";

export default function BlogPost() {
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
        <h1 style={{ fontSize: 40 }}>Fueling for Long Runs</h1>

        <p style={{ lineHeight: 1.7, marginTop: 20 }}>
          When it comes to long runs and endurance training, fueling does not have to be complicated.
          Most athletes struggle because they either underfuel or overthink it.
        </p>

        <p style={{ lineHeight: 1.7 }}>
          A simple approach is to focus on consistent carbohydrate intake, hydration, and recovery.
          Start small, test during training, and build confidence over time.
        </p>

        <p style={{ lineHeight: 1.7 }}>
          The goal is not perfection — it is consistency and learning what works for your body.
        </p>

        <a href="/" style={{ color: "#f97316", display: "inline-block", marginTop: 30 }}>
          ← Back to Home
        </a>
      </div>
    </div>
  );
}