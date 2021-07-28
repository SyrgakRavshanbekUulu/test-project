import {About} from './components/about';
import {Contacts} from './components/contacts';
import {Footer} from './components/footer';
import {Header} from './components/header';
import {MainBlock} from './components/main'
import {Projects} from './components/projects';

function App() {
  return (
    <div>
      <MainBlock />
      <Header />
      <About />
      <Projects />
      <Contacts />
      <Footer />
    </div>
  )
}

export default App;
