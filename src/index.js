const express = require('express')
const fs = require('fs');
const bodyParser = require('body-parser')
const http = require('http');
const path = require('path');
const app = express()

const PORT = 8080

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.listen(PORT, () => {
    console.log('listening on port: ' + PORT)
})

app.post('/', (req, res) => {
    console.log('Texto do arquivo: '+req.body.mensagem)
    const data = 'Texto do arquivo para teste da CONSTRUTIVO: '+req.body.mensagem

    fs.writeFile('arquivo.txt', data, (err) => {
        if (err) throw err;
      console.log('O arquivo foi criado!');
    });
    
    res.send('Link de acesso do download do arquivo construtivo: -> http://15.228.166.167:3000/download')
})

app.get('/download', (req, res) => {
    var file = __dirname + '/../arquivo.txt';
    res.download(file)
})

app.get('/teste', (req, res) => {
    res.send("Server is up!")
})
