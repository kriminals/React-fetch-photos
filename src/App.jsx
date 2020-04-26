import { hot } from 'react-hot-loader';
import React, { useState } from 'react';
import { Input, Button } from 'antd';
import PicCards from './PicCards'
import './App.css';

import "antd/dist/antd.css";


const message = 'Start typing and I will fetch 4 pics...';
const App = () => {
  const [keyword, setKeyword] = useState('cats');
  return (

  <div className="App">
    <h1>{message}</h1>
    <Input placeholder={keyword} onChange={e => setKeyword(e.target.value)} />
    <PicCards keyword={keyword} />
  </div>
  )
};

export default hot(module)(App);
