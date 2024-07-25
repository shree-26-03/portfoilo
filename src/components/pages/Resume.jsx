import React from 'react'
import './Resume.css'

const Resume = () => {
  return (
    <div className='resume'>

      <div className="left">

         <div className="info zoom-in">
            <h1>Hania</h1>
            <p>Web & App Developer</p>
            <p>hania1422@gmail.com</p>
            <p><i class="ri-map-pin-line"></i> Karachi | Pakistan</p>
         </div>

        <div className="buttons info zoom-in">
         <a href='#' target='_blank'><i class="ri-github-line"></i> Github</a>
         <a href='#' target='_blank'><i class="ri-linkedin-line"></i> Linkedin</a>
         <a href='#' target='_blank'><i class="ri-instagram-line"></i> Instagram</a>
         <a href='#' target='_blank'><i class="ri-file-chart-line"></i> Resume</a>
        </div>  
        
      </div>

      <div className="right fade-up">

      <div className="exprience">
      <h1>Experience</h1>
         <h4>Graphic Designer</h4>
         <p>Remote / 2020 - present</p>
          <ul>
            <li>I cultivated technical skills and teamwork while working with a dynamic team.
            </li>

            <li>Acquired valuable experience in operating effectively
            under pressure within challenging work environments.  
            </li>

            <li>Got proficiency in latest design trends and creative ideas. 
            </li>

            <li>Gained a clear understanding of color theory.
            </li>
          </ul>

          <br /><br />
          <h4>Fronted Developer</h4>
         <p>Remote / 2022 - present</p>
          <ul>
            <li>I cultivated technical skills and teamwork while working with a dynamic team.
            </li>

            <li>Acquired valuable experience in operating effectively
            under pressure within challenging work environments.  
            </li>

            <li>Got proficiency in latest design trends and creative ideas. 
            </li>

            <li>Gained a clear understanding of color theory.
            </li>
          </ul>
      </div>  
        
        <div className="skills">
          <h1> Skills</h1>
            <ul>
              <li>JavaScript / React </li>
              <li>Html, Bootstrap, Tailwind Css</li>
              <li>Express JS, Node JS, Php, Mongo DB, MySql</li>
              <li>Git / Github</li>
              <li>WordPress</li>
              <li>Microsoft office suite</li>
              <li>Adobe creative suite</li>
            </ul>
        </div>
         
 
      <div className="soft-skills">
          <h1> Soft Skills</h1>
              <ul>
                <li> Effective communication </li>
                <li>Problem solving</li>
                <li>Adaptility</li>
                <li>Ability to learn quickly</li>
                <li>Attention to details</li>
                <li>Team work & collaboration</li>
                <li>Critical thinking</li>
              </ul>
      </div>
          
      <div className="certificate">
           <h1> Certificates</h1>
           <ul>
            <li> Best web designer certificate </li>
            <li>Best Web Developer </li>
            <li>HRCA competition winner</li>
           </ul>

      </div>
          
      </div>

    </div>
  )
}

export default Resume
