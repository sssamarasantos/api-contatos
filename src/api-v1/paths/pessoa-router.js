import express from 'express';
import { validate } from 'jsonschema';

import pessoaModel from '../models/pessoa-model';
import { pessoaSchema } from '../models/pessoa-schemas';

const pessoaRouter = express.Router();

pessoaRouter.get('/', listarPessoas);
pessoaRouter.get('/:id', buscarPessoa)
pessoaRouter.post('/', inserirPessoa);
pessoaRouter.put('/:id', alterarPessoa);
pessoaRouter.delete('/:id', excluirPessoa);

function listarPessoas(req, res, next) {
    pessoaModel.listar({}, (err, pessoas) => {
        if (!err) {
            if (pessoas.length > 0) {
                res.json(pessoas);
            }
            else {
                res.status(204).send();
            }
        }
        else {
            res.status(400).send(err.message);
        }
    })
}

function buscarPessoa(req, res, next) {
    pessoaModel.buscar(req.params.id, (err, pessoa) => {
        if (!err) {
            console.log('log', pessoa.length);
            if (pessoa.length > 0) {
                res.json(pessoa);
            }
            else {
                res.status(204).send();
            }
        }
        else {
            res.status(400).send(err.message);
        }
    });
}

function inserirPessoa(req, res, next) {
    //Validacao
    var result = validate(req.body, pessoaSchema);

    if (result.errors.length > 0) {
        res.status(400).send("Erro no formato do json");
    }
    else {
        pessoaModel.inserir(req.body, (err, pessoa) => {
            if (!err) {
                res.status(201).json(pessoa);
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

    if (result.errors.length > 0) {
        res.status(400).send("Erro no formato do json");
    }
    else {
        pessoaModel.alterar(req.params.id, req.body, (err, result) => {
            if (!err) {
                if (result > 0) {
                    res.send("Alterado com sucesso");
                }
                else {
                    res.send("Algo deu errado");
                }
            }
            else {
                res.status(400).send(err.message);
            }
        });
    }
}

function excluirPessoa(req, res, next) {
    pessoaModel.excluir(req.params.id, (err, result) => {
        if (!err) {
            if (result > 0) {
                res.send("Excluído com sucesso");
            }
            else {
                res.send("Algo deu errado");
            }
        }
        else {
            res.status(400).send(err.message);
        }
    });
}

export default pessoaRouter;