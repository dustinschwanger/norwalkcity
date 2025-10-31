import React from 'react'
import './QuickLinks.css'

const QuickLinks = () => {
  const categories = [
    {
      id: 'residents',
      title: 'Residents',
      color: 'linear-gradient(135deg, #0f172a 0%, #1e3a8a 100%)',
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
          <polyline points="9 22 9 12 15 12 15 22" />
        </svg>
      ),
      links: [
        { label: 'Pay Water Bill', href: '#water-bill' },
        { label: 'Report a Streetlight Outage', href: '#streetlight' },
        { label: 'Request a Service', href: '#request-service' },
        { label: 'GIS Mapping', href: '#gis-mapping' },
      ],
    },
    {
      id: 'parks-places',
      title: 'Parks & Places',
      color: 'linear-gradient(135deg, #059669 0%, #10b981 100%)',
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 2v6m0 0L9 5m3 3l3-3" />
          <path d="M12 22v-6m0 0l-3 3m3-3l3 3" />
          <circle cx="12" cy="12" r="4" />
          <path d="M2 12h6m8 0h6" />
        </svg>
      ),
      links: [
        { label: 'Parks & Recreation', href: '#parks' },
        { label: 'Our Community', href: '#community' },
        { label: 'Local Events', href: '#events' },
        { label: 'History of Norwalk', href: '#history' },
      ],
    },
    {
      id: 'government',
      title: 'Government',
      color: 'linear-gradient(135deg, #1e40af 0%, #3b82f6 100%)',
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M3 9h18M3 9l9-6 9 6M3 9v11a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V9" />
          <path d="M9 21V12h6v9" />
        </svg>
      ),
      links: [
        { label: 'Meeting Agendas', href: '#meetings' },
        { label: 'Road Work & Delays', href: '#road-work' },
        { label: 'Norwalk Codified Ordinances', href: '#ordinances' },
        { label: 'Job Listings', href: '#job-listings' },
      ],
    },
    {
      id: 'business',
      title: 'Business',
      color: 'linear-gradient(135deg, #475569 0%, #64748b 100%)',
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="2" y="7" width="20" height="14" rx="2" />
          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
        </svg>
      ),
      links: [
        { label: 'Building Permits', href: '#permits' },
        { label: 'Planning & Zoning', href: '#zoning' },
        { label: 'Business Registration', href: '#registration' },
        { label: 'Economic Development', href: '#economic-dev' },
      ],
    },
  ]

  return (
    <section className="quick-links">
      <div className="quick-links-container">
        <div className="cards-grid">
          {categories.map((category, index) => (
            <article
              key={category.id}
              className="category-card"
              style={{
                background: category.color,
                animationDelay: `${index * 0.1}s`,
              }}
            >
              <div className="card-header">
                <div className="card-icon">{category.icon}</div>
                <h2 className="card-title">{category.title}</h2>
              </div>
              <nav className="card-links">
                <ul>
                  {category.links.map((link) => (
                    <li key={link.label}>
                      <a href={link.href} className="card-link">
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                        >
                          <polyline points="9 18 15 12 9 6" />
                        </svg>
                        <span>{link.label}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default QuickLinks
