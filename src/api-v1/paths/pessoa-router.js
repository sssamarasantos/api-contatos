import express from 'express';
import { validate } from 'jsonschema';

import pessoaModel from '../models/pessoa-model';
import { pessoaSchema } from '../models/pessoa-schemas';

const pessoaRouter = express.Router();

// pessoaRouter.use('/', (req, res, next) => res.send('API V1'));

pessoaRouter.get('/', listarPessoas);
pessoaRouter.post('/', inserirPessoa);
pessoaRouter.put('/:id', alterarPessoa);
pessoaRouter.delete('/:id', excluirPessoa);

function listarPessoas(req, res, next) {
    pessoaModel.listar({}, (err, lista) => {
        if (!err) {
            res.json(lista);
        }
        else {
            res.status(400).send(err.message);
        }
    })
}

function inserirPessoa(req, res, next) {
    //Validacao
    var result = validate(req.body, pessoaSchema);

    if (result.errors.length > 0) {
        res.status(400).send("Erro no formato do json");
    }
    else {
        pessoaModel.inserir(req.body, (err, objNovo) => {
            if (!err) {
                res.json(objNovo);
            }
            else {
                res.status(400).send(err.message);
            }
        });
    }
}

function alterarPessoa(req, res, next) {
    //Validacao
    var result = validate(req.body, pessoaSchema);
    console.log(req.body);
    if (result.errors.length > 0) {
        res.status(400).send("Erro no formato do json");
    }
    else {
        pessoaModel.alterar(req.params.id, req.body, (err, objNovo) => {
            if (!err) {
                res.json(objNovo);
            }
            else {
                res.status(400).send(err.message);
            }
        });
    }
}

function excluirPessoa(req, res, next) {

    pessoaModel.excluir(req.params.id, (err, objNovo) => {
        if (!err) {
            res.json(objNovo);
        }
        else {
            res.status(400).send(err.message);
        }
    });
}

export default pessoaRouter;