import React, { useState } from "react";
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Grid,
  makeStyles,
  TextField,
  Typography,
} from "@material-ui/core";
import { tsLogin } from "../../remote/trade-stars/trade-stars-functions";
import { User } from "../../models/User";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";

interface ILoginProps {
  updateCurrentUser: (u: User) => void;
  currentUser: User;
}

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export const LoginForm: React.FunctionComponent<ILoginProps> = (props) => {
  const classes = useStyles();

  const [username, changeUsername] = useState("");
  const [password, changePassword] = useState("");

  let history = useHistory();

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    changeUsername(e.target.value);
  };

  // This will handle the password change and update state
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    changePassword(e.target.value);
  };

  // Synthetic event is from react for creating a standard event between different browsers
  const handleSubmitLogin = async (e: React.SyntheticEvent) => {
    // Prevent default html submit behaviour
    e.preventDefault();
    // Send username and password along with token
    try {
      let user = await tsLogin(username, password);
      props.updateCurrentUser(user);
      console.log(user);
      // TODO: redirect user to either employee dashboard or manager dashboard based on role
      if (user) {

        // if (props.currentUser.userRole.roleId == 2) {
        //   let company = await 
        //   // make a fxn to get a single company
        // }
        // navigate based on if user is returned
        history.push("/dashboard");
      }
    } catch (e) {
      changePassword("");
    }
  };

  return (
    <>
      <h1>Welcome to Trade Stars</h1>
      <Card className={classes.root}>
        <CardContent>
          <Typography className={classes.pos} variant="h5" component="h2">
            Please login to continue
          </Typography>
          <form onSubmit={handleSubmitLogin} noValidate autoComplete="off">
            <Grid
              container
              direction="column"
              justify="flex-start"
              alignItems="center"
              spacing={2}
            >
              <Grid item>
                <TextField
                  value={username}
                  onChange={handleUsernameChange}
                  id="username-input"
                  type="text"
                  label="Username"
                  variant="outlined"
                  autoComplete="off"
                />
              </Grid>
              <Grid item>
                <TextField
                  value={password}
                  onChange={handlePasswordChange}
                  id="password-input"
                  type="password"
                  label="Password"
                  variant="outlined"
                  autoComplete="off"
                />
              </Grid>
              <Grid item>
                <Button type="submit" variant="contained" color="primary">
                  Submit
                </Button>
              </Grid>
            </Grid>
          </form>
        </CardContent>
      </Card>
    </>
  );
};
