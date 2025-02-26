import { Request, Response } from "express"
import User from "../models/User"
import {validationResult} from 'express-validator'
import { Error } from "mongoose"
import { checkPassword, hashPass } from "../utils/auth"
import slug from "slug"

export const createAccount = async (req: Request, res: Response) =>{ //Path Metodo Post
    
    ///Manejar Errores

    const { email,password } = req.body
    
    const userExists = await User.findOne({email})
    if(userExists){
       const error = new Error('El Usuario ya Existe con ese email')
       res.status(409).json({error: error.message})
       return 
    }

    const handle = slug(req.body.handle,'')
    const handleExist = await User.findOne({handle})
    if(handleExist){
        const error = new Error('El Usuario ya Existe con tiene ese nombre ')
        res.status(409).json({error: error.message})
        return 
     }

    const user = new User(req.body)
    user.password = await hashPass(password)
    user.handle = handle

    await user.save()
    res.status(201).send('Usuario Creado')
}

export const login = async (req: Request, res: Response) =>{

    //Manejar errores 
    let errors = validationResult(req)
    if(!errors.isEmpty()){
        res.status(400).json({errors: errors.array()})
        return
    }

    const { email,password } = req.body

    //revisar si el Usuario esta registrado
    const user = await User.findOne({email})
    if(!user){
       const error = new Error('El Usuario no existe')
       res.status(404).json({error: error.message})
       return 
    }

    //Comprobar el password
    const isPasswordCorrect = await checkPassword(password, user.password)

    if(!isPasswordCorrect){
        const error = new Error('Password Incorrecto ')
        res.status(401).json({error : error.message})
        return 
    }

    res.send('Auntenticando')
}
