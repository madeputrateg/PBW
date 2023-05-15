import logo from './logo.svg';
import './App.css';
import Header from './components/header/header.js'
import Hero from './components/hero/hero.js'
import Layanan from './components/layanan/layanan.js';
import Tentang from './components/tentang/tentang.js';
import Stats from './components/stats/stats.js';
import KlienKami from './components/klienkami/klienkami.js';
import Pertanyaan from './components/pertanyaan/pertanyaan.js';
import Footer from './components/footer/footer.js';
import LoginFirst from './page/loginfirst/loginfirst.js';

function App() {
  return (
    <div className="App">
      <LoginFirst/>
    </div>
  );
}

export default App;
