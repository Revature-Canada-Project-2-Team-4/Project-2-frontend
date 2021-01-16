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
      <h2>Schedule</h2>
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
                <TableCell align="center">Mark As Completed</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {(scheduledAppts) ? (scheduledAppts.map((appt) => (
                <TableRow key={appt.appointmentId}>
                  <TableCell component="th" scope="row">
                    {appt.appointmentId}
                  </TableCell>
                  <TableCell align="right">{appt.customerId.username}</TableCell>
                  <TableCell align="right">{appt.appointmentStart}</TableCell>
                  <TableCell align="right">{appt.appointmentEnd}</TableCell>
                  <TableCell align="right">{appt.forService.serviceTypes.serviceType}</TableCell>
                  <TableCell align="right">
                    <ButtonGroup
                      color="primary"
                      aria-label="outlined primary button group"
                    >
                      <Button
                        onClick={() => {
                          markAsCancelled(appt);
                        }}
                      >
                        Cancel
                      </Button>
                      <Button
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
