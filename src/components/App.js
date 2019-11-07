import React from "react"
import { Provider } from "react-redux"
import store from "../redux/store"
import TodoForm from "./TodoForm"

function App() {
  return (
    <Provider store={store}>
        <TodoForm />
    </Provider>
  )
}

export default App
