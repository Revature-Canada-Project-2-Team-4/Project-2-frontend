import React from 'react'
import TextField from '@material-ui/core/TextField';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }),
);



export const FNTextField:React.FunctionComponent = (props:any) => {
    const classes = useStyles();
    return (
 
      <form className={classes.root} noValidate autoComplete="off">
            <div>
            <TextField 
            required id="standard-required" 
            label="Required" 
            defaultValue="" 
            helperText="Enter your first name"
            />
            </div>
      </form>

       
    )


}