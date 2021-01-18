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
import { makeStyles, Theme } from '@material-ui/core/styles';


import{ useHistory} from 'react-router-dom'
import { createNewCompany } from '../../remote/trade-stars/company-register-functions';
import { User } from '../../models/User';
import { Company } from '../../models/Company';


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
        background: "#e0a150",
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
  
  export const TradesmenCompanyRegister:React.FunctionComponent<ITradesmenCompanyRegisterProps> = (props) => {

    let history = useHistory();
    const classes = useStyles();

    const [companyName, changeCompanyName] = useState("");
    const [companyType, changeCompanyType] = useState("");
    const [companyOwner, changeCompanyOwner] = useState(props.currentUser);


    const handleCompanyNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        changeCompanyName(e.target.value);
    };

    const handlecompanyTypeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        changeCompanyType(e.target.value);
    };

    function clickHandler() {
        console.log('Button was clicked');
    }


    // Synthetic event is from react for creating a standard event between different browsers
    const handleSubmitTradesmenDesc = async (e: React.SyntheticEvent) => {

        // Prevent default html submit behaviour
        e.preventDefault();
            
        
        
        try {
           // Submit new company to database
            let company = await createNewCompany(
                companyName,
                companyOwner,
            );

            if (company) {
                props.updateCurrentCompany(company)
                history.push('/serviceregister');
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
                    Tradesmen Registration Continued
                </Typography><br></br>
                <form onSubmit={handleSubmitTradesmenDesc} noValidate autoComplete="off">
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                value={companyName}
                                onChange={handleCompanyNameChange}
                                variant="outlined"
                                required
                                fullWidth
                                id="companyName"
                                label="Company Name"
                                name="companyName"
                                autoComplete="companyName" />
                        </Grid>
                        {/* <Grid item xs={12}>
                            <TextField
                                value={companyType}
                                onChange={handlecompanyTypeChange}
                                variant="outlined"
                                required
                                fullWidth
                                name="companyType"
                                label="companyType"
                                type="companyType"
                                id="companyType"
                                autoComplete="companyType" />
                        </Grid> */}

                    </Grid><br></br>
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
        </CardContent>
  </Card>
    );
}
