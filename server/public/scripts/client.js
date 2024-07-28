console.log('JS is sourced!');
getToDoList();

// * When the DOM loads, our `client.js` file will need 
//to execute a function that makes an HTTP `GET /todos` request.

function getToDoList() {
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



// ===================== DISPLAY IN HTML FUNCTION =====================

// When the data arrives client-side, need to loop through the 
// array of objects and render a <tr> for each to-do item. (
// Inside the <tbody>.)

function showToDolist(data) {
  console.log('This is the data to be displayed. Is this correct?:', data);
  let viewTodos = document.getElementById('viewTodos');

  // IF ready_to_transfer === true, 'Ready for complete' button doesn't exist
  // ELSE, 'Ready for Complete' button exists
  viewTodos.innerHTML = '';
  for(let task of data) {
// for each object of the array
    console.log(`Is ${task.text} complete? ${task.isComplete}`);
    if(task.isComplete === true) {
      
      viewTodos.innerHTML += `

      <tr data-testid="toDoItem">
        <td>${task.text}</td>
        <td>${task.isComplete}</td>
        <td><button onClick="completeTask(${task.id})">Complete Task</button></td>
        <td><button onClick="deleteTask(${task.id})">Delete Task</button></td>
      </tr>`;
    
    } else {
      viewTodos.innerHTML += `

      <tr>
        <td>${task.text}</td>
        <td>${task.isComplete}</td>
        <td><button onClick="completeTask(${task.id})">Complete</button></td>
        <td><button onClick="deleteTask(${task.id})">Delete Task</button></td>
      </tr>`;

    } // end of IF statement
    
  } // end of FOR loop
} // end of displayTodos

// ===================== DELETE FUNCTION (Needs getTodos function in .then) =====================
// Create an onclick delete <button> 

function deleteTask (){
  console.log ("In deleteTask()") 
  function deleteTask(taskId) {
    console.log('This is the task\'s id in client:', taskId);
  
        axios({
          method: 'DELETE',
          url: `/todos/${taskId}`
        })
        .then((response) => {
          console.log(`${taskId} has been deleted:`, response);
      
          showToDoList();
        })
        .catch((err) => {
          console.log(`${taskId} did not get deleted:`, err);
        })
}// end of deleteTask()


function completeTask (){
  console.log ("In completeTask()")

  function isComplete(task_id) {
    axios ({
      method: 'PUT',
      url: `/todos/${task_id}`,
      data: {status: 'true'}
    })
    .then((response) => {
      showToDoList();
    })
    .catch((error) => {
      console.log('error updating Transfer status',error)
    })
  }


}// end of completeTask()

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







 


// ============ UPDATE TRANSFER STATUS ==================





// ===================== BUTTON && POST FUNCTION =====================

function addTask (event){
  event.preventDefault();
  console.log("Submit Button Clicked");
  let task = document.getElementById('TASKINPUTTEST ID HEREEEEEEE').value;
  let isComplete = document.getElementById('iscomplete').value;
  console.log("Variables Match:", task, isComplete);

  //Put variables into object (creates object)
let newTask = {
  task:______,
  isComplete:_____  
}

}

  console.log("Incoming Task:", newTask);

  

  //Send object to server.js using axios
  axios({
    method: 'POST',
    url: '/todos',
    data: newTask
  }).then(function(response) {
    console.log(response.data);
    document.getElementById('form').reset();

    showToDoList();

  }).catch(function(error) {
    console.log('error in todosPOST', error); 
    alert('Error adding todos object. Please try again.')       
  });


}



