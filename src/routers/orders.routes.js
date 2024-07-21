import express from 'express';
import placeTheOrder from '../controllers/order';

const router = express.Router();

router.post('/order', placeTheOrder.create);
router.get('/orders', placeTheOrder.getAllOrders);
router.put('/order/:id', placeTheOrder.update);
router.delete('/order/:id', placeTheOrder.delete);

export default router;