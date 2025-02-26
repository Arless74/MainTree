import mongoose from 'mongoose'; //importacion de mongoose para la conexion de MongoDB
import colors from 'colors' //importacion para dar color a lo impreso 
import User  from '../models/User'

export const connectDB = async () => {
    try {
        const {connection} = await mongoose.connect(process.env.MONGO_URI) //conexion a MOngoDB utilizando variable de entorno 
        const url = `${connection.host}:${connection.port}` //asigando el Host y el Puerto a la URL
        console.log(colors.cyan.bold(`MongoBD Conectado en ${url}`)) //Impresion de Color Cyan 
    } catch (error){
        console.log(colors.bgRed.white.bold(error.mensage)) //Alerta de Error 
        process.exit(1)
    }
}
