import mysql from 'mysql2'
import { app } from './app';
import  dotenv from 'dotenv';

dotenv.config();

const PORT = 3000;
const HOST = 'localhost';
const USER = 'root';
const PASSWORD = 'Takkupulto22@';
const DATABASE = 'company_workers';

export default mysql.createConnection({
host: HOST,
user: USER,
password: PASSWORD,
database: DATABASE,
});

app.listen(process.env.PORT||3000,function(){
console.log("app is listening on port "+(process.env.PORT||3000));
})

