import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function ActionAreaCard() {
  return (
    <Card sx={{ maxWidth: 750 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="500"
          image={require("../static/images/cards/20210805_080304.jpg")}
          alt="forest"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Forest
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
