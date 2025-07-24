# Sistema de Gerenciamento de Estudantes - CRUD

## Visão Geral

Esta é uma aplicação web moderna para gerenciamento de estudantes que oferece uma interface completa de CRUD (Create, Read, Update, Delete) para gerenciar registros de estudantes. A aplicação possui design responsivo com sistema de entrada baseado em formulários e uma tabela dinâmica para visualização de dados.

## Descrição do Projeto

O Sistema de Gerenciamento de Estudantes permite aos usuários gerenciar eficientemente informações dos estudantes, incluindo detalhes pessoais como nome, email, número de telefone e gênero. A aplicação fornece feedback em tempo real através de notificações toast e diálogos de confirmação para operações críticas como exclusão de dados.

## Principais Funcionalidades

- **Criar Estudantes**: Adicionar novos registros de estudantes através de uma interface de formulário intuitiva
- **Visualizar Estudantes**: Ver todos os estudantes em uma tabela responsiva com formatação adequada dos dados
- **Atualizar Estudantes**: Editar informações de estudantes existentes com formulários pré-preenchidos
- **Excluir Estudantes**: Remover registros de estudantes com diálogos de confirmação para segurança
- **Design Responsivo**: Otimizado para dispositivos desktop e mobile usando Tailwind CSS
- **Feedback em Tempo Real**: Notificações toast para estados de sucesso e erro
- **Validação de Dados**: Validação de formulários do lado cliente e tratamento de erros

## Stack Tecnológica

- **Framework Frontend**: Next.js 15.4.3 com React 19
- **Estilização**: Tailwind CSS para design responsivo e componentes UI modernos
- **Banco de Dados**: Supabase (PostgreSQL) para persistência de dados
- **API**: Next.js API Routes para operações backend RESTful
- **Componentes UI**: Componentes customizados com estilização Tailwind CSS
- **Notificações**: React Hot Toast para feedback do usuário
- **Diálogos de Confirmação**: SweetAlert2 para interações aprimoradas do usuário
- **TypeScript**: Segurança de tipos completa e experiência de desenvolvedor

## Arquitetura

A aplicação segue uma arquitetura full-stack moderna:

- **Frontend**: Componentes React com TypeScript para segurança de tipos
- **Backend**: Rotas de API Next.js gerenciando operações CRUD
- **Banco de Dados**: Integração com Supabase para armazenamento e recuperação de dados
- **Estilização**: CSS utility-first com Tailwind para design responsivo

---

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
