import './App.css';
import './styles/global/grid.styles.css'
import './styles/global/reset.styles.css'
import Header from './views/Header';
import Main from './views/Main';
import About from './views/About';
import Services from './views/Services';
import Portfolio from './views/Portfolio';
import Blog from './views/Blog';
import { Footer } from './views/Footer';
import { Contact } from './views/Contact';

function App() {
  return (
    <div className="App">
      <Header/>
      <Main/>
      <About/>
      <Services/>
      <Portfolio/>
      <Blog/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
