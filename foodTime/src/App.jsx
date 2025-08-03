import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import Exploration from './components/Exploration'
import Features from './components/Features'
import Faq from './components/Faq'
import FoodAppPromo from './components/FoodappPromo'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <NavBar/>
    <Hero/>
    <Exploration/>
    <Features/>
    <Faq />
    <FoodAppPromo/>
    <Footer/>
    </>
  )
}

export default App
