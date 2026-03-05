# 📋 Formulário de Cadastro

Olá! Esse projeto foi desenvolvido como parte de um exercício prático de React. A ideia foi criar um formulário completo e funcional, com validações reais e uma experiência agradável para quem preenche. 😊

## 💡 O que esse projeto faz?

Você acessa a página inicial, clica no botão para ir ao formulário, preenche seus dados e ao enviar é redirecionado para uma página de sucesso com seu nome. Simples, direto e funcional!

## ✨ Funcionalidades

- Validação de CPF com o algoritmo oficial dos dígitos verificadores
- Máscara automática no CEP no formato `xxxxx-xxx`
- Busca automática do endereço pelo CEP usando a API gratuita do ViaCEP
- Todos os campos validados em tempo real com mensagens de erro amigáveis
- Página de sucesso personalizada com o nome de quem se cadastrou

## 🛠️ Tecnologias utilizadas

- **React** — para construir a interface
- **TypeScript** — para deixar o código mais seguro e organizado
- **Tailwind CSS** — para estilizar tudo de forma rápida e bonita
- **Vite** — para rodar o projeto com velocidade
- **React Hook Form** — para gerenciar os campos do formulário
- **Zod** — para definir e validar as regras de cada campo
- **React Router DOM** — para navegar entre as páginas

## 📁 Estrutura de pastas
```
src/
├── pages/
│   ├── Contato/       # Formulário de cadastro
│   ├── home/          # Página inicial com boas-vindas
│   └── sucesso/       # Página de sucesso após o envio
└── schemas/
    └── formSchema.ts  # Todas as validações com Zod
```

## 🚀 Como rodar o projeto
```bash
# Instalar as dependências
npm install

# Rodar em modo desenvolvimento
npm run dev
```

Depois é só acessar `http://localhost:5173` no navegador e testar! 🎉