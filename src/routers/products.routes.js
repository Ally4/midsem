import express from 'express';
import multer from 'multer';
import productsController from '../controllers/productsController';
// import { validateResults } from '../validations/results';

const storage = multer.memoryStorage();
const upload = multer({ storage });

const router = express.Router();


router.get('/products',
productsController.getAllProducts);

// router.get('/results-pdf',
// productsController.getAllResultsPdf);

router.post('/post-products',
  // validateResults,
  upload.fields([
    // { name: 'pdf', maxCount: 1 },
    { name: 'image', maxCount: 1 },
  ]),
  productsController.create);



export default router;
