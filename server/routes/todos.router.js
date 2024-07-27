const todosRouter = require('express').Router();
const pool = require('../modules/pool');

// DB CONNECTION


// In todos.router, make the router.get route.
// (To get the to-do items!)
// The route we just made will need to send a SELECT * FROM SQL query (using pool.query()!) to the database. 
// NOTE: console.logs made here are displayed in terminal!!!!!!

// GET Todo data
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


// POST (to insert a new row)

// In todos.router, make the router.post route.
// The route we just made will need to send an INSERT INTO SQL query (using pool.query!) to the database. (To insert a new row.)
// If the INSERT INTO worked, send status 201 back to the client-side.
// When client-side receives status 201, need to call the function that that gets the to-dos data and renders it.

todosRouter.post('/', (req, res) => {
    console.log('POST received a request!');
    console.log('\treq.body is:', req.body);

  
    const sqlText = `
      INSERT INTO "todos" 
        ("text", "isComplete") 
        VALUES
        ($1, $2);  //Sanitation
    `;
    const sqlValues = [
      req.body.text,
      req.body.isComplete,
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


// PUT
todosRouter.put ('/:todos_id', (req, res) => {
    const todosToChange = req.params.todos_id;
    
    const sqlText = `
        UPDATE "todos"
            SET "isComplete" = TRUE
            WHERE "id" = $1;
            `
    const sqlValues = [todosToChange]
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


// DELETE
todosRouter.delete('/:id', (req, res) => {

    const todosId = req.params.id;
    console.log('The id from DELETE request:', todosRouterId);
    
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

module.exports = todosRouter;