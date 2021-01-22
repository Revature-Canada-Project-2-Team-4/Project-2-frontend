import {tradeStarApi} from "."
import { Appointment } from "../../models/Appointment";


export const UpdateAppointments = async (appointment: Appointment ,isConfirmed: boolean) =>{

    let updatedAppt = {
        ...appointment,
        appointmentConfirmed: isConfirmed
    }
    try {
        let res = await tradeStarApi.put(`/appointments`, updatedAppt);
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


