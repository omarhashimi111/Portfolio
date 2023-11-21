import { useState } from 'react'
import './App.scss'
import { Route, Routes } from 'react-router-dom'
import Layout from "./components/Layout/index"
import Home from './components/Home/Home'
import About from './components/About/About'
import Contact from './components/Contact/Contact'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path='/Portfolio' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/Portfolio/about' element={<About />} />
          <Route path="/Portfolio/contact" element={<Contact />} />
        </Route>
      </Routes> 
    </>
  )
}

export default App
