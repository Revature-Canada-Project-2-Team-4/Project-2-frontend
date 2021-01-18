import React, { useEffect, useState } from "react";
import {makeStyles } from "@material-ui/core/styles";
import { User } from "../../../models/User";
import {
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
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
    background: "#fff2be",
  },
  head: {    
    
    color: "#fff2be",
  },
  tableRow: {
    fontWeight: 'bold',
    fontSize: 20
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
      <h2 className={classes.head}>Upcoming Appointments for {props.currentUser.firstName} {props.currentUser.lastName}</h2>
      <div>
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow >
                <TableCell  className={classes.tableRow} align="center">Appointment ID</TableCell>
                {/* <TableCell align="left">Customer Name</TableCell> */}
                <TableCell className={classes.tableRow} align="center">From</TableCell>
                <TableCell  className={classes.tableRow} align="center">To</TableCell>
                <TableCell  className={classes.tableRow} align="center">Service</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {upcomingAppts ? (
                upcomingAppts.map((appt) => (
                  <TableRow key={appt.appointmentId}>
                    <TableCell component="th" scope="row" align="center">
                      {appt.appointmentId}
                    </TableCell>
                    {/* <TableCell align="right">
                      {appt.customerId.username}
                    </TableCell> */}
                    <TableCell align="center">{new Date(appt.appointmentStart).toLocaleString()}</TableCell>
                    <TableCell align="center">{new Date(appt.appointmentEnd).toLocaleString()}</TableCell>
                    <TableCell align="center">
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
