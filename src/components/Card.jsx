import './Card.css'
import { useState, useEffect } from 'react'

export function GitHubCard() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://api.github.com/users/igranic8720/repos?sort=updated&per_page=6')
      .then(res => res.json())
      .then(data => {
        setProjects(Array.isArray(data) ? data : []);
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
      <div key={project.id} className='demo-card card-hghlght'>
        <h2>{project.name}</h2>
        <p>{project.description || 'No description'}</p>
        <a href={project.html_url} target="_blank" rel="noopener noreferrer">
          View on GitHub
        </a>
      </div>
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