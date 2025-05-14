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
      <div className="flex flex-wrap gap-[17.5px] flex-row md:flex-col">
        <button className="flex-1 py-2 bg-blue-500 text-white rounded hidden md:block">
          4
        </button>

        <button className="flex-1 py-2 bg-blue-500 text-white rounded">
          5
        </button>

        <button className="flex-1 py-2 bg-blue-500 text-white rounded  md:hidden">
          6
        </button>
      </div>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <div className="flex gap-2 justify-between">
        <div>1</div>
        <div>2</div>
        <div>3</div>
      </div>
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
      <table>
        <thead>
          <tr>
            <th>posts</th>
            <th>posts body </th>
          </tr>
        </thead>
        <tbody>
          {posts.map((item) => {
            return (
              <tr className="posts" key={item.id}>
                <td>{item.title}</td>
                <td>{item.body}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default App;
