import React from 'react'
import Hero from './Hero'
import About from './About'
import Services from './Services'
import Projects from './ProjectsComponent'
import ProjectsComponent from './ProjectsComponent'
import Contact from './Contact'

const Home = () => {
  return (
    <div>
      <div><Hero /></div>
      <div><About /></div>
      <div><Services /></div>
      <div><ProjectsComponent /></div>
      <div><Contact /></div>
      
    </div>
  )
}

export default Home
