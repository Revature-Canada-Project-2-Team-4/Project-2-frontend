import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';

import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import React, { useState } from "react";
import { createNewTradesmen } from '../../remote/trade-stars/ts-register-functions';
import { useHistory } from 'react-router-dom';
import { User } from '../../models/User';

interface ITradesmanRegisterProps {
  updateCurrentUser: (u: User) => void;
  currentUser: User;
}





const useStyles = makeStyles((theme) => ({
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
}));

export const  TradesmenRegister: React.FunctionComponent<ITradesmanRegisterProps> = (props) => {
  const classes = useStyles();
  let history = useHistory();

  const [firstName, changeFirstName] = useState("");
  const [lastName, changeLastName] = useState("");
  const [username, changeUsername] = useState("");
  const [password, changePassword] = useState("");

  const handleFirstNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    changeFirstName(e.target.value);
  };

  const handleLastNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    changeLastName(e.target.value);
  };
  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    changeUsername(e.target.value);
  };
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    changePassword(e.target.value);
  };


  function clickHandler() {
    //window.location.href = "./TradesmenCompanyRegister"
    console.log("here")
  }


    // Synthetic event is from react for creating a standard event between different browsers
    const handleSubmitTradesmen =  async (e: React.SyntheticEvent) => {

      // Prevent default html submit behaviour
       e.preventDefault();
      try{
       //Submit new customer to database
       let tradesmen =  await createNewTradesmen(
        firstName,
        lastName,
        username,
        password
       );
        props.updateCurrentUser(tradesmen);
        console.log(tradesmen);
        if(tradesmen) {
          history.push('/TradesmenCompanyRegister')
        }
       }catch  (e) {
        console.log(e.message);
      }

    };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
    
        </Avatar>
        <Typography component="h1" variant="h5">
          Tradesmen Registration
        </Typography>
        <form onSubmit={handleSubmitTradesmen} noValidate autoComplete="off">
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                value = {firstName}
                onChange={handleFirstNameChange}
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                value = {lastName}
                onChange={handleLastNameChange}
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                value = {username}
                onChange={handleUsernameChange}
                variant="outlined"
                required
                fullWidth
                id="Username"
                label="User Name"
                name="UserName"
                autoComplete="Username"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                value = {password}
                onChange={handlePasswordChange}
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
            </Grid>
            
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            onClick = {clickHandler}
          >
            Register
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              {/* <Link href="#" variant="body2">
                Already have an account? Sign in
              </Link> */}
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
      </Box>
    </Container>
  );
}