import React from 'react'
import './ServicesNews.css'
import { useLanguage } from '../contexts/LanguageContext'
import { getTranslation } from '../translations'

const ServicesNews = () => {
  const { language } = useLanguage()

  const services = [
    {
      id: 1,
      label: getTranslation(language, 'services.payWaterBill'),
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2">
          <path d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"/>
        </svg>
      ),
      href: '#water-bill'
    },
    {
      id: 2,
      label: getTranslation(language, 'services.reportStreetlight'),
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2">
          <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
        </svg>
      ),
      href: '#streetlight'
    },
    {
      id: 3,
      label: getTranslation(language, 'services.requestService'),
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#f97316" strokeWidth="2">
          <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"/>
        </svg>
      ),
      href: '#request-service'
    },
    {
      id: 4,
      label: getTranslation(language, 'services.buildingPermits'),
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#8b5cf6" strokeWidth="2">
          <path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
        </svg>
      ),
      href: '#permits'
    },
    {
      id: 5,
      label: getTranslation(language, 'services.gisMapping'),
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#64748b" strokeWidth="2">
          <path d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"/>
        </svg>
      ),
      href: '#gis-mapping'
    },
    {
      id: 6,
      label: getTranslation(language, 'services.meetingAgendas'),
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2">
          <path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
        </svg>
      ),
      href: '#meetings'
    },
    {
      id: 7,
      label: getTranslation(language, 'services.codifiedOrdinances'),
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#8b5cf6" strokeWidth="2">
          <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
        </svg>
      ),
      href: '#ordinances'
    },
    {
      id: 8,
      label: getTranslation(language, 'services.payTaxes'),
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2">
          <path d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
        </svg>
      ),
      href: '#taxes'
    },
    {
      id: 9,
      label: getTranslation(language, 'services.jobListings'),
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#f97316" strokeWidth="2">
          <path d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
        </svg>
      ),
      href: '#job-listings'
    }
  ]

  const newsArticles = [
    {
      id: 1,
      title: getTranslation(language, 'services.news1Title'),
      excerpt: getTranslation(language, 'services.news1Excerpt'),
      image: '/images/News2.jpg',
      href: '#article-1'
    },
    {
      id: 2,
      title: getTranslation(language, 'services.news2Title'),
      excerpt: getTranslation(language, 'services.news2Excerpt'),
      image: '/images/News5.png',
      href: '#article-2'
    },
    {
      id: 3,
      title: getTranslation(language, 'services.news3Title'),
      excerpt: getTranslation(language, 'services.news3Excerpt'),
      image: '/images/newsimage1.png',
      href: '#article-3'
    },
    {
      id: 4,
      title: getTranslation(language, 'services.news4Title'),
      excerpt: getTranslation(language, 'services.news4Excerpt'),
      image: '/images/news3.png',
      href: '#article-4'
    }
  ]

  return (
    <section className="services-news">
      <div className="services-news-container">
        <div className="sidebar-layout">
          {/* Services Sidebar */}
          <aside className="services-sidebar">
            <h2 className="sidebar-title">{getTranslation(language, 'services.quickLinks')}</h2>
            <nav className="services-list">
              {services.map((service) => (
                <a key={service.id} href={service.href} className="service-item">
                  <div className="service-icon">
                    {service.icon}
                  </div>
                  <span>{service.label}</span>
                </a>
              ))}
            </nav>
          </aside>

          {/* News Content */}
          <div className="news-content">
            <div className="news-header">
              <h2 className="news-section-title">{getTranslation(language, 'services.newsUpdates')}</h2>
            </div>

            {/* News Grid */}
            <div className="news-grid">
              {newsArticles.map((article) => (
                <article key={article.id} className="news-card">
                  <img
                    src={article.image}
                    alt="News article image"
                    className="news-card-image"
                  />
                  <div className="news-card-body">
                    <h3 className="news-card-title">{article.title}</h3>
                    <p className="news-card-excerpt">{article.excerpt}</p>
                    <a href={article.href} className="news-card-link" aria-label={`${getTranslation(language, 'services.readMore')}: ${article.title}`}>
                      {getTranslation(language, 'services.readMore')}
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                        <polyline points="9 18 15 12 9 6"/>
                      </svg>
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServicesNews
