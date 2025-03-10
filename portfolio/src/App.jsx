import { useState } from 'react'
import Home from './components/homeScreen/HomeScreen'
import About from './components/about/About'
import Skills from './components/skills/Skills'
import NavBar from './components/homeScreen/NavBar'
import Projects from './components/project/projects'
import Contact from './components/contact/ContactMe'
import './App.css'

function App() {

  return (
    <>
      <NavBar />
      <Home /> 
      <About />
      <Skills />
      <Projects />
      <Contact />
    </>
  )
}

export default App
