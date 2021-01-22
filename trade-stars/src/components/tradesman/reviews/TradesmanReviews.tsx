import React from 'react';
import { User } from '../../../models/User';
import { Company } from '../../../models/Company';
import { CustomerReadReviews } from '../../reviews/CustomerReadReviews';

interface ITradesmanReviews {
    updateCurrentUser: (u:User) => void
    currentUser: User
    updateCurrentCompany: (c:Company) => void
    currentCompany: Company
  }

export const TradesmanReviews: React.FunctionComponent<ITradesmanReviews> = (props) => {
    
    return (
      <>
        <CustomerReadReviews
         updateCurrentCompany = {props.updateCurrentCompany}
         currentUser = {props.currentUser}
         updateCurrentUser =  {props.updateCurrentUser}
         currentCompany = {props.currentCompany}
         />
      
 
      </>
    );
  };