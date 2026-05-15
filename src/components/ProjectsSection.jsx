import './ProjectsSection.css'
import GitHubCard from './GitHubCard'
import SectionHeading from './SectionHeading'

export default function ProjectsSection() {
  return (
    <section className="projects-section" id="projects">
      <SectionHeading command="$ ls ~/Projects" title="Projects">
        <div className="projects-grid">
          <GitHubCard />
        </div>
      </SectionHeading>
    </section>
  )
}
