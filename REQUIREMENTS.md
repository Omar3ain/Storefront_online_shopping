# API Requirements
The company stakeholders want to create an online storefront to showcase their great product ideas. Users need to be able to browse an index of all products, see the specifics of a single product, and add products to an order that they can view in a cart page. You have been tasked with building the API that will support this application, and your coworker is building the frontend.

These are the notes from a meeting with the frontend developer that describe what endpoints the API needs to supply, as well as data shapes the frontend and backend have agreed meet the requirements of the application. 

## API Endpoints
#### Products
- Index 
- Show
- Create [token required]
- [OPTIONAL] Top 5 most popular products 
- [OPTIONAL] Products by category (args: product category)

#### Users
- Index [token required]
- Show [token required]
- Create N[token required]

#### Orders
- Current Order by user (args: user id)[token required]
- [OPTIONAL] Completed Orders by user (args: user id)[token required]

## Data Shapes
#### Product
-  id: serial primary key
-  name: VARCHAR(255)
-  price: integer
-  [OPTIONAL] category: VARCHAR(100)

#### User
-  id SERIAL: PRIMARY KEY,
-  username: VARCHAR(150),
-  firstname: VARCHAR(100),
-  lastname: VARCHAR(100),
-  password_digest: VARCHAR

#### Orders
- id SERIAL: PRIMARY key
- user_id:  integer
- status of order (active or complete): boolean

#### Orders_prodct
- id:  SERIAL PRIMARY KEY
- quantity: integer
- order_id: integer
- Product_id: integer