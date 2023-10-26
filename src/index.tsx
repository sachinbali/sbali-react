import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css"

import { App } from './App';

const root = createRoot(document.getElementById('app'));

// root.render(
//   <StrictMode>
//     <App name="StackBlitz" />
//   </StrictMode>
// );


root.render(
  <StrictMode>
    <BrowserRouter>
    <App name="StackBlitz" />
    </BrowserRouter>
  </StrictMode>
);
