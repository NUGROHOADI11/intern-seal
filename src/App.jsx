import NavBar from './components/Navbar'
import Footer from './components/Footer';
import Landing from './pages/Landing';
import Terbaru from './pages/Terbaru';
import Hiburan from './pages/Hiburan'
import Gaya from './pages/Gaya'
import Olahraga from './pages/Olahraga'
import Nasional from './pages/Nasional'
import Internasional from './pages/Internasional'
import Detail from './pages/Detail'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "../src/assets/styles/style.css";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/hiburan" element={<Hiburan />} />
          <Route path="/gaya" element={<Gaya />} />
          <Route path="/olahraga" element={<Olahraga />} />
          <Route path="/nasional" element={<Nasional />} />
          <Route path="/intrnasional" element={<Internasional />} />
          <Route path="/terbaru" element={<Terbaru />} />
          <Route path="/detail" element={<Detail />} />
          <Route path="/" element={<Landing />} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
