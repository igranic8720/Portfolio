import './App.css'
import Title from './components/Title'
import Card, { GitHubCard } from './components/Card'

function App() {
  
  return (
    <>
      <div className='background'>
        <Title/>
        <h1>What I'm Working on</h1>
        <div>
          <Card>
            <h1>LinkedIn</h1>
          </Card>
          <Card>
            <h1>GitHub</h1>
          </Card>
          <Card>
            <h1>Stuff</h1>
          </Card>
        </div>
      </div>
      <div>
        <GitHubCard />
      </div>
    </>
  )
}

export default App