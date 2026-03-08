# Escola API - Full Stack Project

Este projeto é uma aplicação completa para gerenciamento de alunos, desenvolvida durante meus estudos de tecnologias modernas de web e mobile. A aplicação permite o cadastro de alunos, controle de fotos e autenticação segura.

## Tecnologias Utilizadas

### Backend (Node.js)

- **Express**: Framework web.
- **Sequelize**: ORM para manipulação do banco de dados.
- **PostgreSQL / MariaDB**: Banco de dados relacional (configurável via dialeto).
- **JWT (JSON Web Token)**: Autenticação e segurança de rotas.
- **Multer**: Middleware para upload de arquivos/fotos.

### Frontend (React)

- **React Hooks**: `useState`, `useEffect`, `useParams`, `useNavigate`.
- **Redux & Redux Saga**: Gerenciamento de estado global e requisições assíncronas.
- **Styled Components**: Estilização baseada em componentes.
- **Axios**: Cliente HTTP para consumo da API.

---

## Como rodar o projeto localmente

### 1. Clonar o repositório

```bash
git clone [https://github.com/RavelRodrigues/escola-api.git](https://github.com/RavelRodrigues/escola-api.git)

```

### 2. Configurar o Backend

Acesse a pasta da API e instale as dependências:

```bash
cd api-rest
npm install

```

Crie um arquivo `.env` na raiz do backend seguindo o modelo:

```env
DATABASE_HOST=127.0.0.1
DATABASE_PORT=5432
DATABASE_USERNAME=postgres
DATABASE_PASSWORD=sua_senha_do_bd
DATABASE=escola

TOKEN_SECRET=token_secreto
TOKEN_EXPIRATION=7d

APP_URL=http://localhost:3001
APP_PORT=3001

```

Inicie o servidor:

```bash
npm run dev

```

### 3. Configurar o Frontend

Acesse a pasta do projeto React:

```bash
cd frontend
npm install

```

No arquivo `src/services/axios.js`, certifique-se de que a `baseURL` aponta para `http://localhost:3001`.

Inicie a aplicação:

```bash
npm start

```

---

## Funcionalidades

- Login e Registro de usuários com Redux.
- Listagem, edição e exclusão de alunos.
- Upload de fotos de perfil integrando Frontend e Backend.
- Validações de formulário com Toastify para feedback visual.

## Autor

**Ravel Rodrigues Pereira**

- [GitHub](https://github.com/RavelRodrigues)
