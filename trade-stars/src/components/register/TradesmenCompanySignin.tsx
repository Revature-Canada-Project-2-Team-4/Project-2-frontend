import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';

import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
//import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import React, { useState } from "react";
import { createNewCompany, createNewService } from '../../remote/trade-stars/trade-stars-functions';

import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

import{Link} from 'react-router-dom'


const useStyles = makeStyles((theme: Theme) => ({
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(3),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 380,
        width: '100%', 
        display: 'flex',
        //flexDirection: 'column',
        alignItems: 'left',

      },
      selectEmpty: {
        marginTop: theme.spacing(2),
    },
}),
);

function  TradesmenCompanySignin() {
  const classes = useStyles();

  const [companyId, changeCompanyId] = useState("");
  const [serviceType, changeServiceType] = useState("");
  const [servicePrice, changeServicePrice] = useState("");



  const handleServiceTypeChange = (event: React.ChangeEvent<{ value: unknown }>) => {
      changeServiceType(event.target.value as string);
    };

  const handleServicePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      changeServicePrice(e.target.value);
  };
  
  const handleCompanyIDChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    changeCompanyId(e.target.value);
};

  


  function clickHandler() {
      console.log('Button was clicked');
      <Link to = "/TradesmenCompanySignin"></Link>
  }


  // Synthetic event is from react for creating a standard event between different browsers
  const handleSubmitTradesmenDesc = (e: React.SyntheticEvent) => {

      // Prevent default html submit behaviour
      e.preventDefault();
      try {
          //Submit new service to database
          let service = createNewService(
              serviceType,
              servicePrice
          );

          console.log(service);
      } catch (e) {
          console.log(e.message);
      }


      // NEED TO FIGURE OUT HOW TO USE COMPANYID AND THEN LINK THAT TO TRADESMEN
      // try {
      //     //Submit new company to database
      //     let company = createNewCompany(
      //         companyName,
      //         companyType
      //     );

      //     console.log(company);
      // } catch (e) {
      //     console.log(e.message);
      // }



  };

  return (
      <Container component="main" maxWidth="xs">
          <CssBaseline />
          <div className={classes.paper}>
              <Avatar className={classes.avatar}>

              </Avatar>
              <Typography component="h1" variant="h5">
                  Tradesmen Registration Continued
              </Typography>
              <form onSubmit={handleSubmitTradesmenDesc} noValidate autoComplete="off">
                  <Grid container spacing={2}>
                  <Grid item xs={12} >
                          <div>
                          <FormControl className={classes.formControl}>
                               <InputLabel id="demo-simple-select-label">Pick a Service</InputLabel>
                          <Select 
                              labelId="demo-simple-select-label"
                              id="demo-simple-select"
                              value = {serviceType}
                              fullWidth
                          
                              onChange = {handleServiceTypeChange}
                         

                          >
                              <MenuItem value={"Plumbing"}>Plumbing</MenuItem>
                              <MenuItem value={"Carpenter"}>Carpenter</MenuItem>
                              <MenuItem value={"Painter"}>Painter</MenuItem>

                              </Select>
                         </FormControl>
                         </div>
                      </Grid>
                      <Grid item xs={12} >
                          <TextField
                              value={servicePrice}
                              onChange={handleServicePriceChange}
                              variant="outlined"
                              required
                              fullWidth
                              id="servicePrice"
                              label="Service Price"
                              name="servicePrice"
                              autoComplete="servicePrice" />
                      </Grid>
                      <Grid item xs={12}>
                          <TextField
                              value={companyId}
                              onChange={handleCompanyIDChange}
                              variant="outlined"
                              required
                              fullWidth
                              id="companyName"
                              label="Company ID"
                              name="companyName"
                              autoComplete="companyName" />
                      </Grid>
                  </Grid>

                  <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      color="primary"
                      onClick={clickHandler}
                      
                  >
                    
                    Register
                  </Button>
                  <Grid container justify="flex-end">
                      <Grid item>
                      </Grid>
                  </Grid>
              </form>
          </div>
          <Box mt={5}>
              
          </Box>
      </Container>
  );
}

export default TradesmenCompanySignin;
