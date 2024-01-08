// Importar Router de Express
import {Router} from 'express'

// Crear una instancia de Router()
const router = Router()

// Definir las rutas
    // Ruta para el login
    router.post('/login',(req,res)=>res.send("login"))
    
    // Ruta para el registro
    router.post('/registro',(req,res)=>res.send("registro"))
    
    // Ruta para el confirmar el token
    router.get('/confirmar/:token',(req,res)=>res.send("confirmar email"))
    
    // Ruta para listar veterinarios
    router.get('/veterinarios',(req,res)=>res.send("lista de veterinarios"))
    
    // Ruta para recuperar el password
    router.get('/recuperar-password',(req,res)=>res.send("enviar mail"))
    
    // Ruta para recuperar el password con el token
    router.get('/recuperar-password/:token',(req,res)=>res.send("verificar token"))
    
    // Ruta para generar el nuevo password
    router.post('/nuevo-password/:token',(req,res)=>res.send("crear password"))
    
    // Ruta para mostrar el perfil del usuario
    router.get('/perfil',(req,res)=>res.send("perfil"))
    
    // Ruta para generar actualizar el password
    router.put('/veterinario/actualizarpassword',(req,res)=>res.send("actualizar password"))
    
    // Ruta para mostrar el detalle de un veterinario en particular
    router.get('/veterinario/:id',(req,res)=>res.send("detalle del veterinario"))
    
    // Ruta para actualizar un veterinario en particular
    router.put('/veterinario/:id',(req,res)=>res.send("actualizar perfil"))


// Exportar la variable router
export default router