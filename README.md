# TODO_NEXTJS 📋

Aplicação web para gerenciamento de tarefas (ToDo list) construída com Next.js, React, Prisma e Tailwind CSS.

## Tecnologias utilizadas

- **Next.js** 15.3.5 — framework React com SSR e recursos avançados
- **React** 19 — biblioteca de UI
- **Prisma** 6.11.1 — ORM para acesso ao banco de dados
- **Tailwind CSS** 4 — framework utilitário para estilização rápida
- **ESLint** — linting e qualidade de código

## Funcionalidades

- Criar, editar e listar tarefas
- Persistência via banco de dados acessado com Prisma
- Interface responsiva com Tailwind CSS
- Desenvolvimento local com hot-reload via `next dev`

## Pré-requisitos

- Node.js (recomendo versão 18+)
- Banco de dados configurado para Prisma (exemplo: SQLite, PostgreSQL, MySQL)

## Como rodar o projeto localmente

1. Clone o repositório:
   ```bash
   git clone https://github.com/oliveiradeflavio/TODO_NEXTJS.git
   cd TODO_NEXTJS
   ```

2. Instale as dependências:
   ```bash
   npm install
   # ou
   yarn install
   ```

3. Configure seu banco de dados para o Prisma:
   - Crie um arquivo `.env` na raiz com a variável de ambiente `DATABASE_URL`, apontando para seu banco, por exemplo:
     ```
     DATABASE_URL="file:./dev.db"
     ```
     (Para SQLite local, ou o connection string do seu banco)

4. Rode as migrações do Prisma para criar as tabelas:
   ```bash
   npx prisma migrate dev --name init
   ```

5. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   # ou
   yarn dev
   ```

6. Acesse a aplicação em [http://localhost:3000](http://localhost:3000)

## Scripts úteis

- `dev` — roda Next.js no modo desenvolvimento com Turbopack
- `build` — gera build para produção
- `start` — inicia servidor Next.js em produção
- `lint` — verifica qualidade e erros no código

## Estrutura do projeto

```
/
├─ prisma/           # arquivos de schema e migração do Prisma
├─ pages/            # páginas Next.js (rotas)
├─ components/       # componentes React reutilizáveis
├─ styles/           # estilos globais e Tailwind CSS
├─ public/           # arquivos estáticos (imagens, fontes)
├─ .env              # variáveis de ambiente (não versionar)
├─ package.json
└─ ...
```

## Melhorias futuras (ideias)

- Implementar autenticação de usuário
- Adicionar filtro e ordenação das tarefas
- Notificações e lembretes
- Implantar testes automatizados
- Deploy automático (Vercel, Netlify, etc)

## Licença

Este projeto está sob a licença MIT.

---

Desenvolvido por [oliveiradeflavio](https://github.com/oliveiradeflavio)  
