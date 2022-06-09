import express  from "express";
import user from '../../models/user';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import verifyAuthToken from '../../middleware/verifyAuthToken'
dotenv.config()

const userRouter = express.Router();
const userModel = new user();

userRouter.post('/user' , async(req : express.Request , res : express.Response , next: express.NextFunction) => {
    try{
        const user = await userModel.create(req.body);
        var token = jwt.sign({user : user} , process.env.TOKEN_SECRET as string)
        res.setHeader('Authorization' , `Bearer ${token}`)

        res.json(token)
    } catch(err){
        next(err)
    }
    
})
.get('/user/:id' , verifyAuthToken , async (req : express.Request , res : express.Response, next: express.NextFunction ) => {
    try{
        const id = parseInt(req.params.id) ;
        const user = await userModel.show(id);
        res.json(user) 
    }catch(err){
        next(err)
    }
   
})
.get('/users' ,verifyAuthToken, async (req : express.Request , res : express.Response, next: express.NextFunction) => {
    try{
        const users = await userModel.index();
        res.json(users)
    }catch(err){
        next(err)
    }

})



export default userRouter;