import React, { useState, useEffect } from 'react'
import './App.css'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import ServicesNews from './components/ServicesNews'
import Newsletter from './components/Newsletter'
import CalendarEvents from './components/CalendarEvents'
import Footer from './components/Footer'
import { useLanguage } from './contexts/LanguageContext'

function App() {
  const [scrolled, setScrolled] = useState(false)
  const { language } = useLanguage()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Update document lang attribute when language changes
  useEffect(() => {
    document.documentElement.lang = language
  }, [language])

  return (
    <div className="app">
      <a href="#main-content" className="skip-to-main">
        {language === 'en' ? 'Skip to main content' : 'Saltar al contenido principal'}
      </a>
      <Navigation scrolled={scrolled} />
      <main id="main-content">
        <Hero />
        <ServicesNews />
        <Newsletter />
        <CalendarEvents />
      </main>
      <Footer />
    </div>
  )
}

export default App
