console.log('JS is sourced!');
showToDoList();

// * When the DOM loads, our `client.js` file will need 
//to execute a function that makes an HTTP `GET /todos` request.
function showToDoList() {
    axios.get('/todos')
      .then(response => {
        let todoData = response.data;
        console.log('This is the todo data we GET from server:', todoData);
    
        showToDolist(todoData);
      })
    
      .catch((err) => {
        console.log('Error in getting data!', err);
      })
    
    } // end of showToDoList

// Function to get the to-dos data and render it
// Calling the function to render the initial to-do list
  showToDoList();

// Send the SQL query's resulting data back to the client.
// When the data arrives client-side, need to loop through the 
// array of objects and render a <tr> for each to-do item. (
// Inside the <tbody>.)



// Create an onclick delete <button> 
// in the showToDoList()for each item in the to do list in client.js  
// Using the onclick to make an http DELETE /todos request w/axios in client.js to server.js
// Create an onclick completed button for each to do item in html table
// Event makes an http request w/axios and .then to server (completed = TRUE)


// 3. Each rendered to-do item must have:
//     * `data-testid="toDoItem"`
//     * It doesn't matter what HTML element you choose to use to represent a single to-do item, but it must have this attribute applied. Examples:
//       * ```js
//           <li data-testid="toDoItem">...</li>
//           <tr data-testid="toDoItem">...</tr>
//           <div data-testid="toDoItem">...</div>
//           <article data-testid="toDoItem">...</article>
//         ```
// 4. Each to-do item's "delete" button must have:
//     * `data-testid="deleteButton"`
//     * This button must be a child of the element that has the `data-testid="toDoItem"` on it.
// 5. Each to-do item's "mark complete" button must have:
//     * `data-testid="completeButton"`
//     * This button must be a child of the element that has the `data-testid="toDoItem"` on it.
// 6. Each completed to-do item must have:
//     * A CSS class of `completed` applied to its `data-testid="toDoItem"` element.
//     * Examples of "completed" to-do items:
//       * ```js
//           <li data-testid="toDoItem" class="completed">...</li>
//           <tr data-testid="toDoItem" class="completed">...</tr>
//           <div data-testid="toDoItem" class="completed">...</div>
//           <article data-testid="toDoItem" class="completed">...</article>
//         ``` -->