// This is it
import express from 'express';
import userController from '../controllers/registcontroller';
// import checkUser from '../middleware/checkUser';
// import users from '../controllers/users';
// import users from '../controllers/users';
// import { validationSignup } from '../validations/signup';
// import { validateSignin } from '../validations/signin';
// import validRole from '../validations/validRole';
// import { validationUpdateProfil } from '../validations/updateProfile';
// import { validationErrorForgotten } from '../validations/validationErrorForgotten';
// import { validationErrorResetPassword } from '../validations/validationErrorReset';
// import { validationErrorVerifyCode } from '../validations/verifyTheCode';
// import isAdmin from '../middleware/isAdmin';
import multer from 'multer';
// import isDriverOrOperator from '../middleware/isDriverOrOperator';


const upload = multer({dest: 'uploads/'});

const router = express.Router();



router.post('/login', 
// validateSignin, 
userController.login);


router.post('/register', 
// checkUser, 
// isAdmin, 
// validationSignup,
 userController.signup);


router.post('/verify-otp', 
// isDriverOrOperator, 
// validationErrorForgotten, 
userController.otpVerification);


router.get('/users', userController.getAllUsers);
export default router;
