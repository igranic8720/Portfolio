import './ExperienceSection.css'
import SectionHeading from './SectionHeading'

const experience = [
  {
    role: 'Security Analyst',
    company: 'Magnet Forensics',
    date: 'August 2022 — August 2025',
    description: 'Triaged and worked to resolve security incidents across SentinelOne, Defender 365, and CrowdStrike.  Resolved Malware incidents and peformed Root Cause Analysis. Participated in creation of Data Loss Prevention(DLP) policies, managed DNS entry updates, and  handled vendor/asset operation via Jira and OneTrust. Assisted in SOC2 and ISO 27001 certification.',
  },
  {
    role: 'Virtual Reality Software Developer',
    company: 'VARLab',
    date: 'June 2020 — April 2021',
    description: 'Developed Virtual Reality simulations in Unity (C#) for automotive and industrial training (car lift inspection, hydraulic systems, semi-trailer); built a Node.js/React platform to launch Unity applications over URI with integrated networking.',
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

export default function ExperienceSection() {
  return (
    <div className="experience-section" id="experience">
      <SectionHeading command="$ ls ~/Experience" title="Experience">
        <div className="entry-list">
          {experience.map((e, i) => (
            <Entry key={i} title={e.role} subtitle={e.company} date={e.date} description={e.description} />
          ))}
        </div>
      </SectionHeading>
    </div>
  )
}
