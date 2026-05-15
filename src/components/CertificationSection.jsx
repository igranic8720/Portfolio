import './ExperienceSection.css'
import SectionHeading from './SectionHeading'

const certifications = [
  {
    name: 'Security Plus ( Security+ )',
    issuer: 'CompTIA',
    date: 'Nov 2025',
    description: "Certifies capabilities in securing networks, applications, and devices, ensuring data integrity, confidentiality, and availability. CompTIA Security+ focuses on practical, hands-on skills to tackle real-world challenges. As the most widely recognized credential, it is invaluable for advancing in the dynamic field of cybersecurity. (Source: CompTIA)",
  },
]

function Entry({ title, subtitle, date, description }) {
  return (
    <div className="entry-card">
      <div className="entry-header">
        <div className="entry-titles">
          <span className="entry-title">{title}</span>
          <span className="entry-subtitle">{subtitle}</span>
        </div>
        <span className="entry-date">{date}</span>
      </div>
      {description && <p className="entry-description">{description}</p>}
    </div>
  )
}

export default function CertificationSection() {
  return (
    <div className="experience-section" id="certifications">
      <SectionHeading command="$ ls ~/Certifications" title="Certifications">
        <div className="entry-list">
          {certifications.map((c, i) => (
            <Entry key={i} title={c.name} subtitle={c.issuer} date={c.date} description={c.description} />
          ))}
        </div>
      </SectionHeading>
    </div>
  )
}
