const express = require('express')
const app = express()
const port = 3000
const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database:'nodedb'
};
const mysql = require('mysql')
const connection = mysql.createConnection(config)
console.log('Conexao estabelecida')

const casual = require('casual');
let nomeAleatorio = casual.full_name;
console.log(nomeAleatorio);
const sql = `INSERT INTO people(name) values('${nomeAleatorio}')`
connection.query(sql)
console.log('Inserido nome: ' + nomeAleatorio)
connection.end()


app.get('/', (req,res) => {
    const connection = mysql.createConnection(config)
    connection.query('SELECT * FROM people', (err, rows) => {
        if(err) throw err;

        let response = '<h1>Full Cycle Rocks!</h1><ul>';
        rows.forEach((row) => {
            response += `<li>ID: ${row.id}, Nome: ${row.name}</li>`;
        });
        response += '</ul>';

        res.send(response);
        connection.end();
    });   
})

app.listen(port, () => {
    console.log('Rodando Node na porta ' + port)
    
    const connection = mysql.createConnection(config)
    connection.query('SELECT * FROM people', (err, rows) => {
        if(err) throw err;

        console.log('Conteúdo da tabela people:');
        rows.forEach((row) => {
            console.log(`ID: ${row.id}, Nome: ${row.name}`);
        });

        connection.end();
    });
})
