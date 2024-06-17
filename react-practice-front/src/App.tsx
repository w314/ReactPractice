import React from 'react';
import { Route, Routes } from 'react-router-dom';
// import css
import "./App.css";
// import Components
import Layout from './Components/Layout/Layout';
import Counter from './Components/Counter/Counter';
import TodoList from './Components/TodoList/TodoList';
import FormValidation from './Components/FormValidation/FormValidation';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={< Layout />}>
          <Route path="/counter" element={<Counter />}></Route>
          <Route path="/todoList" element={<TodoList />}></Route>  
          <Route path="/formValidation" element={<FormValidation />}></Route>     
        </Route>
      </Routes>

    </div>
  );
}

export default App;
