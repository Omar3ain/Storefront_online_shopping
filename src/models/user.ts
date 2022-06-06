import client from "../database";
import bycrpt from 'bcrypt';
import dotenv from 'dotenv';

dotenv.config();

const {
   BYCRPT_PASSWORD ,
    SALT_ROUNDS
} = process.env


const pepper : string | undefined = BYCRPT_PASSWORD;
const saltrounds:string | undefined =SALT_ROUNDS

type User = {
    id : number,
    username: string,
    firstname: string,
    lastname: string,
    password_digest : string
}

class userModel  {

    async create(u :User) : Promise<User> {
        try{
            const conn = await client.connect();
            const sql =`INSERT INTO users ( username , firstname , lastname , password_digest) VALUES ($1 ,$2 ,$3 , $4) RETURNING *`;
            const hash = bycrpt.hashSync(u.password_digest +pepper ,parseInt(saltrounds as string))
            
            const result = await conn.query(sql , [u.username , u.firstname , u.lastname , hash]);
            const user = result.rows[0];
            conn.release();

            return user;
        } catch(err) {
            throw new Error(`unable create user (${u.username}): ${err}`)
        }
    }

    async authanticate( username : string , password: string) : Promise<User | null> {
        const conn = client.connect();
        const sql =`SELECT * FROM users WHERE username=($1)`;
        //@ts-ignore
        const result = conn.query(sql , [username]);
        if(result.rows.length) {
            const user = result.rows[0];
            if(bycrpt.compareSync( password+ pepper , user.password_digest)){
                return user
            }
        }
        return null
    }

}

export default userModel;