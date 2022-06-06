import express  from "express";
import user from '../../models/user';

const userRouter = express.Router();
const userModel = new user();

userRouter.post('/user' , async(req : express.Request , res : express.Response , next: express.NextFunction) => {
    try{
        const user = await userModel.create(req.body);
        res.json(user)
    } catch(err){
        next(err)
    }
    
})

export default userRouter;