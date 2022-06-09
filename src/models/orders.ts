import client from "../database";

type Order ={
    id?: number,
    status_of_order :boolean,
    user_id :number 
}

class orderModel {

    async create(o: Order) : Promise<Order> {
        try{
            const conn = await client.connect();
            const sql = "INSERT INTO orders( status_of_order , user_id ) VALUES ($1 , $2) RETURNING *";

            const result = await client.query(sql , [ o.status_of_order , o.user_id]);
            conn.release()

            return result.rows[0];
        } catch(err) {
            throw new Error(`Couldnt make the order ${err}`)
        }
    }

    async getOrderByUser(userId : number) : Promise<Order> {
        try{
            const conn = await client.connect();
            const sql = 'SELECT * FROM orders WHERE user_id=$1';

            const result = await conn.query(sql , [userId])
            const order = result.rows[0]
            
            conn.release()

            return order
        
        } catch(err) {
            throw new Error(`${err}`)
        }
    }
}

export default orderModel