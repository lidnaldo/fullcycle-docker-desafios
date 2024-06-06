const express = require('express');
const app = express();
const port = 3000;
const mysql = require('mysql');

const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'nodedb'
};

function connectWithRetry() {
    return new Promise((resolve, reject) => {
        const connection = mysql.createConnection(config);
        connection.connect((err) => {
            if (err) {
                console.error('Erro ao conectar ao banco de dados, tentando novamente em 5 segundos:', err);
                setTimeout(() => connectWithRetry().then(resolve).catch(reject), 5000);
            } else {
                console.log('Conexão estabelecida');
                resolve(connection);
            }
        });
    });
}

(async () => {
    const connection = await connectWithRetry();

    const casual = require('casual');
    let nomeAleatorio = casual.full_name;
    console.log(nomeAleatorio);
    const sql = `INSERT INTO people(name) values('${nomeAleatorio}')`;
    connection.query(sql);
    console.log('Inserido nome: ' + nomeAleatorio);

    app.get('/', (req, res) => {
        connection.query('SELECT * FROM people', (err, rows) => {
            if (err) throw err;

            let response = '<h1>Full Cycle Rocks!</h1><ul>';
            rows.forEach((row) => {
                response += `<li>ID: ${row.id}, Nome: ${row.name}</li>`;
            });
            response += '</ul>';

            res.send(response);
        });
    });

    app.listen(port, () => {
        console.log('Rodando Node na porta ' + port);

        connection.query('SELECT * FROM people', (err, rows) => {
            if (err) throw err;

            console.log('Conteúdo da tabela people:');
            rows.forEach((row) => {
                console.log(`ID: ${row.id}, Nome: ${row.name}`);
            });
        });
    });
})();
