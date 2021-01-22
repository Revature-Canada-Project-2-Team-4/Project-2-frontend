import React from 'react';
import { User } from '../../../models/User';
import { ProfileCard } from '../../profile-card/ProfileCard';

interface ITradesmanProfile {
    updateCurrentUser: (u:User) => void
    currentUser: User
  }
export const TradesmanProfile: React.FunctionComponent<ITradesmanProfile> = (props) => {
    
    return (
      <>
      <div>
            <ProfileCard currentUser={props.currentUser} />
        </div>
      
 
      </>
    );
  };