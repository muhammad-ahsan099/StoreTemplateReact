import React from 'react';
import './style.js'
// Fuction Import from UseFetch 
import { useFetchProducts } from './useFetchProducts';
// For Grid System
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx'
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import { red } from '@material-ui/core/colors';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Grid from '@material-ui/core/Grid';
import AddShoppingCart from '@material-ui/icons/AddShoppingCart'





const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        maxWidth: '100%',
        marginTop: 'auto',
        marginBottom: 'auto',
        paddingTop: 0,
        paddingBottom: 0,
        // height: '30vw'

    },
    content: {
        padding: theme.spacing(4)
    } ,
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    cardActions: {
        display: 'flex',
        justifyContent: 'flex-end',
    },
    cardContent: {
        display: 'flex',
        justifyContent: 'space-between',
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: red[500],
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }

}));




function ElectronicProducts() {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    const [products, loading] = useFetchProducts();
    if(loading)
       return <div><h2 style={{textAlign: 'center'}}>Loading ...</h2></div>


    console.log("Products in Main JS: ", products);
    return (

        <div>
            <h2 className={classes.paper} style={{fontFamily: 'cursive'}} >Electronic Products</h2>

            

            <main className={classes.content} >
                <div className={classes.toolbar} />
                <Grid container justify="center" spacing={4} >
                    {products.map((productName) => (
                        <Grid key={productName.id} item xs={12} sm={6} md={4} lg={3} >
                            <Card className={classes.root} >
                                <CardActionArea>
                                    <CardHeader
                                        avatar={
                                            <Avatar aria-label="recipe" className={classes.avatar}>
                                                S
                                            </Avatar>
                                        }

                                        title="Online Shop"
                                    />
                                    <CardMedia
                                        className={classes.media}
                                        image={productName.image}
                                        title="Shop Now"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            {productName.category}
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            {productName.title}
                                        </Typography>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            {productName.price}$
                                        </Typography>

                                    </CardContent>
                                </CardActionArea>

                                <CardActions>
                                    < AddShoppingCart  />
                                    
                                </CardActions>
{/*                                 
                                <CardActions>
                                    <IconButton
                                        className={clsx(classes.expand, {
                                            [classes.expandOpen]: expanded,
                                        })}
                                        onClick={handleExpandClick}
                                        aria-expanded={expanded}
                                        aria-label="show more"
                                    >
                                        <ExpandMoreIcon />
                                    </IconButton>
                                </CardActions> */}

                                {/* <Collapse in={expanded} timeout="auto" unmountOnExit> 
                                    <CardContent>
                                        <Typography paragraph>
                                            Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high
                                            heat.
                                         </Typography>
                                    </CardContent>
                                </Collapse> */}
                            </Card>

                        </Grid>
                    ))}
                </Grid>
            </main>

        </div>
    )
}

export default ElectronicProducts;

