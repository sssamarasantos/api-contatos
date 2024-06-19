import db from "../utils/db";

function listar(params, callback) {
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

function inserir(obj, callback) {
    db.pessoaDb.insert(obj, callback);
}

function alterar(id, obj, callback) {
    db.pessoaDb.update({ _id: id }, { $set: obj }, {}, callback);
}

function excluir(id, callback) {
    db.pessoaDb.remove({ _id: id }, {}, callback);
}

export default {
    listar,
    inserir,
    alterar,
    excluir
}