import React , { useState } from 'react'
import './App.css'
import Explore from './components/explore.jsx';
import PlayControl from './components/playControl.jsx';
import UserLibrary from './components/library.jsx';

function App() {
  const [activeView, setActiveView] = useState('library');
  const logoKodigo = "https://raw.githubusercontent.com/mateoonpractice/react-input-simple/e6ca219c0690906b6634e1103197d6177bf9828a/src/kmusic.png";
  const userAvatar = "https://raw.githubusercontent.com/mateoonpractice/react-input-simple/e6ca219c0690906b6634e1103197d6177bf9828a/src/user-bear.png";
  const plnCover = "https://raw.githubusercontent.com/mateoonpractice/react-input-simple/e6ca219c0690906b6634e1103197d6177bf9828a/src/images/songs-covers/diablotriples.jpg";

  return (
    <>
      <nav className="nav-head">
        <div className="logo">
          <img src={logoKodigo} alt="logo kodigo music"/>
        </div>
        <div className="menu-head">
          <button className="menu-btn" onClick={() => setActiveView('library')}>Librería</button>
          <button className="menu-btn" onClick={() => setActiveView('explore')}>Explorar</button>
        </div>
        {/* User Corner */}
        <div className="user-corner">
          <img src={userAvatar} alt="user"/>
          <p>Coach</p>
        </div>
      </nav>

      {/* Menu */}
      <main className="content">
        {activeView === 'library' && <UserLibrary />}
        {activeView === 'explore' && <Explore />}

        {/* Player */}
        <aside className="playing-module">
          <div className="playing-now">
            <h3>Reproduciendo</h3>
            <img className="pln-cover" src={plnCover} alt="cover"/>
            <p className="pln-title">Friend Zone</p>
            <p className="pln-artist">tripleS</p>
          </div>
          <div>
            <PlayControl/>
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
