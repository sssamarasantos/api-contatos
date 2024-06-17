import http from 'http';
import express from 'express';
import bodyParser from 'body-parser';
import apiRouter from './api-v1/api-router';

const app = express();
const porta = 5500;

//associar json ao objeto req.body
app.use(bodyParser.json());
//associa os parametros de url e body com formato urlEncoded ao objeto req.params
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/api/v1', apiRouter);

app.use('/', (req, res) => res.send('-- API Contatos --'));

http.createServer(app)
    .listen(porta, () => console.log(`Servidor na porta ${porta}`));