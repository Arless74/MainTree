import express from 'express' // ESM EcmaScript modules
import 'dotenv/config'; //importacion para el uso de las variable de entornos creada por uno mismo 
import router from './router'
import { connectDB } from './config/db'

const app = express()

connectDB() //Conexion a BD

//Leer datos de Formularios
app.use(express.json())

//use mapea las peticiones de router.ts
app.use('/',router)

export default app