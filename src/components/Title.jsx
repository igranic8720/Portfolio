import './Title.css'
import { FaEnvelope, FaGithub, FaLinkedin, FaFileAlt } from 'react-icons/fa';

export default function Title(props) {
  const children = props.children;

  return (
    <div className='title-dropshadow vertical'>
      <div className='horizontal title-name-and-pic'>
        <img src='pfp.jpg' className='profileimage' />
        <div>
          <h1>Ivan Granic</h1>
          <p>Software Developer & Cyber Security Professional</p>
        </div>
      </div>
      <div className='horizontal'>
        <a href="https://www.linkedin.com/in/ivangranic" target="_blank" rel="noopener noreferrer" className='title-card title-hghlght horizontal'>
          <FaLinkedin size={30} color="#ffffff" className='iconshadow' />
          <h2>LinkedIn</h2>
        </a>
        <a href="https://github.com/igranic8720" target="_blank" rel="noopener noreferrer" className='title-card title-hghlght horizontal'>
          <FaGithub size={30} color="#ffffff" className='iconshadow' />
          <h2>GitHub</h2>
        </a>
        <a href="mailto:ivanmattgranic@outlook.com" className='title-card title-hghlght horizontal'>
          <FaEnvelope size={30} color="#ffffff" className='iconshadow' />
          <h2>Email</h2>
        </a>
        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className='title-card title-hghlght horizontal'>
          <FaFileAlt size={30} color="#ffffff" className='iconshadow' />
          <h2>Resume</h2>
        </a>
      </div>
      {children}
    </div>
  );
}