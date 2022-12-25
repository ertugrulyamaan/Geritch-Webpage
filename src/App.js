import './App.css';

import {Header, Aboutus,SpecialMenu, Chef, Intro, Laurels, Gallery, Findus, Footer} from './container';
import {Navbar} from './components'
function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <Aboutus />
      <SpecialMenu />
      <Intro />
      <Chef />
      <Gallery />
      <Laurels />
      <Findus />
      <Footer />
    </div>
  );
}

export default App;
