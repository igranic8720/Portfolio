import { useState, useEffect } from 'react'
import './Title.css'
import { FaEnvelope, FaGithub, FaLinkedin, FaFileAlt } from 'react-icons/fa';

export default function Title() {
  const full = 'Ivan Granic'
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
    <div className="title-hero">
      <div className="hero-content">
        <img src="pfp.jpg" className="hero-pfp" alt="Ivan Granic" />
        <div className="hero-text">
          <h1>{displayed}<span className="name-cursor">_</span></h1>
          <p className="hero-subtitle">Software Developer & Cyber Security Professional</p>
          <div className="hero-bio">
            <p>Computer Scientist specializing in cybersecurity, VR development, and systems-level programming.</p>
            <p>Proficient in C++, OpenGL, C#, JavaScript, Python, and Rust.</p>
            <p>CompTIA Security+ certified.</p>
          </div>
        </div>
        <nav className="hero-links">
          <a href="https://www.linkedin.com/in/ivangranic" target="_blank" rel="noopener noreferrer" className="hero-link">
            <FaLinkedin size={20} />
            <span>LinkedIn</span>
          </a>
          <a href="https://github.com/igranic8720" target="_blank" rel="noopener noreferrer" className="hero-link">
            <FaGithub size={20} />
            <span>GitHub</span>
          </a>
          <a href="mailto:ivanmattgranic@outlook.com" className="hero-link">
            <FaEnvelope size={20} />
            <span>Email</span>
          </a>
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="hero-link">
            <FaFileAlt size={20} />
            <span>Resume</span>
          </a>
        </nav>
      </div>
    </div>
  );
}
