/**
 * UI Components using Brand OS Design System
 * All components use CSS variables from globals.css
 */

import React from 'react'

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'link'
  size?: 'sm' | 'md' | 'lg'
  children: React.ReactNode
  onClick?: () => void
  disabled?: boolean
  fullWidth?: boolean
  className?: string
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  onClick,
  disabled = false,
  fullWidth = false,
  className = ''
}) => {
  const baseStyle: React.CSSProperties = {
    border: 'none',
    borderRadius: 'var(--radius-sm)',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.6 : 1,
    width: fullWidth ? '100%' : 'auto',
    fontFamily: 'var(--font-body)',
    transition: 'opacity 0.2s, transform 0.1s',
  }

  const variants = {
    primary: {
      backgroundColor: 'var(--color-terracotta)',
      color: 'var(--color-cream)',
      border: 'var(--color-terracotta)',
    },
    secondary: {
      backgroundColor: 'var(--color-charcoal)',
      color: 'var(--color-cream)',
      border: 'var(--color-charcoal)',
    },
    outline: {
      backgroundColor: 'transparent',
      color: 'var(--color-terracotta)',
      border: '2px solid var(--color-terracotta)',
    },
    link: {
      backgroundColor: 'transparent',
      color: 'var(--color-terracotta)',
      border: 'none',
      textDecoration: 'underline',
    }
  }

  const sizes = {
    sm: { padding: 'var(--spacing-xxs) var(--spacing-sm)', fontSize: '14px' },
    md: { padding: 'var(--spacing-xs) var(--spacing-md)', fontSize: '16px' },
    lg: { padding: 'var(--spacing-sm) var(--spacing-lg)', fontSize: '18px' },
  }

  const style = {
    ...baseStyle,
    ...variants[variant],
    ...sizes[size],
  }

  return (
    <button
      style={style}
      onClick={onClick}
      disabled={disabled}
      className={className}
    >
      {children}
    </button>
  )
}

export const Card: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className = ''
}) => {
  return (
    <div
      style={{
        backgroundColor: 'var(--color-cream)',
        border: '1px solid var(--color-muted)',
        borderRadius: 'var(--radius-md)',
        padding: 'var(--spacing-lg)',
        boxShadow: 'var(--shadow-sm)',
      }}
      className={className}
    >
      {children}
    </div>
  )
}