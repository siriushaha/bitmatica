import React from 'react';
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {CardHeader} from "@material-ui/core";

const useStyles = makeStyles({
  card: {
    maxWidth: 650,
  },
  media: {
    height: 140,
  },
});

const Book = ({book}) => {
  const classes = useStyles();
  return (
    <Paper style={{ margin: 16, padding: 16 }}>
      <Grid container direction="column" justify="center" alignItems="center">
        <Grid xs={12} md={12} item >
          <Card className={classes.card}>
              <CardHeader title={`ID: ${book.id}`}></CardHeader>
              <CardMedia
                className={classes.media}
                image={book.thumbnail}
                title={book.title}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {book.title} - {book.edition} - {book.copyrightYear}
                </Typography>
                <Typography gutterBottom variant="subtitle1" color="textSecondary">
                  Category: {book.primaryCategory}
                </Typography>
                <Typography gutterBottom variant="subtitle1" color="textSecondary">
                  Price: ${book.price}
                </Typography>
                <Typography gutterBottom variant="body2" color="textSecondary" component="p">
                  {book.description}
                </Typography>
              </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Book;
