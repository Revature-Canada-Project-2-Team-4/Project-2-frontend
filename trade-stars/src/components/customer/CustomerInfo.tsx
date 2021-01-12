import React from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import InfoIcon from '@material-ui/icons/Info';
import EventIcon from '@material-ui/icons/Event';
import { BrowserRouter as Router,Link, Route, Switch, useHistory } from "react-router-dom";
import { ClippedDrawer } from '../side-nav/ClippedDrawer';
import { User } from '../../models/User';

interface ICustomerInfo {
    updateCurrentUser: (u:User) => void
    currentUser: User
  }

export const CustomerInfo: React.FunctionComponent<ICustomerInfo> = (props) => {
   
    return (
      <>
      <h1>CustomerInfo</h1>
      <p> What will be in here: Something like a profile card with customer details </p>
      <p> matt </p>
      </>
    );
  };