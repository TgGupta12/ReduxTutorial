import './App.css'
import {useDispatch, useSelector} from "react-redux"
import { decrement, increment, incrementByAmount, reset } from './features/counterSlice';
import { useState } from 'react';

function App() {

  const [amnt,setAmnt] = useState(0);
const count=useSelector((state)=> state.counter.value);
const dispatch=useDispatch();
  function handleIncrementClick(){
    dispatch(increment());
  }
  function handleDecrementClick(){
    dispatch(decrement());
  }
  function handleIncrementByClick(){
    dispatch(incrementByAmount(Number(amnt)));
  }
  function handleReset(){
    dispatch(reset());
  }
  return (
    <div className="container">
      <button onClick={handleIncrementClick}>+</button>
      <p>{count}</p>
      <button onClick={handleDecrementClick}>-</button>
      <br />
      <input type="number" placeholder='Enter the amount by you want to inc your counter' onChange={(e)=>setAmnt(e.target.value)} />
      <button onClick={handleIncrementByClick}>Submit</button>
      <br />
      <button onClick={handleReset}> RESET </button>
    </div>
  )
}

export default App
