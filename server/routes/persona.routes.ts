import { Router } from "express";
import { deletePersona, getPersona, getPersonas, postPersona, putPersona } from "../controllers/persona.controler";

const router = Router();


router.get('/',getPersonas)
router.get('/:id',getPersona)
router.delete('/:id', deletePersona)
router.post('/',postPersona)
router.put('/',putPersona)

export default router;