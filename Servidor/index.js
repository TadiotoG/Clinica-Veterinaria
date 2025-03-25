const fs = require('fs');
const path = require('path');
const { Server } = require('socket.io');
const http = require('http');

const filePath = path.join(__dirname, 'agenda.json');

if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, JSON.stringify([]));
}

const lerCompromissos = () => {
    let compromissos = JSON.parse(fs.readFileSync(filePath));
    let atualizado = false;
    compromissos = compromissos.map(c => {
        if (!c.id) {
            c.id = Date.now() + Math.floor(Math.random() * 1000);
            atualizado = true;
        }
        return c;
    });
    if (atualizado) salvarCompromissos(compromissos);
    return compromissos;
};

const salvarCompromissos = (compromissos) => {
    fs.writeFileSync(filePath, JSON.stringify(compromissos, null, 2));
};

const server = http.createServer();
const io = new Server(server, { cors: { origin: '*' } });

io.on('connection', (socket) => {
    console.log('Novo cliente conectado');
    socket.emit('lista', lerCompromissos());

    socket.on('novo-compromisso', (compromisso) => {
        const compromissos = lerCompromissos();
        compromisso.id = Date.now() + Math.floor(Math.random() * 1000);
        compromissos.push(compromisso);
        salvarCompromissos(compromissos);
        io.emit('lista', compromissos);
    });

    socket.on('excluir-compromisso', (id) => {
        let compromissos = lerCompromissos().filter(c => c.id !== id);
        salvarCompromissos(compromissos);
        io.emit('lista', compromissos);
    });

    socket.on('alterar-compromisso', (compromissoAlterado) => {
        let compromissos = lerCompromissos().map(c => c.id === compromissoAlterado.id ? compromissoAlterado : c);
        salvarCompromissos(compromissos);
        io.emit('lista', compromissos);
    });

    socket.on('disconnect', () => console.log('Cliente desconectado'));
});

server.listen('8080', () => console.log('Servidor rodando na porta 8080'));