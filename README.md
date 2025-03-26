# Agenda Clínica Veterinária Utilizando Docker

## Sobre o Projeto
Este projeto consiste em uma aplicação web para gerenciar a agenda de uma clínica veterinária. Ele permite o cadastro, listagem, edição e remoção de compromissos, utilizando WebSockets para comunicação em tempo real entre cliente e servidor.

## 🛠️ Tecnologias Utilizadas
- **Node.js**: Plataforma para execução do servidor.
- **Socket.io**: Biblioteca para comunicação em tempo real entre cliente e servidor.
- **Docker**: Para containerização da aplicação.
- **HTML, CSS, JavaScript**: Tecnologias utilizadas para a interface do usuário.

## Como Rodar a Aplicação
A aplicação é composta por dois containers Docker: um para o cliente e outro para o servidor.

### 🖥️ Servidor
**Build e execução do container**:
```sh
docker build -t servidor-agenda .
docker run -p 8080:8080 servidor-agenda
```

### 🌐 Cliente
**Build e execução do container**:
```sh
docker build -t cliente-agenda .
docker run -p 80:80 cliente-agenda
```

Depois de executar os containers, será possível acessar a página do cliente pelo seu browser, acessando http://localhost:80

## Funcionalidades
- Adicionar compromissos (dono, pet, tipo, data/hora)
- Listar compromissos em tempo real
- Editar compromissos
- Excluir compromissos

## Estrutura do Código
### Servidor (`index.js`)
- Gerencia os compromissos em um arquivo `agenda.json`.
- Utiliza WebSockets para atualização em tempo real.

### 🖥️ Cliente (`index.html` + JS)
- Conecta-se ao servidor via WebSockets.
- Atualiza automaticamente a lista de compromissos quando há mudanças.
- Permite adicionar, editar e excluir compromissos.

