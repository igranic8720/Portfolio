import './App.css'
import Title from './components/Title'
import Card, { GitHubCard } from './components/Card'
import AnimatedBackground from './components/AnimatedBackground'

function App() {
  
  return (
    <>
      <div style={{ 
        position: 'fixed', 
        top: 0, 
        left: 0, 
        width: '100vw', 
        height: '100vh', 
        zIndex: 3  // Changed from -1 to -2
      }}>
        <AnimatedBackground />
      </div>
      <div className='background'>
        <Title>
          <p>
            Final-year Computer Science student at Conestoga College with experience in cybersecurity and VR development.
          </p>
          </Title>
        <h2>What I'm Working on</h2>
        <div>
          <GitHubCard />
        </div>
        <footer className="site-footer">
          <p>© {new Date().getFullYear()} Ivan Granic — All rights reserved</p>
        </footer>
      </div>
    </>
  )
}

export default App