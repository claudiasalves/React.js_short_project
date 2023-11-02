import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    document.title = `Clicked ${count} times`
  })

  const increment = () => {
    setCount(count + 1)
  }
  

  return (
    <>
      <div className="card">
        <button onClick={increment}>
          Count is {count}
        </button>
        </div>
    </>
  )
}

export default App
