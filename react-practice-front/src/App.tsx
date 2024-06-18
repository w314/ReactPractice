import React from 'react';
import { Route, Routes } from 'react-router-dom';
// import css
import "./App.css";
// import Components
import Layout from './Components/Layout/Layout';
import Counter from './Components/Counter/Counter';
import TodoList from './Components/TodoList/TodoList';
import FormValidation from './Components/FormValidation/FormValidation';
import Search from './Components/Search/Search';
import Uploader from './Components/Uploader/Uploader';
import Users from './Components/Users/Users';
import Profile from './Components/Profile/Profile';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={< Layout />}>
          <Route path="/counter" element={<Counter />}></Route>
          <Route path="/todoList" element={<TodoList />}></Route>  
          <Route path="/formValidation" element={<FormValidation />}></Route>    
          <Route path='/search' element={<Search />}></Route> 
          <Route path='/uploader' element={<Uploader />}></Route>
          <Route path='/users' element={<Users />}></Route>
          <Route path='/profile' element={<Profile />}></Route>
        </Route>
      </Routes>

    </div>
  );
}

export default App;
