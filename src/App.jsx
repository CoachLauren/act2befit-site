import React from "react";

export default function App() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#0b1f3a",
        color: "white",
        fontFamily: "Arial, sans-serif",
        padding: "40px",
      }}
    >
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        <h1 style={{ color: "#f97316", marginBottom: "8px" }}>Act2befit</h1>
        <h2 style={{ marginTop: 0 }}>Coach Lauren</h2>

        <p style={{ fontSize: "18px", lineHeight: 1.6 }}>
          Virtual coaching for women — especially those navigating peri and post menopause.
          Build muscle, support bone density, and train for longevity.
        </p>

        <div style={{ marginTop: "30px" }}>
          <h3>Who I help</h3>
          <ul>
            <li>Women in peri or post menopause</li>
            <li>Beginner to advanced athletes</li>
            <li>Marathon and ultra runners</li>
            <li>Women wanting strength, energy, and confidence</li>
          </ul>
        </div>

        <div style={{ marginTop: "30px" }}>
          <h3>Contact</h3>
          <p>Email: Lauren@act2befit.com</p>
          <p>Phone: (908) 200-9844</p>
        </div>
      </div>
    </div>
  );
}