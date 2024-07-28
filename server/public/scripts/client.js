console.log('JS is sourced!');
getToDoList();  //calling the function upon DOM loading

// * When the DOM loads, our `client.js` file will need 
//to execute a function that makes an HTTP `GET /todos` request.

function getToDoList() {
    axios.get('/todos')
      .then(response => {
        let todoData = response.data;
        console.log('This is the todo data we GET from server:', todoData);
    
        showToDoList(todoData);
      })
    
      .catch((err) => {
        console.log('Error in getting data!', err);
      })
    } // end of getToDoList



// ===================== DISPLAY IN HTML FUNCTION =====================
// When the data arrives client-side, need to loop through the 
// array of objects and render a <tr> for each to-do item.
// (Inside the <tbody>.)

function showToDoList(data) {
  console.log('This is the data to be displayed. Is this correct?:', data);
  let viewTodos = document.getElementById('viewTodos');

  //***** */ IF isComplete === true, 'Complete' button doesn't exist
  //***** */ ELSE, 'Complete' button exists
  viewTodos.innerHTML = '';
  for(let task of data) { // for each object of the array
    
    console.log(`Is ${task.text} complete? ${task.isComplete}`);
    if(task.isComplete === true) { //putting the idtag on line 40 took 1hr :/ 
      viewTodos.innerHTML += `
      <tr data-testid="toDoItem">  
        <td>${task.text}</td>
        <td>${task.isComplete}</td>
        <td><button data-testid="completeButton" onClick="completeTask(${task.id})">Task?</button></td>
        <td><button data-testid="deleteButton" onClick="deleteTask(${task.id})">Delete Task</button></td>
      </tr>`;
    
    } else {     
      viewTodos.innerHTML += `
      <tr>          
        <td>${task.text}</td>
        <td>${task.isComplete}</td>
        <td><button data-testid="completeButton" onClick="completeTask(${task.id})">Complete Task?</button></td>
        <td><button data-testid="deleteButton" onClick="deleteTask(${task.id})">Delete Task</button></td>
      </tr>`;

    } // end of IF statement
    
  } // end of FOR loop
} // end of displayTodos

// ===================== DELETE FUNCTION (Needs getTodos function in .then) =====================
// Create an onclick delete <button> 

console.log ("In deleteTask()") 
function deleteTask(taskId) {
    console.log("This is the task's id in client:", taskId);
   
    Swal.fire({
      title: "Are you sure you want to delete?",
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: "Yes, Delete",
      denyButtonText: `No, Do Not Delete`
    }).then((result) => {
  
      if (result.isConfirmed) {
        Swal.fire("Deleted", "", "success");
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
      } else if (result.isDenied) {
        Swal.fire("No Changes Made", "", "success");
      }
    });
  
  }
  // end of deleteTask()

// ============ UPDATE COMPLETED STATUS ==================
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
// end of completeTask()

// in the showToDoList()for each item in the to do list in client.js  
// Using the onclick to make an http DELETE /todos request w/axios in client.js 
// to server.js
// Create an onclick completed button for each to do item in html table
// Event makes an http request w/axios and .then to server (completed = TRUE)






//     * This button must be a child of the element that has the `data-testid="toDoItem"` on it.
// 6. Each completed to-do item must have:
//     * A CSS class of `completed` applied to its `data-testid="toDoItem"` element.
//     * Examples of "completed" to-do items:
//       * ```js
//           <tr data-testid="toDoItem" class="completed">...</tr>
//           -->







 


// ============ UPDATE TRANSFER STATUS ==================





// ===================== BUTTON && POST FUNCTION =====================

function addTask (event){
// gather input info in variables
  event.preventDefault();
  console.log("Submit Button Clicked");
  let task = document.getElementById('toDoTextInput').value;
  console.log("Variables Match:", task);

  //Put variables into object (creates object)
let newTask = {
  task: task
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

    getToDoList();

  }).catch(function(error) {
    console.log('error in todosPOST', error); 
    alert('Error adding todos object. Please try again.')       
  });

}




