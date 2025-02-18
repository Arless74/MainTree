import colors, { magenta } from 'colors' //importacion sobre colores para la impresion 
import server from './server' //importacion sobre archivo server

const port = process.env.PORT || 4000  //asignando la variable de entorno O el puerto 4000

server.listen(port, ()=> {
    console.log(colors.bgBlue,magenta.italic( `Servidor Vivo... :D,  funcionando en el: ${port}`)) //impresion con color Morado
})

