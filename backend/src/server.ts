import app from './app';
import database from './database';

database.sync({force: false});

app.listen(3000,()=>{
    console.log("Servidor online");
});