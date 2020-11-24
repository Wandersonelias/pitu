import {Sequelize} from 'sequelize';

const sequelize = new Sequelize('pitu','wanderson','regina',{
    host: 'localhost',
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