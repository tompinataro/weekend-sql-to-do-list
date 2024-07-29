const pg = require('pg')  // pg = PostgresSQL

let databaseName = 'weekend-to-do-app'

if (process.env.NODE_ENV === 'test') {
  databaseName = 'prime_testing'
}

const pool = new pg.Pool({
    host: 'localhost',
    port: 5432,
    database: databaseName,
    allowExitOnIdle: true 
})

module.exports = pool


// The `pool.js` file is a Node.js module that sets up a connection pool 
//to a PostgreSQL database. Here are the steps explained in the code:

// 1. Import the `pg` module, which is a PostgreSQL client for Node.js.

// 2. Define a constant `databaseName` with the default value 'weekend-to-do-app'. 
//If the `NODE_ENV` environment variable is set to 'test', 
//the `databaseName` will be changed to 'prime_testing'.

// 3. Create a new `pg.Pool` instance. 
//The `pg.Pool` is a connection pool that manages multiple connections to the database. 
// The options passed to the `pg.Pool` constructor are:
//    - `host`: The hostname or IP address of the PostgreSQL server.
//    - `port`: The port number of the PostgreSQL server.
//    - `database`: The name of the database to connect to.
//    - `allowExitOnIdle`: A boolean value that determines whether 
// the pool should exit when there are no more idle connections.

// 4. Export the `pool` instance so it can be used in other parts of the application.

// In summary, this file sets up a connection pool to a PostgreSQL database 
//with the specified configuration and exports it for use in other parts of the application.