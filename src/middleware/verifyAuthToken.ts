import  express  from "express";
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';

dotenv.config()

const verifyAuthToken = (req : express.Request , res : express.Response , next : express.NextFunction) => {
    try{
        const authorizationHeader = req.headers.authorization;
        const token = authorizationHeader!.split(' ')[1];
        const decoded = jwt.verify(token , process.env.TOKEN_SECRET as string)
        
        next()
    } catch(err) {
        res.status(401)
        res.json('Access denied, invalid token')
        return
    }
    
}

export default verifyAuthToken;