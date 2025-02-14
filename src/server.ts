import express from 'express' // ESM EcmaScript modules
import router from './router'

const app = express()

//use mapea las peticiones de router.ts
app.use('/',router)


export default app