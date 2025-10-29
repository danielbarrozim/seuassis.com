# Seu Assis - Site Institucional

Site institucional moderno e minimalista para a empresa "Seu Assis" - tecnologia e automações com IA.

## 🚀 Tecnologias

- **Next.js 14** com App Router
- **TypeScript**
- **Tailwind CSS** para estilização
- **Framer Motion** para animações
- **React 18**

## 📦 Instalação

1. Clone o repositório
2. Instale as dependências:

```bash
npm install
```

3. Execute o projeto em modo de desenvolvimento:

```bash
npm run dev
```

4. Abra [http://localhost:3000](http://localhost:3000) no seu navegador

## 🎨 Personalização

### Trocar a logo do "Peça Fácil"

Para trocar a logo do projeto "Peça Fácil":

1. Substitua o arquivo `public/images/peca-facil-logo.png` pela sua logo
2. Ou edite o componente `components/projects/PecaFacil.tsx` para usar uma imagem diferente

### Cores e tema

As cores principais estão definidas em `tailwind.config.js`:

- **Background**: `#F8FAFC` (cinza bem claro)
- **Texto**: `#0F172A` (azul escuro)
- **Bordas**: `#E5E7EB` (cinza claro)

### Conteúdo

O conteúdo do site está organizado em:

- **Hero**: `components/Hero.tsx`
- **Soluções**: dados em `app/page.tsx` (array `solutionsData`)
- **FAQ**: dados em `app/page.tsx` (array `faqData`)
- **Formulário**: `components/ContactForm.tsx`

## 📱 Recursos

- ✅ Design responsivo (mobile-first)
- ✅ Acessibilidade (ARIA, contraste, foco)
- ✅ SEO otimizado
- ✅ Animações suaves
- ✅ Formulário de contato funcional
- ✅ Navegação por âncoras
- ✅ Microinterações

## 🔧 Scripts

- `npm run dev` - Executa em modo de desenvolvimento
- `npm run build` - Gera build de produção
- `npm start` - Executa build de produção
- `npm run lint` - Executa linter

## 📄 Estrutura

```
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── Button.tsx
│   ├── Card.tsx
│   ├── ContactForm.tsx
│   ├── Footer.tsx
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── Input.tsx
│   ├── Section.tsx
│   ├── Textarea.tsx
│   └── projects/
│       └── PecaFacil.tsx
├── public/
│   ├── images/
│   │   └── peca-facil-logo.svg
│   └── favicon.svg
└── README.md
```

## 🌐 Deploy

O projeto está configurado para deploy em qualquer plataforma que suporte Next.js (Vercel, Netlify, etc.).

Para deploy na Vercel:

1. Conecte seu repositório
2. Configure as variáveis de ambiente se necessário
3. Deploy automático a cada push na branch principal

## 📞 Contato

- **Email**: wellington@seuassis.com
- **Instagram**: @pecafacil.online · @seuassist
# seuassis.com
