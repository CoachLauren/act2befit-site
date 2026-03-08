import React from "react";

export default function App() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #0b1f3a 0%, #102a52 70%, #f97316 100%)",
        color: "white",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          padding: "24px",
        }}
      >
        <header
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "16px 0",
            borderBottom: "1px solid rgba(255,255,255,0.15)",
          }}
        >
          <div>
            <div style={{ fontSize: 28, fontWeight: 800, color: "#f97316" }}>Act2befit</div>
            <div style={{ fontSize: 14, color: "rgba(255,255,255,0.8)" }}>Coach Lauren</div>
          </div>

          <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
            <a href="#about" style={navStyle}>About</a>
            <a href="#services" style={navStyle}>Coaching</a>
            <a href="#results" style={navStyle}>Results</a>
            <a href="#contact" style={navStyle}>Contact</a>
          </div>
        </header>

        <section
          style={{
            display: "grid",
            gridTemplateColumns: "1.2fr 0.8fr",
            gap: 24,
            padding: "64px 0 48px",
          }}
        >
          <div>
            <div style={pillStyle}>Virtual coaching for women • strength • endurance • longevity</div>
            <h1
              style={{
                fontSize: 54,
                lineHeight: 1.05,
                margin: "20px 0 16px",
              }}
            >
              Train for longevity —<br />
              not thinness.
            </h1>
            <p
              style={{
                fontSize: 19,
                lineHeight: 1.7,
                color: "rgba(255,255,255,0.86)",
                maxWidth: 700,
              }}
            >
              Online fitness and strength coaching for women, especially those navigating peri and post menopause.
              Build muscle, support bone density, improve energy, and train for goals like hiking, getting stronger,
              running your first marathon, or taking on an ultra.
            </p>

            <div style={{ display: "flex", gap: 12, marginTop: 24, flexWrap: "wrap" }}>
              <a href="#contact" style={primaryButton}>Start with a free consult</a>
              <a href="#services" style={secondaryButton}>See coaching options</a>
            </div>

            <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 24 }}>
              <span style={tagStyle}>Strength-first</span>
              <span style={tagStyle}>Beginner to advanced</span>
              <span style={tagStyle}>Marathon to 100-miler</span>
              <span style={tagStyle}>Menopause support</span>
            </div>
          </div>

          
         <div style={cardStyle}>
  <img
    src="/images/Lauren W.jpg"
    alt="Coach Lauren"
    style={{
      width: "100%",
      height: "100%",
      minHeight: 420,
      borderRadius: 20,
      objectFit: "cover",
      display: "block"
    }}
  />
</div>
        </section>

        <section id="about" style={sectionStyle}>
          <h2 style={sectionHeading}>Meet Coach Lauren</h2>
          <div style={twoColStyle}>
            <div style={cardStyle}>
              <p style={bodyText}>
                Lauren is a certified coach with an Exercise Science degree and specialized training in strength,
                endurance, and menopause-focused coaching.
              </p>
              <p style={bodyText}>
                She has completed multiple ultras including 100 milers, 50 mile races, 50Ks, and marathons.
                She loves lifting, hiking, swimming, snorkeling, scuba diving, and backpacking with her family.
              </p>
            </div>
            <div style={cardStyle}>
              <h3 style={{ marginTop: 0 }}>Credentials</h3>
              <ul style={{ paddingLeft: 20, lineHeight: 1.9, color: "rgba(255,255,255,0.88)" }}>
                <li>NASM CPT</li>
                <li>80/20 Endurance Certified</li>
                <li>RRCA Certified Running Coach</li>
                <li>UESCA Running Coach Certification</li>
                <li>Menopause 2.0 Certification</li>
                <li>Exercise Science Degree</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="services" style={sectionStyle}>
          <h2 style={sectionHeading}>Coaching Options</h2>
          <div style={threeColStyle}>
            <div style={cardStyle}>
              <h3 style={{ marginTop: 0 }}>Strength + Longevity</h3>
              <p style={bodyText}>Build muscle, improve bone density, get stronger, and feel better in your body.</p>
            </div>
            <div style={cardStyle}>
              <h3 style={{ marginTop: 0 }}>Run Coaching</h3>
              <p style={bodyText}>From first 5K to marathon PRs to 100-milers, with smart endurance programming.</p>
            </div>
            <div style={cardStyle}>
              <h3 style={{ marginTop: 0 }}>Menopause Support</h3>
              <p style={bodyText}>Training that respects recovery, hormones, energy levels, and long-term health.</p>
            </div>
          </div>
        </section>

        <section id="results" style={sectionStyle}>
          <h2 style={sectionHeading}>Client Wins</h2>
          <div style={threeColStyle}>
            <div style={cardStyle}>
              <p style={quoteText}>“Lauren helped me achieve my 100 mile race by adapting her training philosophy to my needs.”</p>
            </div>
            <div style={cardStyle}>
              <p style={quoteText}>“I never thought it was possible to PR for a marathon after menopause, but Lauren showed me a different way to train.”</p>
            </div>
            <div style={cardStyle}>
              <p style={quoteText}>“Lauren never pushed me to look fit — she helped me feel strong, confident, and better in my body.”</p>
            </div>
          </div>
        </section>

        <section id="contact" style={sectionStyle}>
          <div style={cardStyle}>
            <h2 style={{ marginTop: 0 }}>Contact</h2>
            <p style={bodyText}><strong>Email:</strong> Lauren@act2befit.com</p>
            <p style={bodyText}><strong>Phone:</strong> (908) 200-9844</p>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 16 }}>
              <a href="mailto:Lauren@act2befit.com" style={primaryButton}>Email Lauren</a>
              <a href="tel:+19082009844" style={secondaryButton}>Call</a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

const navStyle = {
  color: "white",
  textDecoration: "none",
  padding: "10px 14px",
  borderRadius: 999,
  background: "rgba(37,99,235,0.18)",
  border: "1px solid rgba(255,255,255,0.14)",
  fontWeight: 700,
};

const pillStyle = {
  display: "inline-block",
  padding: "10px 14px",
  borderRadius: 999,
  background: "rgba(255,255,255,0.10)",
  border: "1px solid rgba(255,255,255,0.14)",
  fontSize: 13,
  fontWeight: 700,
};

const primaryButton = {
  display: "inline-block",
  background: "#f97316",
  color: "white",
  textDecoration: "none",
  padding: "14px 18px",
  borderRadius: 12,
  fontWeight: 800,
};

const secondaryButton = {
  display: "inline-block",
  background: "rgba(37,99,235,0.22)",
  color: "white",
  textDecoration: "none",
  padding: "14px 18px",
  borderRadius: 12,
  border: "1px solid rgba(255,255,255,0.14)",
  fontWeight: 800,
};

const tagStyle = {
  padding: "8px 12px",
  borderRadius: 999,
  background: "rgba(255,255,255,0.10)",
  border: "1px solid rgba(255,255,255,0.14)",
  fontSize: 13,
  fontWeight: 700,
};

const sectionStyle = {
  padding: "24px 0",
};

const sectionHeading = {
  fontSize: 34,
  marginBottom: 20,
};

const twoColStyle = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: 20,
};

const threeColStyle = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr 1fr",
  gap: 20,
};

const cardStyle = {
  background: "rgba(255,255,255,0.08)",
  border: "1px solid rgba(255,255,255,0.14)",
  borderRadius: 18,
  padding: 22,
};

const bodyText = {
  color: "rgba(255,255,255,0.88)",
  lineHeight: 1.7,
};

const quoteText = {
  color: "rgba(255,255,255,0.92)",
  lineHeight: 1.7,
  fontStyle: "italic",
};
