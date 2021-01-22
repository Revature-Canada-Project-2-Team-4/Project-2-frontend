import React, { useEffect, useState } from 'react';
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
  makeStyles,
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

const useStyles = makeStyles({
  root: {
      minWidth: 250,
      background: "#fff2be",
    },
    text: {
      fontWeight: 'bold',
    },
    col: {
      color: "#fff2be",
    },
    button1: {
      color: "#FF0000",
      borderColor: "#FF0000",
      hoverOver: "#FF0000",
    },
    button2: {
      color: "#228B22",
      
      borderColor: "#228B22",
    },
});


export const ApproveAppointments: React.FunctionComponent<IApproveAppointments> = (props) => {
  const classes = useStyles();

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
        <h1 className={classes.col}>View Appointments</h1>
        <TableContainer component={Paper} className={classes.root}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
          <TableCell className={classes.text} align="center" >Id</TableCell>
            {/* <TableCell align="center">AppointmentId</TableCell> */}
            <TableCell className={classes.text} align="center">Customer Name</TableCell>
            <TableCell className={classes.text} align="center">Company Name</TableCell>
            <TableCell  className={classes.text} align="center">Start Time</TableCell>
            <TableCell  className={classes.text} align="center">End Time</TableCell>
            <TableCell  className={classes.text} align="center">Service</TableCell>

            <TableCell  className={classes.text} align="center">Confirmation</TableCell>
            
            <TableCell  className={classes.text} align="center">Reject/Approve</TableCell>
          </TableRow>
        </TableHead>
       
        <TableBody>
        {appointments ? (
            appointments.filter(appt => appt.appointmentCompleted === false).map((row) => (
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

                <TableCell align="center">
                  <ButtonGroup
                    color="primary"
                    aria-label="outlined primary button group"
                  >
                    <Button className={classes.button1} onClick={() => {rejectAppointments(row)}}>Reject</Button>
                    <Button className={classes.button2} onClick={() => {approveAppointments(row)}}>Approve</Button>
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