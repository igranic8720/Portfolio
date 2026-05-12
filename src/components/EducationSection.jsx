import { useState, useEffect } from 'react'
import './ExperienceSection.css'

const education = [
  {
    degree: "Bachelor of Computer Science",
    school: "Conestoga College",
    date: "Sept 2025 — Aug 2026",
    description: "Specializations in algorithms, performance engineering, mobile & networking systems, and cybersecurity.",
  },
  {
    degree: "Software Engineering Technology — Advanced Diploma",
    school: "Conestoga College",
    date: "May 2021",
    description: "Advanced diploma covering software engineering principles, systems programming, and full-stack development.",
  },
  {
    degree: "Computer Application Security — Graduate Certificate",
    school: "Conestoga College",
    date: "Dec 2022",
    description: "Graduate certificate focused on application security, vulnerability analysis, and exploit development.",
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

export default function EducationSection() {
  const full = 'Education'
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
        {education.map((e, i) => (
          <Entry key={i} title={e.degree} subtitle={e.school} date={e.date} description={e.description} />
        ))}
      </div>
    </div>
  )
}
