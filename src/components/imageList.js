import * as React from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

export default function MasonryImageList() {
  return (
    <Box sx={{ width: 19/20, height: 935, overflowY: 'auto' }}>
      <ImageList className="imagebox" variant="masonry" cols={4} gap={8}>
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
    imgdirect: "https://i.imgur.com/RDbCX0f.jpg",
    title: 'Green House',
    author: 'Curtis Bowser',
  },
  {
    imgdirect: 'https://i.imgur.com/1tCVQT2.jpg',
    title: 'Streetlight',
    author: 'Curtis Bowser',
  },
  {
    imgdirect: 'https://i.imgur.com/hqcdMPm.jpg',
    title: 'Annapolis MD Flag',
    author: 'Curtis Bowser',
  },
  {
    imgdirect: 'https://i.imgur.com/ICFGyOn.jpg',
    title: 'Patapsco Bridge',
    author: 'Curtis Bowser',
  },
  {
    imgdirect: 'https://i.imgur.com/3GP7w63.jpg',
    title: 'Swallow Falls',
    author: 'Curtis Bowser',
  },
  {
    imgdirect: 'https://i.imgur.com/a4jj0pw.jpg',
    title: 'Park at Sunset Sepia',
    author: 'Curtis Bowser',
  },
  {
    imgdirect: 'https://i.imgur.com/hTyw5Nb.jpg',
    title: 'Park at Sunset',
    author: 'Curtis Bowser',
  },
  {
    imgdirect: 'https://i.imgur.com/hj4P0xs.jpg',
    title: 'Graffiti Patapsco',
    author: 'Curtis Bowser',
  },
  {
    imgdirect: 'https://i.imgur.com/TIsD8ml.jpg',
    title: 'Lake Waterford',
    author: 'Curtis Bowser',
  },
  {
    imgdirect: 'https://i.imgur.com/IHcZkiZ.jpg',
    title: 'Clearwater Park',
    author: 'Curtis Bowser',
  },
  {
    imgdirect: 'https://i.imgur.com/J2hSZa5.jpg',
    title: 'Patapsco Pareidolia',
    author: 'Curtis Bowser',
  },
  {
    imgdirect: 'https://i.imgur.com/4QSfQGy.jpg',
    title: 'Smithsonian Butterfly',
    author: 'Curtis Bowser',
  },
];
