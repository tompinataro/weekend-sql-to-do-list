## Requirements:
Create a front-end experience that allows a user to create a to-do item.
When a to-do item is created:
It should be stored inside the database table.
The DOM should update and display the new to-do item.
Each to-do item should have a button to 'Complete' or 'Delete' it.
When a to-do item is completed:
Its isComplete value (in the database table) should be updated to TRUE.
A CSS class of completed should be applied to the to-do item.
This class should make it visually clear that the to-do is complete.
Example, the background of the to-do item could change from gray to green.
Not a requirement, but: It'd greatly improve the user experience if the "complete" button appears to be somehow checked-off or disabled when a to-do has been marked as completed.
When a to-do item is deleted:
It should be removed from the database table.
The DOM should update to show that list no longer includes the deleted to-do item.
## User Stories:
The assumption I'm making here is that the to-do list data will be stored in a database table.
Each of these user stories translates to a feature!
A user can see their list of to-dos.
A user can create a new to-do.
A user can mark to-do items as completed.
A user can delete to-do items.
## Build Plan:

### Get set up.

⎷Create a new database named weekend-to-do-app.
Inside the new database, run the CREATE TABLE and INSERT INTO queries found in database.sql.

⎷ Check to see if the repository contains all the files we need.

⎷ Have all the files, but need to add a defer to where we source client.js in index.html.

⎷ Check to see if the repository's package.json contains the dependencies we need.
⎷ All the necessary dependencies are there.

⎷ Do npm install.
⎷ Confirm this :point_up_2: is all good to go by starting the server and opening http://localhost:5001 in the browser.

⎷ Try running npm test to verify the tests run.

### A user can see their list of to-dos.

⎷ Make a <table> in index.html with the <thead> and <tbody> sections.

⎷ test not pasing? When the DOM loads, our client.js file will need to execute a function that makes an HTTP GET /todos request.

⎷ In todos.router, make the router.get route.

⎷ The route we just made will need to send a SELECT * FROM SQL query (using pool.query()!) to the database. (To get the to-do items!)

⎷ Send the SQL query's resulting data back to the client.

⎷ When the data arrives client-side, 
⎷ need to loop through the array of objects and 
⎷ render a <tr> for each to-do item. (Inside the <tbody>.)

### A user can create a new to-do.

⌻ Create a <form> in index.html with a single <input> for collecting to-do text and a submit `<button`>.

⌴ Need a function to run when the submit <button> gets clicked.

⌴ Function will need to get 
what the user typed into the input and make an HTTP POST /todos request that sends data that looks something like:
{newTodoText: 'whatever the user typed'}

⌻ In todos.router, make the router.post route.

⌻ The route we just made will need to send an INSERT INTO SQL query (using pool.query!) to the database. (To insert a new row.)

⌻ If the INSERT INTO worked, send status 201 back to the client-side.
When client-side receives status 201, need to call the function that gets the to-dos data and renders it.

### A user can delete to-do items.


⌴ Create an onclick delete <button> in the showToDoList()for each item in the to do list in client.js   

⌴ Using the onclick to make an http DELETE /todos request w/axios in client.js to server.js


⌻ In todos.router, make the router.delete route

⌻ The route we just made will need to send a DELETE SQL query (using pool query!) to the database. (To delete a task/row.)  Remember that you'll need to include the todo id as a route parameter for the delete/put routes. 

Example of that in here!
https://github.com/PrimeAcademy/pinnacles-full-stack-get-post-delete-put

⌴ If the DELETE was successful, send status 202 back to client.js

⌴ When client.js receives status 202, call the function that gets the remaining to-dos data and renders it

### A user can mark to-do items as completed.

⌴ Create an onclick completed button for each to do item in html table
Event makes an http PUT request w/axios and .then to server (completed = TRUE)

⌴ Server sends query to the Dbase to mark as complete = true.

⌴ Result gets sent from the Dbase thru the router back to the server.

⌴ Server sends response to client side. 

⌴ Client updates the DOM/html.