'use client'

import React from 'react'
import { Button } from './Button'

export const Hero: React.FC = () => {
    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId)
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
        }
    }

    return (
        <section id="hero" className="min-h-screen flex items-center bg-background pt-20">
            <div className="container">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Content */}
                    <div className="space-y-8">
                        <div className="space-y-6">
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text leading-tight">
                                Automação sob medida com IA
                            </h1>
                            <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl">
                                Na Seu Assis, projetamos fluxos inteligentes que integram pessoas, dados e sistemas para acelerar resultados.
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <Button
                                onClick={() => scrollToSection('solucoes')}
                                variant="primary"
                                className="text-lg px-8 py-4"
                            >
                                Ver soluções
                            </Button>
                            <Button
                                onClick={() => scrollToSection('contato')}
                                variant="secondary"
                                className="text-lg px-8 py-4"
                            >
                                Fale com a gente
                            </Button>
                        </div>
                    </div>

                    {/* Illustration */}
                    <div className="flex justify-center lg:justify-end">
                        <div className="w-full max-w-md">
                            <svg
                                viewBox="0 0 400 300"
                                className="w-full h-auto"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                {/* Background circles */}
                                <circle cx="200" cy="150" r="120" fill="#F1F5F9" opacity="0.5" />
                                <circle cx="200" cy="150" r="80" fill="#E2E8F0" opacity="0.7" />

                                {/* Main nodes */}
                                <circle cx="120" cy="100" r="12" fill="#0F172A" />
                                <circle cx="280" cy="100" r="12" fill="#0F172A" />
                                <circle cx="200" cy="150" r="12" fill="#0F172A" />
                                <circle cx="120" cy="200" r="12" fill="#0F172A" />
                                <circle cx="280" cy="200" r="12" fill="#0F172A" />

                                {/* Connection lines */}
                                <path
                                    d="M120 100 L200 150 L280 100"
                                    stroke="#0F172A"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    opacity="0.6"
                                />
                                <path
                                    d="M120 100 L200 150 L120 200"
                                    stroke="#0F172A"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    opacity="0.6"
                                />
                                <path
                                    d="M280 100 L200 150 L280 200"
                                    stroke="#0F172A"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    opacity="0.6"
                                />
                                <path
                                    d="M120 200 L200 150 L280 200"
                                    stroke="#0F172A"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    opacity="0.6"
                                />

                                {/* Small connecting nodes */}
                                <circle cx="160" cy="125" r="6" fill="#64748B" />
                                <circle cx="240" cy="125" r="6" fill="#64748B" />
                                <circle cx="160" cy="175" r="6" fill="#64748B" />
                                <circle cx="240" cy="175" r="6" fill="#64748B" />

                                {/* Data flow indicators */}
                                <circle cx="80" cy="80" r="4" fill="#3B82F6" opacity="0.8">
                                    <animate attributeName="opacity" values="0.8;0.3;0.8" dur="2s" repeatCount="indefinite" />
                                </circle>
                                <circle cx="320" cy="80" r="4" fill="#10B981" opacity="0.8">
                                    <animate attributeName="opacity" values="0.8;0.3;0.8" dur="2.5s" repeatCount="indefinite" />
                                </circle>
                                <circle cx="80" cy="220" r="4" fill="#F59E0B" opacity="0.8">
                                    <animate attributeName="opacity" values="0.8;0.3;0.8" dur="3s" repeatCount="indefinite" />
                                </circle>
                                <circle cx="320" cy="220" r="4" fill="#EF4444" opacity="0.8">
                                    <animate attributeName="opacity" values="0.8;0.3;0.8" dur="2.2s" repeatCount="indefinite" />
                                </circle>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
