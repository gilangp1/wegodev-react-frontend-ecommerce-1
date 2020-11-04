import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { makeStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import ListItemText from '@material-ui/core/ListItemText'

const useStyles = makeStyles({
   card:{
      maxWidth: 240
   },
   image: {
      height: 360
   },
   price: {
      lineHeight: 'normal'
   },
   flexing: {
      display: 'flex'
   },
   right: {
      justifyContent: 'flex-end'
   }
})

const ProductCard = ({ img, title, studio, episode, score, genre, productID}) => {
   const classes = useStyles();

   return (
      <Card>
         <div className={classes.card}>
            <div className={classes.flexing}>
               <CardMedia 
                  className={classes.image}
                  image={img}
                  title={title}
               />
               <div className={classes.right}>
                     <Typography>
                        kappa 123
                     </Typography>
               </div>
            </div>
         <CardContent>
            <Grid container direction="column">
               <Typography gutterBottom variant="subtitle2" component="h2">
                  {title}
               </Typography>
               <Typography variant="overline" className={classes.price}>
                  {episode}
               </Typography>
            </Grid>
         </CardContent>
         </div>
      </Card>
   )
}

ProductCard.propTypes = {
   img: PropTypes.string.isRequired,
   title: PropTypes.string.isRequired,
   studio: PropTypes.string.isRequired,
   episode: PropTypes.number,
   score: PropTypes.number,
   genre: PropTypes.array,
   productID: PropTypes.number.isRequired

}

export default ProductCard;