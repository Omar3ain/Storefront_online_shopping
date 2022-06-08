import userModel from '../user';
import bycrpt, { hash } from 'bcrypt';
import dotenv from 'dotenv'
import productModel from '../product';
import orderModel from '../orders';


dotenv.config()
const pepper = process.env.BYCRPT_PASSWORD;
const saltrounds = process.env.SALT_ROUNDS

const user = new userModel()
const product = new productModel()
const order = new orderModel()

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
});

describe("Order Model", () => {
    it('should have an create method', async () => {
        const result = await order.create({
            quantity :50,
            status_of_order :false,
            user_id :1 ,
            product_id :1
            });

        expect(result).toEqual({
                id: 1,
                quantity :50,
                status_of_order :false,
                user_id :1 ,
                product_id :1
        });
    });

    it('should have an show method', async () => {
        const result = await order.getOrderByUser(1);

    expect(result).toEqual({
        id: 1,
        quantity :50,
        status_of_order :false,
        user_id :1 ,
        product_id :1
        });
    });
});

