import './App.css'
import NavBar from './components/NavBar'
import Title from './components/Title'
import EducationSection from './components/EducationSection'
import ExperienceSection from './components/ExperienceSection'
import ProjectsSection from './components/ProjectsSection'
import CertificationSection from './components/CertificationSection'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="background">
      <Title />
      <NavBar />
      <ExperienceSection />
        <ProjectsSection />
        <EducationSection />
        <CertificationSection />
        <Footer />
    </div>
  )
}
