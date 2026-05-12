import { useState, useEffect } from 'react'
import './ExperienceSection.css'

const experience = [
  {
    role: 'Security Analyst',
    company: 'Magnet Forensics',
    date: 'August 2022 — August 2025',
    description: 'Triaged and resolved security incidents across SentinelOne, Defender 365, and CrowdStrike; managed DLP, DNS entry updates, and vendor/asset ops via Jira and OneTrust',
  },
  {
    role: 'Virtual Reality Software Developer',
    company: 'VARLab',
    date: 'June 2020 — April 2021',
    description: 'Developed VR simulations for automotive and industrial training (car lift inspection, hydraulic systems, semi-trailer); built a Node.js/React platform to launch Unity applications over URI with integrated networking.',
  },
]

function Entry({ title, subtitle, date, description }) {
  return (
    <div className="entry-card">
      <div className="entry-header">
        <div className="entry-titles">
          <span className="entry-title">{title}</span>
          <span className="entry-subtitle">{subtitle}</span>
        </div>
        <span className="entry-date">{date}</span>
      </div>
      {description && <p className="entry-description">{description}</p>}
    </div>
  )
}

export default function ExperienceSection() {
  const full = 'Experience'
  const [displayed, setDisplayed] = useState('')
  const [done, setDone] = useState(false)

  useEffect(() => {
    let i = 0
    const timer = setInterval(() => {
      i++
      setDisplayed(full.slice(0, i))
      if (i >= full.length) {
        clearInterval(timer)
        setDone(true)
      }
    }, 110)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="experience-section">
      <h2 className="section-heading">
        {displayed}<span className="typing-cursor">_</span>
      </h2>
      <div className="entry-list">
        {experience.map((e, i) => (
          <Entry key={i} title={e.role} subtitle={e.company} date={e.date} description={e.description} />
        ))}
      </div>
    </div>
  )
}
