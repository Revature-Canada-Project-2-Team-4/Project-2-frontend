import React from 'react'
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }));


export const TradesmenReg:React.FunctionComponent<any> = (props:any) => {
    const classes = useStyles();
    
  



    return (
        <script>
            <form className={classes.root} noValidate autoComplete="off"></form>
            <h1> Please fill out the registration form </h1>
            <div>
            <TextField 
            required id="standard-required" 
            label="Required" 
            defaultValue="" 
            helperText="Enter your first name"
            />


            </div>

        
        
        
        
        </script>
       
    )


}