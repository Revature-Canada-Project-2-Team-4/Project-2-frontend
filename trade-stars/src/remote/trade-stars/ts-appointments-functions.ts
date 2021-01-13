import {tradeStarApi} from "."

export const getAllScheduledAppointmentsByCompany = async (companyId:string) => {
    let apptSearch = {
        companyId
    }
    try{
       let res = await tradeStarApi.post('/appointments', apptSearch);
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