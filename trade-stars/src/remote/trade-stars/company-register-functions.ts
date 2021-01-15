import {tradeStarApi} from ".";
import { User } from "../../models/User";

export const createNewCompany = async (companyName:string, companyOwner: User) =>{

    let newCompany = {
            companyName,
            companyOwner
    }

    console.log(newCompany)
    try{

        let res = await tradeStarApi.post('/companies', newCompany);
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