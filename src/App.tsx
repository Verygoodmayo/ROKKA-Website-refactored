import HomePage from './components/Pages/HomePage/HomePage'
import Menu from './components/Menu/Menu'
import { useState } from 'react';

function App() {
  
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <HomePage />
      <Menu state={isMenuOpen} changeState={setIsMenuOpen} />
    </>
  )
}

export default App
