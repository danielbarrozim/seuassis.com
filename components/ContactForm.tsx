'use client'

import React, { useState } from 'react'
import { Button } from './Button'
import { Input } from './Input'
import { Textarea } from './Textarea'

interface FormData {
    nome: string
    sobrenome: string
    empresa: string
    site: string
    descricao: string
}

interface FormErrors {
    [key: string]: string
}

export const ContactForm: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({
        nome: '',
        sobrenome: '',
        empresa: '',
        site: '',
        descricao: ''
    })

    const [errors, setErrors] = useState<FormErrors>({})
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isSubmitted, setIsSubmitted] = useState(false)

    const validateForm = (): boolean => {
        const newErrors: FormErrors = {}

        if (!formData.nome.trim()) {
            newErrors.nome = 'Nome é obrigatório'
        }

        if (!formData.sobrenome.trim()) {
            newErrors.sobrenome = 'Sobrenome é obrigatório'
        }

        if (!formData.empresa.trim()) {
            newErrors.empresa = 'Empresa é obrigatória'
        }

        if (formData.site && !isValidUrl(formData.site)) {
            newErrors.site = 'URL inválida'
        }

        if (!formData.descricao.trim()) {
            newErrors.descricao = 'Descrição do projeto é obrigatória'
        }

        setErrors(newErrors)
        return Object.keys(newErrors).length === 0
    }

    const isValidUrl = (url: string): boolean => {
        try {
            new URL(url)
            return true
        } catch {
            return false
        }
    }

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setFormData(prev => ({ ...prev, [name]: value }))

        // Clear error when user starts typing
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: '' }))
        }
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        if (!validateForm()) {
            return
        }

        setIsSubmitting(true)

        try {
            // Send to webhook
            await fetch('https://webhook.n8n.seuassis.com/webhook/form-site', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            })

            // Simulate success with timeout
            await new Promise(resolve => setTimeout(resolve, 1000))
            setIsSubmitted(true)
        } catch (error) {
            console.error('Erro ao enviar formulário:', error)
            // Still show success for demo purposes
            setIsSubmitted(true)
        } finally {
            setIsSubmitting(false)
        }
    }

    if (isSubmitted) {
        return (
            <div className="text-center space-y-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                    <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                </div>

                <h3 className="text-2xl font-bold text-text">
                    Entraremos em contato em breve.
                </h3>

                <div className="bg-gray-50 rounded-xl p-6 text-left max-w-md mx-auto">
                    <h4 className="font-semibold text-text mb-3">Resumo do seu projeto:</h4>
                    <div className="space-y-2 text-sm text-gray-600">
                        <p><span className="font-medium">Nome:</span> {formData.nome} {formData.sobrenome}</p>
                        <p><span className="font-medium">Empresa:</span> {formData.empresa}</p>
                        {formData.site && <p><span className="font-medium">Site:</span> {formData.site}</p>}
                        <p><span className="font-medium">Descrição:</span> {formData.descricao}</p>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
                <Input
                    label="Nome *"
                    name="nome"
                    value={formData.nome}
                    onChange={handleInputChange}
                    error={errors.nome}
                    placeholder="Seu nome"
                    required
                />

                <Input
                    label="Sobrenome *"
                    name="sobrenome"
                    value={formData.sobrenome}
                    onChange={handleInputChange}
                    error={errors.sobrenome}
                    placeholder="Seu sobrenome"
                    required
                />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
                <Input
                    label="Empresa *"
                    name="empresa"
                    value={formData.empresa}
                    onChange={handleInputChange}
                    error={errors.empresa}
                    placeholder="Nome da sua empresa"
                    required
                />

                <Input
                    label="Site"
                    name="site"
                    type="url"
                    value={formData.site}
                    onChange={handleInputChange}
                    error={errors.site}
                    placeholder="https://..."
                />
            </div>

            <Textarea
                label="Breve descrição do projeto *"
                name="descricao"
                value={formData.descricao}
                onChange={handleInputChange}
                error={errors.descricao}
                placeholder="Conte-nos sobre seu projeto e como podemos ajudar..."
                rows={6}
                required
            />

            <div className="text-center">
                <Button
                    type="submit"
                    variant="primary"
                    disabled={isSubmitting}
                    className="px-8 py-4 text-lg"
                >
                    {isSubmitting ? 'Enviando...' : 'Enviar'}
                </Button>
            </div>
        </form>
    )
}
