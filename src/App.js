import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import React from 'react';

import './App.css';
import maryland from './static/images/maryland.png'
import MasonryImageList from './components/imageList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h5 className="title">Curtis Bowser</h5>
        <h5>MD Photographer</h5>
        <img src={maryland}></img><br/>
        <a className="purchase-link" href="https://www.redbubble.com/people/CBowserPhotos/shop">Purchase Prints</a>
        
      </header>
        <MasonryImageList />
    </div>
  );
}

export default App;
