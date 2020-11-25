import app from './app';
import database from './database';

database.sync({force: false});

app.listen(3001,()=>{
    console.log("Servidor online");
});