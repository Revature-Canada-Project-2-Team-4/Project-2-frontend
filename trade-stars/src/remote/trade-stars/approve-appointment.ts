import {tradeStarApi} from "."
import { Appointment } from "../../models/Appointment";


export const UpdateAppointments = async (appointmentId: any,appointmentConfirmed: any) =>{

    let updatedAppointment = {

        appointmentId,
        appointmentConfirmed
        
    }

    console.log(updatedAppointment)
    try {
        let res = await tradeStarApi.put('/appointment', updatedAppointment);
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


