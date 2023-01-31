const express = require('express');
const LoginController=require ('../controllers/LoginController')
const router = express.Router();

// routes


router.get('/', LoginController.registerView);
router.get('/login',LoginController.loginpage);
router.post('/register',LoginController.newuser)



module.exports = router;