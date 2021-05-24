import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box/Box';



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    color: theme.palette.text.secondary,
  },
  paper: {
    padding: theme.spacing(3),
    textAlign: 'center',
    
  },
}));

export default function AutoGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root} boxShadow={0}>
      
      <Grid container spacing={1}   boxShadow={0}>
        <Grid item xs={12} sm={6}  md={6} lg={6} boxShadow={0} style={{marginLeft: 'auto' , marginRight:'auto' , fontFamily: 'cursive' ,letterSpacing: 1 , paddingLeft: 20 , paddingRight: 20 , paddingTop: 120 , paddingBottom: 80 }}>
          
          <Box  boxShadow={0}   >
          <p style={{textAlign:"center"}} >
               Our products are inspired by the people and world around us. Beautiful, high quality goods that are designed especially for you. Discover our story and meet the people that make our brand what it is.
             </p>
          </Box>
              
         
        </Grid> 
        
      </Grid>
    </div>
  );
}
