import React, { useState } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import  Button  from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import { InputLabel, Select, MenuItem } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '70ch',
      },
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 50,
        width: '25%', 
        display: 'flex',
        //flexDirection: 'column',
        alignItems: 'left',

      },
  }),
);

export default function MultilineTextFields() {
  const classes = useStyles();
  const [review, changeReview] = React.useState('Controlled');
  const [stars, changeStars] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    changeReview(event.target.value);
  };

  const handleStarChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    changeStars(event.target.value as string);
};

  function clickHandler() {
    console.log('Button was clicked');
    // <Link to = "/TradesmenCompanySignin"></Link>
}

  return (
    <form className={classes.root} noValidate autoComplete="off">    
      <div>
        <div>
        <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">Review Rating</InputLabel>
                <Select 
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value = {stars}
                    fullWidth                      
                    onChange = {handleStarChange}                  
                >
               <MenuItem value={"1"}>1</MenuItem>
               <MenuItem value={"2"}>2</MenuItem>
               <MenuItem value={"3"}>3</MenuItem>
               <MenuItem value={"4"}>4</MenuItem>
               <MenuItem value={"5"}>5</MenuItem>
                </Select>
        </FormControl>
        </div>

        <TextField
          value = {review}  
          onChange = {handleChange}
          id="outlined-multiline-static"
          label="Review"
          multiline
          rows={25}
          defaultValue="Write Your Review Here"
          variant="outlined"
        />
      </div>
        <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            onClick={clickHandler}    
        >       
        Submit
        </Button>
    </form>
  );
}