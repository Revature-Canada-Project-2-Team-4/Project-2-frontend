import {tradeStarApi} from ".";

export const createNewCompany = async (companyName:string, ownerID: number) =>{

    let newCompany = {
            companyName:
            companyOwner
    }

    console.log(newCompany)
    try{

        let res = await tradeStarApi.post('/users', newCompany);
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