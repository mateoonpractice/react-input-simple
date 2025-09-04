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
              <img src={coverArtist} alt="tripleS"/>
              <h4>tripleS</h4>
              <p>30M Plays</p>
            </div>

            <div className="card-artist">
              <img src={coverArtist} alt="tripleS"/>
              <h4>tripleS</h4>
              <p>30M Plays</p>
            </div>
            
            <div className="card-artist">
              <img src={coverArtist} alt="tripleS"/>
              <h4>tripleS</h4>
              <p>30M Plays</p>
            </div>
            
            <div className="card-artist">
              <img src={coverArtist} alt="tripleS"/>
              <h4>tripleS</h4>
              <p>30M Plays</p>
            </div>

            <div className="card-artist">
              <img src={coverArtist} alt="tripleS"/>
              <h4>tripleS</h4>
              <p>30M Plays</p>
            </div>
          
          </div>
        </div>
      </div> 
  );
}

export default Explore
