import React, { useState } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import  Button  from '@material-ui/core/Button';
import {  Card } from '@material-ui/core';
import { User } from '../../models/User';
import { Company } from '../../models/Company';
import { createNewReview } from '../../remote/trade-stars/create-review-functions';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '70ch',
        background: "#fff2be", 
      },
      background: "#fff2be",
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 50,
        width: '25%', 
        display: 'flex',
        //flexDirection: 'column',
        alignItems: 'left',
        background: "#fff2be", 
      },
      col: {
        color: "#fff2be", 
      },
      bg: {
        backgroud: "#fff2be", 
      },
  }),
);

interface ICreateReview {
  updateCurrentUser: (u:User) => void
  currentUser: User
  updateCurrentCompany: (c:Company) => void
  currentCompany: Company
}

export const CreateReview: React.FunctionComponent<ICreateReview> = (props) =>  {

  const classes = useStyles();
  let history = useHistory();
  const [review, changeReview] = useState("Please enter your review over here!!");
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
       alert("Review has been created");
       history.push('/dashboard/CustomerDashboard');
   } catch (e) {
       console.log(e.message);
   }

  };

  return (
    <>
        
    <h1 className={classes.col}> Enter Review for {props.currentCompany.companyName}</h1>
    <form onSubmit = {handleSubmitCreateReview} className={classes.root} noValidate autoComplete="off">
    <div className={classes.bg}>
      <Card className={classes.root}>
      
        <TextField
          value = {review}  
          onChange = {handleChange}
          id="outlined-multiline-static"
          label="Review"
          multiline
          rows={10}
          variant="outlined"
        />
      <br></br>
        <Button
            type="submit"
            
            variant="contained"
            color="primary"
              
        >       
        Submit
        </Button>
        <br></br><br></br>
        </Card>
        </div>
    </form>
    </>
  );
}