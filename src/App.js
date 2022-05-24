import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Placeholder from './components/Placeholder';
import Navbar from './components/Navbar';
import Journey from './components/Journey';
import Gallery from './components/Gallery';
import './App.css';

function App() {
  return (
    <>
      <Placeholder />
      <Router>
        <Navbar />
        <main>
          <Routes>
            <Route path='/' element={<Journey />} />
            <Route path='/Gallery' element={<Gallery />} />
            {/* <Route path='/Registry' element={<Registry />} /> */}
          </Routes>
        </main>
      </Router>
      {/* <Footer></Footer> */}
    </>
  );
}

export default App;
