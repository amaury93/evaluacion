import { Request, Response } from "express"
import conection from "../routes/DB/conection"


export const getPersonas = (req: Request, res: Response) =>{
    
    conection.query('SELECT * FROM persona', (err, data) =>{
        if(err) throw err;
        res.json(data)
    })
    res.json({
        msg: "getPersonas"
    })

}

export const getPersona = (req: Request, res: Response) =>{
    
    const {id} = req.params;
    
    conection.query('SELECT * WHERE id = ?',id, (err, data) =>{
        if(err) throw err;
        res.json(data)
    })
}

export const deletePersona = (req: Request, res: Response) =>{
    
    const {id} = req.params;

    conection.query('DELETE FROM persona WHERE id = ?',id,(err,data)=>{
        if(err)throw err;
        res.json({
            msg: 'persona eliminada con exito'
        })
    })

}

export const postPersona = (req: Request, res: Response) =>{
    const {body} = req;
    
    conection.query('INSERT INTO persona set ?',[body],(err,data)=>{
        if(err)throw err;
        res.json({
            msg: 'persona agregada con exito'
        })
    })
   

}

export const putPersona = (req: Request, res: Response) =>{
    const {body} = req;
    const {id} = req.params
    
  conection.query('UPDATE persona set ? WHERE id = ?',[body,id], (err,data) => {
    if(err) throw err;

    res.json({
        msg: 'persona actualizada con exito'
    })
  })

}