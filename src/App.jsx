import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  // let value = 10;
  const [count, setCount] = useState(10)
  const handleClick = () => {
    // value = value + 1;
    // console.log(value);
    setCount(count + 1);
    console.log(count);
  }

  return (
    <>
      <section id="center">
        <button onClick={handleClick}>Click me</button>
        
        {count}
        
        <button
          type="button"
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button>
      </section>

  
    </>
  )
}

export default App
