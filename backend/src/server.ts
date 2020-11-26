import { isTupleTypeNode } from 'typescript';
import app from './app';
import database from './database';

database.sync({force: true});

app.listen(3001,()=>{
    console.log("Servidor online");
});