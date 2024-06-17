import Datastore from 'nedb';

const pessoaDb = new Datastore();
const organizacaoDb = new Datastore();

export default {
    pessoaDb,
    organizacaoDb
}