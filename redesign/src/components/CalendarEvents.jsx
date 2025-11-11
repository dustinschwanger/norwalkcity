import React, { useState, useMemo } from 'react'
import './CalendarEvents.css'
import { useLanguage } from '../contexts/LanguageContext'
import { getTranslation } from '../translations'

const CalendarEvents = () => {
  const [currentDate] = useState(new Date(2025, 10, 1)) // November 2025
  const { language } = useLanguage()

  // Sample events data
  const events = [
    {
      id: 1,
      title: getTranslation(language, 'calendar.events.event1Title'),
      date: 'November 5, 2025',
      time: getTranslation(language, 'calendar.events.event1Time'),
      location: getTranslation(language, 'calendar.events.event1Location'),
      category: 'Government',
      day: 5
    },
    {
      id: 2,
      title: getTranslation(language, 'calendar.events.event2Title'),
      date: 'November 8, 2025',
      time: getTranslation(language, 'calendar.events.event2Time'),
      location: getTranslation(language, 'calendar.events.event2Location'),
      category: 'Community',
      day: 8
    },
    {
      id: 3,
      title: getTranslation(language, 'calendar.events.event3Title'),
      date: 'November 10, 2025',
      time: getTranslation(language, 'calendar.events.event3Time'),
      location: getTranslation(language, 'calendar.events.event3Location'),
      category: 'Recreation',
      day: 10
    },
    {
      id: 4,
      title: getTranslation(language, 'calendar.events.event4Title'),
      date: 'November 15, 2025',
      time: getTranslation(language, 'calendar.events.event4Time'),
      location: getTranslation(language, 'calendar.events.event4Location'),
      category: 'Community',
      day: 15
    },
    {
      id: 5,
      title: getTranslation(language, 'calendar.events.event5Title'),
      date: 'November 18, 2025',
      time: getTranslation(language, 'calendar.events.event5Time'),
      location: getTranslation(language, 'calendar.events.event5Location'),
      category: 'Government',
      day: 18
    },
    {
      id: 6,
      title: getTranslation(language, 'calendar.events.event6Title'),
      date: 'November 25, 2025',
      time: getTranslation(language, 'calendar.events.event6Time'),
      location: getTranslation(language, 'calendar.events.event6Location'),
      category: 'Community',
      day: 25
    },
    {
      id: 7,
      title: getTranslation(language, 'calendar.events.event7Title'),
      date: 'November 20, 2025',
      time: getTranslation(language, 'calendar.events.event7Time'),
      location: getTranslation(language, 'calendar.events.event7Location'),
      category: 'Recreation',
      day: 20
    },
    {
      id: 8,
      title: getTranslation(language, 'calendar.events.event8Title'),
      date: 'November 28, 2025',
      time: getTranslation(language, 'calendar.events.event8Time'),
      location: getTranslation(language, 'calendar.events.event8Location'),
      category: 'Government',
      day: 28
    }
  ]

  // Calendar calculations
  const calendar = useMemo(() => {
    const year = currentDate.getFullYear()
    const month = currentDate.getMonth()

    const firstDay = new Date(year, month, 1)
    const lastDay = new Date(year, month + 1, 0)
    const daysInMonth = lastDay.getDate()
    const startingDayOfWeek = firstDay.getDay()

    const today = new Date()
    const isCurrentMonth = today.getMonth() === month && today.getFullYear() === year
    const currentDay = isCurrentMonth ? today.getDate() : null

    // Get event days for this month
    const eventDays = events
      .filter(event => event.day)
      .map(event => event.day)

    return {
      year,
      month,
      daysInMonth,
      startingDayOfWeek,
      currentDay,
      eventDays
    }
  }, [currentDate, events])

  const monthNames = [
    getTranslation(language, 'calendar.january'),
    getTranslation(language, 'calendar.february'),
    getTranslation(language, 'calendar.march'),
    getTranslation(language, 'calendar.april'),
    getTranslation(language, 'calendar.may'),
    getTranslation(language, 'calendar.june'),
    getTranslation(language, 'calendar.july'),
    getTranslation(language, 'calendar.august'),
    getTranslation(language, 'calendar.september'),
    getTranslation(language, 'calendar.october'),
    getTranslation(language, 'calendar.november'),
    getTranslation(language, 'calendar.december')
  ]

  const dayNames = [
    getTranslation(language, 'calendar.sun'),
    getTranslation(language, 'calendar.mon'),
    getTranslation(language, 'calendar.tue'),
    getTranslation(language, 'calendar.wed'),
    getTranslation(language, 'calendar.thu'),
    getTranslation(language, 'calendar.fri'),
    getTranslation(language, 'calendar.sat')
  ]

  // Generate calendar days
  const calendarDays = []

  // Add empty cells for days before the first day of month
  for (let i = 0; i < calendar.startingDayOfWeek; i++) {
    calendarDays.push(null)
  }

  // Add days of the month
  for (let day = 1; day <= calendar.daysInMonth; day++) {
    calendarDays.push(day)
  }

  const getCategoryColor = (category) => {
    const colors = {
      Government: '#3b82f6',
      Community: '#10b981',
      Recreation: '#f97316'
    }
    return colors[category] || '#6b7280'
  }

  return (
    <section className="calendar-events">
      <div className="calendar-events-container">
        <div className="section-header">
          <h2 className="section-title">{getTranslation(language, 'calendar.sectionTitle')}</h2>
          <p className="section-subtitle">{getTranslation(language, 'calendar.sectionSubtitle')}</p>
        </div>

        <div className="calendar-events-grid">
          {/* Calendar */}
          <div className="calendar-panel">
            <div className="calendar-header">
              <h3 className="calendar-month">
                {monthNames[calendar.month]} {calendar.year}
              </h3>
            </div>

            <div className="calendar-grid">
              {dayNames.map(day => (
                <div key={day} className="calendar-day-name">
                  {day}
                </div>
              ))}

              {calendarDays.map((day, index) => (
                <div
                  key={index}
                  className={`calendar-day ${
                    day === null ? 'empty' : ''
                  } ${
                    day === calendar.currentDay ? 'current' : ''
                  } ${
                    day && calendar.eventDays.includes(day) ? 'has-event' : ''
                  }`}
                >
                  {day}
                  {day && calendar.eventDays.includes(day) && (
                    <span className="event-indicator"></span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Events List */}
          <div className="events-panel">
            <div className="events-header">
              <h3 className="events-title">{getTranslation(language, 'calendar.upcomingEvents')}</h3>
              <a href="#" className="view-all-events">{getTranslation(language, 'calendar.viewAll')}</a>
            </div>

            <div className="events-list">
              {events.map((event) => (
                <div key={event.id} className="event-card">
                  <div className="event-date-badge">
                    <div className="event-day">{event.day}</div>
                    <div className="event-month">{getTranslation(language, 'calendar.nov')}</div>
                  </div>

                  <div className="event-details">
                    <div className="event-header-row">
                      <h4 className="event-title">{event.title}</h4>
                      <span
                        className="event-category"
                        style={{ backgroundColor: getCategoryColor(event.category) }}
                      >
                        {getTranslation(language, `calendar.${event.category.toLowerCase()}`)}
                      </span>
                    </div>

                    <div className="event-meta">
                      <div className="event-time">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <circle cx="12" cy="12" r="10" />
                          <polyline points="12 6 12 12 16 14" />
                        </svg>
                        {event.time}
                      </div>

                      <div className="event-location">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                          <circle cx="12" cy="10" r="3" />
                        </svg>
                        {event.location}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CalendarEvents
