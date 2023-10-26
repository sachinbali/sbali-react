import { FC } from 'react';

import './style.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Login from './Components/Login';
import Dashboard from './Components/Dashboard';

export const App: FC<{ name: string }> = ({ name }) => {
  const test = 'hello word';

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
};
