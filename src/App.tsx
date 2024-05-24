import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import { Accueil } from './pages/Accueil';
import { Formation } from './pages/Formation';
import { Projets } from './pages/Projets';
import { Contact } from './pages/Contact';
import './App.scss'

function App() {
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const body = document.querySelector('body');
    if (body) {
      // Désactiver le défilement lorsque le modal est ouvert
      if (open) {
        body.style.overflow = 'hidden';
      } else {
        body.style.overflow = 'auto'; // Réactiver le défilement lorsque le modal est fermé
      }
    }
  }, [open]);

  return (
    <>
      <header>
        <NavBar/>
      </header>

      <main>
        <div>
          <Routes>
            <Route path="/" element={<Accueil/>}/>
            <Route path="/formation" element={<Formation/>}/>
            <Route path="/projets" element={<Projets open={open} setOpen={setOpen} />}/>
            <Route path="/contact" element={<Contact/>}/>

          </Routes>
        </div>
      </main>

      {open && <div className="overlay" />}
    </>
  )
}

export default App
