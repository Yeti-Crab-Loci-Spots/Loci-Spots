// Restaurant Model
//add database link from elephantSQL
// We export an object that contains a property called query,
// which is a function that returns the invocation of pool.query() after logging the query
// This will be required in the controllers to be the access point to the database

const { Pool } = require('pg');
const PG_URI =
  'postgres://gcxwprik:ZXSQFHIDqAvoOTCsILA_IMqu5rgBoX7y@stampy.db.elephantsql.com/gcxwprik';


const pool = new Pool({
  connectionString: PG_URI,
});

module.exports = {
  query: (text, params, callback) => {
    console.log('server/models/resomodels - executed query:', text);
    return pool.query(text, params, callback);
  },
};
