# Front - Sistema de Estoque de Peças

Este é um projeto frontend para um sistema de cadastro de peças automotivas, incluindo funcionalidades como tela de login, listagem e adição de novas peças.

## Tecnologias Utilizadas

- **ReactJS** - Biblioteca para construção da interface do usuário.
- **TypeScript** - Superset do JavaScript que adiciona tipagem estática.
- **TailwindCSS** - Framework CSS para estilização rápida e responsiva.
- **Node.js** - Ambiente de execução.
- **axios** - Para requisições ao backend.
- [Backend do projeto](https://github.com/T-Terra/Backend-estoque)

## Funcionalidades

- **Autenticação** - Tela de login para acesso seguro.
- **Listagem de Peças** - Visualização das peças cadastradas.
- **Cadastro de Peças** - Adição de novas peças ao sistema.

## Como Rodar o Projeto

### Pré-requisitos

Certifique-se de ter instalado:
- [Node.js](https://nodejs.org/) **v20.17.0**
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)

### Instalação e Execução

1. Clone o repositório:
   ```sh
   git clone https://github.com/T-Terra/Frontend-estoque.git
   cd Frontend-estoque cd frontend
   ```
2. Instale as dependências:
   ```sh
   npm install
   # ou
   yarn install
   ```
3. Inicie o projeto:
   ```sh
   npm run dev
   # ou
   yarn dev
   ```
4. O frontend estará disponível em `http://localhost:5173` (caso utilize Vite).

## Estrutura do Projeto

```
frontend/
│── src/
│   ├── components/  # Componentes reutilizáveis
│   ├── pages/       # Páginas principais
│   ├── contexts/    # Contextos globais
│   ├── hooks/       # Hooks personalizados
│   ├── assets/      # Arquivos estáticos
│   ├── interfaces/  # Interfaces com a tipagem
|   ├── routes/      # Rotas do app
│   └── main.tsx     # Ponto de entrada do projeto
│── public/          # Arquivos estáticos
│── package.json     # Configuração do projeto
│── tsconfig.json    # Configuração do TypeScript
│── README.md        # Documentação
```

## API

O backend deste projeto foi desenvolvido em Django (Python) e disponibiliza endpoints para autenticação e gerenciamento das peças. Certifique-se de configurar corretamente a URL da API no frontend para consumir os serviços corretamente.

## Aplicação

Você pode acessar a aplicação pelo link abaixo e caso tenha interesse em testar a aplicação abra uma Issue no Github para solicitar o acesso.

- [EstoqueApp](https://frontend-estoque-delta.vercel.app/)


## Licença

Este projeto está sob a [MIT License](LICENSE).

