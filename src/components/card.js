import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function ActionAreaCard(image) {
  return (
    <Card sx={{ maxWidth: 444.5 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="250"
          image={require("../static/images/cards/20210805_080304.jpg")}
          alt="forest"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Clearwater Park in Annapolis, MD
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
