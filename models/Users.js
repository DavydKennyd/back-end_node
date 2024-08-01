const { permission } = require("process");

const User = Mysql.model('User',{
    name: String,
    cpf: String,
    age: Number,
    cellphone: String,
    permission: Number,
    Login:String,
    password: String
})

mysql.connect()