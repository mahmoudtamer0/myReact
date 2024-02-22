import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<h1>home</h1>} />
          <Route path='/about' element={<h1>about</h1>} />
          <Route path='/rec' element={<h1>rec</h1>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
