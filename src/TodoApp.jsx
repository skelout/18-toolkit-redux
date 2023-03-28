import { useState } from "react";
import { useGetTodosQuery, useGetTodoQuery} from "./store/apis";

export const TodoApp = () => {
  const [todoId, setTodoId] = useState(1);
  // El data: todo signigica que ahora el data se llamará todo (como un alias)
  const { data: todo, isLoading } = useGetTodoQuery(todoId);
  const nextTodo = () => {
    setTodoId(todoId+1);
  }
  const prevTodo = () => {
    if (todoId === 1) return;
    setTodoId(todoId-1);
  }
  return (
    <>
      <h1>Todos - RTK Query</h1>
      <hr />

      <h4>isLoading: {isLoading ? "True" : "False"}</h4>
      <pre> {JSON.stringify(todo)} </pre>


      <button onClick={ nextTodo }>Next todo</button>
      <button onClick={ prevTodo }>Prev todo</button>
        {/* <ul>
            {todos.map( todo => (
                
                <li key={todo.id}>
                    <strong>{todo.completed ? 'DONE' : 'PENDING'}</strong> {todo.title}
                </li>
            ))}
        </ul> */}
    </>
  );
};
