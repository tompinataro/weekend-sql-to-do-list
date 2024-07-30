
// 1. The todosRouter is created using the Express.js Router.

const todosRouter = require('express').Router();

// 2. A connection to the database is established using the pool = require
// ('../modules/pool'); line.
const pool = require('../modules/pool');

// DB CONNECTION


// In todos.router, make the router.get route.
// (To get the to-do items!)
// The route we just made will need to send a SELECT * FROM SQL query (using pool.query()!) to the database. 
// NOTE: console.logs made here are displayed in terminal!!!!!!

// 3. The todosRouter.get('/', ...) route is defined to retrieve all todo items from the database. 
// It sends a SELECT * FROM SQL query to the database using pool.query(). 
// If the query is successful, it sends the resulting data back to the client. 
// If there's an error, it logs the error and sends a 500 Internal Server Error response.

// GET Todo data  GET_GET_GET_GET_GET_GET_GET_GET_GET_GET_GET_GET_GET_GET_GET_GET_GET_GET_GET_GET_
todosRouter.get('/', (req, res) => {
    let queryText = `
    SELECT * FROM "todos"
    `
    pool.query(queryText)
    .then(dbResult => {

// Send the SQL query's resulting data back to the client.
        res.send(dbResult.rows)
    })
    .catch(dbError => {
        console.log('sql query error',dbError);
        res.sendStatus(500);
    })
})


// POST POST_POST_POST_POST_POST_POST_POST_POST_POST_POST_POST_POST_POST_POST_POST_POST_POST_POST_
// (POST inserts a new row)

// In todos.router, make the router.post route.
// The route we just made will need to send an INSERT INTO SQL query (using pool.query!) to the database. (To insert a new row.)
// If the INSERT INTO worked, send status 201 back to the client-side.
// When client-side receives status 201, need to call the function that that gets the to-dos data and renders it.

4.
//The todosRouter.post('/', ...) route is defined to insert a new todo item into the database. 
// It sends an INSERT INTO SQL query to the database using pool.query(). 
// If the insertion is successful, it sends a 200 OK response. 
// If there's an error, it logs the error and sends a 500 Internal Server Error response.

todosRouter.post('/', (req, res) => {
    console.log('POST received a request!');
    console.log('\treq.body is:', req.body);
    console.log('This is the req.body.text:', req.body.task);
  
    const sqlText = `
      INSERT INTO "todos" 
        ("text", "isComplete") 
        VALUES
        ($1, $2); 
    `;  
    const sqlValues = [ 
      req.body.task,
      false
    ];
    pool.query(sqlText, sqlValues)
      .then((dbResult) => {
        res.sendStatus(200);
      })
      .catch((dbErr) => {
        console.log('SQL query in POST /todos error:', dbErr);
        res.sendStatus(500);
      })
    
  });


// PUT - Route is defined to mark a todo item as completed. 

// 5. The todosRouter.put('/:task_id', ...)
// It sends an UPDATE SQL query to the database using pool.query(). 
// If the update is successful, it sends a 200 OK response. 
// If there's an error, it logs the error and sends a 500 Internal Server Error response.


// PUT_PUT_PUT_PUT_PUT_PUTPUT_PUT_PUT_PUT_PUT_PUTPUT_PUT_PUT_PUT_PUT_PUTPUT_PUT_PUT_PUT_PUT_PUT
todosRouter.put ('/:task_id', (req, res) => {
    const todoToChange = req.params.task_id;
    
    const sqlText = `
        UPDATE "todos"
            SET "isComplete" = TRUE
            WHERE "id" = $1;
            `
    const sqlValues = [todoToChange]
    pool.query(sqlText, sqlValues)
    .then(dbResult => {
        res.sendStatus(200);
    })
    .catch(dbError => {
        console.log('db error updating status',dbError);
        res.sendStatus(500);
    })
})


// In todos.router, make the router.delete route
// The route we just made will need to send a DELETE SQL query (using pool query!) to the database. (To delete a task/row.)
// If the DELETE was successful, send status 202 back to client.js
// When client.js receives status 202, call the function that gets the remaining to-dos data and renders it

// 6. The todosRouter.delete('/:id', ...) route is defined to delete a todo item from the database. 
// It sends a DELETE SQL query to the database using pool.query(). 
// If the deletion is successful, it sends a 200 OK response. 
// If there's an error, it logs the error and sends a 500 Internal Server Error response.

// DELETE_DELETE_DELETE_DELETE_DELETE_DELETE_DELETE_DELETE_DELETE_DELETE_DELETE_DELETE_DELETE_DELETE_DELETE_
todosRouter.delete('/:id', (req, res) => {

    const todosId = req.params.id;
    console.log('The id from DELETE request:', todosId);
    
    const sqlText = `DELETE FROM "todos"
                    WHERE "id" = $1;`;

    const sqlValue = [todosId];

    pool.query(sqlText, sqlValue)
    .then(dbResult => {
        res.sendStatus(200);
    })
    .catch(dbError => {
        res.sendStatus(500);
    })

})
// 7. The todosRouter is exported as a module using module.exports = todosRouter;.
module.exports = todosRouter;