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

function alterar() {

}

function excluir() {

}

export default {
    listar,
    inserir,
    alterar,
    excluir
}