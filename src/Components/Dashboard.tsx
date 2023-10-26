import { FC } from 'react';

import ShowMessageButton from './ShowMessageButton';
import { Route, Routes } from 'react-router-dom';

export default function Dashboard() {
  const test = 'hello word';

  return (
    <div>
      <h1>Logged User {test}!</h1>
      <p>Start editing to see some magic happen :)</p>

      <br />
    </div>
  );
}
