import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

//Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import PokemonDetails from './api/PokemonDetails';

//Pages
import Blog from './pages/Blog/Blog';
import About from './pages/About/About';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Blog />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
