import React, { useEffect, useState } from 'react';
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
import { User } from '../../../models/User';

interface ITradesmanReviews {
    updateCurrentUser: (u:User) => void
    currentUser: User
  }

export const TradesmanReviews: React.FunctionComponent<ITradesmanReviews> = (props) => {
    
    return (
      <>
      <div>
            <p>View app</p>
            <p> Samin </p>
        </div>
      
 
      </>
    );
  };