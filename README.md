# NLW Agents 🚀

Projeto desenvolvido por **Henrique Vazquez** durante o evento da Rocketseat.

## 📝 Descrição

API para gerenciamento de salas (rooms), perguntas e upload de áudios, utilizando Fastify, Drizzle ORM e PostgreSQL. Utiliza o Gemini para transcrever áudios, gerar embeddings e responder perguntas de acordo com o contexto.

## 🛠️ Tecnologias e Bibliotecas Principais

- ⚡ **Node.js** + **TypeScript**
- 🚀 **Fastify**: Framework web para Node.js
- 🌐 **@fastify/cors**: Middleware CORS para Fastify
- 🎤 **@fastify/multipart**: Upload de arquivos (áudio)
- 🗄️ **drizzle-orm**: ORM para integração com banco de dados PostgreSQL
- 🐘 **postgres**: Cliente PostgreSQL para Node.js
- 🛡️ **zod**: Validação de esquemas e variáveis de ambiente
- 🔗 **fastify-type-provider-zod**: Integração de validação Zod com Fastify
- 🧰 **drizzle-kit**: Ferramentas de migrations e seed para Drizzle ORM
- 🤖 **@google/genai**: Integração com IA generativa (Google Gemini)

## 📐 Padrões de Projeto

- **Organização em camadas**: Separação entre rotas HTTP (`src/http/routes`), serviços de negócio (`src/services`), lógica de banco de dados (`src/db`), e configuração de ambiente (`src/env.ts`).
- **Validação de dados**: Uso de Zod para validação de variáveis de ambiente e schemas.
- **Migrations e Seeds**: Scripts SQL e seed automatizados via Drizzle ORM.
- **Serviços**: Lógica de negócio centralizada em arquivos de serviço.
- **Upload de arquivos**: Implementado via Fastify Multipart.

## ⚙️ Setup e Configuração

1. **Clone o repositório e instale as dependências:**
   ```bash
   npm install
   ```

2. **Configure as variáveis de ambiente:**
   - Crie um arquivo `.env` na raiz do projeto com:
     ```
     PORT=3333
     DATABASE_URL=postgres://usuario:senha@localhost:5432/nome_do_banco
     ```

3. **Execute as migrations:**
   ```bash
   npm run db:migrate
   ```

4. **(Opcional) Gere os arquivos de schema do Drizzle:**
   ```bash
   npm run db:generate
   ```

5. **(Opcional) Execute o seed do banco de dados:**
   ```bash
   npm run db:seed
   ```

6. **(Opcional) Visualize o banco de dados com Drizzle Studio:**
   ```bash
   npm run db:viewdb
   ```

7. **Inicie o servidor em modo desenvolvimento:**
   ```bash
   npm run dev
   ```

8. **Acesse a rota de health check:**
   - `GET http://localhost:3333/health` → deve retornar `ok`

## 🏃 Scripts principais

- `npm run dev` — Inicia o servidor em modo desenvolvimento
- `npm run start` — Inicia o servidor em modo produção
- `npm run db:migrate` — Executa as migrations do banco de dados
- `npm run db:generate` — Gera os arquivos de schema do Drizzle
- `npm run db:seed` — Executa o seed do banco de dados
- `npm run db:viewdb` — Abre o Drizzle Studio para visualizar o banco

---

Feito com carinho por Henrique Vazquez 💜✨ 