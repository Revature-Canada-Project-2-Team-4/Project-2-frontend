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
  Route,
  Switch,
  useHistory,
} from "react-router-dom";
import { ClippedDrawer } from "../../side-nav/ClippedDrawer";
import { User } from "../../../models/User";
import classes from "*.module.css";
import {
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  ButtonGroup,
  Button,
  TableContainer,
} from "@material-ui/core";
import { Company } from "../../../models/Company";
import { getAllAppointmentsByCustomerId } from "../../../remote/trade-stars/ts-appointments-functions";
import { Appointment } from "../../../models/Appointment";

interface IViewAppointments {
  updateCurrentUser: (u: User) => void;
  currentUser: User;
  currentCompany: Company;
}

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export const ViewAppointments: React.FunctionComponent<IViewAppointments> = (
  props
) => {
  const classes = useStyles();

  const [upcomingAppts, changeUpcomingAppts] = useState<Appointment[]>();

  useEffect(() => {
    const getUpcomingAppts = async () => {
      let appts = await getAllAppointmentsByCustomerId(
        props.currentUser.userId
      );
      console.log(appts);
      changeUpcomingAppts(appts);
    };
    getUpcomingAppts();
  }, [props.currentUser.userId]);

  return (
    <>
      <h2>Upcoming Appointments</h2>
      <div>
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="center">Appointment ID</TableCell>
                <TableCell align="center">Customer Id</TableCell>
                <TableCell align="center">From</TableCell>
                <TableCell align="center">To</TableCell>
                <TableCell align="center">Service</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {upcomingAppts ? (
                upcomingAppts.map((appt) => (
                  <TableRow key={appt.appointmentId}>
                    <TableCell component="th" scope="row">
                      {appt.appointmentId}
                    </TableCell>
                    <TableCell align="right">
                      {appt.customerId.username}
                    </TableCell>
                    <TableCell align="right">{new Date(appt.appointmentStart).toLocaleString()}</TableCell>
                    <TableCell align="right">{new Date(appt.appointmentEnd).toLocaleString()}</TableCell>
                    <TableCell align="right">
                      {appt.forService.serviceTypes.serviceType}
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow key={1}>
                  <TableCell component="th" scope="row">
                    Loading...
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </>
  );
};
