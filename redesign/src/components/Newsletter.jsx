import React, { useState } from 'react'
import './Newsletter.css'
import { useLanguage } from '../contexts/LanguageContext'
import { getTranslation } from '../translations'

const Newsletter = () => {
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { language } = useLanguage()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!email.trim()) return

    setIsSubmitting(true)
    // Simulate submission
    setTimeout(() => {
      console.log('Newsletter signup:', email)
      setEmail('')
      setIsSubmitting(false)
      // You could show a success message here
    }, 1000)
  }

  return (
    <section className="newsletter">
      <div className="newsletter-container">
        <div className="newsletter-content">
          <div className="newsletter-icon">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
          </div>
          <div className="newsletter-text">
            <h2 className="newsletter-title">{getTranslation(language, 'newsletter.title')}</h2>
            <p className="newsletter-description">
              {getTranslation(language, 'newsletter.subtitle')}
            </p>
          </div>
        </div>
        <form className="newsletter-form" onSubmit={handleSubmit}>
          <div className="newsletter-input-wrapper">
            <label htmlFor="newsletter-email" className="sr-only">
              {getTranslation(language, 'newsletter.emailPlaceholder')}
            </label>
            <input
              id="newsletter-email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={getTranslation(language, 'newsletter.emailPlaceholder')}
              className="newsletter-input"
              required
              aria-required="true"
            />
            <button
              type="submit"
              className="newsletter-button"
              disabled={isSubmitting}
              aria-label={getTranslation(language, 'newsletter.subscribe')}
            >
              {getTranslation(language, 'newsletter.subscribe')}
            </button>
          </div>
          <p className="newsletter-privacy">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </form>
      </div>
    </section>
  )
}

export default Newsletter
