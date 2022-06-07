import express from 'express';
import orderModel from '../../models/orders';
import verifyAuthToken from '../../middleware/verifyAuthToken';

const orderRouter = express.Router();
const Order = new orderModel;

orderRouter.post('/order' , async (req : express.Request , res : express.Response) =>{
    const order = await Order.create(req.body);
    res.json(order)
})
.get('/order' ,verifyAuthToken , async (req : express.Request , res : express.Response) => {
    const user_id = req.body.user_id;
    const order = await Order.getOrderByUser(+user_id);
    if(!order) {
        res.send('there is no orders for that user')
    }else if (!user_id ){
        res.json('message : please enter user id, :')
    }
    else{
        res.json(order)
    }
   
} )

export default orderRouter;