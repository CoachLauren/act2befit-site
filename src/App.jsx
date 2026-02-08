import React, { useState } from "react";

function Nav({ setPage }) {
  return (
    <nav style={{display:'flex', gap:20, padding:20, borderBottom:'1px solid #eee'}}>
      <button onClick={() => setPage("home")}>Home</button>
      <button onClick={() => setPage("blog")}>Blog</button>
      <button onClick={() => setPage("adventures")}>Adventures</button>
      <button onClick={() => setPage("contact")}>Contact</button>
    </nav>
  );
}

function Home() {
  return (
    <div style={{padding:40, maxWidth:900, margin:'0 auto'}}>
      <h1 style={{color:'#7c3aed'}}>Act2befit</h1>
      <h2>Coach Lauren</h2>

      <p>
        Online fitness and strength coaching for women — especially those navigating
        peri and post menopause. Build muscle, support bone density, and train for
        longevity.
      </p>

      <h3>Who I Help</h3>
      <ul>
        <li>Women in peri or post menopause</li>
        <li>Beginner to advanced athletes</li>
        <li>Marathon & ultra runners</li>
        <li>Women wanting strength, energy, and confidence</li>
      </ul>

      <h3>Credentials</h3>
      <p>
        NASM CPT | RRCA Running Coach | UESCA Running Coach | 80/20 Endurance |
        Menopause 2.0 | Exercise Science Degree
      </p>
    </div>
  );
}

const blogPosts = [
  {
    id: 1,
    title: "Why Strength Training Matters in Menopause",
    content:
      "Muscle is the key to longevity. Strength training supports hormones, bone density, metabolism, and confidence.",
  },
  {
    id: 2,
    title: "Training for Your First Ultra",
    content:
      "Ultras are not about speed — they are about durability, mindset, and smart fueling.",
  },
];

function Blog({ setPage, setPost }) {
  return (
    <div style={{padding:40, maxWidth:900, margin:'0 auto'}}>
      <h1>Blog</h1>
      {blogPosts.map((post) => (
        <div key={post.id} style={{marginBottom:20}}>
          <h3>{post.title}</h3>
          <button
            onClick={() => {
              setPost(post);
              setPage("post");
            }}
          >
            Read More
          </button>
        </div>
      ))}
    </div>
  );
}

function BlogPost({ post, setPage }) {
  if (!post) return null;

  return (
    <div style={{padding:40, maxWidth:900, margin:'0 auto'}}>
      <button onClick={() => setPage("blog")} style={{marginBottom:20}}>
        ← Back to Blog
      </button>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
}

function Adventures() {
  return (
    <div style={{padding:40, maxWidth:900, margin:'0 auto'}}>
      <h1>Adventures</h1>
      <ul>
        <li>100 Mile Ultramarathons</li>
        <li>50 Mile Races</li>
        <li>Backpacking Trips</li>
        <li>Scuba Diving</li>
        <li>Mountain Hiking</li>
      </ul>
    </div>
  );
}

function Contact() {
  return (
    <div style={{padding:40, maxWidth:900, margin:'0 auto'}}>
      <h1>Contact</h1>
      <p>Email: Lauren@act2befit.com</p>
      <p>Phone: (908) 200-9844</p>
      <button
        style={{
          background:'#7c3aed',
          color:'white',
          padding:'12px 20px',
          border:'none',
          borderRadius:'8px',
          cursor:'pointer'
        }}
      >
        Schedule a Free Consult
      </button>
    </div>
  );
}

export default function App() {
  const [page, setPage] = useState("home");
  const [post, setPost] = useState(null);

  return (
    <div style={{fontFamily:'Arial, sans-serif'}}>
      <Nav setPage={setPage} />

      {page === "home" && <Home />}
      {page === "blog" && <Blog setPage={setPage} setPost={setPost} />}
      {page === "post" && <BlogPost post={post} setPage={setPage} />}
      {page === "adventures" && <Adventures />}
      {page === "contact" && <Contact />}
    </div>
  );
}
