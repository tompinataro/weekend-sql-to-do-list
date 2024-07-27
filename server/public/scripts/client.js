console.log('JS is sourced!');
// * When the DOM loads, our `client.js` file will need 
//to execute a function that makes an HTTP `GET /todos` request.
// Function to get the to-dos data and render it
function showToDoList() {
    axios.get('/todos')
      .then(response => {
        // Rest of the code will go here
      });
  }
  
  // Calling the function to render the initial to-do list
  showToDoList();

//   Send the SQL query's resulting data back to the client.
// When the data arrives client-side, need to loop through the 
//array of objects and render a <tr> for each to-do item. (
//Inside the <tbody>.)

//Create an onclick delete <button> in the showToDoList()for each item in the to do list in client.js  


// Using the onclick to make an http DELETE /todos request w/axios in client.js to server.js

//Create an onclick completed button for each to do item in html table
//Event makes an http request w/axios and .then to server (completed = TRUE)