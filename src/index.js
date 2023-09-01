const express = require('express')
const fs = require('fs');
const bodyParser = require('body-parser')
const http = require('http');
const app = express()

const PORT = 3000

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.listen(PORT, () => {
    console.log('listening on port  ' + PORT)
})

app.post('/', (req, res) => {
    console.log('Texto do arquivo: '+req.body.mensagem)
    const data = 'Texto do arquivo par teste da CONSTRUTIVO: '+req.body.mensagem

    fs.writeFile('arquivo.txt', data, (err) => {
        if (err) throw err;
      console.log('O arquivo foi criado!');
    });
 
    res.send('Local onde o arquivo esta armazenado: -> /home/caian/Documents/Projects/teste_construtivo/arquivo.txt')
})

app.get('/teste', (req, res) => {
    res.send("Server is up!")
})
