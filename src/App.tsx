import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import { Accueil } from './pages/Accueil';
import { Parcours } from './pages/Parcours';
import { Projets } from './pages/Projets';
import { Contact } from './pages/Contact';
import './App.css'

function App() {

  return (
    <>
      <NavBar/>
      <div>
        <Routes>
          <Route path="/" element={<Accueil/>}/>
          <Route path="/parcours" element={<Parcours/>}/>
          <Route path="/projets" element={<Projets/>}/>
          <Route path="/contact" element={<Contact/>}/>

        </Routes>
      </div>
    </>
  )
}

export default App
