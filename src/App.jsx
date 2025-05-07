import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((json) => setTodos(json));

    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => setPosts(json));
  }, []);
  console.log(todos);
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>todos</th>
            <th>todos complet</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((item) => {
            return (
              <tr className="todos" key={item.id}>
                <td>{item.title}</td>
                <td>{item.completed ? "yes" : "no"}</td>
              </tr>
            );
          })}
        </tbody>
      </table>

      {posts.map((item) => {
        return <div key={item.id}>{item.title}</div>;
      })}
    </>
  );
}

export default App;
