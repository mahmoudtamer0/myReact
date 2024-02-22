import logo from './logo.svg';
import './App.css';
import { SpeedInsights } from "@vercel/speed-insights/react"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <SpeedInsights />
        <Routes>
          <Route path='/' element={<h1>homeee</h1>} />
          <Route path='/about' element={<h1>about</h1>} />
          <Route path='/rec' element={<h1>rec</h1>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
