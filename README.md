# Storefront Backend Project

    1- first thing run in the terminal "npm install";
    2- to run the app type in terminal "npm run watch";


        ## db-mirgate
            1-in database.json change the properties of dev and test object as your local properties.
            2-in the terminal run "db-migrate up" to create the tables.
            3-in the terminal run "db-migrate down" to drop the tables.

        ## environment variables file
            on the repo there is a file called example.env the required variables in order to get the database work.


        ## APIs

                ### Users APIs
                    - to create an user pass in the request body {"username" as string , "firstname" as string, "lastname" as string , "password" as string} at route https://localhost:3000/api/user in POST method.

                    - to get all users at route https://localhost:3000/api/users in GET method with TOKEN authantication in the request (Barer <token>) from the created user.

                    - to get a specific users at route https://localhost:3000/api/user/id where id(number) is passed in URL as request paramter in GET method with TOKEN authantication in the request (Barer <token>) from the created user.


                ### Porducts APIs
                        - to create an product pass in the request body {"name " as string : , "price" as number , "category" as string} at route https://localhost:3000/api/product in POST method with TOKEN authantication in the request (Barer <token>) from the created user.

                        - to get all users at route https://localhost:3000/api/products in GET method.

                        - to get a specific product at route https://localhost:3000/api/product/id where id(number) is passed in URL as request paramter in GET method with TOKEN authantication in the request (Barer <token>) from the created user.


                ### Orders APIs
                        - to create an product pass in the request body {"quantity " as number : , "status_of_order" as boolean , "user_id" as number , "product_id" as number} at route https://localhost:3000/api/order in POST method with TOKEN authantication in the request (Barer <token>) from the created user.

                        - to get a specific order at route https://localhost:3000/api/order?user_id=id where id(number) is passed in URL as request query in GET method with TOKEN authantication in the request (Barer <token>) from the created user.
                        
                ## Unit testing
                        1- MUST CHANGE MANUALLY THE environment variable ENV to test
                        2- to run the test run in the terminal "npm test";