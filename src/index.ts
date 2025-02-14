import server from './server'

const port = process.env.PORT || 4000

server.listen(port, ()=> {
    console.log('Servidor Vivo... :D,  funcionando en el:', port)
})

