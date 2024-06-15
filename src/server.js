import http from 'http';
import express from 'express';

const app = express();
const porta = 5500;

app.all('/', (req, res, next) => res.send('Tudo funcionando'));

http.createServer(app)
    .listen(porta, () => console.log(`Servidor na porta ${porta}`));