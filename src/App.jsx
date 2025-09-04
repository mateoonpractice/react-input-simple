import React , { useState } from 'react'
import './App.css'

function App() {
  const coverArtist = "https://raw.githubusercontent.com/mateoonpractice/react-input-simple/e6ca219c0690906b6634e1103197d6177bf9828a/src/images/triples-artist.jpg";

  return (
    <>
    <nav className="nav-head">
      <div className="logo">
        <img src="src/kmusic.png" alt="logo kodigo music"/>
      </div>
        <div className="menu-head">
            <button className="menu-btn" onClick={() => window.location.href='musica.html'}>Inicio</button>
            <button className="menu-btn" onClick={() => window.location.href='podcast.html'}>Librería</button>
            <button className="menu-btn" onClick={() => window.location.href='radio.html'}>Explorar</button>

        </div>
      {/* User Corner */}
      <div className="user-corner">
        <img src="src/user-bear.png" alt="user"/>
        <p>User Name</p>
      </div>
    </nav>

    {/* Menu */}
    <main className="content">
      {/* Main */}
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

        <div className="complement-content">
          {/* Generos */}
          <div className="genres-map">
            <h3>Generos</h3>
          </div>
          {/* Comunidad */}
          <div className="community-overview">
            <h3>Comunidad</h3>
          </div>
        </div>
      </div>

      {/* Player */}
      <aside className="playing-module">
        <div className="playing-now">
          <h3>Reproduciendo</h3>
          <img className="pln-cover" src="src/images/songs-covers/diablotriples.jpg" alt="cover"/>
          <p className="pln-title">Friend Zone</p>
          <p className="pln-artist">tripleS</p>
        </div>
        <div>
          <h1>Controles</h1>
        </div>

      </aside>
    </main>
    <footer>
      <div className="footer-content">
        <p>© 2025 Kodigo Music. Todos los derechos reservados.</p>
        <p>Diseñado como proyecto educativo inspirado en plataformas de música digital.</p>
      </div>
    </footer>
  </>  
  );
}

export default App
