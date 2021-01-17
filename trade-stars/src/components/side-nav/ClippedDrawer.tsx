import React, { useEffect, useState } from "react";
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
  Redirect,
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
import { ApproveAppointments } from "../approvereject/ApproveAppointments";
import HomeIcon from '@material-ui/icons/Home';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import { CustomerDashboard } from "../customer/customer-dashboard/CustomerDashboard";
import { CreateReview } from "../reviews/CreateReview";
import { Company } from "../../models/Company";
import { getCompanyByOwnerId } from "../../remote/trade-stars/ts-companies-functions";

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
  updateCurrentCompany: (c: Company) => void;
  currentCompany: Company;
}

export const ClippedDrawer: React.FunctionComponent<IClippedDrawerProps> = (
  props
) => {

  const [company, changeCompany] = useState<Company>(undefined);

  useEffect(() => {
    if(props.currentUser.userRole.roleId === 2){
      //if the user is a tradesman we need to get their company info
      const getCompany = async () => {
        let associatedCompany = await getCompanyByOwnerId(props.currentUser.userId);
        changeCompany(associatedCompany);
        console.log(associatedCompany);
        
      }
      getCompany();
    }
  },[])

  const classes = useStyles();
  let {path, url} = useRouteMatch();
  let history = useHistory();

  function NavigateLink(index: number) {
    if (index === 0) {
      history.push(`${path}/CustomerInfo`);
    } else if (index === 1) {
      history.push(`${path}/ViewAppointments`);
    } else if (index === 2) {
      history.push(`${path}/CustomerDashboard`);
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
            <HomeIcon color="secondary"/>      Your Dashboard
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
          {(props.currentUser && props.currentUser.userRole.roleId === 1) ? (
            <List>
              {["My Info", "View Upcoming Appointments","View Services", "Logout"].map(
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
                        <InfoIcon color="secondary"/>
                      ) : index === 1 ? (
                        <ScheduleIcon color="primary"/>
                      ) : index === 2 ? (
                        <BusinessCenterIcon color="primary"/>
                      ) : (
                        <ExitToAppIcon color="secondary"/>
                      )}
                    </ListItemIcon>
                    <ListItemText primary={text} />
                  </ListItem>
                )
              )}
            </List>
          ) : ((props.currentUser && props.currentUser.userRole.roleId === 2) ? 
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
                      <AccountCircleIcon />
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
            </List> : <div>Please login</div>
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
              currentCompany={company}
            />
          </Route>
          <Route path={`${path}/TradesmanProfile`}>
            <TradesmanProfile
              updateCurrentUser={props.updateCurrentUser}
              currentUser={props.currentUser}
            />
          </Route>
          <Route path={`${path}/ApproveAppointments`}>
            <ApproveAppointments
              updateCurrentUser={props.updateCurrentUser}
              currentUser={props.currentUser}
              updateCurrentCompany={changeCompany}
              currentCompany={company}

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
              updateCurrentCompany = {props.updateCurrentCompany}
              currentCompany = {company}
            />
          </Route>
          <Route path={`${path}/ViewSchedule`}>
            <ViewSchedule
              updateCurrentUser={props.updateCurrentUser}
              currentUser={props.currentUser}
              currentCompany={company}
            />
          </Route>
          <Route path={`${path}/CustomerDashboard`}>
            <CustomerDashboard
              updateCurrentUser={props.updateCurrentUser}
              currentUser={props.currentUser}
              updateCurrentCompany = {changeCompany}
              currentCompany = {company}
            />
          </Route>
          <Route path={`${path}/CreateReview`}>
            <CreateReview
              updateCurrentUser={props.updateCurrentUser}
              currentUser={props.currentUser}
              updateCurrentCompany = {props.updateCurrentCompany}
              currentCompany = {company}
            />
            </Route>
            
        </Switch>
      </main>
    </div>
  );
  
};