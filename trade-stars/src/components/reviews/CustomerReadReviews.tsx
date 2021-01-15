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



const useStyles = makeStyles((theme: Theme) => ({
    root: {
        minWidth: 275,
    },
}),
);


interface ICustomerReadReviewsProps {
    updateCurrentCompany: (c: Company) => void;
    currentCompany: Company;
    updateCurrentUser: (u: User) => void;
    currentUser: User;
    updateCurrentCompanyReviewList: (cRL: Review[]) => void;
    currentReadReviewsList: Review[];



}


export const CustomerReadReviews: React.FunctionComponent<ICustomerReadReviewsProps> = (props) => {

    const [currentCompany] = useState(props.currentCompany);
    const [currentUser] = useState(props.currentUser);
    const [reviews, changeReviews] = useState(props.currentReadReviewsList);

    const classes = useStyles();

    useEffect(() => {
        const getReviews = async () => {
            let revs = await getReviewsByCompanyId(currentCompany.companyId) 
            changeReviews(revs)
        } 
        getReviews();
    }, [])


    let reviewDisplay = reviews.map((rev) => {
        return (
            <Card className={classes.root}>
                <CardContent>
                    <li>{rev}</li>
                </CardContent>
            </Card>

        )
    })

    return (
        <>
        { reviewDisplay }
        </>
    );
}