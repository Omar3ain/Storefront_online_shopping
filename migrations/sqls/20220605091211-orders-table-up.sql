CREATE TABLE orders (
    id SERIAL PRIMARY key,
    quantity integer,
    status_of_order boolean,
    user_id integer ,
    product_id integer
);
    