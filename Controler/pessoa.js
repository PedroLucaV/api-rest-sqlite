import { openDb } from '../configDB.js';

const createTable = () => {
    openDb().then(db => {
        db.exec('CREATE TABLE IF NOT EXIST Pessoa ( id INTEGER PRIMARY KEY, nome TEXT, idade INTEGER )')
    })
}

export default createTable;