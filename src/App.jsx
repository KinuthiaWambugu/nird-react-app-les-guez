import { Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Home from './pages/Home';
import DigitalVillage from './pages/DigitalVillage';
import Quiz from './pages/Quiz';
import NIRD from './pages/NIRD';
import './App.css'

function App() {

function App(){
  return (
    <div className="app">
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/digital_village" element={<DigitalVillage />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/nird" element={<NIRD />} />
        </Routes>
        </main>  
        <Footer />      
    </div>
  );
}

export default App;