const express = require('express')
const { loginController, registerContoller } = require('../controllers/user')

const router = express.Router()

router.post('/login' , loginController)

router.post('/register' , registerContoller)
module.exports = router