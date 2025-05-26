import { useState, useEffect, useMemo } from "react";
import "./App.css";
import {
  useQuery,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";

async function getTodos() {
  const request = await fetch("https://jsonplaceholder.typicode.com/todos");
  return await request.json();
}
async function getPosts() {
  const request = await fetch("https://jsonplaceholder.typicode.com/posts");
  return await request.json();
}
async function getUsers() {
  const request = await fetch("https://jsonplaceholder.typicode.com/users");
  return await request.json();
}
async function getComments() {
  const request = await fetch("https://jsonplaceholder.typicode.com/comments");
  return await request.json();
}
function App() {
  const queryT = useQuery({ queryKey: ["todos"], queryFn: getTodos });
  const queryP = useQuery({ queryKey: ["posts"], queryFn: getPosts });
  const queryU = useQuery({ queryKey: ["users"], queryFn: getUsers });
  const queryC = useQuery({ queryKey: ["comments"], queryFn: getComments });
  const [query, setQuery] = useState("");
  const [queryUsers, setQueryUsers] = useState("");
  const [queryComments, setQueryComments] = useState("");
  const filterComments = useMemo(
    () =>
      queryC.data?.filter((comments) =>
        comments.name.toLowerCase().includes(queryComments.toLowerCase())
      ),
    [queryC.data, queryComments]
  );
  const filterTodos = useMemo(
    () => queryT.data?.filter((item) => item.title.includes(query)),
    [queryT.data, query]
  );
  const filterUsers = useMemo(
    () =>
      queryU.data?.filter((user) =>
        user.name.toLowerCase().includes(queryUsers.toLowerCase())
      ),
    [queryU.data, queryUsers]
  );
  console.log(filterComments);
  return (
    <>
      <form action="">
        <label htmlFor="">Comments</label>
        <input
          type="text"
          value={queryComments}
          onChange={(event) => {
            setQueryComments(event.target.value);
          }}
        />
        <button>search</button>
      </form>
      <form action="">
        <label htmlFor="">Todos</label>
        <input
          type="text"
          value={query}
          onChange={(event) => {
            setQuery(event.target.value);
          }}
        />
        <button>search</button>
      </form>
      <form action="">
        <label htmlFor="">Usres</label>
        <input
          type="text"
          value={queryUsers}
          onChange={(event) => {
            setQueryUsers(event.target.value);
          }}
        />
        <button>search</button>
      </form>
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
            <th>name</th>
            <th>email</th>
          </tr>
        </thead>
        <tbody>
          {filterComments?.map((item) => {
            return (
              <tr className="users" key={item.id}>
                <td>{item.name}</td>
                <td>{item.email}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <table>
        <thead>
          <tr>
            <th>name</th>
            <th>email</th>
          </tr>
        </thead>
        <tbody>
          {filterUsers?.map((item) => {
            return (
              <tr className="comments" key={item.id}>
                <td>{item.name}</td>
                <td>{item.email}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <table>
        <thead>
          <tr>
            <th>todos</th>
            <th>todos complet</th>
          </tr>
        </thead>
        <tbody>
          {filterTodos?.map((item) => {
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
          {queryP.data?.map((item) => {
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
