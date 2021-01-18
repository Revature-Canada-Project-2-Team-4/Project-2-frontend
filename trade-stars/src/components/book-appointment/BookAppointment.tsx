import React, {  useState } from 'react';
import { Company } from '../../models/Company';
import { User } from '../../models/User';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { Theme } from '@material-ui/core/styles/createMuiTheme';
import { Service } from '../../models/Service';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { createAppointment } from '../../remote/trade-stars/ts-appointments-functions';
import { useHistory } from 'react-router-dom';
import { Card , Grid} from '@material-ui/core';

interface IBookAppointmentProps {
    updateCurrentCompany: (c: Company) => void;
    currentCompany: Company;
    updateCurrentUser: (u: User) => void;
    currentUser: User;
    updateCurrentService: (s: Service) => void;
    currentService: Service

}



const linkStyle = {
    color: 'white',
    fontSize: 16,

}

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        minWidth: 250,
        background: "#fff2be",
      },
      textField: {
        width: 200,
        height: 150,
      },
      head: {
        color: "#fff2be",
      },
}),
);

export const BookAppointment: React.FunctionComponent<IBookAppointmentProps> = (props) => {

    const classes = useStyles();

    let history = useHistory();
     
    const [pickedDate, changePickedDate] = useState(new Date());
    // const [appointment_for, changeAppointment_for] = useState(0);

    const [appointmentFor] = useState(props.currentUser.userId);
    const [appointmentCompany] = useState(props.currentCompany);
    const handlePickedDateChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        changePickedDate(event.target.value as Date);
      };
    
    const handleSubmitAppointment = async (e: React.SyntheticEvent) => {
        
        e.preventDefault();
       // const appointmentForServices = props.currentService.serviceTypes
        var DOpickedEndDate = new Date(pickedDate);
        DOpickedEndDate.setHours(DOpickedEndDate.getHours(),DOpickedEndDate.getMinutes()+60,0,0);
        
        var DOpickedDate = new Date(pickedDate)


        try {
            //Submit appointment to db
            let appointment = await createAppointment(props.currentUser, props.currentCompany, DOpickedDate, DOpickedEndDate, props.currentService )  
            console.log(appointment);
            history.push('/dashboard')


        } catch(e) {
          console.log(e);
        }

    };
    return (
        <>
        <h1 className={classes.head}>Book an Appointment for <br></br>
        {props.currentCompany.companyName}</h1>
        <Card className={classes.root}>
        <Grid
              container
              direction="column"
              justify="flex-start"
              alignItems="center"
              
            >
        <form onSubmit = {handleSubmitAppointment}  noValidate>
       <br></br>
        <TextField
          id="datetime-local"
          label="Next appointment"
          type="datetime-local"
          value = {pickedDate}
          onChange = {handlePickedDateChange}
          defaultValue="2017-05-24T10:30"
          
          InputLabelProps={{
            shrink: true,
          }}
        /> 
        <br></br><br></br>
        <Button
            type="submit"
            variant="contained"
            color="primary"
          >
            Book
        </Button>
          <br></br><br></br>
      </form>
      </Grid>
      </Card>
</>

    )
}