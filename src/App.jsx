
import './App.css';
import Collection from './Collection';
import Footer from './Footer';
import Hero from './Hero';
import Marquee from './Marquee';
import NavBar from './NavBar';
import Newsletter from './Newsletter';
import Philosophy from './Philosophy';
import Ritual from './Ritual';
import Roots from './Roots';
import System from './System';
import Testimonials from './Testimonials';


function App() {

  return (
    <div id='home' className='box-border m-0 p-0'>
      <NavBar />
      <Hero />
      <Marquee />
      <Philosophy />
      <Collection />
      <System />
      <Roots />
      <Ritual />
      <Testimonials />
      <Newsletter />
      <Footer />
    </div>
  )
}

export default App;
