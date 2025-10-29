import React from 'react'
import Image from 'next/image'
import { Card } from '../Card'

export const PecaFacil: React.FC = () => {
    return (
        <Card className="p-8 md:p-10">
            <div className="flex flex-col md:flex-row items-start gap-6 md:gap-8">
                {/* Logo */}
                <div className="flex-shrink-0">
                    <div className="w-24 h-24 md:w-32 md:h-32 bg-gray-50 border border-border rounded-xl flex items-center justify-center p-4">
                        <Image
                            src="/images/peca-facil-logo.png"
                            alt="Logo do projeto Peça Fácil"
                            width={120}
                            height={120}
                            className="max-w-full max-h-full object-contain"
                        />
                    </div>
                </div>

                {/* Content */}
                <div className="flex-1 space-y-4">
                    <div>
                        <h3 className="text-2xl md:text-3xl font-bold text-text mb-2">
                            Peça Fácil
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                            Plataforma que facilita a compra e venda de autopeças. Consulte o item e obtenha a resposta em segundos. Aumente suas vendas com informação rápida e precisa.
                        </p>
                    </div>

                    {/* Tech Stack */}
                    <div className="inline-flex items-center px-4 py-2 bg-gray-100 rounded-lg text-sm text-gray-700">
                        <span className="font-medium">Stack principal:</span>
                        <span className="ml-2">n8n + integrações sob medida</span>
                    </div>
                </div>
            </div>
        </Card>
    )
}
