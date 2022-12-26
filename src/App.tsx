import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Editor from './views/editor/Editor';
import IdeIndex from './views/index/IdeIndex';
import {Login} from "./views/login/login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* 默认路由 */}
        <Route index element={<IdeIndex/>}/>
        <Route path='/editor' element={<Editor/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
