# CineApp

Catálogo de filmes e séries construído em React, consumindo a API pública do **TMDB (The Movie Database)**. Projeto acadêmico desenvolvido no curso de Engenharia de Software da FIAP (mai/2024).

## Funcionalidades

- **Catálogo de filmes populares e séries mais bem avaliadas**, consumidos em tempo real da API do TMDB, com pôsteres e imagens de fundo.
- **Página de detalhe** de cada título, acessada por rota dinâmica (`/filmes/:id`).
- **Login com Google** via OAuth 2.0, com decodificação do token JWT para exibir os dados do usuário e botão de logout.
- **Tema claro/escuro**, com detecção automática da preferência do sistema (`prefers-color-scheme`) e alternância manual.
- **Seção de artigos** sobre novidades do cinema, carregada de `articles.json`.
- **Páginas institucionais** — Sobre e Contato — e tratamento de rota inexistente (404).
- Interface responsiva.

## Tecnologias

- **React** com **Vite**
- **React Router** (`createBrowserRouter`) para roteamento, incluindo rotas aninhadas e dinâmicas
- **Tailwind CSS** e **Material Tailwind** para estilização
- **@react-oauth/google** e **jwt-decode** para autenticação
- **Heroicons** e **React Icons**
- **Axios** para requisições HTTP
- **API TMDB** como fonte de dados

## Rotas

| Rota | Página |
|---|---|
| `/` | Home |
| `/filmes` | Lista de filmes e séries |
| `/filmes/:id` | Detalhe do título |
| `/series` | Séries em destaque |
| `/filmesvir` | Próximos lançamentos |
| `/sobre` | Sobre o projeto |
| `/contato` | Contato |
| `*` | Página não encontrada (404) |

## Estrutura do projeto

```
src/
├── main.jsx                # rotas e provider do Google OAuth
├── App.jsx                 # layout base
├── components/
│   ├── Movie/ Movies/      # exibição dos títulos
│   ├── Article/ ArticleList/
│   ├── Header/ NavBar/
│   ├── Form/ Input/
│   ├── ToggleTheme/        # alternância de tema claro/escuro
│   └── LogoutButton.jsx
└── pages/                  # Home, MovieList, Series, Filmesvir, Sobre, Contato, 404
```

## Como rodar

Requer Node.js 18 ou superior.

```bash
npm install
npm run dev
```

A aplicação sobe em `http://localhost:5173`.

```bash
npm run build     # gera a versão de produção
npm run preview   # serve o build localmente
```

### Configuração da API

O projeto consome a API do TMDB, que exige uma chave de acesso. Crie um arquivo `.env` na raiz com:

```
VITE_TMDB_API_KEY=sua_chave_aqui
```

A chave pode ser gerada gratuitamente em [themoviedb.org](https://www.themoviedb.org/settings/api).

## Equipe

| Nome | RM |
|---|---|
| Enzo Teles | 553899 |
| Matheus Zottis | 94119 |
| Gabriel Borba | 553187 |
| Nicolas Lemos | 553273 |
