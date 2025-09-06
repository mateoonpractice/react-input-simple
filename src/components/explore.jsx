import React , { useState } from 'react'
import '../App.css';

function Explore() {
  const coverArtist = "https://raw.githubusercontent.com/mateoonpractice/react-input-simple/e6ca219c0690906b6634e1103197d6177bf9828a/src/images/triples-artist.jpg";

  return (
    <div className="main-content">
        {/* Banner */}
        <div className="banner">
          <h1>Explora entre nuevos géneros</h1>
          <p>Agrega a tu playlist lo que quieras</p>
        </div>

        {/* Top Artistas */}
        <div className="cinta-artista">
          <h3>TOP ARTISTAS</h3>
          <div className="top-artists">
            <div className="card-artist">
              <img src={coverArtist} alt="tripleS"/>
              <h4>tripleS</h4>
              <p>30M Plays</p>
            </div>

            <div className="card-artist">
              <img src="https://raw.githubusercontent.com/mateoonpractice/react-input-simple/refs/heads/main/src/images/Artists/fromis9.jpg" alt="fromis_9"/>
              <h4>fromis_9</h4>
              <p>100M Plays</p>
            </div>

            <div className="card-artist">
              <img src="https://raw.githubusercontent.com/mateoonpractice/react-input-simple/refs/heads/main/src/images/Artists/londongrammar.jpg" alt="londongrammar"/>
              <h4>London Grammar</h4>
              <p>45M Plays</p>
            </div>
            
            <div className="card-artist">
              <img src="https://raw.githubusercontent.com/mateoonpractice/react-input-simple/refs/heads/main/src/images/Artists/oliviadean.jpg" alt="Olivia Dean"/>
              <h4>Olivia Dean</h4>
              <p>16M Plays</p>
            </div>
            
            <div className="card-artist">
              <img src="https://raw.githubusercontent.com/mateoonpractice/react-input-simple/refs/heads/main/src/images/Artists/unnamed.jpg" alt="Red Velvet"/>
              <h4>Red Velvet</h4>
              <p>259M Plays</p>
            </div>

            <div className="card-artist">
              <img src="https://raw.githubusercontent.com/mateoonpractice/react-input-simple/refs/heads/main/src/images/Artists/abovebeyond.jpg" alt="Above & Beyond"/>
              <h4>Above & Beyond</h4>
              <p>137M Plays</p>
            </div>
          
          </div>
        </div>
      </div> 
  );
}

export default Explore
