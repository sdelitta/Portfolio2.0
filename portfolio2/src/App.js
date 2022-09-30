import React from 'react'
import './CSS/App.css'
import Boo from './Components/Boo.jsx'
import './CSS/Boo.css'

function App() {
  return (
    <div className="App" >
      <header>
        <div className="title">
          <h1>Steven DeLitta</h1>
          <h5>Software Engineer // Aerial Videographer // Percussionist</h5>
        </div>
        <div></div>
      </header>
      <body className="main">
        <div></div>
        <Boo />
        <div className="projects">
          <h1>Projects</h1>
          <div className="pet">
            <img src="./MEDIA/PetPurrsuit.png" alt=""/>
          </div>
        </div>
        <div className="video-parent">
          <div className="videos">
            <div className="aerial">
              <h1>Aerial Videography</h1>
              <div className="aerial-videos">
                <iframe src="https://www.youtube.com/embed/QNz3TAI1pSU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <iframe src="https://www.youtube.com/embed/RkecKKOcKLo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </div>
            </div>
            <div className="drums">
              <h1>Drumming</h1>
              <div className="drum-videos">
              <iframe src="https://www.youtube.com/embed/yvG5ojOT8l4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              <iframe src="https://www.youtube.com/embed/1bfFwtMid_M" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              <iframe src="https://www.youtube.com/embed/x0F8-viSHEs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </div>
            </div>
          </div>
        </div>
        <div className="main-bottom"></div>
      </body>
      <div className="footer-parent">
        <div className="footer">.</div>
      </div>
    </div>
  )
}

export default App
