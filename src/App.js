import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import React from 'react';

import './App.css';
import BasicRating from './components/starRating';
import ActionAreaCard from './components/card';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ActionAreaCard />
        <BasicRating />
      </header>
    </div>
  );
}

export default App;
