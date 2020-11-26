import {Sequelize} from 'sequelize';

const sequelize = new Sequelize('pitu','wandersondogli','regina10',{
    host: 'mysql741.umbler.com',
    port: 41890,
    dialect: "mysql"
});

sequelize.authenticate()
.then(()=>{
    console.log("Banco de dados rodando !");
})
.catch(err =>{
    console.log("Banco de dados não conectado!");
});

export default sequelize;