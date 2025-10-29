import React from 'react'

interface SectionProps {
    id?: string
    title?: string
    description?: string
    children: React.ReactNode
    className?: string
}

export const Section: React.FC<SectionProps> = ({
    id,
    title,
    description,
    children,
    className = ''
}) => {
    return (
        <section id={id} className={`section-padding ${className}`}>
            <div className="container">
                {(title || description) && (
                    <div className="text-center mb-12 md:mb-16">
                        {title && (
                            <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">
                                {title}
                            </h2>
                        )}
                        {description && (
                            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                                {description}
                            </p>
                        )}
                    </div>
                )}
                {children}
            </div>
        </section>
    )
}
