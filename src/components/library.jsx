import React , { useState } from 'react'
import '../App.css';

function UserLibrary() {
  const plnCover = "src/images/playlist-covers/9119032284004929661.jpg";

  return (
    <div className="library">
      <div className="pl-badge">
        <img className="pl-cover" src={plnCover} alt="Playlist 1" />
        <p className="pl-title">Playlist 1</p>
        <p className="pl-sub">25 pistas</p>
      </div>
      <div className="pl-badge">
        <img className="pl-cover" src={plnCover} alt="Playlist 1" />
        <p className="pl-title">Playlist 1</p>
        <p className="pl-sub">25 pistas</p>
      </div>
      <div className="pl-badge">
        <img className="pl-cover" src={plnCover} alt="Playlist 1" />
        <p className="pl-title">Playlist 1</p>
        <p className="pl-sub">25 pistas</p>
      </div>
      <div className="pl-badge">
        <img className="pl-cover" src={plnCover} alt="Playlist 1" />
        <p className="pl-title">Playlist 1</p>
        <p className="pl-sub">25 pistas</p>
      </div>
      <div className="pl-badge">
        <img className="pl-cover" src={plnCover} alt="Playlist 1" />
        <p className="pl-title">Playlist 1</p>
        <p className="pl-sub">25 pistas</p>
      </div>
      <div className="pl-badge">
        <img className="pl-cover" src={plnCover} alt="Playlist 1" />
        <p className="pl-title">Playlist 1</p>
        <p className="pl-sub">25 pistas</p>
      </div>
    </div>
  );
};

export default UserLibrary
