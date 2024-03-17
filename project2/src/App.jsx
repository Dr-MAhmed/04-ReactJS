import { useState, useEffect } from 'react'
import './App.css'
import Navbar from './components/Navbar';

function App() {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState(1);
  useEffect(() => {
    alert("Hey i am listening when the count is updated");
    setColor(color + 1);
  }, [count])
  

  return (
    <>
    <Navbar color={"Navy" + "Blue" + color}/>
    <h1>{count}</h1>
    <button onClick={()=>{setCount(count + 1)}}>Update Count</button>
    </>
  )
}

export default App
