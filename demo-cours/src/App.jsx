import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hello from './Hello.jsx';
//import ShoppingList from './ShoppingList.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Hello/>
    </>
  )
}

export default App
