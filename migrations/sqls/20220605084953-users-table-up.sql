CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(150),
    firstname VARCHAR(100),
    lastname VARCHAR(100),
    password_digest VARCHAR
);
