import React from 'react'
import "./App.css"
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Presentation from './Components/Presentation'
import Slider from './Components/Slider'
import Video from './Components/Video'
import Time from './Components/Time'
import BombArea from './Components/BombArea'


const App = () => {
  return (
    <>
    <Navbar></Navbar>
    <Hero></Hero>
    <Presentation></Presentation>
    <Slider></Slider>
    <Video></Video>
    <Time></Time>
    <BombArea></BombArea>
    </>
  )
}

export default App