import React from 'react'
import "./Team.css"
import CommunityMobile from "../images/CommunityMobile.webp"
import communityDesktop from "../images/Community.webp"
import unleash from "../images/unleash.webp"
import team from "../images/team.webp"
import Careerteam from "../images/CareersMobile.webp"
import { teamCard } from "../data"
import Fade from 'react-reveal/Fade';

// background-career1
// background-career2
const Team = () => {
  return (
      <>
          <div className='team-container'>
              <div className='essentials'>
                  <strong className='team1'>TEAM ESSENTIALS</strong>
                   <p className='team2'>Explore resources to unleash the potential of your team</p>
              </div>
              <Fade bottom>
              <div className='team-Img'>
                  <img src={CommunityMobile} alt="" className='team-mobile' />
                  <img src={communityDesktop} alt="" className='team-desktop' />
                  <p className='community'>Atlassian Community</p>
                  <p className='connect'>Connect globally and meet locally to get more out of our products.</p>
                  <div className='team-link'>
                      <a href="">Search the forum</a>
                      <a href="">Join our community</a>
                  </div>
                  </div>   
              </Fade>    
          </div>  

          {/* team card */}   
               
          
          <div className="team-card">    
                  {teamCard.map((item) => {
                      const { id, img, heading, info, link,background } = item;
                      return   <div key={id} className="TeamGrid" style={{background: `${background}`}}>
                          <div className='TeamContainer'>
                             <img src={img} alt=""  />
                              <p className='community'>{ heading}</p>
                              <p className='connect'>{info }</p>
                              <a href="">{link}</a>
                              </div>
                      </div>

                  })}
              </div> 

              {/* event section */}
              <div className="event-container">
                  <div className="event-info">
                      <p className='event'>EVENT</p>
                      <p className='event2'>Hear from today’s fearless builders and innovators</p>
                      <a href="">Learn more</a>
                  </div>
                  <div className='eventImg1'>
                      <img src={unleash} alt="" />
                  </div>
                  <div className='eventImg2'>
                      <img src={team} alt="" />
                  </div>
          </div>
          
          {/*  Career  */}
          <div className="career">
              <p className='career1'>CAREERS</p>
              <p className='career2'>We can’t do it alone</p>
              <p className='career3'>We have an ambitious road ahead, and we’re looking for people to join our global team to help shape the future of Atlassian.</p>
              <button>Join the team</button>
              <div className='img-career'>
                  <img src={Careerteam} alt="" />
                </div>
          </div>         
      </>
  )
}

export default Team
