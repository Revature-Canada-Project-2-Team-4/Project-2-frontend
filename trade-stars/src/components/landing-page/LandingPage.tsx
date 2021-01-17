import { Card, CardContent, Grid, makeStyles, Typography } from "@material-ui/core";
import { Button } from "@material-ui/core";
import React from "react";
import { useHistory } from "react-router-dom";

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

export const LandingPage: React.FunctionComponent<any> = (props) => {
  const classes = useStyles();

  let history = useHistory();

  const navToLogin = () => {
    history.push("/login");
  };
  const navToTradesmenRegister = () => {
    history.push("/tradesmenregister");
  };

  const navToCustomerRegister = () => {
    history.push("/customerregister");
  };

  return (
    <div>
      <Card className={classes.root }>
        <CardContent>
          <Typography variant="h4" component="h1">
            Please select an option
          </Typography>
          <Grid
            container
            direction="column"
            justify="flex-start"
            alignItems="center"
            spacing={2}
          >
            <Grid item>
              <Button variant="contained" color="primary" onClick={navToLogin}>
                Login
              </Button>
            </Grid>

            <Grid item>
              <Button
                variant="contained"
                color="primary"
                onClick={navToCustomerRegister}
              >
                Customer Register
              </Button>


              <Button
                variant="contained"
                color="primary"
                onClick={navToTradesmenRegister}
              >
                Tradesmen Register
              </Button>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </div>
  );
};
