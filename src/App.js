
import './App.css';
import AlbumFotos from './components/AlbumFotos';
import Asistencia from './components/Asistencia';

import Descanso from './components/Descanso';
import InfoCeremonias from './components/InfoCeremonias';

import Portada from './components/Portada.js';
import Regalo from './components/Regalo';

function App() {
  return (
  <>
    <Portada></Portada>
    <Descanso></Descanso>
    <InfoCeremonias></InfoCeremonias>
    <AlbumFotos></AlbumFotos>
    <Asistencia></Asistencia>
    <Regalo></Regalo>
  </>
    
  );
}

export default App;
