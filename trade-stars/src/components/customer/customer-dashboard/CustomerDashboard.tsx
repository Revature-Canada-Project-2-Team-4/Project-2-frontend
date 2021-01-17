import { Button, makeStyles, CardActionArea, CardActions, CardContent, CardMedia, Typography, CardHeader, Grid } from '@material-ui/core';
import Card from '@material-ui/core/Card/Card';
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router,Link, Route, Switch, useHistory, useRouteMatch } from "react-router-dom";
import { Company } from '../../../models/Company';
import { Service } from '../../../models/Service';
import { User } from '../../../models/User';
import { getAllServicesTypes, getAllTradeServices } from '../../../remote/trade-stars/ts-services-functions';
import RateReviewIcon from '@material-ui/icons/RateReview';
import BusinessCenterRoundedIcon from '@material-ui/icons/BusinessCenterRounded';
import BuildRoundedIcon from '@material-ui/icons/BuildRounded';
import { createStyles, Theme } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { ServiceTypes } from '../../../models/ServiceTypes';
import EventIcon from "@material-ui/icons/Event";
import ViewListIcon from '@material-ui/icons/ViewList';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
    root: {
      maxWidth: 950,
    },
  })
);

interface ICustomerDashboard {
  updateCurrentUser: (u: User) => void;
  currentUser: User;
  updateCurrentCompany: (c: Company) => void;
  currentCompany: Company;
}

export const CustomerDashboard: React.FunctionComponent<ICustomerDashboard> = (
  props
) => {
  const classes = useStyles();
  const [viewServices, changeViewServices] = useState<Service[]>();
  const [serviceTypes, changeServiceTypes] = useState<ServiceTypes[]>([]);

  useEffect(() => {
    const getServiceRows = async () => {
      let serv = await getAllTradeServices();
      changeViewServices(serv);
    };
    const getServiceTypes = async () => {
      let servTypes = await getAllServicesTypes();
      changeServiceTypes(servTypes);
    };

    getServiceTypes();
    getServiceRows();
  }, []);

  let history = useHistory();
  function AddReview(company: Company) {
    props.updateCurrentCompany(company);
    history.push(`/dashboard/CreateReview`);
  }
  function ViewReview(company: Company) {
    props.updateCurrentCompany(company);
    history.push(`/dashboard/TradesmanReviews`);
  }

  return (
    <>
      <h1>Services</h1>
        
        <div>
        {(viewServices) ? (viewServices.map((serv) => (
      <Card className={classes.root} key={serv.serviceId} >
      
      <CardActionArea >
      
        <CardContent >
          <div style={{backgroundColor: '#9013fe',borderRadius:25}}  >
          <Typography gutterBottom variant="h4" component="h2"  align='left' >
          &nbsp; <BuildRoundedIcon color="secondary" />&nbsp; {serv.providedBy.companyName}
          </Typography>
          </div>
          <Grid
              container
              direction="row"
              justify="flex-start"
              
              spacing={0}
            >
                <Typography variant="h6" component="p" align='left'>
                Owner of the company :  {serv.providedBy.companyOwner.firstName}
                </Typography>
                <Typography variant="h6"  component="p" align='left'>
                &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                &nbsp; &nbsp; &nbsp; &nbsp;
                
                 Contact Details : 
                </Typography>
                </Grid>
                <Grid
              container
              direction="row"
              justify="flex-start"
              
              spacing={0}
            >
              <Typography variant="body2"  component="p" align='left'>
                 Types of services they provide :  {serv.serviceTypes.serviceType}<br></br>
                </Typography>
                &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;
                &nbsp; &nbsp; 
                
                <Typography variant="body2" component="p" align='left'>
                Email :  {serv.providedBy.companyOwner.email}
                
                </Typography>
                </Grid>
                <Typography variant="body2"  component="p" align='left'>
                 Average price for the service : ${serv.servicePrice}
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
                <EventIcon />&nbsp; Book an Appointment
              </Button>
              
              <Button style={{
              borderRadius: 25,
              backgroundColor: "#FFFF00",
              padding: "13px 26px",
              fontSize: "14px"
          }}
          variant="contained" onClick={() => {ViewReview(serv.providedBy); }}>
               <ViewListIcon/> &nbsp;  View Reviews
              </Button>
              <Button style={{
              borderRadius: 25,
              backgroundColor: "#FFFF00",
              padding: "13px 26px",
              fontSize: "14px"
          }}
          variant="contained" onClick={() => {AddReview(serv.providedBy); }}>
                <RateReviewIcon /> &nbsp; Give a review
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
