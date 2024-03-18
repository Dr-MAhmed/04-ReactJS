import { useState, useRef } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [showbtn, setShowbtn] = useState(true)
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: 'Todo 1',
      desc: "Hey i am a first todo",
      completed: false
    },
    {
      id: 2,
      title: 'Todo 2',
      desc: "Hey i am a second todo",
      completed: false
    }
  ])

  const Todo = ({todo})=>{
    return (<>
      <div key={todo.id} className='m-4 border border-purple-500'>
            <h2>{todo.title}</h2>
            <h2>{todo.desc}</h2>
            <h3>{todo.completed}</h3>
          </div>  
    </>)
  }

  return (
    <>
    {/* Counter Button */}
     <button onClick={() => setCount(count + 1)}>
          Count is {count}
        </button>
      <h1>Vite + React</h1>

      {/* Conditional rendering */}
      {showbtn? <button style={{backgroundColor: 'purple'}}>setbtn is true</button>: <button style={{backgroundColor: 'red'}} >setbtn is false</button>}
      <div className="card">
        <button onClick={() => {
          setShowbtn(!showbtn);
        }}>
          Toggle show btn
        </button>

        {/* Another way to do a Conditional rendering/ list rendering */}
        {todos.map(todo =>{
          return ( <div key={todo.id} className='m-4 border border-purple-500'>
            <h2>{todo.title}</h2>
            <h2>{todo.desc}</h2>
            <h3>{todo.completed}</h3>
          </div>
          )
        })}
        </div>
    </>
  )
}

export default App
