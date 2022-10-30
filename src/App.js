import React from 'react';
import { Typography,AppBar,Card, CardActions, CardContent, CardMedia, 
    CssBaseline, Grid, Toolbar, Container, Icon } from '@material-ui/core';
import {PhotoCamera} from '@material-ui/icons';

import Button from '@mui/material/Button';
import useStyles from './styles';

const App = () => {  
  const classes = useStyles();   
  const cards = [1,2,3,4,5,6,7,8,9];
  return (
        <>
            <CssBaseline />
            <AppBar position="relative">
                <Toolbar style={{padding: 'auto'}}>
                    <PhotoCamera className={classes.icon} />
                    <Typography variant="h6">
                        Photo Album
                    </Typography>
                </Toolbar>
            </AppBar>
            <main>
                <div className={classes.container}>
                    <Container maxWidth="sm">
                        <Typography variant="h2" align="center" color="textPrimary" gutterBottom>
                            Heading
                        </Typography>
                        <Typography variant="h5" align="center" color="textSecondary" paragraph>
                            Some long content here to show for the text secondary with variant h5 in Typography Tag of MUI
                        </Typography>                                    
                        <div className={classes.button}>
                            <Grid container spacing={3} justifyContent="center">
                                <Grid item>
                                    <Button variant="contained" color="primary">See my photos</Button>
                                </Grid>
                                <Grid item>
                                    <Button variant="outlined" color="primary">Secondary action</Button>                                
                                </Grid>
                            </Grid>
                        </div>
                    </Container>
                </div>
                <Container className={classes.cardGrid} maxWidth="md">
                    <Grid container spacing={1}>
                        {
                            cards.map((card)=> (
                                <Grid item key={card}>
                                    <Card className={classes.card}>
                                        <CardMedia 
                                            className={classes.cardMedia} 
                                            image="https://source.unsplash.com/random" 
                                            title="Image title" 
                                        />
                                        <CardContent className={classes.CardContent}>
                                            <Typography gutterBottom variant="h5">
                                                Card 1
                                            </Typography>
                                            <Typography gutterBottom variant="h5">
                                                This is card media.
                                            </Typography>
                                        </CardContent>
                                        <CardActions>
                                            <Button size="small" color="primary">View</Button>
                                            <Button size="small" color="primary">Edit</Button>
                                        </CardActions>
                                    </Card>
                                </Grid>
                            ))
                            
                        }                    
                    </Grid>
                </Container>
            </main>
            <footer className={classes.footer}>
                <Typography variant="h6" align="center" gutterBottom>
                    Footer
                </Typography>
                <Typography variant="subtitle1" align="center" color="textSecondary">
                    Some content here for subtitle1 variant.
                </Typography>
            </footer>
        </>    
  );
}

export default App;
