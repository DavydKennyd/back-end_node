const { error } = require('console')
const mysql = require('mysql2')

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Davyd0598',
    database: 'aulanodejs'
})
function connect(){
    connection.connect((error)=>{
        if(error){
            console.error('Não foi possivel conectar ao banco de dados! Erro:', error.stack)
            return
        }else{
            console.log("Banco de dados conectado com sucesso!")
        }
    })
}

function disconnect(){
    connection.end((error)=>{
        if(error){
            console.error('Erro ao se conectar', err.stack);
        }else{
            console.log('Desconectado com sucesso')
        }
    })
}

async function consultUser(){
    try{
        const [result] = await connection.promise().query('Select * from Users');
        return result;
    } catch (error){
        console.error('Erro ao consultar sua tabela', error.stack);
        throw error;
    }
}
module.exports = {connect,disconnect, consultUser};