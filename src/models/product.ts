import client from "../database";


type Product = {
    id?: number;
    name: string;
    price: number;
    category: string;
}
type Order_Product = {
    id?: number;
    quantity: number;
    product_id: number;
    order_id: string;
}

 class productModel {
    async index() : Promise<Product[]> {
      try { 
            const conn = await client.connect();
            const sql = 'SELECT * FROM products';
            //@ts-ignore
            const result = await conn.query(sql);
            conn.release();
            return result.rows;
        }  catch (err) {
            throw new Error(`Cannot get products ${err}`)
        }
    }

    async show(id: number): Promise<Product> {
        try{
            const conn = await client.connect();
            const sql = 'SELECT * FROM products WHERE id=$1';

            const result = await conn.query(sql ,[id]);
            conn.release();
            return result.rows[0];
        } catch (err) {
            throw new Error(`Cannot find  product with this id ${err}`)
        }
    }

    async create(p : Product) : Promise<Product> {
        try {
            const conn = await client.connect();
            const sql = `INSERT INTO products (name , price , category) values ($1 ,$2 ,$3) RETURNING *`

            const result = await conn.query(sql , [p.name , p.price , p.category]);
            const product = result.rows[0];
            conn.release();
            
            return product;
        } catch (err) {
            throw new Error(`Could not create new product ${err}`);
        }
        
    }


    async addOrder(quantity : number ,order_id : number , product_id : number): Promise<Order_Product> {
        try{
            const conn = await client.connect();
            const sql = 'INSERT INTO product_order_table (quantity ,order_id , product_id) VALUES ($1 , $2 ,$3) RETURNING *';
            const result = await conn.query(sql , [quantity , order_id , product_id]);
            const order = result.rows[0];
            conn.release();

            return order;
        } catch(err) {
            throw new Error(`${err}`)
        }

    }
    
}

export default productModel;