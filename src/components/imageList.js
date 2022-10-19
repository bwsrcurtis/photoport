import * as React from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

export default function MasonryImageList() {
  return (
    <Box sx={{ width: 19/20, height: 'fit-content', overflowY: 'visible' }}>
      <ImageList className="imagebox" variant="masonry" cols={2} gap={8}>
        {itemData.map((item) => (
          <ImageListItem key={item.imgdirect}>
            <img className="img"
              src={`${item.imgdirect}?w=248&fit=crop&auto=format`}
              srcSet={`${item.imgdirect}direct?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title + ' ' + item.author}
              loading="eager"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
}

const itemData = [
  {
    imgdirect: 'https://i.imgur.com/hTyw5Nb.jpg',
    redbubblelink: 'https://www.redbubble.com/shop/ap/128551229',
    title: 'Albertson Road Trail Sunset',
    author: 'Curtis Bowser',
  },
  {
    imgdirect: 'https://i.imgur.com/ICFGyOn.jpg',
    redbubblelink: 'https://www.redbubble.com/shop/ap/128552048',
    title: 'Patapsco State Park',
    author: 'Curtis Bowser',
  },
  {
    imgdirect: 'https://i.imgur.com/TIsD8ml.jpg',
    redbubblelink: 'https://www.redbubble.com/shop/ap/128551814',
    title: 'Lake Waterford',
    author: 'Curtis Bowser',
  },
  {
    imgdirect: 'https://i.imgur.com/IHcZkiZ.jpg',
    redbubblelink: 'https://www.redbubble.com/shop/ap/128551607',
    title: 'Clearwater Park',
    author: 'Curtis Bowser',
  },
  {
    imgdirect: "https://i.imgur.com/RDbCX0f.jpg",
    redbubblelink: 'https://www.redbubble.com/shop/ap/128570337',
    title: 'Green House',
    author: 'Curtis Bowser',
  },
  {
    imgdirect: 'https://i.imgur.com/J2hSZa5.jpg',
    redbubblelink: 'https://www.redbubble.com/shop/ap/128552248',
    title: 'Patapsco Pareidolia',
    author: 'Curtis Bowser',
  },
  {
    imgdirect: 'https://i.imgur.com/a4jj0pw.jpg',
    redbubblelink: 'https://www.redbubble.com/shop/ap/128570656',
    title: 'Park at Sunset Sepia',
    author: 'Curtis Bowser',
  },
  {
    imgdirect: 'https://i.imgur.com/1tCVQT2.jpg',
    redbubblelink: 'https://www.redbubble.com/shop/ap/128570437',
    title: 'Streetlight',
    author: 'Curtis Bowser',
  },
  {
    imgdirect: 'https://i.imgur.com/3GP7w63.jpg',
    redbubblelink:'https://www.redbubble.com/shop/ap/128570546',
    title: 'Swallow Falls',
    author: 'Curtis Bowser',
  },
];
