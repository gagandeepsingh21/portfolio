import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-scroll';

const links = [
  { id: 1, link: 'home',       label: 'Home' },
  { id: 2, link: 'about',      label: 'About' },
  { id: 3, link: 'projects',   label: 'Projects' },
  { id: 4, link: 'experience', label: 'Experience' },
  { id: 5, link: 'contact',    label: 'Contact' },
];

export default function NavBar() {
  const [open,     setOpen]     = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  // Lock body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      height: '60px',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '0 1.25rem',
      background: scrolled ? 'rgba(0,0,0,0.92)' : 'transparent',
      backdropFilter: scrolled ? 'blur(16px)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : '1px solid transparent',
      transition: 'all 0.4s ease',
    }}>
      {/* Logo */}
      <span className="font-display" style={{ fontSize: '1.4rem', fontWeight: 900, color: '#fff', letterSpacing: '-0.03em', zIndex: 101 }}>
        G<span style={{ color: '#cccccc' }}>.</span>
      </span>

      {/* Desktop links */}
      <ul style={{ display: 'flex', gap: '2rem', listStyle: 'none', margin: 0, padding: 0 }} className="hidden md:flex">
        {links.map(({ id, link, label }) => (
          <li key={id}>
            <Link to={link} smooth duration={600}
              style={{ cursor: 'pointer', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.08em', color: '#94a3b8', textTransform: 'uppercase', transition: 'color 0.2s' }}
              onMouseEnter={e => e.target.style.color = '#ffffff'}
              onMouseLeave={e => e.target.style.color = '#94a3b8'}
            >{label}</Link>
          </li>
        ))}
      </ul>

      {/* Desktop resume btn */}
      <a href="/resume.pdf" download className="btn-ghost hidden md:inline-flex"
        style={{ padding: '0.4rem 1rem', fontSize: '0.72rem' }}>
        Resume ↓
      </a>

      {/* Hamburger — always above overlay */}
      <button
        onClick={() => setOpen(o => !o)}
        className="md:hidden"
        style={{ background: 'none', border: 'none', color: '#cccccc', cursor: 'pointer', zIndex: 101, padding: '0.25rem', lineHeight: 1 }}
        aria-label="Toggle menu"
      >
        {open ? <FaTimes size={22} /> : <FaBars size={22} />}
      </button>

      {/* Mobile full-screen overlay */}
      {open && (
        <div style={{
          position: 'fixed', inset: 0,
          background: 'rgba(0,0,0,0.97)',
          backdropFilter: 'blur(20px)',
          display: 'flex', flexDirection: 'column',
          alignItems: 'center', justifyContent: 'center',
          gap: '2rem', zIndex: 100,
        }}>
          {links.map(({ id, link, label }) => (
            <Link key={id} to={link} smooth duration={600}
              onClick={() => setOpen(false)}
              className="font-display"
              style={{ fontSize: '2.2rem', fontWeight: 900, color: '#e2e2f0', cursor: 'pointer', letterSpacing: '-0.03em', textDecoration: 'none' }}
            >{label}</Link>
          ))}
          <a href="/resume.pdf" download className="btn-ghost" style={{ marginTop: '1rem' }}
            onClick={() => setOpen(false)}>
            Download CV
          </a>
        </div>
      )}
    </nav>
  );
}
