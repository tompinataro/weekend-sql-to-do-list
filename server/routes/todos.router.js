const router = require('express').Router();
const pool = require('../modules/pool');

// In todos.router, make the router.get route.
// The route we just made will need to send a SELECT * FROM SQL query (using pool.query()!) to the database. (To get the to-do items!)


// In todos.router, make the router.post route.
// The route we just made will need to send an INSERT INTO SQL query (using pool.query!) to the database. (To insert a new row.)
// If the INSERT INTO worked, send status 201 back to the client-side.
// When client-side receives status 201, need to call the function that that gets the to-dos data and renders it.



// In todos.router, make the router.delete route
// The route we just made will need to send a DELETE SQL query (using pool query!) to the database. (To delete a task/row.)
// If the DELETE was successful, send status 202 back to client.js
// When client.js receives status 202, call the function that gets the remaining to-dos data and renders it

module.exports = router;
