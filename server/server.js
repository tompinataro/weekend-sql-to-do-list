// 2. The server is initialized using the Express.js framework 
// by requiring the express module and creating an instance of 
// the express application (const express = require('express'); 
//const app = express();).
const express = require('express');
const app = express();

// 3. The todos.router.js file is required, which presumably 
//contains the routes and handlers for the todos API endpoints.
const todos = require('./routes/todos.router.js');

//4. The server listens for an environment variable called PORT, 
// defaulting to 5001. If the NODE_ENV is set to 'test', 
// the PORT is set to 5002.
let PORT = process.env.PORT || 5001;

// Do not modify this!
// 5. The server is configured to serve static files from the 
// server/public directory using the express.static() middleware.
if (process.env.NODE_ENV == 'test') {
  PORT = 5002;
}

//6. The server is configured to parse JSON data in the request body 
// using the express.json() middleware.
app.use(express.static('./server/public'));
app.use(express.json());

// 7. The server mounts the todos routes at the '/todos' path 
// using the app.use() method.
app.use('/todos', todos);

// 8. The server listens for incoming connections on the specified 
// PORT and logs a message to the console when it starts running.
app.listen(PORT, () => {
  console.log('server running on: ', PORT);
});

// Server sends query to the Dbase to mark as complete = true
// Result gets sent from the Dbase thru the router back to the server
// Server sends response to client side
// Client updates the DOM/html


//Explanation from Tabnine
