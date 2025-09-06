import React , { useState } from 'react'
import '../App.css';

function UserLibrary() {
  const plnCover = "src/images/playlist-covers/9119032284004929661.jpg";

  return (
    <div className="library">
      <div className="pl-badge">
        <img className="pl-cover" src="https://raw.githubusercontent.com/mateoonpractice/react-input-simple/e6ca219c0690906b6634e1103197d6177bf9828a/src/images/playlist-covers/6422827766082028863.jpg" alt="Indie Pop" />
        <p className="pl-title">Indie Pop</p>
        <p className="pl-sub">50 pistas</p>
      </div>
      <div className="pl-badge">
        <img className="pl-cover" src="https://raw.githubusercontent.com/mateoonpractice/react-input-simple/e6ca219c0690906b6634e1103197d6177bf9828a/src/images/playlist-covers/6537858224217615324.jpg" alt="EDM 2018" />
        <p className="pl-title">EDM 2018</p>
        <p className="pl-sub">45 pistas</p>
      </div>
      <div className="pl-badge">
        <img className="pl-cover" src="https://raw.githubusercontent.com/mateoonpractice/react-input-simple/e6ca219c0690906b6634e1103197d6177bf9828a/src/images/playlist-covers/triples.jpg" alt="tripleS" />
        <p className="pl-title">Lovelution - TripleS</p>
        <p className="pl-sub">7 pistas</p>
      </div>
      <div className="pl-badge">
        <img className="pl-cover" src="https://raw.githubusercontent.com/mateoonpractice/react-input-simple/e6ca219c0690906b6634e1103197d6177bf9828a/src/images/playlist-covers/lofi.jpg" alt="Lofi Beats" />
        <p className="pl-title">Lofi Beats</p>
        <p className="pl-sub">75 pistas</p>
      </div>
      <div className="pl-badge">
        <img className="pl-cover" src="https://raw.githubusercontent.com/mateoonpractice/react-input-simple/e6ca219c0690906b6634e1103197d6177bf9828a/src/images/playlist-covers/3451190402494226571.jpg" alt="Progressive and Trance" />
        <p className="pl-title">Progressive & Trance</p>
        <p className="pl-sub">67 pistas</p>
      </div>
      <div className="pl-badge">
        <img className="pl-cover" src={plnCover} alt="Mejores del año" />
        <p className="pl-title">Mejores del año</p>
        <p className="pl-sub">25 pistas</p>
      </div>
    </div>
  );
};

export default UserLibrary
