'use client'

import React, { useState, useEffect } from 'react'
import { Button } from './Button'

export const Header: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId)
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
        }
    }

    const navItems = [
        { label: 'Sobre nós', href: 'sobre' },
        { label: 'Soluções', href: 'solucoes' },
        { label: 'Projetos', href: 'projetos' },
        { label: 'FAQ', href: 'faq' },
        { label: 'Contato', href: 'contato' },
    ]

    return (
        <header
            className={`
        fixed top-0 left-0 right-0 z-50 transition-all duration-300
        ${isScrolled ? 'bg-background/95 backdrop-blur-sm shadow-sm' : 'bg-transparent'}
      `}
        >
            <div className="container">
                <div className="flex items-center justify-between py-4">
                    {/* Logo */}
                    <div className="flex items-center">
                        <button
                            onClick={() => scrollToSection('hero')}
                            className="text-2xl font-bold text-text hover:opacity-80 transition-opacity"
                            aria-label="Seu Assis - Voltar ao topo"
                        >
                            Seu Assis
                        </button>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-8">
                        {navItems.map((item) => (
                            <button
                                key={item.href}
                                onClick={() => scrollToSection(item.href)}
                                className="text-text hover:text-gray-600 transition-colors duration-200 font-medium"
                            >
                                {item.label}
                            </button>
                        ))}
                    </nav>

                    {/* CTA Button */}
                    <div className="hidden md:block">
                        <Button
                            onClick={() => scrollToSection('contato')}
                            variant="primary"
                        >
                            Fale com a gente
                        </Button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2 text-text hover:bg-gray-100 rounded-lg transition-colors"
                        aria-label="Abrir menu"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>
            </div>
        </header>
    )
}
