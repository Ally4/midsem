import { Router } from 'express';
import swaggerUI from 'swagger-ui-express';
import swaggerJsdoc from 'swagger-jsdoc';
import swaggerOptions from '../utils/swaggerOptions';
import welcomeRoute from './welcome.routes';
import userRoute from './auth.routes';
import orders from './orders.routes';
import products from './products.routes';

const swaggerDoc = swaggerJsdoc(swaggerOptions);
const router = Router();

router.use('/', welcomeRoute);

router.use('/api/v1/auth', userRoute);

router.use('/api/v1/orders', orders);

router.use('/api/v1/product', products);

router.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDoc));

export default router;
