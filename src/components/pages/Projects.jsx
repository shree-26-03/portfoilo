import React from 'react'
import './projects.css'
import { useEffect } from 'react';

const Projects = () => {

  useEffect(() => {
    const windows = document.querySelectorAll('.window');
  
    windows.forEach((window, index) => {
      setTimeout(() => {
        window.classList.add('zoom-in'); 
      }, index * 100);
    });
  }, []);
  

  return (

    <div className='work'>
       <h1> Have a look at my work 💞 💻 </h1>

       <div className="work_cards">

          <div className="window">
            <img src="src\assets\website1.png" alt="" />
            <h2>Flower Shop</h2>
            
            <div className="languages">
              <span id='pink'>Html</span>
              <span id='purple'>CSS</span>
              <span id='yellow'>JavaScript</span>
            </div>
            
            <br />

            <div className="btn">
              <a href='#'><i class="ri-github-fill"></i></a>
              <a href='#'><i class="ri-links-fill"></i></a>
            </div>
            
          </div>

          <div className="window">
            <img src="src\assets\web-design1.png" alt="" />
            <h2>AI Article Summarizer</h2>
            
            <div className="languages">
              <span id='pink'>React</span>
              <span id='purple'>Html</span>
              <span id='yellow'>Tailwind Css</span>
            </div>
            
            <br />

            <div className="btn">
              <a href='#'><i class="ri-github-fill"></i></a>
              <a href='#'><i class="ri-links-fill"></i></a>
            </div>
            
          </div>

          <div className="window">
            <img src="src\assets\website3.png" alt="" />
            <h2>Swimming Academy</h2>
            
            <div className="languages">
              <span id='pink'>Html</span>
              <span id='purple'>CSS</span>
              <span id='yellow'>JavaScript</span>
            </div>
            
            <br />

            <div className="btn">
              <a href='#'><i class="ri-github-fill"></i></a>
              <a href='#'><i class="ri-links-fill"></i></a>
            </div>
            
          </div>

          <div className="window">
            <img src="src\assets\website4.png" alt="" />
            <h2>Crypto Website</h2>
            
            <div className="languages">
              <span id='pink'>Html</span>
              <span id='purple'>CSS</span>
              <span id='yellow'>JavaScript</span>
            </div>
            
            <br />

            <div className="btn">
              <a href='#'><i class="ri-github-fill"></i></a>
              <a href='#'><i class="ri-links-fill"></i></a>
            </div>
            
          </div>

          <div className="window">
            <img src="src\assets\website2.png" alt="" />
            <h2>Restaurant Website</h2>
            
            <div className="languages">
              <span id='pink'>Html</span>
              <span id='purple'>CSS</span>
              <span id='yellow'>JavaScript</span>
            </div>
            
            <br />

            <div className="btn">
              <a href='#'><i class="ri-github-fill"></i></a>
              <a href='#'><i class="ri-links-fill"></i></a>
            </div>
            
          </div>

          <div className="window">
            <img src="src\assets\website5.png" alt="" />
            <h2>Sushi Online Shop</h2>
            
            <div className="languages">
              <span id='pink'>Html</span>
              <span id='purple'>CSS</span>
              <span id='yellow'>JavaScript</span>
            </div>
            
            <br />

            <div className="btn">
              <a href='#'><i class="ri-github-fill"></i></a>
              <a href='#'><i class="ri-links-fill"></i></a>
            </div>
            
          </div>
          
       </div>

    </div>
  )
}

export default Projects
