import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import React from 'react';

import './App.css';
import maryland from './static/images/md.svg'
import MasonryImageList from './components/imageList';


const itemData = [
  {
    imgdirect: 'https://i.imgur.com/ZjLIZvW.jpg',
    redbubblelink: 'https://www.redbubble.com/shop/ap/128551229',
    title: 'Albertson Road Trail Sunset',
    author: 'Curtis Bowser',
    location: "Maryland",
  },
  {
    imgdirect: 'https://i.imgur.com/9uSGeY2.jpg',
    redbubblelink: 'https://www.redbubble.com/shop/ap/128552048',
    title: 'Patapsco State Park',
    author: 'Curtis Bowser',
    location: "Maryland",
  },
  {
    imgdirect: 'https://i.imgur.com/aoJ1qOX.jpg',
    redbubblelink: 'https://www.redbubble.com/shop/ap/128551814',
    title: 'Lake Waterford',
    author: 'Curtis Bowser',
    location: "Maryland",
  },
  {
    imgdirect: 'https://i.imgur.com/24fdwir.jpg',
    redbubblelink: 'https://www.redbubble.com/shop/ap/128551607',
    title: 'Clearwater Park',
    author: 'Curtis Bowser',
    location: "Maryland",
  },
  {
    imgdirect: "https://i.imgur.com/TBFkokN.jpg",
    redbubblelink: 'https://www.redbubble.com/shop/ap/128570337',
    title: 'Green House',
    author: 'Curtis Bowser',
    location: "Maryland",
  },
  {
    imgdirect: 'https://i.imgur.com/OHfmDhF.jpg',
    redbubblelink: 'https://www.redbubble.com/shop/ap/128552248',
    title: 'Patapsco Pareidolia',
    author: 'Curtis Bowser',
    location: "Maryland",
  },
  {
    imgdirect: 'https://i.imgur.com/1xGuq0z.jpg',
    redbubblelink: 'https://www.redbubble.com/shop/ap/128570656',
    title: 'Park at Sunset Sepia',
    author: 'Curtis Bowser',
    location: "Maryland",
  },
  {
    imgdirect: 'https://i.imgur.com/kSPnSN7.jpg',
    redbubblelink: 'https://www.redbubble.com/shop/ap/128570437',
    title: 'Streetlight',
    author: 'Curtis Bowser',
    location: "Maryland",
  },
  {
    imgdirect: 'https://i.imgur.com/Ia108GB.jpg',
    redbubblelink: 'https://www.redbubble.com/shop/ap/128570546',
    title: 'Swallow Falls',
    author: 'Curtis Bowser',
    location: "Maryland",
  },
];

function App() {

  
  return (
    <div className="App">
      <header className="App-header">
        <div className="header">
          <h5 className="title">Curtis Bowser</h5>
          <img src={maryland} alt="maryland outline drawing" className='maryland' height="auto"
          width="140vh" ></img><br />
          <h5>MD Photography</h5>
        </div>
        <a className="purchase-link" href="https://www.redbubble.com/people/CBowserPhotos/shop">Purchase Prints</a>

      </header>
      <MasonryImageList itemData={itemData}/>
    </div>
  );
}

export default App;
