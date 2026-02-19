import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import useReveal from './useReveal';
import useWindowWidth from './useWindowWidth';

import html       from '../assets/html.png';
import css        from '../assets/css.png';
import javascript from '../assets/javascript.png';
import reactImage from '../assets/reactImage.png';
import github     from '../assets/github.png';
import tailwind   from '../assets/tailwind.png';
import bootstrap  from '../assets/bootstrap.png';
import laravel    from '../assets/laravel.png';
import java    from '../assets/java.png';

const experiences = [
  { date: 'Jan 2023 – Present',  company: 'Strathmore University', title: 'Software Developer Intern',          desc: 'Led front-end development on a Laravel platform; independently architected and deployed a new system end-to-end to test servers.' },
  { date: 'Jan 2023 – Apr 2023', company: 'Bluelight Systems',     title: 'Software Developer Intern (Remote)', desc: 'Enhanced an existing CodeIgniter system, sharpening PHP, ReactJS, and JavaScript skills while collaborating in an agile remote team.' },
  { date: 'Feb 2022 – Mar 2022', company: 'YMCA Nairobi',          title: 'Service-Based Learning',            desc: '225 hours of voluntary community service, building communication and leadership capabilities.' },
];
const educations = [
  { date: 'May 2025 – Current', school: 'Strathmore University', title: 'M.Sc. Masters in Data Science & Analytics'},
  { date: 'Jul 2020 – Jul 2023', school: 'Strathmore University', title: 'B.Sc. Business Information & Technology',  grade: 'Mean Grade: B' },
  { date: 'Sep 2018 – Jan 2020', school: 'Strathmore University', title: 'Diploma in Business Information Technology', grade: 'Mean Grade: B' },
  { date: 'Sep 2016 – Jun 2017', school: 'Nairobi South School',  title: "O' Levels",                                 grade: 'Mean Grade: B' },
];
const skills = [
  { src: html,       label: 'HTML',       color: '#f97316' },
  { src: css,        label: 'CSS',        color: '#3b82f6' },
  { src: javascript, label: 'JavaScript', color: '#eab308' },
  { src: reactImage, label: 'React',      color: '#06b6d4' },
  { src: tailwind,   label: 'Tailwind',   color: '#38bdf8' },
  { src: github,     label: 'GitHub',     color: '#9ca3af' },
  { src: laravel,    label: 'Laravel',    color: '#ef4444' },
  { src: bootstrap,  label: 'Bootstrap',  color: '#a855f7' },
  { src: java,       label: 'Java',       color: '#f97316' },
];

const tlContent = { background: '#111111', color: '#e2e2f0', border: '1px solid rgba(255,255,255,0.08)', boxShadow: 'none', borderRadius: '14px' };
const tlArrow   = { borderRight: '7px solid #111111' };
const tlIcon    = { background: '#0a0a0a', boxShadow: 'none' };

function SectionHead({ eyebrow, title, isMobile }) {
  const ref = useReveal();
  return (
    <div ref={ref} className="reveal" style={{ marginBottom: isMobile ? '2rem' : '3rem' }}>
      <p className="eyebrow" style={{ marginBottom: '0.75rem' }}>{eyebrow}</p>
      <h2 className="font-display" style={{ fontSize: isMobile ? '1.8rem' : 'clamp(1.8rem, 4vw, 3rem)', fontWeight: 900, color: '#fff', letterSpacing: '-0.03em' }}>
        {title}
      </h2>
    </div>
  );
}

function SkillCard({ src, label, color }) {
  const ref = useReveal();
  return (
    <div ref={ref} className="reveal glass"
      style={{ borderRadius: '14px', padding: '1.1rem 0.75rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.65rem', cursor: 'default', transition: 'all 0.3s ease' }}
      onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)'; e.currentTarget.style.boxShadow = `0 0 20px ${color}20`; }}
      onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)'; e.currentTarget.style.boxShadow = 'none'; }}
    >
      <img src={src} alt={label} style={{ width: 40, height: 40, objectFit: 'contain' }} />
      <span style={{ fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#52526e' }}>{label}</span>
    </div>
  );
}

export default function Experience() {
  const w = useWindowWidth();
  const isMobile = w < 768;

  return (
    <div name="experience" style={{ background: 'var(--bg2)', padding: isMobile ? '5rem 0' : '7rem 0', position: 'relative', overflow: 'hidden' }}>
      <div className="orb" style={{ width: 400, height: 400, background: 'rgba(255,255,255,0.03)', bottom: '-100px', left: '-100px' }} />

      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: isMobile ? '0 1.25rem' : '0 2rem' }}>

        <SectionHead eyebrow="Work History" title={<>Work <span className="grad-text">Experience</span></>} isMobile={isMobile} />
        <VerticalTimeline lineColor="rgba(255,255,255,0.10)">
          {experiences.map((e, i) => (
            <VerticalTimelineElement key={i}
              date={<span style={{ fontSize: '0.72rem', color: '#52526e', fontWeight: 600 }}>{e.date}</span>}
              contentStyle={tlContent} contentArrowStyle={tlArrow} iconStyle={tlIcon}>
              <p style={{ fontSize: '0.58rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#888888', marginBottom: '0.35rem' }}>{e.company}</p>
              <h3 className="font-display" style={{ fontWeight: 700, fontSize: '0.95rem', color: '#e2e2f0', marginBottom: '0.5rem' }}>{e.title}</h3>
              <p style={{ fontSize: '0.8rem', lineHeight: 1.75, color: '#52526e', margin: 0 }}>{e.desc}</p>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>

        <div style={{ marginTop: isMobile ? '3.5rem' : '5rem' }}>
          <SectionHead eyebrow="Academic Background" title={<>Education <span className="grad-text">&</span> Training</>} isMobile={isMobile} />
          <VerticalTimeline lineColor="rgba(255,255,255,0.10)">
            {educations.map((e, i) => (
              <VerticalTimelineElement key={i}
                date={<span style={{ fontSize: '0.72rem', color: '#52526e', fontWeight: 600 }}>{e.date}</span>}
                contentStyle={tlContent} contentArrowStyle={tlArrow} iconStyle={tlIcon}>
                <p style={{ fontSize: '0.58rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#888888', marginBottom: '0.35rem' }}>{e.school}</p>
                <h3 className="font-display" style={{ fontWeight: 700, fontSize: '0.95rem', color: '#e2e2f0', marginBottom: '0.25rem' }}>{e.title}</h3>
                <p style={{ fontSize: '0.8rem', color: '#52526e', margin: 0 }}>{e.grade}</p>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>

        <div style={{ marginTop: isMobile ? '3.5rem' : '5rem' }}>
          <SectionHead eyebrow="Tech Stack" title={<>Skills <span className="grad-text">&</span> Tools</>} isMobile={isMobile} />
          <div style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? 'repeat(4, 1fr)' : 'repeat(8, 1fr)',
            gap: '0.75rem',
          }}>
            {skills.map(s => <SkillCard key={s.label} {...s} />)}
          </div>
        </div>
      </div>
    </div>
  );
}
