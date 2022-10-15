import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import React from 'react';

import './App.css';
import MasonryImageList from './components/imageList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h5 className="title">Curtis Bowser<br />
        Maryland Photography</h5>
      </header>
        <MasonryImageList />
    </div>
  );
}

export default App;
