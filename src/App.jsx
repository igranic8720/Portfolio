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