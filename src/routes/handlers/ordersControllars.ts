import express from 'express';
import orderModel from '../../models/orders';
import verifyAuthToken from '../../middleware/verifyAuthToken';

const orderRouter = express.Router();
const Order = new orderModel;

orderRouter.post('/order' ,verifyAuthToken, async (req : express.Request , res : express.Response, next: express.NextFunction ) =>{
    try{
        const order = await Order.create(req.body);
        res.json(order)
    }catch(err) {
        next(err)
    }
    
})
.get('/order' ,verifyAuthToken , async (req : express.Request , res : express.Response , next: express.NextFunction) => {
    try{
        const user_id = req.query.user_id as string;
        const order = await Order.getOrderByUser(+user_id);
        if(!order) {
            res.send('there is no orders for that user')
        }else if (!user_id ){
            res.json('message : please enter user id, :')
        }
        else{
            res.json(order)
        }
    } catch(err) {
        next(err)
    }
    
   
} )

export default orderRouter;