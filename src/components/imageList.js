import * as React from 'react';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { useMediaQuery } from '@mui/material';

export default function MasonryImageList( {itemData, selectPhoto} ) {
  const theme = useTheme();
  const matchDownMd = useMediaQuery(theme.breakpoints.down('md'));
  if (itemData.length > 1) {
  return (
    <Box sx={{ width: 19 / 20, height: 'fit-content', overflowY: 'visible' }}>
      <ImageList className="imagebox" variant="masonry" cols={matchDownMd ? 1 : 2} gap={8}>
        {itemData.map((item) => (
          <ImageListItem key={item.imgdirect}>
            <img className="img"
              title = {item.title}
              src={`${item.imgdirect}?w=248&fit=crop&auto=format`}
              srcSet={`${item.imgdirect}direct?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title + ' ' + item.location + ' ' + item.author}
              loading="lazy"
              onClick= {selectPhoto}
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  )} else if (itemData.length === 1) {
    return (
      <div>
      <div className="focused-div">
      <img className="img focused"
      title= {itemData[0].title}
              src={`${itemData[0].imgdirect}?w=248&fit=crop&auto=format`}
              srcSet={`${itemData[0].imgdirect}direct?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={itemData[0].title + ' ' + itemData[0].location + ' ' + itemData[0].author}
              loading="lazy"
            />
            <div className="info-div"><div>
              <div>{itemData[0].title}</div>
              <div className="author-selected">{`by ${itemData[0].author} `}</div>
              <div className="location-selected">{`Taken in ${itemData[0].location}`}</div>
              </div>
              <div className="link-div"><a href ={itemData[0].redbubblelink}>Purchase Print</a></div>
            </div>
            </div>
            </div>
    )
  }
}


