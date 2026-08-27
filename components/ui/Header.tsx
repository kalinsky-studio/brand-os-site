import { useState, useEffect } from 'react'
import { Button, Card } from './Button'

interface HeaderProps {
  onExploreClick?: () => void
}

export const Header: React.FC<HeaderProps> = ({ onExploreClick }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header 
      className={`header ${scrolled ? 'scrolled' : ''}`}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 'var(--spacing-sm) var(--spacing-md)',
        background: 'var(--background-alt)',
        borderBottom: '1px solid var(--color-muted)',
        zIndex: 1000,
        transition: 'all var(--transition-fast)',
      }}
    >
      {/* Logo / Brand */}
      <a href="/" style={{ textDecoration: 'none', color: 'var(--accent)' }}>
        <span className="h1" style={{ fontSize: '24px' }}>Brand OS</span>
      </a>

      {/* Navigation */}
      <nav style={{ display: 'flex', gap: 'var(--spacing-md)' }}>
        <a href="#works" className="caption">Works</a>
        <a href="#services" className="caption">Services</a>
        <a href="#contact" className="caption">Contact</a>
      </nav>

      {/* Mobile Menu Toggle */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          display: 'none',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          padding: 'var(--spacing-xs)',
        }}
      >
        <span className="body" style={{ 
          display: 'block', 
          width: '25px', 
          height: '3px', 
          background: 'var(--text-primary)',
          transition: 'var(--transition-fast)',
          position: 'relative',
        }}></span>
        <span className="body" style={{ 
          display: 'block', 
          width: '25px', 
          height: '3px', 
          background: 'var(--text-primary)',
          transition: 'var(--transition-fast)',
          position: 'relative',
          marginTop: 'var(--spacing-xxs)',
        }}></span>
        <span className="body" style={{ 
          display: 'block', 
          width: '25px', 
          height: '3px', 
          background: 'var(--text-primary)',
          transition: 'var(--transition-fast)',
          position: 'relative',
          marginTop: 'var(--spacing-xxs)',
        }}></span>
      </button>
    </header>
  )
}