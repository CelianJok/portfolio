import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import { Accueil } from './pages/Accueil';
import { Formation } from './pages/Formation';
import { Projets } from './pages/Projets';
import { Contact } from './pages/Contact';
import './App.scss'

function App() {

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
            <Route path="/projets" element={<Projets/>}/>
            <Route path="/contact" element={<Contact/>}/>

          </Routes>
        </div>
      </main>
    </>
  )
}

export default App
