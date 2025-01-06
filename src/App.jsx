import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Generator from './components/Generator'
import Hero from './components/Hero'
import Workout from './components/Workout'

function App() {

  return (
    <>
      <Hero />
      <Generator />
      <Workout />
    </>
  )
}

export default App
