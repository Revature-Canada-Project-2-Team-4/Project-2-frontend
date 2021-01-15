import React, { useState } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import  Button  from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import { InputLabel, Select, MenuItem } from '@material-ui/core';
import { User } from '../../models/User';
import { Company } from '../../models/Company';
import { createNewReview } from '../../remote/trade-stars/create-review-functions';

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

interface ITradesmanReviews {
  updateCurrentUser: (u:User) => void
  currentUser: User
  updateCurrentCompany: (c:Company) => void
  currentCompany: Company
}


export const CreateReview: React.FunctionComponent<ITradesmanReviews> = (props) =>  {
  const classes = useStyles();
  const [review, changeReview] = useState("");
  const [reviewedBy] = useState(props.currentUser);
  const [reviewedFor] = useState(props.currentCompany);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    changeReview(event.target.value);
  };

  const handleSubmitCreateReview = async (e: React.SyntheticEvent) => {

    e.preventDefault();

    try {
      // Submit new review to database
       let CreateReview = await createNewReview(
        review,
        reviewedBy,
        reviewedFor,
       );


       console.log(CreateReview);
       alert("Review has been created")
   } catch (e) {
       console.log(e.message);
   }

  };

  return (
    
    <form onSubmit = {handleSubmitCreateReview} className={classes.root} noValidate autoComplete="off">    
    <h1> Enter Review for </h1>
    <h1> {props.currentCompany}</h1>
      <div>
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
              
        >       
        Submit
        </Button>
    </form>
  );
}