import { useState, useEffect } from 'react'
import './App.css';

function App() {
  const [counter, setCounter] = useState(0);

  useEffect(()=>{
    alert('you have changed the counter to '+ counter)
  }, [])


  return (
    <div className="App">
      <button onClick={()=>setCounter((prevCounter)=>prevCounter-1)}>-</button>
      <h1>{counter}</h1>
      <button onClick={()=>setCounter((prevCounter)=>prevCounter+1)}>+</button>
    </div>
  );
}

export default App;
