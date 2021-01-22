import React, { useEffect, useState } from 'react';
import { Review } from '../../../models/Review';
import { User } from '../../../models/User';
import {
    Card,
    CardContent,
} from "@material-ui/core";
import makeStyles from '@material-ui/core/styles/makeStyles';
import { Theme } from '@material-ui/core/styles/createMuiTheme';
import { getReviewsByCompanyId } from '../../../remote/trade-stars/ts-reviews-functions';
import { Company } from '../../../models/Company';



const useStyles = makeStyles((theme: Theme) => ({
    root: {
        minWidth: 1000,
        minHeight: 300,
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
    }, [props.currentCompany.companyId])


    let reviewDisplay = (reviews) ? reviews.map((rev) => {
        return (
            <>
            { <h1> Reviews </h1> }
            <Card className={classes.root}>
                <CardContent>
                
                        <ol>{rev.reviewText}</ol>
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