const express = require('express');
const app = express();

const todos = require('./routes/todos.router.js');

let PORT = process.env.PORT || 5001;

// Do not modify this!
if (process.env.NODE_ENV == 'test') {
  PORT = 5002;
}

app.use(express.static('./server/public'));
app.use(express.json());

app.use('/todos', todos);

app.listen(PORT, () => {
  console.log('server running on: ', PORT);
});

// Server sends query to the Dbase to mark as complete = true
// Result gets sent from the Dbase thru the router back to the server
// Server sends response to client side
// Client updates the DOM/html
