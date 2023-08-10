import "./App.css";
import { useState, useRef, useEffect } from "react";
import Todo from "./components/Todo.jsx";
import Header from "./components/Header.jsx";

function App() {
  // State
  // define a state variable called todos as well as a function to update it, initialize it to an empty array
  // state variables are used to store data that is used by the component and can change over time. When the state variable changes, the component re-renders
  const [todos, setTodos] = useState([]);

  // Ref that is linked to the input element and stores the value of the input element independent of the component's state and re-rendering
  const todoText = useRef();

  // Side Effects / Lifecycle
  // this function runs when the component is first rendered
  useEffect(() => {
    // get the todos from local storage
    const savedTodos = JSON.parse(localStorage.getItem("todos"));
    // if there are todos in local storage, set the state variable to those todos
    setTodos(savedTodos ? savedTodos : []);
  }, []);

  // Create and Delete Todos

  // this function runs when the form is submitted and adds a new todo to the list
  function addTodo(event) {
    // stop the form from submitting and refreshing the page
    event.preventDefault();
    // create a simple object with the todo text and a unique id
    const newTodo = {
      // the value of the input element
      text: todoText.current.value,
      // a unique id, in this case the current timestamp
      id: Date.now(),
    };
    // spread syntax, fill the existing todos into this array, and add the value of the input element to the end of the array
    const newTodoArray = [...todos, newTodo];
    // overwrite the existing state variable that has the old todos with the new one that has the old todos plus the new one
    setTodos(newTodoArray);
    // save them to local storage
    localStorage.setItem("todos", JSON.stringify(newTodoArray));

    // clear the input element
    todoText.current.value = null;
    // focus the input element
    todoText.current.focus();
  }

  // this function runs when the delete button is clicked and deletes a todo from the list
  // each todo gets passed this function as a prop, and any that are clicked will call this function with their id passed in as an argument
  function deleteTodo(id) {
    // filter out the todo with the id that was passed in
    const newTodoArray = todos.filter((todo) => todo.id !== id);
    // overwrite the existing state variable that has the old todos with the new one that has the old todos minus the one that was deleted
    setTodos(newTodoArray);
    // save them to local storage
    localStorage.setItem("todos", JSON.stringify(newTodoArray));
  }

  const todoListItems = [];
  for (const todo of todos) {
    todoListItems.push(
      <Todo key={todo.id} todo={todo} onDelete={deleteTodo} />
    );
  }

  return (
    <div className="App">
      <Header subtitle={"This is a prop being passed down"} />

      {/* list of todo items */}
      <ul>{todoListItems}</ul>

      {/* form to add todo items */}
      <form onSubmit={addTodo}>
        {/* this input has a ref attribute, which is a special attribute that allows us to access the input element in the DOM */}
        <input ref={todoText} type="text" placeholder="Enter todo here" />
        <input type="submit" value="Add Todo" />
      </form>
    </div>
  );
}

export default App;
