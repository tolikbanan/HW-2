import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MovieWatchlist from './components/MovieWatchlist'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <MovieWatchlist/>
    </>
  )
}

export default App
