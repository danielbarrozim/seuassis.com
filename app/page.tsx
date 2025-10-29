'use client'

import React from 'react'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Section } from '@/components/Section'
import { Card } from '@/components/Card'
import { PecaFacil } from '@/components/projects/PecaFacil'
import { ContactForm } from '@/components/ContactForm'
import { Footer } from '@/components/Footer'

// FAQ Data
const faqData = [
    {
        question: "Quanto tempo leva um projeto típico?",
        answer: "Projetos focados (MVP) costumam levar de 2 a 6 semanas, dependendo do escopo e integrações."
    },
    {
        question: "Vocês trabalham com infraestrutura do cliente?",
        answer: "Sim. Podemos usar seu provedor de nuvem, banco de dados, mensageria e IAM."
    },
    {
        question: "Como é o suporte pós-entrega?",
        answer: "Incluímos período de estabilização e planos de suporte/monitoramento conforme a necessidade."
    },
    {
        question: "Quais ferramentas vocês integram?",
        answer: "n8n, bancos SQL/NoSQL, serviços de e-mail/WhatsApp, gateways de pagamento, CRMs e APIs proprietárias."
    }
]

// Solutions Data
const solutionsData = [
    {
        title: "Automação com IA",
        description: "Modelos generativos e agentes para acelerar tarefas, validar dados e apoiar decisões."
    },
    {
        title: "Integrações com n8n",
        description: "Conectamos sistemas, APIs e bancos de dados em fluxos robustos e observáveis."
    },
    {
        title: "Dados & BI",
        description: "Coleta, transformação e painéis para acompanhar métricas-chave em tempo real."
    },
    {
        title: "Suporte & Evolução",
        description: "Monitoração, testes e melhorias contínuas para manter tudo escalável."
    }
]

export default function Home() {
    return (
        <main className="min-h-screen">
            <Header />

            <Hero />

            {/* Sobre nós */}
            <Section id="sobre" title="Sobre nós">
                <div className="max-w-4xl mx-auto text-center">
                    <p className="text-lg text-gray-600 leading-relaxed">
                        A Seu Assis é uma empresa de tecnologia especializada em automações com uso de IA. Nossos projetos são personalizados conforme as necessidades de cada negócio—do desenho do fluxo à implantação e monitoramento. Integramos ferramentas, reduzimos retrabalho e criamos experiências rápidas e precisas para sua equipe e clientes.
                    </p>
                </div>
            </Section>

            {/* Soluções */}
            <Section id="solucoes" title="Soluções">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {solutionsData.map((solution, index) => (
                        <Card key={index} className="text-center">
                            <h3 className="text-xl font-semibold text-text mb-3">
                                {solution.title}
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                {solution.description}
                            </p>
                        </Card>
                    ))}
                </div>
            </Section>

            {/* Projetos em destaque */}
            <Section id="projetos" title="Projetos em destaque">
                <div className="max-w-4xl mx-auto">
                    <div className="mb-8">
                        <h3 className="text-xl font-semibold text-text mb-4">Novo Projeto: Peça Fácil</h3>
                        <PecaFacil />
                    </div>
                </div>
            </Section>

            {/* FAQ */}
            <Section id="faq" title="FAQ">
                <div className="max-w-3xl mx-auto space-y-6">
                    {faqData.map((item, index) => (
                        <Card key={index} hover={false} className="p-6">
                            <h3 className="text-lg font-semibold text-text mb-3">
                                {item.question}
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                {item.answer}
                            </p>
                        </Card>
                    ))}
                </div>
            </Section>

            {/* Contato */}
            <Section id="contato" title="Conte sobre o seu projeto">
                <ContactForm />
            </Section>

            <Footer />
        </main>
    )
}
