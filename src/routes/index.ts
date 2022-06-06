import  express, { NextFunction }  from "express";
import productRouter from './controllars/productsControllars';
import userRouter from "./controllars/usersControllars";

const router = express.Router();

router.use('/api' ,productRouter);
router.use('/api' ,userRouter);

export default router;