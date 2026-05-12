import { useState, useEffect } from 'react'
import GitHubCardItem from './GitHubCardItem'

const CACHE_DURATION = 1000 * 60 * 60

const PINNED_REPOS = [
  { name: 'Force-Directed-Graph-for-BFS-Algorithm', gif: '/thing.gif' },
  // { name: 'your-repo', gif: '/demos/your-repo.gif' },
]

const mergeGifs = (repoList) =>
  PINNED_REPOS
    .map(({ name, gif = null }) => {
      const repo = repoList.find(r => r.name === name)
      return repo ? { ...repo, gif } : null
    })
    .filter(Boolean)

export default function GitHubCard() {
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)
  const [expandedId, setExpandedId] = useState(null)

  const handleToggle = (id) => {
    setExpandedId(expandedId === id ? null : id)
  }

  useEffect(() => {
    const cached = localStorage.getItem('github-projects')
    const cachedTime = localStorage.getItem('github-projects-time')

    if (cached && cachedTime && Date.now() - Number(cachedTime) < CACHE_DURATION) {
      const cachedRepos = JSON.parse(cached)
      const allPinnedPresent = PINNED_REPOS.every(({ name }) => cachedRepos.some(r => r.name === name))
      if (allPinnedPresent) {
        setProjects(mergeGifs(cachedRepos))
        setLoading(false)
        return
      }
    }

    fetch('https://api.github.com/users/igranic8720/repos?per_page=100')
      .then(res => res.json())
      .then(async data => {
        const all = Array.isArray(data) ? data : []
        const repos = PINNED_REPOS
          .map(({ name }) => all.find(r => r.name === name))
          .filter(Boolean)
        const withReadmes = await Promise.all(
          repos.map(async repo => {
            try {
              const res = await fetch(
                `https://api.github.com/repos/igranic8720/${repo.name}/contents/README.md`
              )
              const file = await res.json()
              const readme = file.content
                ? new TextDecoder().decode(Uint8Array.from(atob(file.content), c => c.charCodeAt(0)))
                : null
              return { ...repo, readme }
            } catch {
              return { ...repo, readme: null }
            }
          })
        )
        localStorage.setItem('github-projects', JSON.stringify(withReadmes))
        localStorage.setItem('github-projects-time', Date.now().toString())
        setProjects(mergeGifs(withReadmes))
        setLoading(false)
      })
      .catch(err => {
        console.error('Error fetching GitHub repos:', err)
        setLoading(false)
      })
  }, [])

  if (loading) return <p>Loading projects...</p>

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
  )
}
