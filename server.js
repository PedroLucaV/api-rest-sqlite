import { openDb } from './configDB';
import express from 'express';
const app = express();
const PORT = 8080 || 3030;

app.use(express.json());

app.get('/', (req, res) => {
    res.end("Hello World")
})

app.post('/pessoa', (req, res) => {
    console.log(req.body);
    res.json({
        "statusCode": 200
    })
})

app.listen(PORT, () => {
    console.log(`Server aberto na porta ${PORT}`)
})