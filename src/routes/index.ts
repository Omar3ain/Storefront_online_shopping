import  express, { NextFunction }  from "express";
import productRouter from './controllars/productsControllars';
import userRouter from "./controllars/usersControllars";
import orderRouter from './controllars/ordersControllars'

const router = express.Router();

router.use('/api' ,productRouter);
router.use('/api' ,userRouter);
router.use('/api' ,orderRouter);

export default router;