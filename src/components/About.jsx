import React from 'react';
import useReveal from './useReveal';
import useWindowWidth from './useWindowWidth';

const items = [
  { emoji: '🎓', title: 'Education',    body: 'M.Sc. Masters in Data Science & Analytics — Strathmore University' },
  // { emoji: '🎓', title: 'Education',    body: 'B.Sc. Business Information & Technology — Strathmore University' },
  { emoji: '💼', title: 'Current Role', body: 'Software Developer Intern — Strathmore University' },
  { emoji: '📍', title: 'Location',     body: 'Nairobi, Kenya' },
  { emoji: '🚀', title: 'Passion',      body: 'Building full-stack apps that solve real problems' },
];

function Card({ emoji, title, body, delay }) {
  const ref = useReveal();
  return (
    <div ref={ref} className={`reveal reveal-delay-${delay} glass`}
      style={{ borderRadius: '14px', padding: '1.25rem', transition: 'all 0.3s ease' }}>
      <span style={{ fontSize: '1.4rem' }}>{emoji}</span>
      <p style={{ fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#888888', marginTop: '0.75rem', marginBottom: '0.25rem' }}>{title}</p>
      <p style={{ fontSize: '0.82rem', color: '#94a3b8', lineHeight: 1.6 }}>{body}</p>
    </div>
  );
}

export default function About() {
  const w = useWindowWidth();
  const isMobile = w < 768;
  const h = useReveal(), p1 = useReveal(), p2 = useReveal(), p3 = useReveal();

  return (
    <div name="about" style={{ background: 'var(--bg2)', padding: isMobile ? '5rem 0' : '7rem 0', position: 'relative', overflow: 'hidden' }}>
      <div className="orb" style={{ width: 500, height: 500, background: 'rgba(255,255,255,0.04)', top: '50%', left: '-200px', transform: 'translateY(-50%)' }} />

      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: isMobile ? '0 1.25rem' : '0 2rem' }}>
        <div ref={h} className="reveal" style={{ marginBottom: isMobile ? '2.5rem' : '4rem' }}>
          <p className="eyebrow" style={{ marginBottom: '0.75rem' }}>Who I Am</p>
          <h2 className="font-display" style={{ fontSize: isMobile ? '2rem' : 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 900, color: '#fff', letterSpacing: '-0.03em' }}>
            About <span className="grad-text">Me</span>
          </h2>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: isMobile ? '2.5rem' : '4rem',
          alignItems: 'start',
        }}>
          {/* Text */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem' }}>
            {[
              [p1, "I'm Gagandeep — a dedicated Full Stack Developer with a relentless drive to build products that matter. With a background in software development and a deep enthusiasm for problem-solving, I thrive on the creative challenges each new project brings."],
              [p2, "My journey has taken me from crafting front-end interfaces in Laravel to architecting entire systems from the ground up. Whether working solo or in a team, I bring precision and care to every line of code."],
              [p3, "What drives me is the joy of turning ideas into functional, user-centric applications. Blending creativity with engineering rigor — that's where I live."],
            ].map(([ref, text], i) => (
              <p key={i} ref={ref} className={`reveal reveal-delay-${i + 1}`}
                style={{ fontSize: '0.9rem', lineHeight: 1.85, color: '#64748b' }}>
                {text}
              </p>
            ))}
            <a href="mailto:gagandeepgahir@gmail.com" className="btn-primary"
              style={{ width: 'fit-content', marginTop: '0.5rem' }}>
              Let's collaborate →
            </a>
          </div>

          {/* Cards */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.85rem' }}>
            {items.map((item, i) => <Card key={item.title} {...item} delay={i + 1} />)}
          </div>
        </div>
      </div>
    </div>
  );
}
