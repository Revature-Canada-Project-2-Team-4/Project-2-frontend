
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

import {
    Card,
    CardContent,
  } from "@material-ui/core";

import Container from '@material-ui/core/Container';
import React, { useState } from "react";
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { makeStyles, Theme } from '@material-ui/core/styles';


import{useHistory} from 'react-router-dom'

import { User } from '../../models/User';
import { Company } from '../../models/Company';
import { createNewService } from '../../remote/trade-stars/create-service';


interface ITradesmenCompanyRegisterProps {
    updateCurrentCompany: (c: Company) => void;
    currentCompany: Company;
    updateCurrentUser: (u: User) => void;
    currentUser: User;
  }

const linkStyle = {
    color: 'white',
    fontSize: 16,

    
    
    
}

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        minWidth: 275,
        background: '#e0a150',
        maxHeight: 500,
      },
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
    head: {
      fontWeight: 'bold'
  },
    
}),
);
  
  export const ServiceRegister:React.FunctionComponent<ITradesmenCompanyRegisterProps> = (props) => {

    let history = useHistory();
    const classes = useStyles();

    const [servicePrice, changeServicePrice] = useState("");
    const [serviceType, changeServiceType] = useState("");
    const [providedBy, changeCompanyOwner] = useState(props.currentCompany);


    const handleServicePrice = (e: React.ChangeEvent<HTMLInputElement>) => {
        changeServicePrice(e.target.value);
    };

    const handleServiceTypeChange = (
        e: any
      ) => {
        changeServiceType(e.target.value);
      };






    function clickHandler() {
        console.log('Button was clicked');
    }


    // Synthetic event is from react for creating a standard event between different browsers
    const handleService = async (e: React.SyntheticEvent) => {

        // Prevent default html submit behaviour
        e.preventDefault();
        
        try {
           // Submit new company to database
            let company = await createNewService(
                servicePrice,
                serviceType,
                providedBy
 );

            if (company) {
                props.updateCurrentCompany(company)
                history.push('/dashboard');
            }

            console.log("company");
        } catch (e) {
            console.log(e.message);
        }



    };

    return (
    <Card className={classes.root}>
        <CardContent>
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>

                </Avatar><br></br>
                <Typography className={classes.head} component="h1" variant="h5">
                    What services are you offering ?
                </Typography><br></br>
                <FormControl variant="outlined" >
              <InputLabel htmlFor="outlined-type-native-simple">Type</InputLabel>
              <Select
               
                native
                value={serviceType}
                onChange={handleServiceTypeChange}
                label="Service Type"
                inputProps={{
                  name: "type",
                  id: "outlined-type-native-simple",
                }}
              >
                <option aria-label="None" value="" />
                <option value={1}>Plumber</option>
                <option value={2}>Electrician</option>
                <option value={3}>Painter</option>
                <option value={4}>Contractor</option>
              </Select><br></br>
            </FormControl>
                <form onSubmit={handleService} noValidate autoComplete="off">
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                
                                value={servicePrice}
                                
                                onChange={handleServicePrice}
                                variant="outlined"
                                required
                                fullWidth
                                id="servicePrice"
                                label="Service Price"
                                name="servicePrice"
                                autoComplete="servicePrice" />
                        </Grid> 
                        <Grid item>
            
          </Grid>
                        

                    </Grid>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        onClick={clickHandler}
                    >
                        Submit
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
        </CardContent>
  </Card>
    );
}
