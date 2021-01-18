import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { User } from "../../../models/User";
import {
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Button,
  ButtonGroup,
} from "@material-ui/core";
import { Appointment } from "../../../models/Appointment";
import { Company } from "../../../models/Company";
import { getAllAppointmentsByCompanyId, updateAppointmentCompletedById } from "../../../remote/trade-stars/ts-appointments-functions";

interface IViewSchedule {
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
  tb: {
    fontWeight:'bold',
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

export const ViewSchedule: React.FunctionComponent<IViewSchedule> = (props) => {
  const classes = useStyles();

  const [scheduledAppts, changeScheduleAppts] = useState<Appointment[]>();

  useEffect(() => {
    const getScheduleRows = async () => {
      let appts = await getAllAppointmentsByCompanyId(props.currentCompany.companyId);
      console.log(appts);
      changeScheduleAppts(appts);
    };
    getScheduleRows();
  }, [props.currentCompany.companyId]);

  const markAsCompleted = async (appointment: Appointment) => {
    console.log("need to make call to mark completed")
    let updatedAppt = await updateAppointmentCompletedById(appointment, true);
  }

  const markAsCancelled = async (appointment: Appointment) => {
    console.log("need to make call to mark cancelled")
    let updatedAppt = await updateAppointmentCompletedById(appointment, false);
  }

  return (
    <>
      <h1 className={classes.head}>Your Schedule</h1>
      <div>
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell className={classes.tb} align="center">Appointment ID</TableCell>
                <TableCell className={classes.tb} align="center">Customer Name</TableCell>
                <TableCell className={classes.tb} align="center">From</TableCell>
                <TableCell  className={classes.tb} align="center">To</TableCell>
                <TableCell className={classes.tb} align="center">Service Type</TableCell>
                <TableCell className={classes.tb} align="center">Completed</TableCell>
                <TableCell  className={classes.tb} align="center">Cancel/Mark As Completed</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {(scheduledAppts) ? (scheduledAppts.map((appt) => (
                <TableRow key={appt.appointmentId}>
                  <TableCell align="center" component="th" scope="row">
                    {appt.appointmentId}
                  </TableCell>
                  <TableCell align="center">{appt.customerId.username}</TableCell>
                  <TableCell align="center">{new Date(appt.appointmentStart).toLocaleString()}</TableCell>
                  <TableCell align="center">{new Date(appt.appointmentEnd).toLocaleString()}</TableCell>
                  <TableCell align="center">{appt.forService.serviceTypes.serviceType}</TableCell>
                  <TableCell align="center">
                  {appt.appointmentCompleted === true
                    ? "Completed"
                    : "not Completed"}

                </TableCell>                  <TableCell align="center">
                    <ButtonGroup
                      color="primary"
                      aria-label="outlined primary button group"
                    >
                      <Button className={classes.button1}
                        onClick={() => {
                          markAsCancelled(appt);
                        }}
                      >
                        Cancel
                      </Button>
                      <Button className={classes.button2}
                        onClick={() => {
                          markAsCompleted(appt);
                        }}
                      >
                        Complete
                      </Button>
                    </ButtonGroup>
                  </TableCell>
                </TableRow>
              ))) : (
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
