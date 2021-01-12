import React from "react";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import InfoIcon from "@material-ui/icons/Info";
import EventIcon from "@material-ui/icons/Event";
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
  useHistory,
  useRouteMatch,
} from "react-router-dom";
import { Button } from "@material-ui/core";
import { ViewAppointments } from "../customer/view-app/ViewAppointments";

import { CustomerInfo } from "../customer/CustomerInfo";
import { TradesmanProfile } from "../tradesman/profile/TradesmanProfile";
import { TradesmanDashboard } from "../tradesman/TradesmanDashboard";
import { TradesmanReviews } from "../tradesman/reviews/TradesmanReviews";
import { ViewSchedule } from "../tradesman/schedule/ViewSchedule";
import { User } from "../../models/User";
import RateReviewIcon from "@material-ui/icons/RateReview";
import ScheduleIcon from "@material-ui/icons/Schedule";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    drawerContainer: {
      overflow: "auto",
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
  })
);
interface IClippedDrawerProps {
  updateCurrentUser: (u: User) => void;
  currentUser: User;
}

export const ClippedDrawer: React.FunctionComponent<IClippedDrawerProps> = (
  props
) => {

  const classes = useStyles();
  let {path, url} = useRouteMatch();
  let history = useHistory();

  function NavigateLink(index: number) {
    if (index === 0) {
      history.push(`${path}/CustomerInfo`);
    } else if (index === 1) {
      history.push(`${path}/ViewAppointments`);
    } else {
      history.push("/");
    }
  }

  function TradesmanNavigateLink(index: number) {
    if (index === 0) {
      history.push(`${path}/TradesmanProfile`);
    } else if (index === 1) {
      history.push(`${path}/TradesmanReviews`);
    } else if (index === 2) {
      history.push(`${path}/ApproveAppointments`);
    } else if (index === 3) {
      history.push(`${path}/ViewSchedule`);
    } else if (index === 4) {
      history.push("/");
    } else {
      history.push("/dashboard");
    }
  }

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" noWrap>
            Your Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Toolbar />
        <div className={classes.drawerContainer}>
          {1 == 1 ? (
            <List>
              {["My Info", "View Upcoming Appointments", "Logout"].map(
                (text, index) => (
                  <ListItem
                    button
                    key={text}
                    onClick={() => {
                      NavigateLink(index);
                    }}
                  >
                    <ListItemIcon>
                      {index === 0 ? (
                        <InfoIcon />
                      ) : index === 1 ? (
                        <EventIcon />
                      ) : (
                        <ExitToAppIcon />
                      )}
                    </ListItemIcon>
                    <ListItemText primary={text} />
                  </ListItem>
                )
              )}
            </List>
          ) : (
            <List>
              {[
                "My Profile",
                "Tradesman Reviews",
                "Approve/Reject Apppointments",
                "View Schedule",
                "Logout",
              ].map((text, index) => (
                <ListItem
                  button
                  key={text}
                  onClick={() => {
                    TradesmanNavigateLink(index);
                  }}
                >
                  <ListItemIcon>
                    {index === 0 ? (
                      <InfoIcon />
                    ) : index === 1 ? (
                      <RateReviewIcon />
                    ) : index === 2 ? (
                      <ScheduleIcon />
                    ) : index === 3 ? (
                      <EventIcon />
                    ) : (
                      <ExitToAppIcon />
                    )}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItem>
              ))}
            </List>
          )}
          <Divider />
        </div>
      </Drawer>
      <main className={classes.content}>
        <Toolbar />
        <Switch>
          <Route path={`${path}/CustomerInfo`}>
            <CustomerInfo
              updateCurrentUser={props.updateCurrentUser}
              currentUser={props.currentUser}
            />
          </Route>
          <Route path={`${path}/ViewAppointments`}>
            <ViewAppointments
              updateCurrentUser={props.updateCurrentUser}
              currentUser={props.currentUser}
            />
          </Route>
          <Route path={`${path}/TradesmanProfile`}>
            <TradesmanProfile
              updateCurrentUser={props.updateCurrentUser}
              currentUser={props.currentUser}
            />
          </Route>
          <Route path={`${path}/TradesmanDashboard`}>
            <TradesmanDashboard
              updateCurrentUser={props.updateCurrentUser}
              currentUser={props.currentUser}
            />
          </Route>
          <Route path={`${path}/TradesmanReviews`}>
            <TradesmanReviews
              updateCurrentUser={props.updateCurrentUser}
              currentUser={props.currentUser}
            />
          </Route>
          <Route path={`${path}/ViewSchedule`}>
            <ViewSchedule
              updateCurrentUser={props.updateCurrentUser}
              currentUser={props.currentUser}
            />
          </Route>
        </Switch>
      </main>
    </div>
  );
};
