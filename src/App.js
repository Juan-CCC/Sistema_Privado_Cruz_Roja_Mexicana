import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/NavBar/Navbar';
import Registro from './pages/Registro/Registro';
import Inicio from './pages/Inicio/Inicio';
import Footer from './components/Footer/Footer';
import Login from './pages/Login/Login';
import ContratacionServicios from './pages/ContratacionServicios/ContratacionServicios';
import Tramites from './pages/Tramites/Tramites';
import Donaciones from './pages/Donaciones/Donaciones';



function App() {
  return (
    <>
      <BrowserRouter>
      
        <Routes>
          <Route path='/' element={<Inicio/>} />
          <Route path='/contratacionservicios' element={<ContratacionServicios/>}/>
          <Route path='/donaciones' element={<Donaciones/>}/>
          <Route path='/tramites' element={<Tramites/>}/>
          <Route path='/registro' element={<Registro/>}/>
          <Route path='/iniciosesion' element={<Login/>}/>
          
        </Routes>
        
      </BrowserRouter>
      
    </>
  );
}

export default App;
