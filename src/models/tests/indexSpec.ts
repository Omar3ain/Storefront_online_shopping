import userModel from '../user';
import productModel from '../product';
import orderModel from '../orders';
import app from '../../server';
import supertest from 'supertest';


const user = new userModel()
const product = new productModel()
const order = new orderModel()


describe("Models:" , () => {

  describe("User Model",  () => {
    it('should have an create method', async () => {
  
        const result = await user.create({
          username: 'omarmedhat',
          firstname: 'omar',
          lastname: 'medhat',
          password_digest: '1234'});
      expect(result).toBeDefined();
    });
  
    it('should have a index method', async () => {
        const result = await user.index();
      expect(result).toBeDefined();
    });
  
    it('should have a show method', async () => {
        const result = await user.show(1);
  
  
      expect(result).toBeDefined();
    });
  });
  
  describe("Product Model", () => {
      it('should have an create method', async () => {
          const result = await product.create({
            name: 'white_tshirt',
            price: 50,
            category: 'Clothes',
              });
  
        expect(result).toEqual({
                  id: 1,
                  name: 'white_tshirt',
                  price: 50,
                  category: 'Clothes'
          });
      });
  
      it('should have an show method', async () => {
         const result = await product.show(1);
  
      expect(result).toEqual({
          id: 1,
          name: 'white_tshirt',
          price: 50,
          category: 'Clothes'
  });
      });
  
      it('should have a index method', async () => {
          const result = await product.index();
        expect(result).toBeDefined();
      });
  
      it('should get order object' , async () => {
        const result = await product.addOrder(1,1,1);
        expect(result).toBeDefined();
      })
  });
  
  describe("Order Model", () => {
      it('should have an create method', async () => {
          const result = await order.create({
              status_of_order :false,
              user_id :1 ,
              });
  
          expect(result).toEqual({
                  id: 1,
                  status_of_order :false,
                  user_id :1 ,
          });
      });
  
      it('should have an show method', async () => {
          const result = await order.getOrderByUser(1);
  
      expect(result).toEqual({
          id: 1,
          status_of_order :false,
          user_id :1 ,
          });
      });
  });

})

describe("application endpoint", () => {  
  let token: string;
    beforeAll(async () => {
        const response = await supertest(app).post("/api/user").send({
          username: "admin",
          firstname: "admin",
          lastname: "admin",
          password_digest: "password"
        });
        token = response.body;
    });

      describe('Users endpoints:', ()=> {
        it('It should create a user  POST METHOD at route /api/user' , async () => {
          const response = await supertest(app).post('/api/user').send({
            username: "admin",
            firstname: "admin",
            lastname: "admin",
            password_digest: "password"
        });
        expect(response.statusCode).toBe(200)
        })
      
        it('It should get users(GET method) at route /api/users' , async () => {
          const response = await supertest(app).get('/api/users').set('Authorization' , `Bearer ${token}`)
          expect(response.statusCode).toBe(200)
        })

        it('It should create a get users with id=1(GET method) at route /api/users/1', async () => {
          const response = await supertest(app).get('/api/user/1').set('Authorization' , `Bearer ${token}`)
          expect(response.statusCode).toBe(200);
        }) 
      })

      describe('Products endpoints:' ,() => {
        it('should get all products at route /api/products' , async () => {
          const response =await supertest(app).get('/api/products');
          expect(response.statusCode).toBe(200);
        })

        it('should get specific product at route /api/product/id' , async () => {
          const response =await supertest(app).get('/api/product/1');
          expect(response.statusCode).toBe(200);
        })

        it('should create new product at route /api/product' , async () => {
          const response =await supertest(app).post('/api/product').set('Authorization' , `Bearer ${token}`);
          expect(response.statusCode).toBe(200);
        })

        it('should make an order at route /api/order_product' , async () => {
          const response =await supertest(app).post('/api/order_product').set('Authorization' , `Bearer ${token}`);
          expect(response.statusCode).toBe(200);
        })
      })

      describe('Orders endpoints:' , () => {
        it('should create new order at route /api/order' , async () => {
          const response =await supertest(app).post('/api/order').set('Authorization' , `Bearer ${token}`);
          expect(response.statusCode).toBe(200);
        })

        it('should get a specfic order for specfic user at route /api/order?user_id=id' , async () => {
          const response =await supertest(app).get('/api/order?user_id=1').set('Authorization' , `Bearer ${token}`);
          expect(response.statusCode).toBe(200);
        })
      })
});