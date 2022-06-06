import client from "../database";


type Product = {
    id : number;
    name: string;
    price: number;
    category: string;
}

 class product {
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
            const sql = `SELECT * FROM products WHERE id=${id}`;
            //@ts-ignore
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
            const sql = `INSERT INTO products (name , price , category) values ($1 ,$2 ,$3)`
            //@ts-ignore
            const result = await conn.query(sql , [p.name , p.price , p.category]);
    
            conn.release();
            const product = result.rows[0];
            return product;
        } catch (err) {
            throw new Error(`Could not create new product ${err}`);
        }
        
    }

    
}

export default product;