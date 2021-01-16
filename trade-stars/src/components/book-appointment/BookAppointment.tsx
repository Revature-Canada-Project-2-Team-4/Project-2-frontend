import React, { useEffect, useState } from 'react';
import { Company } from '../../models/Company';
import { Review } from '../../models/Review';
import { User } from '../../models/User';
import {
    Card,
    CardContent,
    CardHeader,
} from "@material-ui/core";
import makeStyles from '@material-ui/core/styles/makeStyles';
import { Theme } from '@material-ui/core/styles/createMuiTheme';
import { getReviewsByCompanyId } from '../../remote/trade-stars/ts-reviews-functions';
import { Service } from '../../models/Service';
import { getAllTradeServices } from '../../remote/trade-stars/ts-services-functions';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Avatar from '@material-ui/core/Avatar';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { createNewAppointment } from '../../remote/trade-stars/ts-appointments-functions';



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
    container: {
        display: 'flex',
        flexWrap: 'wrap',
      },
      textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 200,
      },
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 380,
        width: '100%',
        display: 'flex',
        //flexDirection: 'column',
        alignItems: 'left',

    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}),
);

export const BookAppointment: React.FunctionComponent<IBookAppointmentProps> = (props) => {

    const classes = useStyles();
     
    const [pickedDate, changePickedDate] = useState(new Date());
    // const [appointment_for, changeAppointment_for] = useState(0);


    const handlePickedDateChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        changePickedDate(event.target.value as Date);
      };
    
    const handleSubmitAppointment = async (e: React.SyntheticEvent) => {
        
        e.preventDefault();

        const appointmentFor = props.currentUser.userId;
        const appointmentCompany = props.currentCompany.companyId
        const appointmentForServices = props.currentService.serviceTypes

        var pickedEndDate = new Date();
        pickedEndDate.setHours(pickedEndDate.getHours(),pickedEndDate.getMinutes()+60,0,0);
        
        console.log(appointmentFor)
        console.log(appointmentCompany)
        console.log(appointmentForServices)
        console.log(pickedDate)
        console.log(pickedEndDate)

        // try {
        //     //Submit appointment to db
        //     let appointment = await createNewAppointment(
        //         appointmentFor,
        //         appointmentCompany,
        //         appointmentStart,
        //         appointmentEnd,
        //         appointmentForservices, 

        //     )

        // } catch {}

    };



    

    return (
        <form onSubmit = {handleSubmitAppointment} className={classes.container} noValidate>
            <h1>Book an Appointment</h1>
        <TextField
          id="datetime-local"
          label="Next appointment"
          type="datetime-local"
          value = {pickedDate}
          onChange = {handlePickedDateChange}
          defaultValue="2017-05-24T10:30"
          className={classes.textField}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
           // onClick = {clickHandler}
          >
            Register
        </Button>

      </form>
       


    )
}