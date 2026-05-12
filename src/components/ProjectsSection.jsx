import { useState, useEffect } from 'react'
import './ProjectsSection.css'
import GitHubCard from './GitHubCard'

export default function ProjectsSection() {
  const full = "What I'm Working on"
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
    <section className="projects-section">
      <h2 className="section-heading">
        {displayed}<span className="typing-cursor">_</span>
      </h2>
      <div className="projects-grid">
        <GitHubCard />
      </div>
    </section>
  )
}
