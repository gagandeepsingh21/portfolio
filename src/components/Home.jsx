import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import MyPic from '../assets/myPic.jpg';
import useWindowWidth from './useWindowWidth';

const ROLES = ['Full Stack Developer', 'Laravel Engineer', 'Data Analyst', 'Problem Solver'];

export default function Home() {
  const w = useWindowWidth();
  const isMobile = w < 768;

  const [roleIdx,    setRoleIdx]    = useState(0);
  const [displayed,  setDisplayed]  = useState('');
  const [deleting,   setDeleting]   = useState(false);
  const [charIdx,    setCharIdx]    = useState(0);

  useEffect(() => {
    const role  = ROLES[roleIdx];
    const speed = deleting ? 40 : 80;
    const timer = setTimeout(() => {
      if (!deleting) {
        setDisplayed(role.slice(0, charIdx + 1));
        if (charIdx + 1 === role.length) setTimeout(() => setDeleting(true), 1800);
        else setCharIdx(i => i + 1);
      } else {
        setDisplayed(role.slice(0, charIdx - 1));
        if (charIdx - 1 === 0) {
          setDeleting(false);
          setRoleIdx(i => (i + 1) % ROLES.length);
          setCharIdx(0);
        } else setCharIdx(i => i - 1);
      }
    }, speed);
    return () => clearTimeout(timer);
  }, [charIdx, deleting, roleIdx]);

  return (
    <div name="home" style={{
      position: 'relative', minHeight: '100vh', background: 'var(--bg)',
      display: 'flex', alignItems: 'center', overflow: 'hidden',
    }}>
      {/* Orbs */}
      <div className="orb" style={{ width: isMobile ? 300 : 600, height: isMobile ? 300 : 600, background: 'rgba(255,255,255,0.04)', top: '-100px', right: '-80px' }} />
      <div className="orb" style={{ width: isMobile ? 200 : 400, height: isMobile ? 200 : 400, background: 'rgba(255,255,255,0.02)', bottom: '-80px', left: '-60px' }} />

      {/* Dot grid */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        backgroundImage: 'radial-gradient(rgba(255,255,255,0.12) 1px, transparent 1px)',
        backgroundSize: '32px 32px',
        maskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%)',
        WebkitMaskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%)',
      }} />

      <div style={{
        maxWidth: '1100px', margin: '0 auto',
        padding: isMobile ? '100px 1.25rem 5rem' : '0 2rem',
        paddingTop: isMobile ? '100px' : '80px',
        paddingBottom: isMobile ? '5rem' : '2rem',
        width: '100%',
        display: 'flex',
        flexDirection: isMobile ? 'column-reverse' : 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: isMobile ? '2.5rem' : '3rem',
      }}>

        {/* Left – text */}
        <div style={{ flex: '1 1 0', minWidth: 0, width: '100%' }}>
          {/* Badge */}
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
            padding: '0.35rem 0.9rem',
            background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.15)',
            borderRadius: '999px', marginBottom: '1.5rem',
          }}>
            <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#4ade80', display: 'inline-block', animation: 'pulse-glow 2s infinite' }} />
            <span style={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.1em', color: '#cccccc', textTransform: 'uppercase' }}>Open to Work</span>
          </div>

          <h1 className="font-display" style={{
            fontSize: isMobile ? '2.6rem' : 'clamp(2.8rem, 7vw, 5.5rem)',
            fontWeight: 900, lineHeight: 1.05, letterSpacing: '-0.03em',
            color: '#fff', marginBottom: '1rem',
          }}>
            Hi, I'm<br />
            <span className="grad-text">Gagandeep</span>
          </h1>

          {/* Typewriter */}
          <div style={{ height: '1.8rem', marginBottom: '1.25rem' }}>
            <span style={{ fontSize: isMobile ? '0.9rem' : '1.05rem', fontWeight: 500, color: '#94a3b8' }}>
              {displayed}<span className="blink" style={{ color: '#ffffff' }}>|</span>
            </span>
          </div>

          <p style={{
            fontSize: '0.9rem', lineHeight: 1.8, color: '#64748b',
            maxWidth: '440px', marginBottom: '2rem',
          }}>
            Full-stack developer based in Nairobi with 3+ years building clean, performant web experiences. Passionate about crafting solutions that make a real impact.
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
            <Link to="projects" smooth duration={600} className="btn-primary" style={{ cursor: 'pointer' }}>
              View Projects →
            </Link>
            <a href="/resume.pdf" download className="btn-ghost">Download CV</a>
          </div>

          {/* Stats */}
          <div style={{
            display: 'flex', gap: isMobile ? '1.5rem' : '2rem',
            marginTop: '2.5rem', paddingTop: '2rem',
            borderTop: '1px solid rgba(255,255,255,0.06)',
            flexWrap: 'wrap',
          }}>
            {[['3+', 'Years exp.'], ['10+', 'Projects'], ['2', 'Internships']].map(([val, lbl]) => (
              <div key={lbl}>
                <p className="font-display" style={{ fontSize: isMobile ? '1.4rem' : '1.8rem', fontWeight: 900, color: '#cccccc', lineHeight: 1 }}>{val}</p>
                <p style={{ fontSize: '0.65rem', color: '#52526e', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', marginTop: '0.25rem' }}>{lbl}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right – photo */}
        <div style={{ flexShrink: 0, display: 'flex', justifyContent: 'center', width: isMobile ? '100%' : 'auto' }}>
          <div className="float-anim" style={{ position: 'relative' }}>
            <div className="spin-slow" style={{
              position: 'absolute', inset: '-16px', borderRadius: '50%',
              border: '2px dashed rgba(255,255,255,0.12)',
            }} />
            <div style={{
              width: isMobile ? '200px' : '280px',
              height: isMobile ? '200px' : '280px',
              borderRadius: '50%', overflow: 'hidden',
              border: '3px solid rgba(255,255,255,0.2)',
              boxShadow: '0 0 0 12px rgba(255,255,255,0.03), 0 40px 80px rgba(0,0,0,0.6)',
            }} className="pulse-glow">
              <img src={MyPic} alt="Gagandeep Singh Gahir" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div style={{
              position: 'absolute', bottom: '-12px', left: '50%', transform: 'translateX(-50%)',
              background: '#111111', border: '1px solid rgba(255,255,255,0.12)',
              borderRadius: '999px', padding: '0.4rem 1rem', whiteSpace: 'nowrap',
              display: 'flex', alignItems: 'center', gap: '0.4rem',
              fontSize: '0.7rem', fontWeight: 700, color: '#cccccc', letterSpacing: '0.05em',
            }}>
              📍 Nairobi, Kenya
            </div>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div style={{
        position: 'absolute', bottom: '1.5rem', left: '50%', transform: 'translateX(-50%)',
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.4rem',
      }}>
        <span style={{ fontSize: '0.55rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#52526e', fontWeight: 700 }}>Scroll</span>
        <div style={{ width: '1px', height: '40px', background: 'linear-gradient(to bottom, #aaaaaa, transparent)' }} />
      </div>
    </div>
  );
}
