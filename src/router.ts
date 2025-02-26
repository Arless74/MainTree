import { Router } from 'express'
import { body} from 'express-validator'
import { createAccount, login } from './handlers'
import { handleInputErrors } from './middleware/validation'

const router = Router()

//Autenticacion y Registro

router.post('/auth/register',
    body('handle')
    .notEmpty()
    .withMessage('El Handle no puede estar Vacio'),
    body('name')
    .notEmpty()
    .withMessage('El Nombre no puede estar Vacio'),
    body('password')
    .isLength({min: 8})
    .withMessage('El Password debe tener minimo 8 caracteres'),
    body('email')
    .isEmail()
    .withMessage('El Email No es Valido'),
    handleInputErrors,
    createAccount)


router .post('/auth/login',
    body('password')
    .notEmpty()
    .withMessage('El Password debe ser obligatorio'),
    body('email')
    .isEmail()
    .withMessage('El Email No es Valido'),
    handleInputErrors,
    login
) 

export default router

