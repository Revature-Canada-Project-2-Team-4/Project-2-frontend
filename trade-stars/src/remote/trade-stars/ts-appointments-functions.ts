import { tradeStarApi } from '.';
import { Appointment } from '../../models/Appointment';

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

export const getAllAppointmentsByCustomerId = async (customerId: number) => {
    try{
        let res = await tradeStarApi.get(`/appointments/customer/${customerId}`);
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

export const updateAppointmentCompletedById = async (appointment: Appointment, isCompleted:boolean) => {

    let updatedAppt = {
        ...appointment,
        appointmentCompleted: isCompleted
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
            throw new Error("Unable to fetch all appointments")
        }
    }
}