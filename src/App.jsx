import React, { useEffect, useMemo, useState } from "react";

function cx(...classes) {
  return classes.filter(Boolean).join(" ");
}

function formatDate(iso) {
  try {
    const d = new Date(iso);
    return d.toLocaleDateString(undefined, { year: "numeric", month: "short", day: "numeric" });
  } catch {
    return iso;
  }
}

function Icon({ name }) {
  const common = { width: 18, height: 18, viewBox: "0 0 24 24", fill: "none" };
  switch (name) {
    case "mountain":
      return (
        <svg {...common}>
          <path d="M3 20l7-12 4 7 2-3 5 8H3z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
        </svg>
      );
    case "wave":
      return (
        <svg {...common}>
          <path
            d="M2 16c2.5 0 2.5-2 5-2s2.5 2 5 2 2.5-2 5-2 2.5 2 5 2"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      );
    case "spark":
      return (
        <svg {...common}>
          <path d="M12 2l1.2 5.2L18 9l-4.8 1.8L12 16l-1.2-5.2L6 9l4.8-1.8L12 2z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
        </svg>
      );
    case "arrow":
      return (
        <svg {...common}>
          <path d="M10 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    default:
      return null;
  }
}

function Shell({ children }) {
  return (
    <div className="bg">
      <style>{`
        :root{
          --bg0:#07111a;
          --bg1:#071a22;
          --card: rgba(255,255,255,.06);
          --stroke: rgba(255,255,255,.12);
          --text: rgba(255,255,255,.92);
          --muted: rgba(255,255,255,.68);
          --teal:#2dd4bf;
          --coral:#fb7185;
          --sky:#60a5fa;
          --sand:#fbbf24;
        }
        *{box-sizing:border-box}
        body{
          margin:0;
          font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Arial;
          color:var(--text);
          background:
            radial-gradient(1200px 800px at 20% 10%, rgba(45,212,191,.22), transparent 60%),
            radial-gradient(1000px 700px at 80% 20%, rgba(96,165,250,.18), transparent 55%),
            radial-gradient(900px 700px at 60% 90%, rgba(251,113,133,.16), transparent 55%),
            linear-gradient(180deg, var(--bg0), var(--bg1));
        }
        a{color:inherit}
        .wrap{max-width:1100px; margin:0 auto; padding:20px;}
        .topbar{
          display:flex; align-items:center; justify-content:space-between; gap:16px;
          padding:14px 16px; border:1px solid var(--stroke); background: rgba(255,255,255,.04);
          border-radius:18px; position:sticky; top:12px; backdrop-filter: blur(10px);
        }
        .brand{display:flex; align-items:center; gap:10px; font-weight:800; letter-spacing:.2px;}
        .brand-badge{
          width:34px; height:34px; border-radius:12px; display:grid; place-items:center;
          background: linear-gradient(135deg, rgba(45,212,191,.25), rgba(251,113,133,.22));
          border:1px solid var(--stroke);
        }
        .nav{display:flex; gap:8px; flex-wrap:wrap; justify-content:flex-end}
        .pill{
          padding:10px 12px; border-radius:999px; border:1px solid var(--stroke);
          background: rgba(255,255,255,.03); cursor:pointer; color:var(--text); font-weight:700
        }
        .pill:hover{background: rgba(255,255,255,.06)}
        .pill.active{border-color: rgba(45,212,191,.5); background: rgba(45,212,191,.10)}
        .hero{display:grid; grid-template-columns: 1.2fr .8fr; gap:18px; margin-top:18px;}
        @media (max-width: 920px){ .hero{grid-template-columns: 1fr;} }
        .card{border:1px solid var(--stroke); background: var(--card); border-radius:22px; padding:18px;}
        .card.glow{
          background: linear-gradient(180deg, rgba(255,255,255,.06), rgba(255,255,255,.03));
          position:relative; overflow:hidden;
        }
        .card.glow:before{
          content:''; position:absolute; inset:-2px;
          background:
            radial-gradient(600px 260px at 20% 10%, rgba(45,212,191,.28), transparent 60%),
            radial-gradient(600px 260px at 80% 20%, rgba(251,113,133,.22), transparent 60%);
          opacity:.55; pointer-events:none;
        }
        .card.glow > *{position:relative}
        .kicker{
          display:inline-flex; gap:8px; align-items:center; padding:8px 10px;
          border-radius:999px; border:1px solid var(--stroke);
          background: rgba(255,255,255,.03); color:var(--muted);
          font-weight:800; font-size:12px; letter-spacing:.25px;
        }
        .h1{font-size:44px; line-height:1.05; margin:12px 0 10px; letter-spacing:-.6px;}
        @media (max-width: 520px){ .h1{font-size:36px;} }
        .sub{color:var(--muted); font-size:16px; line-height:1.6; margin:0 0 14px;}
        .btnrow{display:flex; gap:10px; flex-wrap:wrap; margin-top:14px;}
        .btn{
          padding:11px 14px; border-radius:14px; border:1px solid var(--stroke);
          background: rgba(255,255,255,.04); color:var(--text);
          font-weight:900; cursor:pointer; text-decoration:none; display:inline-flex; align-items:center; gap:8px;
        }
        .btn.primary{
          border-color: rgba(45,212,191,.55);
          background: linear-gradient(135deg, rgba(45,212,191,.18), rgba(96,165,250,.12));
        }
        .btn.primary:hover{filter:brightness(1.05)}
        .grid2{display:grid; grid-template-columns:1fr 1fr; gap:12px;}
        @media (max-width: 760px){ .grid2{grid-template-columns:1fr;} }
        .list{margin:10px 0 0; padding-left:18px; color:var(--muted); line-height:1.7}
        .section{margin-top:18px;}
        .section h2{margin:0 0 10px; font-size:18px; letter-spacing:.1px;}
        .muted{color:var(--muted)}
        .chips{display:flex; gap:8px; flex-wrap:wrap; margin-top:10px}
        .chip{
          display:inline-flex; gap:8px; align-items:center; padding:8px 10px;
          border-radius:999px; border:1px solid var(--stroke);
          background: rgba(255,255,255,.03); color:var(--muted);
          font-weight:800; font-size:12px;
        }
        .tile{padding:14px; border-radius:18px; border:1px solid var(--stroke); background: rgba(255,255,255,.03);}
        .tile h3{margin:0 0 6px; font-size:16px}
        .tile p{margin:0; color:var(--muted); line-height:1.6}
        .split{display:flex; align-items:flex-start; justify-content:space-between; gap:12px;}
        .meta{color:var(--muted); font-size:12px; font-weight:800}
        .linkbtn{
          display:inline-flex; align-items:center; gap:8px; margin-top:10px; font-weight:900;
          color: rgba(45,212,191,.95); background: transparent; border:0; cursor:pointer; padding:0
        }
        .footer{margin:26px 0 10px; color:rgba(255,255,255,.55); font-size:12px; text-align:center}
        .notice{
          padding:12px 14px; border-radius:16px; border:1px solid rgba(251,191,36,.35);
          background: rgba(251,191,36,.08); color: rgba(255,255,255,.82); line-height:1.5
        }
        input, textarea{
          width:100%; padding:12px 12px; border-radius:14px; border:1px solid var(--stroke);
          background: rgba(0,0,0,.2); color:var(--text); outline:none
        }
        textarea{min-height:120px; resize:vertical}
        .formrow{display:grid; grid-template-columns:1fr 1fr; gap:10px;}
        @media (max-width: 700px){ .formrow{grid-template-columns:1fr;} }
      `}</style>

      <div className="wrap">{children}</div>
    </div>
  );
}

function TopBar({ page, setPage }) {
  const nav = [
    { key: "home", label: "Home" },
    { key: "blog", label: "Blog" },
    { key: "adventures", label: "Adventures" },
    { key: "contact", label: "Contact" },
  ];

  return (
    <div className="topbar">
      <div className="brand" onClick={() => setPage({ key: "home" })} style={{ cursor: "pointer" }}>
        <div className="brand-badge" aria-hidden="true">
          <Icon name="mountain" />
        </div>
        <div>
          <div style={{ fontSize: 14, opacity: 0.95 }}>Act2befit</div>
          <div style={{ fontSize: 12, color: "rgba(255,255,255,.65)", fontWeight: 800 }}>Coach Lauren</div>
        </div>
      </div>

      <div className="nav">
        {nav.map((n) => (
          <button
            key={n.key}
            className={cx("pill", page.key === n.key && "active")}
            onClick={() => setPage({ key: n.key })}
          >
            {n.label}
          </button>
        ))}
      </div>
    </div>
  );
}

function Home({ setPage }) {
  return (
    <>
      <div className="hero">
        <div className="card glow">
          <span className="kicker">
            <Icon name="spark" />
            Strength • Endurance • Menopause Coaching
          </span>

          <div className="h1">
            Train for longevity —
            <br />
            not thinness.
          </div>

          <p className="sub">
            Virtual coaching for women (beginner → advanced), with a special focus on peri- and post-menopause.
            We build muscle and bone density, improve energy, and chase goals like marathons, 100-milers, hikes,
            or simply feeling amazing in your body.
          </p>

          <div className="btnrow">
            <button className="btn primary" onClick={() => setPage({ key: "contact" })}>
              Start with a free consult <Icon name="arrow" />
            </button>
            <button className="btn" onClick={() => setPage({ key: "blog" })}>Read the blog</button>
            <button className="btn" onClick={() => setPage({ key: "adventures" })}>See adventures</button>
          </div>

          <div className="chips">
            <span className="chip"><Icon name="wave" /> Strength + endurance blend</span>
            <span className="chip"><Icon name="spark" /> Personalized goals</span>
            <span className="chip"><Icon name="mountain" /> Beginner-friendly</span>
          </div>
        </div>

        <div className="card">
          <div className="section">
            <h2>Credentials</h2>
            <div className="tile">
              <p>
                NASM CPT • 80/20 Endurance • RRCA Running Coach • UESCA Running Coach • Menopause2.0 • Exercise Science Degree
              </p>
            </div>
          </div>

          <div className="section">
            <h2>What you can train for</h2>
            <ul className="list">
              <li>Marathon, ultra (50K → 100 miles), or first 5K</li>
              <li>Strength & gym goals (without “diet culture”)</li>
              <li>Hikes, backpacking, adventure travel</li>
              <li>Energy, confidence, and long-term health</li>
            </ul>
          </div>

          <div className="section">
            <h2>Core belief</h2>
            <div className="notice">
              We prioritize muscle + bone density as an investment in your future self — exercise as longevity, not punishment.
            </div>
          </div>
        </div>
      </div>

      <div className="section">
        <div className="grid2">
          <div className="card">
            <h2>Client wins</h2>
            <div className="tile" style={{ marginBottom: 10 }}>
              <h3>A) 100-mile finish</h3>
              <p>“Lauren helped me achieve my 100 mile race by adapting her training philosophy to my needs.”</p>
            </div>
            <div className="tile" style={{ marginBottom: 10 }}>
              <h3>B) PR after menopause</h3>
              <p>“I never thought it was possible to PR a marathon after menopause—Lauren showed me a different way to train.”</p>
            </div>
            <div className="tile">
              <h3>C) Stronger, better energy</h3>
              <p>“Lauren didn’t promise weight loss; she promised I’d feel better, strong, confident—and she delivered.”</p>
            </div>
          </div>

          <div className="card">
            <h2>About Lauren</h2>
            <p className="muted" style={{ lineHeight: 1.7 }}>
              I’ve run many ultras (including 100s), plus 50 milers, 50Ks, and marathons. I love lifting weights and staying active:
              hiking, swimming, snorkeling, scuba diving, and backpacking with my family.
            </p>
            <button className="linkbtn" onClick={() => setPage({ key: "adventures" })}>
              Explore adventures <Icon name="arrow" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

function useContent(url, fallback) {
  const [data, setData] = useState(fallback);
  const [error, setError] = useState("");

  useEffect(() => {
    let alive = true;
    fetch(url, { cache: "no-store" })
      .then((r) => {
        if (!r.ok) throw new Error(`Could not load ${url}`);
        return r.json();
      })
      .then((j) => alive && setData(j))
      .catch((e) => alive && setError(e.message || "Could not load content"));
    return () => {
      alive = false;
    };
  }, [url]);

  return { data, error };
}

function Blog({ setPage }) {
  const { data, error } = useContent("/content/blog.json", { posts: [] });
  const posts = useMemo(() => {
    const p = Array.isArray(data.posts) ? data.posts : [];
    return [...p].sort((a, b) => String(b.date || "").localeCompare(String(a.date || "")));
  }, [data]);

  return (
    <div className="card" style={{ marginTop: 18 }}>
      <div className="split">
        <div>
          <h2 style={{ margin: 0 }}>Blog</h2>
          <div className="muted">Edit posts in <strong>public/content/blog.json</strong> (even directly in GitHub).</div>
        </div>
        <button className="btn" onClick={() => setPage({ key: "home" })}>Back Home</button>
      </div>

      {error ? <div className="notice" style={{ marginTop: 12 }}>{error}</div> : null}

      <div className="section">
        <div className="grid2">
          {posts.map((p) => (
            <div key={p.id} className="tile">
              <div className="split">
                <h3 style={{ margin: 0 }}>{p.title}</h3>
                <div className="meta">{formatDate(p.date)}</div>
              </div>
              <p style={{ marginTop: 8 }}>{p.excerpt}</p>
              <button className="linkbtn" onClick={() => setPage({ key: "blogPost", id: p.id })}>
                Read <Icon name="arrow" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function BlogPost({ setPage, id }) {
  const { data } = useContent("/content/blog.json", { posts: [] });
  const post = (data.posts || []).find((p) => p.id === id);

  if (!post) {
    return (
      <div className="card" style={{ marginTop: 18 }}>
        <div className="notice">Post not found.</div>
        <div className="btnrow">
          <button className="btn" onClick={() => setPage({ key: "blog" })}>Back to Blog</button>
        </div>
      </div>
    );
  }

  return (
    <div className="card" style={{ marginTop: 18 }}>
      <button className="btn" onClick={() => setPage({ key: "blog" })} style={{ marginBottom: 12 }}>
        ← Back to Blog
      </button>
      <div className="split">
        <h2 style={{ margin: 0 }}>{post.title}</h2>
        <div className="meta">{formatDate(post.date)}</div>
      </div>
      <div className="section">
        {(post.content || []).map((para, idx) => (
          <p key={idx} className="muted" style={{ lineHeight: 1.8 }}>{para}</p>
        ))}
      </div>
    </div>
  );
}

function Adventures({ setPage }) {
  const { data, error } = useContent("/content/adventures.json", { items: [] });
  const items = useMemo(() => {
    const it = Array.isArray(data.items) ? data.items : [];
    return [...it].sort((a, b) => String(b.date || "").localeCompare(String(a.date || "")));
  }, [data]);

  return (
    <div className="card" style={{ marginTop: 18 }}>
      <div className="split">
        <div>
          <h2 style={{ margin: 0 }}>Adventures</h2>
          <div className="muted">Edit adventures in <strong>public/content/adventures.json</strong> (GitHub is easiest).</div>
        </div>
        <button className="btn" onClick={() => setPage({ key: "home" })}>Back Home</button>
      </div>

      {error ? <div className="notice" style={{ marginTop: 12 }}>{error}</div> : null}

      <div className="section">
        <div className="grid2">
          {items.map((a) => (
            <div key={a.id} className="tile">
              <div className="split">
                <h3 style={{ margin: 0 }}>{a.title}</h3>
                <div className="meta">{formatDate(a.date)}</div>
              </div>
              <div className="muted" style={{ marginTop: 6, fontWeight: 900, fontSize: 12 }}>
                {a.location ? `📍 ${a.location}` : ""}
              </div>
              <p style={{ marginTop: 8 }}>{a.excerpt}</p>
              <button className="linkbtn" onClick={() => setPage({ key: "adventureDetail", id: a.id })}>
                Details <Icon name="arrow" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function AdventureDetail({ setPage, id }) {
  const { data } = useContent("/content/adventures.json", { items: [] });
  const item = (data.items || []).find((x) => x.id === id);

  if (!item) {
    return (
      <div className="card" style={{ marginTop: 18 }}>
        <div className="notice">Adventure not found.</div>
        <div className="btnrow">
          <button className="btn" onClick={() => setPage({ key: "adventures" })}>Back to Adventures</button>
        </div>
      </div>
    );
  }

  return (
    <div className="card" style={{ marginTop: 18 }}>
      <button className="btn" onClick={() => setPage({ key: "adventures" })} style={{ marginBottom: 12 }}>
        ← Back to Adventures
      </button>
      <div className="split">
        <h2 style={{ margin: 0 }}>{item.title}</h2>
        <div className="meta">{formatDate(item.date)}</div>
      </div>
      <div className="muted" style={{ marginTop: 6, fontWeight: 900, fontSize: 12 }}>
        {item.location ? `📍 ${item.location}` : ""}
      </div>
      <div className="section">
        <p className="muted" style={{ lineHeight: 1.8 }}>{item.excerpt}</p>
        {Array.isArray(item.highlights) && item.highlights.length ? (
          <>
            <h2 style={{ marginTop: 14 }}>Highlights</h2>
            <ul className="list">
              {item.highlights.map((h, i) => <li key={i}>{h}</li>)}
            </ul>
          </>
        ) : null}
      </div>
    </div>
  );
}

function Contact({ setPage }) {
  // This is a demo form (doesn't email yet). If you want, we can connect Formspree/Netlify Forms next.
  const [form, setForm] = useState({ name: "", email: "", goal: "", message: "" });
  const [sent, setSent] = useState(false);

  return (
    <div className="card" style={{ marginTop: 18 }}>
      <div className="split">
        <div>
          <h2 style={{ margin: 0 }}>Contact</h2>
          <div className="muted">
            Email: <strong>Lauren@act2befit.com</strong> • Phone: <strong>(908) 200-9844</strong>
          </div>
        </div>
        <button className="btn" onClick={() => setPage({ key: "home" })}>Back Home</button>
      </div>

      <div className="section">
        <div className="notice">
          Want this form to deliver messages straight to your email automatically? Tell me “turn on contact form” and I’ll hook it up.
        </div>
      </div>

      <div className="section">
        {sent ? (
          <div className="notice" style={{ borderColor: "rgba(45,212,191,.45)", background: "rgba(45,212,191,.08)" }}>
            Message saved locally (demo). Next we’ll hook it to email delivery.
          </div>
        ) : null}

        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
          }}
        >
          <div className="formrow">
            <div>
              <div className="meta" style={{ marginBottom: 6 }}>Name</div>
              <input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Your name" />
            </div>
            <div>
              <div className="meta" style={{ marginBottom: 6 }}>Email</div>
              <input value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="you@example.com" />
            </div>
          </div>

          <div style={{ marginTop: 10 }}>
            <div className="meta" style={{ marginBottom: 6 }}>Primary goal</div>
            <input value={form.goal} onChange={(e) => setForm({ ...form, goal: e.target.value })} placeholder="Stronger, marathon, ultra, hiking, energy…" />
          </div>

          <div style={{ marginTop: 10 }}>
            <div className="meta" style={{ marginBottom: 6 }}>Message</div>
            <textarea
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              placeholder="Tell me where you're starting and what you want to achieve."
            />
          </div>

          <div className="btnrow" style={{ marginTop: 12 }}>
            <button className="btn primary" type="submit">Send message <Icon name="arrow" /></button>
            <a className="btn" href="mailto:Lauren@act2befit.com">Email instead</a>
            <a className="btn" href="tel:+19082009844">Call</a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default function App() {
  const [page, setPage] = useState({ key: "home" });

  return (
    <Shell>
      <TopBar page={page} setPage={setPage} />

      {page.key === "home" && <Home setPage={setPage} />}
      {page.key === "blog" && <Blog setPage={setPage} />}
      {page.key === "blogPost" && <BlogPost setPage={setPage} id={page.id} />}
      {page.key === "adventures" && <Adventures setPage={setPage} />}
      {page.key === "adventureDetail" && <AdventureDetail setPage={setPage} id={page.id} />}
      {page.key === "contact" && <Contact setPage={setPage} />}

      <div className="footer">© {new Date().getFullYear()} Act2befit • Virtual coaching • Train for longevity</div>
    </Shell>
  );
}
