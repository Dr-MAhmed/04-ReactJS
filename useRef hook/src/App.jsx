import { useEffect, useState, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  // let a = 0
  // const a = useRef(0);
  const btnRef = useRef();
// We use useRef because we don't want to change the state of the component
// and also use this hook for Dom Menipulation in react.js...
  useEffect(() => {
    // a = a + 1
    // a.current = a.current + 1
    // console.log(`rerendering of a is ${a.current}`)
  })

  useEffect(() => {
    console.log("First Rendering")
    btnRef.current.style.backgroundColor = "red"
  }, [])
  
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button ref={btnRef} onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
        We use useRef because we don't want to change the state of the component and also use this hook for Dom Manipulation in react.js...
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <button onClick={()=>{btnRef.current.style.backgroundColor = "purple"}}>Change Me</button>
    </>
  )
}

export default App
