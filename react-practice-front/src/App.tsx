import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
// import Components
import Home from './Components/Home';
import Counter from './Components/Counter';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={< Home />}></Route>
        <Route path="/Counter" element={<Counter />}></Route>
      </Routes>

    </div>
  );
}

export default App;
