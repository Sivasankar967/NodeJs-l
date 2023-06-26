import express from 'express'
import { signup, userLogin } from '../controllers/user.controllers.js'

const router = express.Router()

router.get('/login',userLogin)

router.post('/signup',signup)
export default router