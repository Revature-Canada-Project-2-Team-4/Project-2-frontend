import { Button, makeStyles, CardActionArea, CardActions, CardContent, CardMedia, Typography, CardHeader } from '@material-ui/core';
import Card from '@material-ui/core/Card/Card';
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router,Link, Route, Switch, useHistory, useRouteMatch } from "react-router-dom";
import { Service } from '../../../models/Service';
import { User } from '../../../models/User';
import { getAllTradeServices } from '../../../remote/trade-stars/ts-services-functions';
const useStyles = makeStyles({
  root: {
    maxWidth: 950,
  },
});


interface ICustomerDashboard {
    updateCurrentUser: (u:User) => void
    currentUser: User
  }
  
export const CustomerDashboard: React.FunctionComponent<ICustomerDashboard> = (props) => {
  const classes = useStyles();
  const [viewServices, changeViewServices] = useState<Service[]>();
  const [items] = React.useState([
    { label: "All",value: "all"},
    { label: "Electricians", value: "electricians" },
    { label: "Plumbers", value: "plumbers" },
    { label: "Contractors", value: "contractors" },
    { label: "Painters", value: "painters" }
  ]);
  useEffect(() => {
    const getServiceRows = async () => {
       let serv = await getAllTradeServices();
      console.log(serv);
      changeViewServices(serv);
    };
    getServiceRows();
  }, []);
  let history = useHistory();
  function AddReview() {
    history.push(`/dashboard/CreateReview`);
  }
  function ViewReview() {
    history.push(`/dashboard/TradesmanReviews`);
  }
    return (
      <>
      <h1>Services</h1>
      <label>
          Pick the service you want : &nbsp; &nbsp;
          <select>
          { items.map(item => ( <option key={item.value} value={item.value}> {item.label}</option> )) }
          </select>
        </label>
        <div>
        {(viewServices) ? (viewServices.map((serv) => (
      <Card className={classes.root} key={serv.serviceId} >
      
      <CardActionArea >
      
        <CardContent >
          <div style={{backgroundColor: '#9013fe',borderRadius:25}}  >
          <Typography gutterBottom variant="h4" component="h2"  align='left' >
            &nbsp; {serv.providedBy.companyName}
          </Typography>
          </div>
                <Typography variant="h6" component="p" align='left'>
                Owner of the company :  {serv.providedBy.companyOwner.firstName}
                </Typography>
                <Typography variant="body2"  component="p" align='left'>
                 Types Of services they provide :  {serv.serviceTypes.serviceType}
                </Typography>
                <Typography variant="body2"  component="p" align='left'>
                 Average price for the service : ${serv.servicePrice}.00
                </Typography>
                <Typography variant="body2" component="p" align='left'>
                Email :  {serv.providedBy.companyOwner.email}
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
          variant="contained" onClick={() => {ViewReview(); }}>
                View Reviews
              </Button>
              <Button style={{
              borderRadius: 25,
              backgroundColor: "#FFFF00",
              padding: "13px 26px",
              fontSize: "14px"
          }}
          variant="contained" onClick={() => {AddReview(); }}>
                Give a review
              </Button>
              </CardActions>
              </Card>
              ))) : (
          <Card className={classes.root} key={1}> 
            <CardActionArea>
              
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Loading... 
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Loading..
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
          )}
   </div>
      </>
    );
  };