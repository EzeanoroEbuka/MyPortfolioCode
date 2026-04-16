import React from 'react'
import NavBar from './components/homeScreen/NavBar'
import Home from './components/homeScreen/HomeScreen'
import About from './components/about/About'
import Skills from './components/skills/Skills'
import Projects from './components/project/projects'
import Contact from './components/contact/ContactMe'
import './App.css'

function App() {
  return (
    <>
      <NavBar />
      <main>
        <Home /> 
        <About />
        <Skills />
        <Projects />
      </main>
      <Contact />
    </>
  )
}

export default App
