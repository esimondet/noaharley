import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Placeholder from './components/Placeholder';
import Navbar from './components/Navbar';
import Journey from './components/Journey';
import Gallery from './components/Gallery';
import Registry from './components/Registry';
import './App.scss';

function App() {
  return (
    <>
      <div id='stars-group-1'></div>
      <div id='stars-group-2'></div>
      <div id='stars-group-3'></div>
      <div id='stars-group-4'></div>
      <div id='stars-group-5'></div>
      <div id='stars-group-6'></div>
      <Placeholder />
      <Router>
        <Navbar />
        <main>
          <Routes>
            <Route path='/' element={<Gallery />} />
            <Route path='/Journey' element={<Journey />} />
            <Route path='/Registry' element={<Registry />} />
          </Routes>
        </main>
      </Router>
      {/* <Footer></Footer> */}
    </>
  );
}

export default App;
