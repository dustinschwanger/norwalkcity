import React, { useState, useRef, useEffect } from 'react'
import ReactDOM from 'react-dom'
import './SearchChat.css'
import { useLanguage } from '../contexts/LanguageContext'
import { getTranslation } from '../translations'

const SearchChat = () => {
  const [isExpanded, setIsExpanded] = useState(false)
  const [messages, setMessages] = useState([])
  const [inputValue, setInputValue] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const chatContainerRef = useRef(null)
  const inputRef = useRef(null)
  const { language } = useLanguage()

  useEffect(() => {
    if (isExpanded && chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight
    }
  }, [messages, isExpanded])

  // Focus management and keyboard trap for modal
  useEffect(() => {
    if (isExpanded) {
      // Focus the input when modal opens
      setTimeout(() => {
        if (inputRef.current) {
          inputRef.current.focus()
        }
      }, 100)

      // Handle escape key to close modal
      const handleEscape = (e) => {
        if (e.key === 'Escape') {
          handleClose()
        }
      }

      document.addEventListener('keydown', handleEscape)
      return () => document.removeEventListener('keydown', handleEscape)
    }
  }, [isExpanded])

  const handleSearchClick = () => {
    setIsExpanded(true)
    setTimeout(() => {
      if (inputRef.current) {
        inputRef.current.focus()
      }
    }, 300)
  }

  const handleClose = () => {
    setIsExpanded(false)
    setMessages([])
    setInputValue('')
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!inputValue.trim()) return

    const userMessage = {
      id: Date.now(),
      type: 'user',
      text: inputValue,
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setInputValue('')
    setIsTyping(true)

    // Simulate AI response
    setTimeout(() => {
      const aiMessage = {
        id: Date.now() + 1,
        type: 'assistant',
        text: getTranslation(language, 'search.aiResponse'),
        timestamp: new Date()
      }
      setMessages(prev => [...prev, aiMessage])
      setIsTyping(false)
    }, 1200)
  }

  return (
    <>
      <div className="search-bar-container">
        <div className="search-bar" onClick={handleSearchClick} role="button" tabIndex={0} onKeyPress={(e) => e.key === 'Enter' && handleSearchClick()}>
          <span className="search-placeholder">{getTranslation(language, 'search.placeholder')}</span>
          <button className="search-button" aria-label={getTranslation(language, 'search.norwalkAssistant')}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
              <path d="M13 8H7" strokeLinecap="round" />
              <path d="M17 12H7" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </div>
      {isExpanded && ReactDOM.createPortal(
        <div className="chat-modal-overlay" onClick={handleClose} role="dialog" aria-modal="true" aria-labelledby="chat-modal-title">
          <div className="chat-modal" onClick={(e) => e.stopPropagation()}>
            <div className="chat-header">
              <div className="chat-header-content">
                <div className="chat-title-group">
                  <div className="chat-avatar">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                      <path d="M13 8H7" strokeLinecap="round" />
                      <path d="M17 12H7" strokeLinecap="round" />
                    </svg>
                  </div>
                  <div>
                    <h3 id="chat-modal-title" className="chat-title">{getTranslation(language, 'search.norwalkAssistant')}</h3>
                  </div>
                </div>
                <button className="chat-close" onClick={handleClose} aria-label="Close chat">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </button>
              </div>
            </div>

            <div className="chat-messages" ref={chatContainerRef}>
              {messages.length === 0 ? (
                <div className="chat-welcome">
                  <div className="welcome-icon">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                      <path d="M13 8H7" strokeLinecap="round" />
                      <path d="M17 12H7" strokeLinecap="round" />
                    </svg>
                  </div>
                  <h4>{getTranslation(language, 'search.welcomeTitle')}</h4>
                  <p>{getTranslation(language, 'search.welcomeSubtitle')}</p>
                  <ul className="welcome-suggestions">
                    <li>{getTranslation(language, 'search.suggestion1')}</li>
                    <li>{getTranslation(language, 'search.suggestion2')}</li>
                    <li>{getTranslation(language, 'search.suggestion3')}</li>
                    <li>{getTranslation(language, 'search.suggestion4')}</li>
                    <li>{getTranslation(language, 'search.suggestion5')}</li>
                  </ul>
                </div>
              ) : (
                <>
                  {messages.map((message) => (
                    <div key={message.id} className={`message message-${message.type}`}>
                      {message.type === 'assistant' && (
                        <div className="message-avatar">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                            <path d="M13 8H7" strokeLinecap="round" />
                            <path d="M17 12H7" strokeLinecap="round" />
                          </svg>
                        </div>
                      )}
                      <div className="message-content">
                        <p>{message.text}</p>
                      </div>
                    </div>
                  ))}
                  {isTyping && (
                    <div className="message message-assistant">
                      <div className="message-avatar">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                          <path d="M13 8H7" strokeLinecap="round" />
                          <path d="M17 12H7" strokeLinecap="round" />
                        </svg>
                      </div>
                      <div className="message-content typing-indicator">
                        <span></span>
                        <span></span>
                        <span></span>
                      </div>
                    </div>
                  )}
                </>
              )}
            </div>

            <form className="chat-input-container" onSubmit={handleSubmit}>
              <input
                ref={inputRef}
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder={getTranslation(language, 'search.askQuestion')}
                className="chat-input"
              />
              <button
                type="submit"
                className="chat-submit"
                disabled={!inputValue.trim()}
                aria-label="Send message"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="22" y1="2" x2="11" y2="13" />
                  <polygon points="22 2 15 22 11 13 2 9 22 2" />
                </svg>
              </button>
            </form>
          </div>
        </div>,
        document.body
      )}
    </>
  )
}

export default SearchChat
