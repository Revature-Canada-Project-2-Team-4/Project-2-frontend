import { tradeStarApi } from '.';
import { Company } from '../../models/Company';

export const getAllAppointments = async () => {
    try {
        let res = await tradeStarApi.get('/appointments');
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

export const getAllAppointmentsByCompanyId = async (companyId: number) => {
    try {
        let res = await tradeStarApi.get(`/appointments/${companyId}`);
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

export const createNewAppointment = async (appointment_for: number, appointment_company: number, appointment_start: Date, appointment_end: Date, appointment_for_service: number ) =>{

    let createAppointment = {
        appointment_for,
        appointment_company,
        appointment_start,
        appointment_end,
        appointment_for_service,
        appointment_confirmed: false,
        appointment_completed: false

    }

    console.log(createAppointment)

    // try{

    //     // THIS NEEDS TO BE UPDATED SO WILL COMMENT OUT FOR NOW!!

    //     let res = await tradeStarApi.post('/appointments', createAppointment);
    //     console.log(res.data);
    //     return res.data;
    // }catch(e) {
    //     console.log(e);
    //     if(e.response){
    //         throw new Error(e.response.data);
    //     } else {
    //         throw new Error("Oops something went wrong")
    //     }
    // }


}