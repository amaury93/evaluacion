import mysql from 'mysql';
import keys from '../keys';

const conection = mysql.createConnection(keys);


export default conection;