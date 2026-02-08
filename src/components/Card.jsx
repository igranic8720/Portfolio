import './Card.css'
import { useState, useEffect, useRef } from 'react'
import ReactMarkdown from 'react-markdown';
import remarkGemoji from 'remark-gemoji';
import remarkGfm from 'remark-gfm';
import { FaStar, FaCodeBranch, FaGithub, FaLink, FaGithubSquare, FaArrowAltCircleRight, FaSquare, FaArrowsAlt, FaShare, FaShareAlt } from 'react-icons/fa';

function GitHubCardItem({ project, expanded, onToggle }) {
  const cardRef = useRef(null);

  const handleClick = () => {
    onToggle();
  };

  return (
    <div
      ref={cardRef}
      className={`demo-card card-hghlght ${expanded ? 'card-expanded' : ''}`}
      onClick={handleClick}
    >
      <div className="card-row">
        <h2>{project.name}</h2>
            <a href={project.html_url}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="card-stats"
            >
                <FaStar size={14} /> {project.stargazers_count}
                <FaCodeBranch size={14} /> {project.forks_count}
                <FaGithub size={14} />
                <FaLink size={14} />
            </a>
      </div>
      <p>{project.description || 'No description'}</p>
      <div className={`card-content ${expanded ? 'card-content-expanded' : ''}`}>
        <div>
          {project.readme && (
            <ReactMarkdown remarkPlugins={[remarkGemoji, remarkGfm]}>{project.readme}</ReactMarkdown>
          )}
        </div>
      </div>
    </div>
  );
}

export function GitHubCard() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [expandedId, setExpandedId] = useState(null);

  const CACHE_DURATION = 1000 * 60 * 60;

  const handleToggle = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  useEffect(() => {
    const cached = localStorage.getItem('github-projects');
    const cachedTime = localStorage.getItem('github-projects-time');

    if (cached && cachedTime && Date.now() - Number(cachedTime) < CACHE_DURATION) {
        console.log('Loading from cache');
      setProjects(JSON.parse(cached));
      setLoading(false);
      return;
    }
    console.log('Fetching from GitHub API');
    fetch('https://api.github.com/users/igranic8720/repos?sort=updated&per_page=6')
      .then(res => res.json())
      .then(async data => {
        const repos = Array.isArray(data) ? data : [];
        const withReadmes = await Promise.all(
          repos.map(async repo => {
            try {
              const res = await fetch(
                `https://api.github.com/repos/igranic8720/${repo.name}/contents/README.md`
              );
              const file = await res.json();
              const readme = file.content ? new TextDecoder().decode(Uint8Array.from(atob(file.content), c => c.charCodeAt(0)))
                : null;
              return { ...repo, readme };
            } catch {
              return { ...repo, readme: null };
            }
          })
        );
        localStorage.setItem('github-projects', JSON.stringify(withReadmes));
        localStorage.setItem('github-projects-time', Date.now().toString());
        setProjects(withReadmes);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error fetching GitHub repos:', err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading projects...</p>;

  return (
    <>
      {projects.map(project => (
        <GitHubCardItem
          key={project.id}
          project={project}
          expanded={expandedId === project.id}
          onToggle={() => handleToggle(project.id)}
        />
      ))}
    </>
  );
}

export default function Card(props){
    const children = props.children;
    const className = props.className || '';

    return(
        <div className='demo-card card-hghlght'>
            {children}
        </div>
    )
}