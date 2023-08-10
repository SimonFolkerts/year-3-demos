export default function Todo(props) {
  // when the delete button is clicked, call the onDelete function passed down from the parent
  function handleDelete() {
    // pass the id of the todo to be deleted as an argument to the onDelete function from the parent
    // the parent will then filter out the todo with the matching id
    props.onDelete(props.todo.id);
  }

  return (
    <li>
      <p>{props.todo.text}</p>
      <button onClick={handleDelete}>Delete</button>
    </li>
  );
}
