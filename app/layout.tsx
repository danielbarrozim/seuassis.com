import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Seu Assis - Automação sob medida com IA',
    description: 'Na Seu Assis, projetamos fluxos inteligentes que integram pessoas, dados e sistemas para acelerar resultados.',
    keywords: 'automação, IA, inteligência artificial, n8n, integração, tecnologia',
    authors: [{ name: 'Seu Assis' }],
    openGraph: {
        title: 'Seu Assis - Automação sob medida com IA',
        description: 'Na Seu Assis, projetamos fluxos inteligentes que integram pessoas, dados e sistemas para acelerar resultados.',
        type: 'website',
        locale: 'pt_BR',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Seu Assis - Automação sob medida com IA',
        description: 'Na Seu Assis, projetamos fluxos inteligentes que integram pessoas, dados e sistemas para acelerar resultados.',
    },
    robots: {
        index: true,
        follow: true,
    },
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="pt-BR">
            <head>
                <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
                <link rel="apple-touch-icon" href="/favicon.svg" />
            </head>
            <body className={inter.className}>
                {children}
            </body>
        </html>
    )
}
