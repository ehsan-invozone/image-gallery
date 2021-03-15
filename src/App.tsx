import React from 'react';
import './App.css';
import Gallery from './gallery/Gallery';

function App() {
  return (
    <div className="App">
      <a href="https://www.facebook.com/sharer/sharer.php?u=https://image-gallery-impact.herokuapp.com/">Post to FB</a>
      <Gallery />
    </div>
  );
}

export default App;
