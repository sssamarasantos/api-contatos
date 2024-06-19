import db from "../utils/db";

function listar(filtro, callback) {
    //     const objFake = [
    //         {
    //         "id": 1,
    //         "nome": "Teste",
    //         "email": "email@teste.com",
    //         "telefone": "11 978788787",
    //         "organizacao": null,
    //         "tags": [
    //             "cinema",
    //             "trabalho"
    //         ]
    //     }
    // ];
    // const lista = objFake;
    // const err = null;
    //callback(err, lista);

    db.pessoaDb.find({}, callback)
}

function buscar(id, callback) {
    db.pessoaDb.find({ _id: id }, callback);
}

function inserir(pessoa, callback) {
    db.pessoaDb.insert(pessoa, callback);
}

function alterar(id, pessoa, callback) {
    db.pessoaDb.update({ _id: id }, { $set: pessoa }, {}, callback);
}

function excluir(id, callback) {
    db.pessoaDb.remove({ _id: id }, {}, callback);
}

export default {
    listar,
    buscar,
    inserir,
    alterar,
    excluir
}