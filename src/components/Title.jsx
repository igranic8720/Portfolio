import './Title.css'
import { FaEnvelope, FaGitAlt, FaGithub, FaGithubAlt, FaGithubSquare, FaLinkedin, FaMailBulk, FaVoicemail } from 'react-icons/fa';

function Linkedin(){
  window.open('https://www.linkedin.com/in/ivangranic', '_blank', 'noopener,noreferrer');
}

function GitHub(){
  window.open('https://www.linkedin.com/in/your-profile', '_blank', 'noopener,noreferrer');
}

function Email(){
  window.open('https://www.linkedin.com/in/your-profile', '_blank', 'noopener,noreferrer');
}

export default function Title(props){
    const children = props.children;
    const className = props.className || '';
    return(
        <div className='title-dropshadow vertical'>
            <div className='horizontal title-name-and-pic'>
                <img src='pfp.jpg'className='profileimage'></img>
                <h1>Ivan Granic</h1>
            </div>
            <div className='horizontal'>
                <div 
                style={{ cursor: 'pointer' }}
                onClick={Linkedin} 
                className='title-card title-hghlght horizontal'>
                    <FaLinkedin size={30} color="#ffffff" className='iconshadow'/>
                    <h2 color="#0077B5">Linkedin</h2>
                </div>
                <div 
                style={{ cursor: 'pointer' }}
                onClick={Linkedin} 
                className='title-card title-hghlght horizontal'>
                    <FaGithub size={30} color="#ffffff" className='iconshadow'/>
                    <h2 color="#0077B5">GitHub</h2>
                </div>
                <div 
                style={{ cursor: 'pointer' }}
                onClick={Linkedin} 
                className='title-card title-hghlght horizontal'>
                    <FaEnvelope size={30} color="#ffffff" className='iconshadow'/>
                    <h2 color="#0077B5">Email</h2>
                </div>
            </div>
            {children}
        </div>
    )
}