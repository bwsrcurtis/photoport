import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import React from 'react';

import './App.css';
import ActionAreaCard from './components/card';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Curtis Bowser | Maryland Photography</h1>
        <ActionAreaCard />
      </header>
    </div>
  );
}

export default App;
