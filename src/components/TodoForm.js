import React, { useState } from "react"
import { useTodos } from "../redux/ducks/todos"
import TodoList from "./TodoList"



export default function(props) {
  const { add } = useTodos()
  const [todo, setTodo] = useState("")

  function handleSubmit(e) {
    e.preventDefault()
    if (todo!=""){

    

    add(todo)
    setTodo("")
    }
  }

  return (
    <div className="container">
      <p className="enun"> todos</p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={e => setTodo(e.target.value)}
          placeholder="What needs to be done?"
          value={todo}
        />
      </form>
      <TodoList />
      

    </div>
  )
}
