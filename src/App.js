import './App.css';
import Pokedex from './Components/Pokedex';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Pokedex />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
