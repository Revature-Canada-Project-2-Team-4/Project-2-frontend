import { Button, makeStyles, CardActionArea, CardActions, CardContent, Typography, Grid } from '@material-ui/core';
import Card from '@material-ui/core/Card/Card';
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, useHistory } from "react-router-dom";
import { Company } from '../../../models/Company';
import { Service } from '../../../models/Service';
import { User } from '../../../models/User';
import { getAllServicesTypes, getAllTradeServices } from '../../../remote/trade-stars/ts-services-functions';
import RateReviewIcon from '@material-ui/icons/RateReview';
import BuildRoundedIcon from '@material-ui/icons/BuildRounded';
import { createStyles, Theme } from '@material-ui/core/styles';
import { ServiceTypes } from '../../../models/ServiceTypes';
import EventIcon from "@material-ui/icons/Event";
import ViewListIcon from '@material-ui/icons/ViewList';

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
      background: "#fff2be",
    },
    text: {
      color: "#fff2be",
    },
  })
);

interface ICustomerDashboard {
    updateCurrentUser: (u:User) => void
    currentUser: User
    updateCurrentCompany: (c: Company) => void;
    currentCompany: Company;
    updateCurrentService: (s: Service) => void;
    currentService: Service
  }
  
export const CustomerDashboard: React.FunctionComponent<ICustomerDashboard> = (props) => {
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
  function BookAppointment(service: Service) {
    props.updateCurrentCompany(service.providedBy);
    props.updateCurrentService(service);
    history.push(`/dashboard/BookAppointment`);
  }
    return (
      <>
      <h1 className={classes.text} >Services</h1>
        
        <div>
        {(viewServices) ? (viewServices.map((serv) => (
          <div>
      <Card className={classes.root} key={serv.serviceId} >


      <CardActionArea >
      
        <CardContent >
          <div style={{backgroundColor: '#000000',borderRadius:25}}  >
          <Typography className={classes.text} gutterBottom variant="h4" component="h2"  align='left' >
          &nbsp; <BuildRoundedIcon color="secondary" />&nbsp; {serv.providedBy.companyName}
          </Typography>
          </div>
          <Grid
              container
              direction="row"
              justify="flex-start"
              
              spacing={0}
            >
                <Typography  variant="h6" component="p" align='left'>
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
              backgroundColor: "#000000",
              padding: "13px 26px",
              fontSize: "14px"
          }} className={classes.text}
          variant="contained" onClick={() => {BookAppointment(serv); }} >
                 <EventIcon />&nbsp; Book an Appointment
              </Button>
              
              <Button style={{
              borderRadius: 25,
              backgroundColor: "#000000",
              padding: "13px 26px",
              fontSize: "14px"
          }} className={classes.text}
          variant="contained" onClick={() => {ViewReview(serv.providedBy); }}>
               <ViewListIcon/> &nbsp;  View Reviews
              </Button>
              <Button style={{
              borderRadius: 25,
              backgroundColor: "#000000",
              padding: "13px 26px",
              fontSize: "14px"
          }} className={classes.text}
          variant="contained" onClick={() => {AddReview(serv.providedBy); }}>
                <RateReviewIcon /> &nbsp; Give a review
              </Button>
              </CardActions>
              
              </Card>
              <br></br>
              </div>
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
