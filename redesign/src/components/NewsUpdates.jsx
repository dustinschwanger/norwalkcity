import React from 'react'
import './NewsUpdates.css'

const NewsUpdates = () => {
  const newsItems = [
    {
      id: 1,
      title: 'City Council Approves New Infrastructure Plan',
      excerpt: 'The Norwalk City Council has approved a comprehensive infrastructure improvement plan focusing on road repairs and water system upgrades.',
      date: 'October 25, 2025',
      category: 'City News',
      image: '/images/news-infrastructure.jpg'
    },
    {
      id: 2,
      title: 'Annual Holiday Tree Lighting Ceremony Announced',
      excerpt: 'Join us for the annual holiday tree lighting ceremony at City Hall Plaza on December 1st. Free hot chocolate and entertainment for all.',
      date: 'October 22, 2025',
      category: 'Events',
      image: '/images/news-holiday.jpg'
    },
    {
      id: 3,
      title: 'New Recreation Programs Starting in November',
      excerpt: 'The Parks and Recreation Department is excited to announce new youth sports programs and fitness classes beginning next month.',
      date: 'October 20, 2025',
      category: 'Parks & Recreation',
      image: '/images/news-recreation.jpg'
    }
  ]

  return (
    <section className="news-updates">
      <div className="news-container">
        <div className="news-header">
          <h2 className="news-title">News & Updates</h2>
          <p className="news-subtitle">Stay informed about what's happening in Norwalk</p>
        </div>

        <div className="news-grid">
          {newsItems.map((item) => (
            <article key={item.id} className="news-card">
              <div className="news-image-wrapper">
                <div className="news-image-placeholder">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                    <circle cx="8.5" cy="8.5" r="1.5" />
                    <polyline points="21 15 16 10 5 21" />
                  </svg>
                </div>
              </div>
              <div className="news-content">
                <div className="news-meta">
                  <span className="news-category">{item.category}</span>
                  <span className="news-date">{item.date}</span>
                </div>
                <h3 className="news-card-title">{item.title}</h3>
                <p className="news-excerpt">{item.excerpt}</p>
                <a href="#" className="news-read-more">
                  Read More
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="news-footer">
          <a href="#" className="view-all-news">
            View All News & Updates
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}

export default NewsUpdates
