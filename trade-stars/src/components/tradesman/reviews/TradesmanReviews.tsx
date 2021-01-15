import React, { useEffect, useState } from 'react';
import { User } from '../../../models/User';

interface ITradesmanReviews {
    updateCurrentUser: (u:User) => void
    currentUser: User
  }

export const TradesmanReviews: React.FunctionComponent<ITradesmanReviews> = (props) => {
    
    return (
      <>
      <div>
            <p>View app</p>
            <p> Samin </p>
        </div>
      
 
      </>
    );
  };