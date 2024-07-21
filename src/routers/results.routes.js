import express from 'express';
import multer from 'multer';
import resultsController from '../controllers/resultsController';
import { validateResults } from '../validations/results';

const storage = multer.memoryStorage();
const upload = multer({ storage });

const router = express.Router();

// export default router;




/**
* @swagger
* /api/v1/auth/register:
*   post:
*     tags:
*       - Users
*     name: Signup
*     summary: Signup a user in a system
*     produces:
*       - application/json
*     consumes:
*       - application/json
*     parameters:
*       - name: x-access-token
*         in: header
*         description: jwt token of the user
*     requestBody:
*       content:
*         application/json:
*           schema:
*             type: object
*             properties:
*               firstname:
*                 type: string
*               lastname:
*                 type: string
*               email:
*                 type: string
*               dateofbirth:
*                 type: string
*               gender:
*                 type: string
*               address:
*                 type: string
*               role:
*                 type: string
*     responses:
*       '201':
*             description: user created successfully.
*       '400':
*             description: Bad request.
*       '409':
*             description: The email is already in the system.
* */

router.get('/results',
  resultsController.getAllResults);

router.get('/results-pdf',
  resultsController.getAllResultsPdf);

// router.post('/send',
//   validateResults,
//   upload.single('pdfFile'),
//   resultsController.create);

router.post('/send/:user',
  validateResults,
  upload.fields([
    { name: 'pdf', maxCount: 1 },
    { name: 'image', maxCount: 1 },
  ]),
  resultsController.create);




router.get('/',
  resultsController.getResultByPatientEmail);

  router.get('/mobile/:user',
  resultsController.getResultByPatientUserMobile);

  router.get('/mobile/count/:user',
  resultsController.getResultByPatientUserMobileForNotification);

// router.get('/mobile/:email',
//   resultsController.getResultByPatientEmailMobile);

router.patch('/:email',
  resultsController.getResultByPatientEmail);

router.put('/:email',
  resultsController.getResultByPatientEmail);

router.delete('/:email',
  resultsController.getResultByPatientEmail);

export default router;





// import express from 'express';
// import multer from 'multer';
// import resultsController from '../controllers/resultsController';
// import { validateResults } from '../validations/results';

// const storage = multer.memoryStorage();
// const upload = multer({ storage });

// const router = express.Router();

// router.post('/send',
//   validateResults,
//   upload.single('pdfFile'),
//   resultsController.create);

// export default router;