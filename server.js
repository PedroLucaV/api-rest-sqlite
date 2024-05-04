import { createTable, insert, update, select } from './Controler/pessoa.js' // import config of SQLite

//MVC -> Padrão de desenvolvimento
// Sessions ou JWT ->  controle de usuário
import express from 'express'; //Import express
const app = express(); //apply express to an variable
const PORT = 8080 //Port of server

createTable(); //Create the SQLite table if don't exist
app.use(express.urlencoded({ extended: true }))// Valida forms e instruções 404
app.use(express.json()); //Use json from express

app.get('/', (req, res) => {
    res.end("Primeiro end point, não há nada aqui!") //First end point, only an return of a phrase
});

app.post('/pessoa', (req, res) => { //endpoint to create a new people on table in SQLite
    // const { id, nome, idade } = req.body
    // if (!nome || !idade) { //validate if has name and age
    //     res.json({
    //         "statusCode": 400,
    //         "message": "Está faltando dados para a criação do usuário"
    //     })
    //     return
    // }

    // consultar se a pessoa já existe no banco de dados

    //constroi um ob
    // const pessoa ={
    //     id: id,
    //     nome:nome,
    //     idade: idade
    // }

    console.log(req.body);
    insert(pessoas)
    insert(req.body) //use the body data from the api and insert in db
    res.json({
        "statusCode": 201,
        "message": "Usuario criado com sucesso!" //return in json
    })
});

app.put('/pessoa', (req, res) => {
    if (req.body && !req.body.id) { //Check if the body contain the id
        res.json({
            "statusCode": 400,
            "message": "Você precisa informar o ID"
        });
    }
    else {
        console.log(req.body);
        update(req.body) //update the dataBase based in body
        res.json({
            "statusCode": 200,
            "message": "Usuario criado com sucesso!" //return in json
        })
    }
});

app.get('/pessoas', async (req, res) => {
    let pessoas = await select(); //in an async function await the Select function from pessoa.js works to use
    res.json(pessoas) //return in json
});

app.listen(PORT, () => {
    console.log(`Server aberto na porta ${PORT}`)
})