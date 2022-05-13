import React from 'react'; // needs to be imported in every component file
// import logo from './logo.svg';
import './App.css';
import About from './components/About'
import Nav from './components/Nav'

function App() {
  return ( // this is JSX, HTML represented in JS, this works due to webpack and React, react basically uses JSX as document.createElement()
  <div>
      <Nav></Nav>
      <main>
        <About></About>
      </main>
  </div>
  );
}

export default App;
