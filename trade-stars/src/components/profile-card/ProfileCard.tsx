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
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

interface IProfileCardProps {
    currentUser: User
}

export const ProfileCard: React.FunctionComponent<IProfileCardProps> = (props) =>{
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.pos} variant="h5" component="h2">
          User Info
        </Typography>
        <AccountCircleIcon></AccountCircleIcon>
        <Typography className={classes.pos} color="textSecondary">
          User Id: {props.currentUser && props.currentUser.userId}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          Username: {props.currentUser && props.currentUser.username}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          First Name: {props.currentUser && props.currentUser.firstName}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          Last Name: {props.currentUser && props.currentUser.lastName}
        </Typography>
      </CardContent>
    </Card>
  );
}
