import './App.css'
import Title from './components/Title'
import Card, { GitHubCard } from './components/Card'

function App() {
  
  return (
    <>
      <div className='background'>
        <Title>
          <p>
            Final-year Computer Science student at Conestoga College with experience in cybersecurity and VR development.
          </p>
          </Title>
        <section className="projects-section">
          <h2 className="section-heading">What I'm Working on</h2>
          <div className="projects-grid">
            <GitHubCard />
          </div>
        </section>
        <footer className="site-footer">
          <p>© {new Date().getFullYear()} Ivan Granic — All rights reserved</p>
        </footer>
      </div>
      
    </>
  )
}

export default App