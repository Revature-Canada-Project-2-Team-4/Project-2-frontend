import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { User } from '../../models/User';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    background: "#fff2be",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
    fontWeight: 'bold'
  },
});

interface IProfileCardProps {
    currentUser: User
}

export const ProfileCard: React.FunctionComponent<IProfileCardProps> = (props) =>{
  const classes = useStyles();
  return (
    <Card className={classes.root} >
      <CardContent>
        <Typography className={classes.pos} variant="h5" component="h2">
          User Information
        </Typography>
        <AccountCircleIcon></AccountCircleIcon>
        <Typography  align="left" className={classes.pos} color="textPrimary">
          User Id: {props.currentUser && props.currentUser.userId}
        </Typography>
        <Typography align="left" className={classes.pos} color="textPrimary">
          Username: {props.currentUser && props.currentUser.username}
        </Typography>
        <Typography align="left" className={classes.pos} color="textPrimary">
          First Name: {props.currentUser && props.currentUser.firstName}
        </Typography>
        <Typography align="left" className={classes.pos} color="textPrimary">
          Last Name: {props.currentUser && props.currentUser.lastName}
        </Typography>
        <Typography align="left" className={classes.pos} color="textPrimary">
          Email : {props.currentUser && props.currentUser.email}
        </Typography>
      </CardContent>
    </Card>
  );
}
