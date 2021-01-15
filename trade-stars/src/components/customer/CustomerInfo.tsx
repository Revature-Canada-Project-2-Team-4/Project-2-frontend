import React from 'react';
import { User } from '../../models/User';
import { ProfileCard } from '../profile-card/ProfileCard';

interface ICustomerInfo {
    updateCurrentUser: (u:User) => void
    currentUser: User
  }

export const CustomerInfo: React.FunctionComponent<ICustomerInfo> = (props) => {
   
    return (
      <>
      <div>
      <ProfileCard currentUser={props.currentUser} />
      </div>
      </>
    );
  };