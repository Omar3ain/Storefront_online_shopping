# Storefront Backend Project

    1- first thing run in the terminal "npm install";
    2- to run the app type in terminal "npm run watch";

    
        ## Database
                1-create database (psql) by this query 'CREATE DATABASE store_front_db'.
                1-create database for test (psql) by this query 'CREATE DATABASE store_front_db_test'.
                2-create user fro connetion to database by this query 'CREATE USER store_user WITH PASSWORD 'password'.
                3- connect to database by type in the psql '\c store_front_db_test;' and then grant all privileges to that user by this query 'GRANT ALL PRIVILEGES ON DATABASE store_front_db TO store_user' and to the second test database by the same query.
                4- port number as default 5432.



        ## db-mirgate
            1-in database.json change the properties of dev and test object as your local properties.
            2-in the terminal run "db-migrate up" to create the tables.
            3-in the terminal run "db-migrate down" to drop the tables.

        ## environment variables file
            on the repo there is a file called example.env the required variables in order to get the database work.

        ## Unit testing
            1- MUST CHANGE environment variable from ENV=dev TO ENV=test first;
            1- to run the test run in the terminal "npm run test";


        ## APIs

                ### Users APIs
                    - to create an user pass in the request body {"username" as string , "firstname" as string, "lastname" as string , "password" as string} at route https://localhost:3000/api/user in POST method.

                    - to get all users at route https://localhost:3000/api/users in GET method with TOKEN authantication in the request (Barer <token>) from the created user.

                    - to get a specific users at route https://localhost:3000/api/user/id where id(number) is passed in URL as request paramter in GET method with TOKEN authantication in the request (Barer <token>) from the created user.


                ### Porducts APIs
                        - to create an product pass in the request body {"name " as string : , "price" as number , "category" as string} at route https://localhost:3000/api/product in POST method with TOKEN authantication in the request (Barer <token>) from the created user.

                        - to get all users at route https://localhost:3000/api/products in GET method.

                        - to get a specific product at route https://localhost:3000/api/product/id where id(number) is passed in URL as request paramter in GET method with TOKEN authantication in the request (Barer <token>) from the created user.

                        - to create an product pass in the request body {"quantity" as number , "user_id" as number, "product_id" as number} at route https://localhost:3000/api/order_product in POST method with TOKEN authantication in the request (Barer <token>) from the created user.


                ### Orders APIs
                        - to create an product pass in the request body {"status_of_order" as boolean , "user_id" as number} at route https://localhost:3000/api/order in POST method with TOKEN authantication in the request (Barer <token>) from the created user.

                        - to get a specific order at route https://localhost:3000/api/order?user_id=id where id(number) is passed in URL as request query in GET method with TOKEN authantication in the request (Barer <token>) from the created user.
                        
                