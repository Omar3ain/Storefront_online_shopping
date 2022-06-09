import  express, { NextFunction }  from "express";
import verifyAuthToken from "../../middleware/verifyAuthToken";
import productModel from "../../models/product";


const productRouter = express.Router();
const Product = new productModel();

productRouter.get('/products' , async (req : express.Request , res : express.Response) => {
    try {
        const products = await Product.index();
        res.json(products);
    }catch(err) {
        throw new Error(`${err}`)
    }
})
.get('/product/:id' , async (req : express.Request , res : express.Response) => {
    try {
        const product = await Product.show(parseInt(req.params.id));
        res.json(product);
    }catch(err) {
        throw new Error(`${err}`)
    }
})
.post('/product',verifyAuthToken, async (req : express.Request , res : express.Response , next : NextFunction) => {
    try{
        const product = await Product.create(req.body);
        res.json({
            status: 'success',
            product : { ...product },
            message : 'product created succsfully'
        })
    } catch(err){
        next(err)
    }
    
})
.post('/order_product' , verifyAuthToken , async(req : express.Request , res : express.Response , next : NextFunction) => {
    try{
        const order = await Product.addOrder(req.body.quantity, req.body.order_id , req.body.product_id);
        res.json({
            status: 'success',
            product : { ...order },
            message : 'order created succsfully'
        })
    } catch(err){
        next(err)
    }
    
})

export default productRouter;