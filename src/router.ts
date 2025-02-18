import {  Router  } from 'express'
const router = Router()

//Autenticacion y Registro

router.post('/auth/register',(req, res) =>{ //Path Metodo Post
    console.log(req.body)
})

export default router