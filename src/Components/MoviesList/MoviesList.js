import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

export default function MoviesList({title , original_title ,image}) {
  return (
      <Card style={{width : "fit-content"}}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="180"
            image={image}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              <h5>{title}</h5>
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {original_title}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
        </CardActions>
      </Card>
  );
}