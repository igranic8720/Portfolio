import './Card.css'

export default function Card({ children, className = '' }) {
  return (
    <div className={`demo-card card-hghlght ${className}`}>
      {children}
    </div>
  )
}
