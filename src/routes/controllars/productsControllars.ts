import  express, { NextFunction }  from "express";
import product from "../../models/product";


const productRouter = express.Router();
const productModel = new product();

productRouter.get('/products' , async (req : express.Request , res : express.Response) => {
    try {
        const products = await productModel.index();
        res.json(products);
    }catch(err) {
        throw new Error(`${err}`)
    }
})
.post('/products', async (req : express.Request , res : express.Response , next : NextFunction) => {
    try{
        const product = await productModel.create(req.body);
        res.json({
            status: 'succus',
            product : { ...product },
            message : 'product created succsfully'
        })
    } catch(err){
        next(err)
    }
    
})

export default productRouter;