import React, { useState } from 'react'
import './Navigation.css'
import { useLanguage } from '../contexts/LanguageContext'
import { getTranslation } from '../translations'

const Navigation = ({ scrolled }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState(null)
  const { language, toggleLanguage } = useLanguage()

  const handleDropdownClick = (label, e) => {
    if (window.innerWidth <= 968) {
      e.preventDefault()
      setOpenDropdown(openDropdown === label ? null : label)
    }
  }

  const handleDropdownKeyDown = (label, e) => {
    // For keyboard users, Enter or Space should toggle dropdown
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      setOpenDropdown(openDropdown === label ? null : label)
    }
    // Escape should close dropdown
    else if (e.key === 'Escape' && openDropdown === label) {
      setOpenDropdown(null)
    }
  }

  const navItems = [
    { label: getTranslation(language, 'nav.cityCalendar'), href: '#calendar', key: 'calendar' },
    {
      label: getTranslation(language, 'nav.ourCommunity'),
      href: '#community',
      key: 'community',
      dropdown: [
        { label: getTranslation(language, 'nav.localAccessChannel'), href: '#local-access' },
        { label: getTranslation(language, 'nav.historyOfNorwalk'), href: '#history' },
        { label: getTranslation(language, 'nav.education'), href: '#education' },
        { label: getTranslation(language, 'nav.norwalkTreeCity'), href: '#tree-city' },
        { label: getTranslation(language, 'nav.huronCountyChamber'), href: '#chamber' },
      ]
    },
    {
      label: getTranslation(language, 'nav.departments'),
      href: '#departments',
      key: 'departments',
      dropdown: [
        { label: getTranslation(language, 'nav.backflowPrevention'), href: '#backflow' },
        { label: getTranslation(language, 'nav.cityBoards'), href: '#boards-commissions' },
        { label: getTranslation(language, 'nav.cityCouncil'), href: '#council' },
        { label: getTranslation(language, 'nav.financeDept'), href: '#finance' },
        { label: getTranslation(language, 'nav.fireDept'), href: '#fire' },
        { label: getTranslation(language, 'nav.generalServices'), href: '#general-services' },
        { label: getTranslation(language, 'nav.incomeTax'), href: '#income-tax' },
        { label: getTranslation(language, 'nav.lawDept'), href: '#law' },
        { label: getTranslation(language, 'nav.mayorsOffice'), href: '#mayor' },
        { label: getTranslation(language, 'nav.municipalCourt'), href: '#municipal-court' },
        { label: getTranslation(language, 'nav.policeDept'), href: '#police' },
        { label: getTranslation(language, 'nav.publicWorks'), href: '#public-works' },
        { label: getTranslation(language, 'nav.safetyService'), href: '#safety-service' },
        { label: getTranslation(language, 'nav.sanitation'), href: '#sanitation' },
        { label: getTranslation(language, 'nav.utilityBilling'), href: '#utility-billing' },
        { label: getTranslation(language, 'nav.wastewaterTreatment'), href: '#wastewater' },
        { label: getTranslation(language, 'nav.waterTreatment'), href: '#water-treatment' },
        { label: getTranslation(language, 'nav.zoning'), href: '#zoning' },
      ]
    },
    { label: getTranslation(language, 'nav.economicDevelopment'), href: '#economic', key: 'economic' },
    { label: getTranslation(language, 'nav.parkRec'), href: '#parks', key: 'parks' },
    { label: getTranslation(language, 'nav.contactUs'), href: '#contact', key: 'contact' },
  ]

  return (
    <header className={`navigation ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <a href="/" className="logo-link">
          <img
            src="/images/norwalk-logo.png"
            alt="City of Norwalk"
            className="logo"
          />
        </a>

        <button
          className="mobile-menu-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`hamburger ${mobileMenuOpen ? 'open' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </span>
        </button>

        <nav className={`nav-menu ${mobileMenuOpen ? 'open' : ''}`}>
          <ul className="nav-list">
            {navItems.map((item) => (
              <li
                key={item.key || item.label}
                className={`nav-item ${item.dropdown ? 'has-dropdown' : ''} ${openDropdown === item.label ? 'dropdown-open' : ''}`}
                onMouseEnter={() => item.dropdown && setOpenDropdown(item.label)}
                onMouseLeave={() => item.dropdown && setOpenDropdown(null)}
              >
                <a
                  href={item.href}
                  className="nav-link"
                  onClick={(e) => {
                    if (item.dropdown) {
                      handleDropdownClick(item.label, e)
                    } else {
                      setMobileMenuOpen(false)
                    }
                  }}
                  onKeyDown={(e) => {
                    if (item.dropdown) {
                      handleDropdownKeyDown(item.label, e)
                    }
                  }}
                  aria-expanded={item.dropdown ? openDropdown === item.label : undefined}
                  aria-haspopup={item.dropdown ? "true" : undefined}
                >
                  {item.label}
                  {item.dropdown && (
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="dropdown-arrow" aria-hidden="true">
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  )}
                </a>
                {item.dropdown && (
                  <div
                    className={`dropdown-menu ${openDropdown === item.label ? 'open' : ''}`}
                    role="menu"
                    aria-label={`${item.label} submenu`}
                  >
                    {item.dropdown.map((subItem, index) => (
                      <a
                        key={`${subItem.href}-${index}`}
                        href={subItem.href}
                        className="dropdown-item"
                        role="menuitem"
                        onClick={() => {
                          setMobileMenuOpen(false)
                          setOpenDropdown(null)
                        }}
                      >
                        {subItem.label}
                      </a>
                    ))}
                  </div>
                )}
              </li>
            ))}
            <li className="nav-item language-toggle-item">
              <button
                className="language-toggle"
                onClick={toggleLanguage}
                aria-label="Toggle language"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/>
                  <line x1="2" y1="12" x2="22" y2="12"/>
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                </svg>
                <span>{language === 'en' ? 'ES' : 'EN'}</span>
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Navigation
