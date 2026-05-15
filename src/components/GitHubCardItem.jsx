import { useRef } from 'react'
import './Card.css'
import ReactMarkdown from 'react-markdown'
import remarkGemoji from 'remark-gemoji'
import remarkGfm from 'remark-gfm'
import { FaStar, FaCodeBranch, FaGithub, FaChevronDown } from 'react-icons/fa'

export default function GitHubCardItem({ project, expanded, onToggle }) {
  const cardRef = useRef(null)

  function handleClick() {
    if (window.getSelection()?.toString()) return
    if (!expanded) {
      cardRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
    onToggle()
  }

  return (
    <div
      ref={cardRef}
      className={`demo-card card-hghlght ${expanded ? 'card-expanded' : ''}`}
      onClick={handleClick}
    >
      <div className="card-main">
        <div className="card-info">
          <div className="card-row">
            <h2>
                <a
                  href={project.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="card-title-link"
                >
                  {project.name}
                </a>
              </h2>
            {project.language && <span className="card-lang">{project.language}</span>}
            <a
              href={project.html_url}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="card-stats"
            >
              <FaStar size={13} /> <strong>{project.stargazers_count}</strong>
              <FaCodeBranch size={13} /> <strong>{project.forks_count}</strong>
              <FaGithub size={13} />
            </a>
          </div>
          <p>{project.description || 'No description'}</p>
        </div>
        {project.gif && (
          <img src={project.gif} alt={`${project.name} demo`} className="card-gif" />
        )}
      </div>
      <div className="card-expand-hint">
        <FaChevronDown className={expanded ? 'card-chevron rotated' : 'card-chevron'} size={12} />
      </div>
      <div className={`card-content ${expanded ? 'card-content-expanded' : ''}`}>
        <div>
          {project.readme && (
            <ReactMarkdown remarkPlugins={[remarkGemoji, remarkGfm]}>{project.readme}</ReactMarkdown>
          )}
        </div>
      </div>
    </div>
  )
}
