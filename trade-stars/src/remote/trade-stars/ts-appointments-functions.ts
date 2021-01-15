import { tradeStarApi } from '.';

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