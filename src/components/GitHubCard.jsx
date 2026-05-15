import { useState, useEffect } from 'react'
import GitHubCardItem from './GitHubCardItem'

const CACHE_DURATION = 1000 * 60 * 60
// 1000 ms (1 second) * 60 * 60 = 60 mins

const PINNED_REPOS = [
  { path: 'igranic8720/Force-Directed-Graph-for-BFS-Algorithm', gif: '/BFS.gif' },
  // { path: 'PhillipKellogg/heat.pics', gif: '/thing.gif' },
  { path: 'igranic8720/Portfolio', gif: '/Portfolio.gif' },
  // { path: 'other-user/their-repo', gif: '/demos/their-repo.gif' },
]

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
      const allPinnedPresent = PINNED_REPOS.every(({ path, gif }) =>
        cachedRepos.some(r => r.html_url?.endsWith(path) && r.gif === gif)
      )
      if (allPinnedPresent) {
        setProjects(cachedRepos)
        setLoading(false)
        return
      }
    }

    Promise.all(
      PINNED_REPOS.map(async ({ path, gif }) => {
        try {
          const [repoRes, readmeRes] = await Promise.all([
            fetch(`https://api.github.com/repos/${path}`),
            fetch(`https://api.github.com/repos/${path}/readme`),
          ])
          if (!repoRes.ok) return null
          const { id, name, html_url, language, stargazers_count, forks_count, description } = await repoRes.json()
          const readmeFile = await readmeRes.json()
          const readme = readmeFile.content
            ? new TextDecoder().decode(Uint8Array.from(atob(readmeFile.content), c => c.charCodeAt(0)))
            : null
          return { id, name, html_url, language, stargazers_count, forks_count, description, readme, gif }
        } catch {
          return null
        }
      })
    )
      .then(results => {
        const fetched = results.filter(Boolean)
        localStorage.setItem('github-projects', JSON.stringify(fetched))
        localStorage.setItem('github-projects-time', Date.now().toString())
        setProjects(fetched)
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
