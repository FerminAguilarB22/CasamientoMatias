
import './App.css';

import Asistencia from './components/Asistencia';

import Descanso from './components/Descanso';
import Footer from './components/Footer';
import InfoCeremonias from './components/InfoCeremonias';
import Musica from './components/Musica';

import Portada from './components/Portada.js';
import Regalo from './components/Regalo';
import ShareFotos from './components/ShareFotos';

function App() {
  return (
  <>
    <Portada></Portada>
    <Descanso></Descanso>
    <InfoCeremonias></InfoCeremonias>
    <Asistencia></Asistencia>
    <Regalo></Regalo>
    <Musica></Musica>
    <ShareFotos></ShareFotos>
    <Footer></Footer>
  </>
    
  );
}

export default App;
