import { BrowserRouter } from 'react-router-dom';
import React from "react";
import AppRouter from './AppRouter';

function App() {
  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;
