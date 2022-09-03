//connect db named locidb from postgress

const { Client } = require('pg');

const client = new Client({
    user: 'postgres',
    host: 'localhost',
    database: 'locidb',
    password: null,
    port: 3000,
});

client.connect();

//create table

const query = `
CREATE TABLE restos (
    _id SERIAL PRIMARY KEY,
    name VARCHAR(50),
    address VARCHAR(50),
    city VARCHAR(50),
    foodType VARCHAR(50),
    link VARCHAR(50),
    votes INT
);
`;

//run query into the locidb
// client
//     .query(query)
//     .then(res => {
//         console.log('restaurant table successfully created inside locidb');
//     });
//     .then(client.end());
//     .catch(err => {
//         console.log('error in locidb query:', err);
// });

try {
    const res = await client.query(query);
    console.log('restaurant table successfully created inside locidb');
} catch (err) {
    console.log(err.stack);
} finally {
    client.close();
};
