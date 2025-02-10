# Desafio Técnico - Desenvolvedor Front-End Pleno (Angular)
## Introdução
Este desafio tem como objetivo avaliar suas habilidades com Angular e
desenvolvimento de interfaces responsivas. Você deverá implementar um sistema para
gerenciamento de eventos, incluindo funcionalidades de listagem, visualização em
detalhes, e um sistema de login simples.
---
## Requisitos do Projeto
### Funcionalidades Obrigatórias
1. **Tela de Listagem de Eventos**
- Implementar duas visualizações:
- **Cards**: Exibição em formato de blocos com imagem, título, descrição
  curta, status (ativo/inativo) e data/hora de publicação.
- **Tabela**: Exibição em formato tabular com as mesmas informações.
- Botões de edição e exclusão para cada evento.
- Campo de busca para filtrar eventos pelo título.
2. **Página de Detalhes do Evento**
- Exibir informações completas de um evento selecionado, incluindo a descrição
  completa e imagem.
- Permitir edição dos dados do evento.
3. **Autenticação**
- Tela de login simples para autenticação.
- Simular o login utilizando armazenamento local (ex.: `localStorage`) ou uma
  API fake.
4. **Responsividade**
- Garantir que a interface seja responsiva e funcione bem em dispositivos
  móveis.
5. **API Fake**
- Utilizar `JSON Server, mocks locais, ou qualquer API Desejada para simular uma
  API com os seguintes endpoints:
---
## Tecnologias e Ferramentas Recomendadas
- **Framework**: Angular
- **Estilização**: Livre escolha do candidato
- **Gerenciamento de Estado**: Signals ou serviços Angular.
- **API Fake**: JSON Server ou mocks locais.
---
## Critérios de Avaliação
- **Usabilidade e Interface**:
- Interfaces intuitivas e organizadas.
- Boa responsividade para dispositivos móveis.
- **Organização do Código**:
- Boas práticas no uso de Angular.
- Componentização.
- Estrutura modular do projeto.
- **Funcionalidades Completas**:
- Implementação de todos os requisitos funcionais.
- Alternância de visualização (cards e tabela).
- Página de detalhes do evento.
- Tela de login.
- **Validação e Testes**:
- Uso de validações adequadas nos formulários.
- Teste das funcionalidades implementadas.
---
## Instruções para Entrega (Exemplo)
1. **Clone do Repositório**
   Clone este repositório para iniciar o desenvolvimento:
 ```bash
 git clone https://github.com/FernandoNv/inchurch
 cd inchurch
 ```
2. **Instalação de Dependências**
   Instale as dependências necessárias do projeto:
 ```bash
 npm install
 ```
3. **Iniciar a API Fake**
   Utilize o JSON Server para simular a API.
 ```bash
  cd backend
  npm install
  npm run server
 ```
O servidor rodará em `http://localhost:3000`.
4. **Executar a Aplicação**
   Inicie a aplicação Angular:
 ```bash
 cd ../
 npm run start
 ```
Acesse a aplicação em `http://localhost:4200`.
5. **Teste de Responsividade**
   Verifique o comportamento responsivo da aplicação em dispositivos móveis.
---
## Instruções Finais
- Submeta o link do repositório GitHub/Bitbucket, com o código e instruções para
  execução no arquivo `README.md`.
- Se possível, inclua capturas de tela ou um GIF com a aplicação em execução
