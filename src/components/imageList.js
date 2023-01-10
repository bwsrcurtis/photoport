import * as React from 'react';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { useMediaQuery } from '@mui/material';

export default function MasonryImageList( {itemData} ) {
  function zoomFnc(e) {
    if (e.target.classList.contains('active')) {
      e.target.classList.remove('active')
    } else {
      e.target.classList.add('active')
    }
  }
  const theme = useTheme();
  const matchDownMd = useMediaQuery(theme.breakpoints.down('md'));
  return (
    <Box sx={{ width: 19 / 20, height: 'fit-content', overflowY: 'visible' }}>
      <ImageList className="imagebox" variant="masonry" cols={matchDownMd ? 1 : 2} gap={8}>
        {itemData.map((item) => (
          <ImageListItem key={item.imgdirect}>
            <img className="img"
              onClick={zoomFnc}
              src={`${item.imgdirect}?w=248&fit=crop&auto=format`}
              srcSet={`${item.imgdirect}direct?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title + ' ' + item.location + ' ' + item.author}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
}


