import { tradeStarApi } from '.';

export const getAllReviews = async () => {
    try {
        let res = await tradeStarApi.get('/reviews');
        console.log(res.data);
        return res.data;
    }catch(e) {
        console.log(e);
        if(e.response){
            throw new Error(e.response.data);
        } else {
            throw new Error("Unable to fetch all appointments")
        }
    }
}

export const getReviewsByCompanyId = async (companyId: number) => {
    try {
        let res = await tradeStarApi.get(`/reviews/${companyId}`);
        console.log(res.data);
        return res.data;
    }catch(e) {
        console.log(e);
        if(e.response){
            throw new Error(e.response.data);
        } else {
            throw new Error("Unable to fetch all appointments")
        }
    }
}

export const saveNewReview = async (reviewText: string, reviewedBy: number, reviewedFor: number) => {

    let newReview = {
        reviewText,
        reviewedBy,
        reviewedFor
    }

    try {
        let res = await tradeStarApi.post(`/reviews`, newReview);
        console.log(res.data);
        return res.data;
    }catch(e) {
        console.log(e);
        if(e.response){
            throw new Error(e.response.data);
        } else {
            throw new Error("Unable to fetch all appointments")
        }
    }
}