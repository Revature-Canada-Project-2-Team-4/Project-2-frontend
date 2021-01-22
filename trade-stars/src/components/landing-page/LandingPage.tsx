import { Card, CardContent, Grid, makeStyles, Typography } from "@material-ui/core";
import { Button } from "@material-ui/core";
import React from "react";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    background: '#e0a150',
    marginTop: -30
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
  mainLogo: {
    height: 200,
    width:200,
    borderRadius: 100
  },
  logoDiv: {
    marginBottom: 130,
    marginTop: 0
  }
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
    <>
    <div className={classes.logoDiv}>
      <img src={process.env.PUBLIC_URL + '/logo2.png'} alt="logo"  className={classes.mainLogo}/>
    </div>
    <div>
      <Card className={classes.root }>
        <CardContent>
          <Typography className={classes.pos} variant="h4" component="h1">
            Welcome to Tradestars!
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
                Register As Customer
              </Button>
            </Grid>
            <Grid item>
            <Button
                variant="contained"
                color="primary"
                onClick={navToTradesmenRegister}
              >
                Register As Tradesmen
              </Button>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </div>
    </>
  );
};
