import React, { useState } from 'react';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import fooddonation     from '../assets/portfolio/fooddonation.png';
import netflixclone     from '../assets/portfolio/netflixclone.png';
import qrcodegenerator  from '../assets/portfolio/qrcodegenerator.png';
import hostelmanagement from '../assets/portfolio/hostelmanagement.png';
import useReveal from './useReveal';
import useWindowWidth from './useWindowWidth';

const projects = [
  { id: 1, src: hostelmanagement, title: 'Hostel Management System',  description: 'Full-featured hostel management platform — room allocation, resident tracking, and admin reporting.', tags: ['Laravel', 'PHP', 'MySQL'],           href: 'https://github.com/gagandeepsingh21/ISP1',              type: 'github' },
  { id: 2, src: fooddonation,     title: 'Food Donation Platform',     description: 'Connects food donors with recipients, featuring real-time matching and location-based search.',          tags: ['React', 'Laravel', 'MySQL'],         href: 'https://github.com/gagandeepsingh21/food_donation_is',   type: 'github' },
  { id: 3, src: netflixclone,     title: 'Netflix Clone',              description: 'Pixel-perfect streaming UI powered by the TMDB API with auth, categories, and trailers.',               tags: ['React', 'Tailwind', 'TMDB API'],     href: 'https://netflix-clone-1099.netlify.app/',                type: 'live'   },
  { id: 4, src: qrcodegenerator,  title: 'QR Code Generator',         description: 'Instant QR code generation for any URL or text, with download and copy-to-clipboard support.',           tags: ['React', 'JavaScript'],               href: 'https://qr-code-generator-21.netlify.app/',             type: 'live'   },
];

function ProjectCard({ src, title, description, tags, href, type, delay }) {
  const ref = useReveal();
  const [hovered, setHovered] = useState(false);
  return (
    <div ref={ref} className={`reveal reveal-delay-${delay}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? 'rgba(255,255,255,0.03)' : 'var(--bg3)',
        border: `1px solid ${hovered ? 'rgba(255,255,255,0.18)' : 'rgba(255,255,255,0.05)'}`,
        borderRadius: '18px', overflow: 'hidden',
        display: 'flex', flexDirection: 'column',
        transform: hovered ? 'translateY(-5px)' : 'translateY(0)',
        boxShadow: hovered ? '0 24px 60px rgba(0,0,0,0.5)' : 'none',
        transition: 'all 0.35s cubic-bezier(.16,1,.3,1)',
      }}>
      {/* Image */}
      <div style={{ height: '190px', overflow: 'hidden', position: 'relative' }}>
        <img src={src} alt={title} style={{ width: '100%', height: '100%', objectFit: 'cover', transform: hovered ? 'scale(1.06)' : 'scale(1)', transition: 'transform 0.5s ease' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(10,10,10,0.9) 0%, transparent 60%)' }} />
        <a href={href} target="_blank" rel="noreferrer" style={{
          position: 'absolute', top: '0.85rem', right: '0.85rem',
          width: 34, height: 34, borderRadius: '50%',
          background: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(8px)',
          border: '1px solid rgba(255,255,255,0.15)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          color: '#cccccc', opacity: hovered ? 1 : 0, transition: 'opacity 0.3s',
        }}>
          {type === 'github' ? <FiGithub size={14} /> : <FiExternalLink size={14} />}
        </a>
      </div>
      {/* Content */}
      <div style={{ padding: '1.25rem', flex: 1, display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
          {tags.map(t => (
            <span key={t} style={{ fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', padding: '0.2rem 0.55rem', borderRadius: '999px', background: 'rgba(255,255,255,0.06)', color: '#cccccc', border: '1px solid rgba(255,255,255,0.1)' }}>{t}</span>
          ))}
        </div>
        <h3 className="font-display" style={{ fontSize: '1.1rem', fontWeight: 700, color: '#e2e2f0', letterSpacing: '-0.02em' }}>{title}</h3>
        <p style={{ fontSize: '0.82rem', lineHeight: 1.7, color: '#52526e', flex: 1 }}>{description}</p>
        <a href={href} target="_blank" rel="noreferrer"
          style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.75rem', fontWeight: 700, color: hovered ? '#cccccc' : '#52526e', transition: 'color 0.2s', textDecoration: 'none' }}>
          {type === 'github' ? <FiGithub size={13} /> : <FiExternalLink size={13} />}
          {type === 'github' ? 'View source' : 'Live demo'} →
        </a>
      </div>
    </div>
  );
}

export default function Portfolio() {
  const w = useWindowWidth();
  const isMobile = w < 768;
  const h = useReveal();
  const allTags = [...new Set(projects.flatMap(p => p.tags))];

  return (
    <div name="projects" style={{ background: 'var(--bg)', padding: isMobile ? '5rem 0' : '7rem 0', position: 'relative', overflow: 'hidden' }}>
      <div className="orb" style={{ width: 500, height: 500, background: 'rgba(255,255,255,0.02)', top: '50%', right: '-200px', transform: 'translateY(-50%)' }} />

      {/* Marquee */}
      <div style={{ overflow: 'hidden', borderTop: '1px solid rgba(255,255,255,0.05)', borderBottom: '1px solid rgba(255,255,255,0.05)', padding: '0.6rem 0', marginBottom: isMobile ? '3rem' : '5rem', background: 'rgba(255,255,255,0.015)' }}>
        <div className="marquee-track">
          {[...allTags, ...allTags, ...allTags, ...allTags].map((tag, i) => (
            <span key={i} style={{ padding: '0 2rem', fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#52526e', whiteSpace: 'nowrap' }}>
              {tag} <span style={{ color: '#888888', marginLeft: '2rem' }}>✦</span>
            </span>
          ))}
        </div>
      </div>

      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: isMobile ? '0 1.25rem' : '0 2rem' }}>
        <div ref={h} className="reveal" style={{ marginBottom: '3rem', display: 'flex', flexWrap: 'wrap', alignItems: 'flex-end', justifyContent: 'space-between', gap: '1rem' }}>
          <div>
            <p className="eyebrow" style={{ marginBottom: '0.75rem' }}>What I've Built</p>
            <h2 className="font-display" style={{ fontSize: isMobile ? '2rem' : 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 900, color: '#fff', letterSpacing: '-0.03em' }}>
              Selected <span className="grad-text">Projects</span>
            </h2>
          </div>
          {!isMobile && (
            <p style={{ fontSize: '0.82rem', color: '#52526e', maxWidth: '260px', lineHeight: 1.7 }}>
              A curated selection — from production apps to side experiments.
            </p>
          )}
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : w < 1024 ? '1fr 1fr' : 'repeat(2, 1fr)',
          gap: '1.25rem',
        }}>
          {projects.map((p, i) => <ProjectCard key={p.id} {...p} delay={(i % 4) + 1} />)}
        </div>
      </div>
    </div>
  );
}
