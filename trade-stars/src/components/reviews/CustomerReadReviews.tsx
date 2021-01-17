import React, { useEffect, useState } from 'react';
import { Company } from '../../models/Company';
import { Review } from '../../models/Review';
import { User } from '../../models/User';
import {
    Card,
    CardContent,
    CardHeader,
} from "@material-ui/core";
import makeStyles from '@material-ui/core/styles/makeStyles';
import { Theme } from '@material-ui/core/styles/createMuiTheme';
import { getReviewsByCompanyId } from '../../remote/trade-stars/ts-reviews-functions';
import StarsIcon from '@material-ui/icons/Stars';


const useStyles = makeStyles((theme: Theme) => ({
    root: {
        minWidth: 500,
        minHeight: 70,
    },
}),
);


interface ICustomerReadReviewsProps {
    updateCurrentCompany: (c: Company) => void;
    currentCompany: Company;
    updateCurrentUser: (u: User) => void;
    currentUser: User;

}


export const CustomerReadReviews: React.FunctionComponent<ICustomerReadReviewsProps> = (props) => {


    const [reviews, changeReviews] = useState<Review[]>();

    const classes = useStyles();

    useEffect(() => {
        const getReviews = async () => {
            let revs = await getReviewsByCompanyId(props.currentCompany.companyId) 
            console.log(revs)
            changeReviews(revs)
        } 
        getReviews();
    }, [])


    let reviewDisplay = (reviews) ? reviews.map((rev) => {
        return (
            <>
            { <h1> Reviews given by customers for <br></br>
                 {props.currentCompany.companyName}</h1> }
            <Card className={classes.root}>
                <CardContent>
                <StarsIcon></StarsIcon> &nbsp; &nbsp; {rev.reviewedBy.firstName} {rev.reviewedBy.lastName} reviewed  : 
                        " {rev.reviewText} "                     
                </CardContent>
            </Card>
            
            </>
        )

    })
    : []

    return (
        <>
        { reviewDisplay }
        </>
    );
}