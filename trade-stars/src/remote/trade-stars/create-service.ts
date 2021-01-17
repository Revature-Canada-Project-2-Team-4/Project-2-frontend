import {tradeStarApi} from "."
import { Company } from "../../models/Company";
import { ServiceTypes } from "../../models/ServiceTypes";

export const createNewService = async (servicePrice: any,serviceTypes: any, providedBy: Company) =>{

    let newService = {
        servicePrice,
        serviceTypes: {
                    serviceId: serviceTypes
        },
        providedBy
    }

    console.log(newService)
    try{

        let res = await tradeStarApi.post('/offerings', newService);
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