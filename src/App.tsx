import React from 'react';
import logo from './logo.svg';
import './App.css';
import HomePage from './pages/Home';
import SiteHeaderComponent from './components/site-header/SiteHeaderComponent';

function App() {
  return (
    <>
      <SiteHeaderComponent />
      <HomePage />
    </>
  );
}

export default App;
