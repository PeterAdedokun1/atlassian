import React, { useState } from 'react'
import "./Main.css"
import teamWork from "../images/team-work.webp"
import Tab from './Tab'
import Team from './Team'
const Main = () => {
 
  return (
    <>
      <div className='main-container'>
          <div>
              <h1>It's possible  <br /> <span>with team work</span></h1>
          </div>
          <div className='team-img'>
              <img src={teamWork} alt="" />
      </div>

      </div>
      <Tab />
      <Team/>

      </>
  )
}

export default Main