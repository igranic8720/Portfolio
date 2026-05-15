import './NavBar.css'

const sections = [
  { label: 'Experience',    href: '#experience'    },
  { label: 'Projects',      href: '#projects'      },
  { label: 'Education',     href: '#education'     },
  { label: 'Certifications',href: '#certifications'},
]

export default function NavBar() {
  return (
    <nav className="navbar">
      <div className="navbar-inner">
        {sections.map(({ label, href }) => (
          <a key={href} href={href} className="navbar-link">
            <span className="navbar-tilde">~/</span>{label}
          </a>
        ))}
      </div>
    </nav>
  )
}
