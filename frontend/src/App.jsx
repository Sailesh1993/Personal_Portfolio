import Navbar from './components/Navbar/navbar'
import Intro from './components/Intro/intro'
import Skill from './components/Skills/skills'
import Work from './components/Works/works'
import Contact from './components/Contact/contact'
import Footer from './components/Footer/footer'


function App() {
  return (
    <div className="App">
     <Navbar />
     <Intro />
     <Skill />
     <Work />
     <Contact />
     <Footer/>
    </div>
  );
}

export default App;
