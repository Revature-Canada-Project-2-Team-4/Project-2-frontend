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
// import InboxIcon from '@material-ui/icons/MoveToInbox';
// import MailIcon from '@material-ui/icons/Mail';
// import InfoIcon from '@material-ui/icons/Info';
// import EventIcon from '@material-ui/icons/Event';
import { BrowserRouter as Router,Link, Route, Switch, useHistory } from "react-router-dom";
import { User } from '../../models/User';
import {
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  ButtonGroup,
  Button,
} from "@material-ui/core";
import { Appointment } from '../../models/Appointment';
import { getAllAppointmentsByCompanyId } from '../../remote/trade-stars/ts-appointments-functions';
import { Company } from '../../models/Company';
import { UpdateAppointments } from '../../remote/trade-stars/approve-appointment';

interface IApproveAppointments {
  updateCurrentUser: (u:User) => void
  currentUser: User
  updateCurrentCompany: (u:Company) => void
  currentCompany: Company
  
  
}


export const ApproveAppointments: React.FunctionComponent<IApproveAppointments> = (props) => {


  const [appointments, viewAppointments] = useState<Appointment[]>();

  useEffect(() => {
    const getAppointments = async () => {
      let appoint = await getAllAppointmentsByCompanyId(props.currentCompany.companyId);
      console.log(appoint);
      viewAppointments(appoint);
    };
    getAppointments();
  }, []);

  const approveAppointments = async (appointment: Appointment) => {
    try {
      let user = await UpdateAppointments(appointment, true);
      console.log(user)
      const getAppointments = async () => {
        let appoint = await getAllAppointmentsByCompanyId(props.currentCompany.companyId)
        console.log(appoint);
        viewAppointments(appoint);
      };
      getAppointments();
      
    } catch (e) {
      console.log(e.message);
    }
  }

  const rejectAppointments = async (appointment: Appointment) => {
    try {
      let user = await UpdateAppointments(appointment, false);
      console.log(user)
      const getAppointments = async () => {
        let appoint = await getAllAppointmentsByCompanyId(props.currentCompany.companyId);
        console.log(appoint);
        viewAppointments(appoint);
      };
      getAppointments();
    } catch (e) {
      console.log(e.message);
    }
  }
    
    return (
      
      <div>
        <h3>View Appointments</h3>
        <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
          <TableCell>Id</TableCell>
            {/* <TableCell align="center">AppointmentId</TableCell> */}
            <TableCell align="center">Customer Name</TableCell>
            <TableCell align="center">Company Name</TableCell>
            <TableCell align="center">Start Time</TableCell>
            <TableCell align="center">End Time</TableCell>
            <TableCell align="center">Service</TableCell>

            <TableCell align="center">Confirmation</TableCell>
            <TableCell align="center">Completed</TableCell>
          </TableRow>
        </TableHead>
       
        <TableBody>
        {appointments ? (
            appointments.map((row) => (
              <TableRow key={row.appointmentId}>
                <TableCell component="th" scope="row" align="center">
                  {row.appointmentId}
                </TableCell>
                <TableCell align="center">{row.customerId.username}</TableCell>
                <TableCell align="center">{row.companyId.companyName}</TableCell>
                <TableCell align="center">
                  {new Date(row.appointmentStart).toLocaleString()}
                </TableCell>
                <TableCell align="center">{new Date(row.appointmentEnd).toLocaleString()}</TableCell>
                <TableCell align="center">{row.forService.serviceTypes.serviceType}</TableCell>

                
                <TableCell align="center">
                  {row.appointmentConfirmed === true
                    ? "Approved"
                    : "rejected"}

                </TableCell>
         <TableCell align="center">{row.appointmentCompleted === false ? "not completed": "completed"}</TableCell>

                <TableCell align="center">
                  <ButtonGroup
                    color="primary"
                    aria-label="outlined primary button group"
                  >
                    <Button onClick={() => {rejectAppointments(row)}}>Reject</Button>
                    <Button onClick={() => {approveAppointments(row)}}>Approve</Button>
                  </ButtonGroup>
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
      
 
      
    );
  };