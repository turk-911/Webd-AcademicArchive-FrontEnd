import React from 'react'
import SpaceCanvas from './components/Canvas/SpaceCanvas'
import Header from './components/Header/Header'
import './App.css'
const App: React.FC = () => {
  return (
    <>
      <SpaceCanvas />
      <Header /> 
    </>
  );
}
export default App 