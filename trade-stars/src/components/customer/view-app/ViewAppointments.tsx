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
import { ClippedDrawer } from '../../side-nav/ClippedDrawer';
import { User } from '../../../models/User';

interface IViewAppointments {
    updateCurrentUser: (u:User) => void
    currentUser: User
  }

export const ViewAppointments: React.FunctionComponent<IViewAppointments> = (props) => {
    
  
    return (
      <>
        <div>
            <p>View app</p>
            <p>top card or table for upcoming - call db to get with date in future </p>
            <p>bottom card or table for past appoints - get appointments with dates in past and completed</p>
            <p>Whoever needs a task, grab this</p>
        </div>
        <div className="table-responsive">
      <table className="table table-striped">
        <thead>View Upcoming Appointments
          <tr>Manik
              <th scope="col" >12 pm  
              </th>
          </tr>
        </thead>
        <tbody>
                <tr>Samin
                </tr>
        </tbody>
      </table>
    </div>


      </>
    );
  };