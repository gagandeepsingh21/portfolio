import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import useReveal from './useReveal';
import useWindowWidth from './useWindowWidth';

const socials = [
  { icon: <HiOutlineMail size={18} />, label: 'Email',    value: 'gagandeepgahir@gmail.com',   href: 'mailto:gagandeepgahir@gmail.com' },
  { icon: <FaLinkedin size={16} />,    label: 'LinkedIn', value: '/in/gagandeep-singh-gahir',   href: 'https://www.linkedin.com/in/gagandeep-singh-gahir-5a3123179/' },
  { icon: <FaGithub size={16} />,      label: 'GitHub',   value: 'gagandeepsingh21',            href: 'https://github.com/gagandeepsingh21' },
];
const navLinks = ['home', 'about', 'projects', 'experience', 'contact'];

export default function Contact() {
  const w = useWindowWidth();
  const isMobile = w < 768;
  const year = new Date().getFullYear();
  const h = useReveal(), f = useReveal(), s = useReveal();

  return (
    <div name="contact" style={{ background: 'var(--bg)', position: 'relative', overflow: 'hidden' }}>
      <div className="orb" style={{ width: 500, height: 500, background: 'rgba(255,255,255,0.04)', top: 0, left: '50%', transform: 'translateX(-50%)' }} />

      {/* Contact section */}
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: isMobile ? '5rem 1.25rem 4rem' : '7rem 2rem 5rem' }}>

        <div ref={h} className="reveal" style={{ textAlign: 'center', marginBottom: isMobile ? '3rem' : '4rem' }}>
          <p className="eyebrow" style={{ marginBottom: '0.75rem' }}>Get In Touch</p>
          <h2 className="font-display" style={{ fontSize: isMobile ? '2rem' : 'clamp(2.2rem, 6vw, 4rem)', fontWeight: 900, color: '#fff', letterSpacing: '-0.03em', marginBottom: '1rem' }}>
            Let's <span className="grad-text">Build Something</span>
          </h2>
          <p style={{ fontSize: '0.88rem', color: '#52526e', maxWidth: '380px', margin: '0 auto', lineHeight: 1.8 }}>
            Have a project in mind or just want to say hello? I'd love to hear from you.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: isMobile ? '2.5rem' : '3rem',
          alignItems: 'start',
        }}>
          {/* Form */}
          <div ref={f} className="reveal">
            <form action="https://getform.io/f/13746b9f-1241-4f4d-9778-09b913be86a7" method="POST"
              style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {[
                { label: 'Name',    name: 'name',    type: 'text',  placeholder: 'Your name' },
                { label: 'Email',   name: 'email',   type: 'email', placeholder: 'your@email.com' },
              ].map(({ label, name, type, placeholder }) => (
                <div key={name}>
                  <label style={{ display: 'block', fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#888888', marginBottom: '0.45rem' }}>{label}</label>
                  <input type={type} name={name} placeholder={placeholder} className="field-input" />
                </div>
              ))}
              <div>
                <label style={{ display: 'block', fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#888888', marginBottom: '0.45rem' }}>Message</label>
                <textarea name="message" rows={5} placeholder="Tell me about your project..." className="field-input" style={{ resize: 'vertical' }} />
              </div>
              <button type="submit" className="btn-primary" style={{ width: 'fit-content' }}>
                Send Message →
              </button>
            </form>
          </div>

          {/* Social cards */}
          <div ref={s} className="reveal reveal-delay-2" style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
            <p style={{ fontSize: '0.68rem', color: '#52526e', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.25rem' }}>Or reach me directly</p>
            {socials.map(({ icon, label, value, href }) => (
              <a key={label} href={href} target="_blank" rel="noreferrer" className="glass"
                style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '0.9rem 1.1rem', borderRadius: '12px', textDecoration: 'none', transition: 'all 0.25s ease' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.22)'; e.currentTarget.style.transform = 'translateX(4px)'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)'; e.currentTarget.style.transform = 'translateX(0)'; }}
              >
                <span style={{ color: '#cccccc', display: 'flex', alignItems: 'center', justifyContent: 'center', width: 34, height: 34, borderRadius: '8px', background: 'rgba(255,255,255,0.06)', flexShrink: 0 }}>{icon}</span>
                <div style={{ minWidth: 0 }}>
                  <p style={{ fontSize: '0.58rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#888888', marginBottom: '0.1rem' }}>{label}</p>
                  <p style={{ fontSize: '0.8rem', color: '#94a3b8', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{value}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer style={{ borderTop: '1px solid rgba(255,255,255,0.05)', background: 'rgba(255,255,255,0.01)' }}>
        <div style={{
          maxWidth: '1100px', margin: '0 auto',
          padding: isMobile ? '2rem 1.25rem' : '2.5rem 2rem',
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          alignItems: isMobile ? 'flex-start' : 'center',
          justifyContent: 'space-between',
          gap: '1.25rem',
        }}>
          {/* Logo + copyright */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
            <span className="font-display" style={{ fontSize: '1.3rem', fontWeight: 900, color: '#fff', letterSpacing: '-0.03em' }}>
              G<span style={{ color: '#cccccc' }}>.</span>
            </span>
            <p style={{ fontSize: '0.7rem', color: '#52526e' }}>
              © {year} Gagandeep Singh Gahir. All rights reserved.
            </p>
          </div>

          {/* Nav — hidden on mobile to save space */}
          {!isMobile && (
            <nav style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem' }}>
              {navLinks.map(link => (
                <a key={link} href={`#${link}`}
                  style={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#52526e', textDecoration: 'none', transition: 'color 0.2s' }}
                  onMouseEnter={e => e.target.style.color = '#cccccc'}
                  onMouseLeave={e => e.target.style.color = '#52526e'}
                >
                  {link}
                </a>
              ))}
            </nav>
          )}

          {/* Social icons */}
          <div style={{ display: 'flex', gap: '0.65rem' }}>
            {socials.map(({ icon, label, href }) => (
              <a key={label} href={href} target="_blank" rel="noreferrer"
                style={{ width: 34, height: 34, borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#52526e', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)', textDecoration: 'none', transition: 'all 0.2s' }}
                onMouseEnter={e => { e.currentTarget.style.color = '#cccccc'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.22)'; }}
                onMouseLeave={e => { e.currentTarget.style.color = '#52526e'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'; }}
              >
                {icon}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
