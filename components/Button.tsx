import React from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary'
    children: React.ReactNode
}

export const Button: React.FC<ButtonProps> = ({
    variant = 'primary',
    children,
    className = '',
    ...props
}) => {
    const baseClasses = 'px-6 py-3 rounded-2xl font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-text focus:ring-offset-2'

    const variantClasses = {
        primary: 'bg-text text-background hover:opacity-90',
        secondary: 'border border-border text-text hover:bg-text hover:text-background'
    }

    return (
        <button
            className={`${baseClasses} ${variantClasses[variant]} ${className}`}
            {...props}
        >
            {children}
        </button>
    )
}
