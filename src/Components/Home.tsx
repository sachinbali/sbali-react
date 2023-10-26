import { FC } from 'react';

import BoldImage from './BoldStatement';
import ShowMessageButton from './ShowMessageButton';
import { Route, Routes } from 'react-router-dom';

export default function Home() {
  const test = 'hello word';

  return (
    <div>
      <h1>Hello {test}!</h1>
      <p>Start editing to see some magic happen :)</p>
      <BoldImage />
      <br />
      <ShowMessageButton CurrentDate={Date()} />
      <ShowMessageButton CurrentDate={Date()} />
      <ShowMessageButton CurrentDate={Date()} />
      <br />
    </div>
  );
}
