import React from 'react'

interface CardProps {
    children: React.ReactNode
    className?: string
    hover?: boolean
}

export const Card: React.FC<CardProps> = ({
    children,
    className = '',
    hover = true
}) => {
    return (
        <div
            className={`
        bg-background border border-border rounded-2xl p-6 transition-all duration-200
        ${hover ? 'hover:shadow-lg hover:-translate-y-1' : ''}
        ${className}
      `}
        >
            {children}
        </div>
    )
}
