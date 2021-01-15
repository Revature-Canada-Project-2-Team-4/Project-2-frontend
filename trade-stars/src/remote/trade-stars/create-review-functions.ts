import {tradeStarApi} from ".";
import { Company } from "../../models/Company";
import { User } from "../../models/User";

export const createNewReview = async (reviewText:string, reviewedBy:User, reviewedFor:Company) =>{

    let newReview = {
        reviewText,
        reviewedBy,
        reviewedFor,
    }

    console.log(newReview)
    try{

        let res = await tradeStarApi.post('/reviews', newReview);
        console.log(res.data);
        return res.data;
    }catch(e) {
        console.log(e);
        if(e.response){
            throw new Error(e.response.data);
        } else {
            throw new Error("Oops something went wrong")
        }
    }

 }