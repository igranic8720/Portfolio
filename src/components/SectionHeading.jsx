import { useState, useEffect } from 'react'
import './SectionHeading.css'

export default function SectionHeading({ command, title, children }) {
  const [displayed, setDisplayed] = useState('')
  const [phase, setPhase] = useState('command')
  const [ready, setReady] = useState(false)

  useEffect(() => {
    let i = 0
    const timer = setInterval(() => {
      i++
      setDisplayed(command.slice(0, i))
      if (i >= command.length) {
        clearInterval(timer)
        setTimeout(() => {
          setPhase('title')
          setDisplayed(title)
          setReady(true)
        }, 700)
      }
    }, 80)
    return () => clearInterval(timer)
  }, [command, title])

  return (
    <>
      <h2 className="section-heading section-heading--cmd">
        {phase === 'title'
          ? <><span className="cmd-prefix">~/</span>{displayed}</>
          : <><span className="cmd-prefix">{displayed.slice(0, 1)}</span>{displayed.slice(1)}</>
        }
        <span className="typing-cursor">_</span>
      </h2>
      {ready && (
        <div className="section-content section-content--visible">
          {children}
        </div>
      )}
    </>
  )
}
