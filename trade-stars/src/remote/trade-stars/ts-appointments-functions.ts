import { tradeStarApi } from '.';
import { Appointment } from '../../models/Appointment';
import { Company } from '../../models/Company';
import { Service } from '../../models/Service';
import { User } from '../../models/User';

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
        let res = await tradeStarApi.put(`appointments/`, updatedAppt);
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

export const createAppointment = async (customerId: User, companyId: Company, appointmentStart: Date, appointmentEnd: Date, forService: Service) =>{

    let newAppointment = {
        customerId,
        companyId,
        appointmentStart,
        appointmentEnd,
        forService,
        appointmentConfirmed: false,
        appointmentCompleted: false
    }

    console.log(newAppointment)
    try{

        let res = await tradeStarApi.post('/appointments', newAppointment);
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