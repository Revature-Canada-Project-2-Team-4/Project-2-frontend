import React, { useState } from "react";
import { Button, Grid, TextField } from "@material-ui/core";
import { ersLogin } from "../../remote/ers/ers-functions";
import { User } from "../../models/User";
import { useHistory } from "react-router";

interface ILoginProps {
  updateCurrentUser: (u:User) => void
  currentUser: User
}

export const LoginForm: React.FunctionComponent<ILoginProps> = (props) => {
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
      let user = await ersLogin(username, password);
      props.updateCurrentUser(user);
      console.log(user)
      // TODO: redirect user to either employee dashboard or manager dashboard based on role
      if(user.userRoleId === 1) {
        history.push("/manager");
      } else {
        history.push("/employee");
      }
    } catch (e) {
      changePassword("");
    }
  };

  return (
    <>
    <h1>Welcome to the Employee Reimbursement System</h1>
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
    </>
  );
};