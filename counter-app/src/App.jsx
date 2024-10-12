import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  function subtract() {
    setCount(count - 1);
  }

  function reset() {
    setCount(0);
  }


  return (
    <>
      <div className='Heading'>
        <h1>Counter App</h1>
      </div>
      <div className="increment">
        <button onClick={handleClick}>
          count + 1
        </button>
      </div>
      <div className="decrement">
        <button onClick={subtract}>
          count - 1
        </button>
      </div>
      <div className="reset">
        <button onClick={reset}>
          count = 0
        </button>
      </div>
      <div className="ct">
        <p>Your Count is {count}</p>
      </div>

    </>
  )
}

export default App
