import React from 'react';
import './App.css';
import SortableGallery from './gallery/SortableGallery';
// import SortableJS from './galleryjs/SortableJS';

function App() {
  return (
    <div className="App">
      <h1>Gallery</h1>
      <SortableGallery />
      {/* <SortableJS /> */}
    </div>
  );
}

export default App;
