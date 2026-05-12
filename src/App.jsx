import './App.css'
import Title from './components/Title'
import EducationSection from './components/EducationSection'
import ExperienceSection from './components/ExperienceSection'
import ProjectsSection from './components/ProjectsSection'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="background">
      <Title />
      <ExperienceSection />
      <ProjectsSection />
      <EducationSection />
      <Footer />
    </div>
  )
}
