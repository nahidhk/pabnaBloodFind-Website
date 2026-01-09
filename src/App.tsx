import React, { useEffect } from 'react';
import Nav from './model/Nav';
import Home from './pages/Home';

function App() {
  useEffect(() => {
    document.title = "Pabna Blood Find - Find Blood Donor in Pabna";
  })
  return (
    <>
      <Nav />
      <Home />
    </>
  );
}

export default App;