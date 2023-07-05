import express from 'express';
import routesPersonas from '../routes/persona.routes'
import conection from '../routes/DB/conection';
import cors from 'cors';

class Server{
    private app: express.Application;
    private port: string;

    constructor(){
        this.app = express();
        this.port = process.env.PORT ||  '4200'
        this.middlewares();
        this.routes();
        this.conectarDB();

    }

    listen(){
        this.app.listen(this.port, () => {
            console.log('Aplicacion corriendo por el puerto', this.port);
        })
    }

    middlewares(){
        this.app.use(express.json());
        //cors
    this.app.use(cors);
    }
    

    routes(){
        this.app.use('/api/personas',routesPersonas)
    }

    conectarDB(){
        conection.connect((err) =>{
            if(err) throw err;
            console.log('conectando a base de datos')
        })
}


}

export default Server;