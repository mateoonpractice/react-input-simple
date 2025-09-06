import React , { useState } from 'react'
import '../App.css';

function PlayingNowCover() {
  const plnCover = "https://raw.githubusercontent.com/mateoonpractice/react-input-simple/e6ca219c0690906b6634e1103197d6177bf9828a/src/images/songs-covers/diablotriples.jpg";

  return (
    <div className="playing-now">
      <h3>Reproduciendo</h3>
      <img className="pln-cover" src={plnCover} alt="cover"/>
      <p className="pln-title">Friend Zone</p>
      <p className="pln-artist">tripleS</p>
    </div>
  );
}

export default PlayingNowCover;
