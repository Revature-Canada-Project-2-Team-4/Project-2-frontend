import classes from '*.module.css';
import { Button, makeStyles, CardActionArea, CardActions, CardContent, CardMedia, Typography, CardHeader } from '@material-ui/core';
import Card from '@material-ui/core/Card/Card';
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router,Link, Route, Switch, useHistory } from "react-router-dom";
import { User } from '../../../models/User';
import { ProfileCard } from '../../profile-card/ProfileCard';
const useStyles = makeStyles({
  root: {
    maxWidth: 850,
  },
});


interface ICustomerDashboard {
    updateCurrentUser: (u:User) => void
    currentUser: User
  }
  
export const CustomerDashboard: React.FunctionComponent<ICustomerDashboard> = (props) => {
  const classes = useStyles();

    return (
      <>
      <h1>Services</h1>
      <label>
          Pick the service you want : &nbsp; &nbsp;
          <select >
            <option value="all">All</option>        
            <option value="electrician">Electricians</option>
            <option value="plumbers">Plumbers</option>
            <option value="coconut">Coconut</option>
            <option value="mango">Mango</option>
          </select>
        </label>
        
      <Card className={classes.root}>
      
      <CardActionArea>
      
        <CardContent><div style={{backgroundColor: '#9013fe',borderRadius:25}}>
          <Typography gutterBottom variant="h4" component="h2"  align='left' >
            &nbsp; False of plumbers
          </Typography>
          </div>
          <Typography variant="body1" component="p" align='left'>
            Owner : Matt, Samin, Manik, Ramninder
          </Typography>
          <Typography variant="body2"  component="p" align='left'>
            Services : Plumbers , Electricians 
          </Typography>
          <Typography variant="body2"  component="p" align='left'>
            Address : 10 lonestar crescent , L7A2H9
          </Typography>
          <Typography variant="body2"  component="p" align='left'>
            Average Price : $ 50 
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      
        <Button style={{
        borderRadius: 25,
        backgroundColor: "#9013fe",
        padding: "13px 26px",
        fontSize: "14px"
    }}
    variant="contained" >
          Book an Appointment
        </Button>
        
        <Button style={{
        borderRadius: 25,
        backgroundColor: "#FFFF00",
        padding: "13px 26px",
        fontSize: "14px"
    }}
    variant="contained">
          View Reviews
        </Button>
        <Button style={{
        borderRadius: 25,
        backgroundColor: "#FFFF00",
        padding: "13px 26px",
        fontSize: "14px"
    }}
    variant="contained" >
          Give a review
        </Button>
        
      </CardActions>
    </Card>
    <br></br>
    <Card className={classes.root}>
      <CardActionArea>
        
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Company number 2
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
      </>
    );
  };