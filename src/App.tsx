import React from 'react';
import logo from './logo.svg';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Editor from './editor/Editor';
import IdeIndex from './index/IdeIndex';
import {Login} from "./login/Login";

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
