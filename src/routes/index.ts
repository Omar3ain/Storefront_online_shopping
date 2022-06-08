import  express, { NextFunction }  from "express";
import productRouter from './handlers/productsControllars';
import userRouter from "./handlers/usersControllars";
import orderRouter from './handlers/ordersControllars'

const router = express.Router();

router.use('/api' ,productRouter);
router.use('/api' ,userRouter);
router.use('/api' ,orderRouter);

export default router;