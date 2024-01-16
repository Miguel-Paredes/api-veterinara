import { validacionVeterinario } from './validacionVeterinario.js';
router.post('/registro',validacionVeterinario,registro)