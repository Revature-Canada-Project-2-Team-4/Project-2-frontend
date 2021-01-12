import {tradeStarApi} from "."

export const tsLogin = async (username: string, password: string) => {
    let credentials = {
        username,
        password
    }

    try {
        let res = await tradeStarApi.post('/auth', credentials);
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

export const createNewCustomer = async (firstName:string, lastName:string, username:string, password:string, email:string) =>{

    let newCustomer = {
            firstName,
            lastName,
            username,
            password,
            email,
            userRole: 1
               
            

    }

    console.log(newCustomer)
    try{

        let res = await tradeStarApi.post('/users', newCustomer);
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


 export const createNewTradesmen = async (firstName:string, lastName:string, username:string, password:string) =>{

    let newTradesmen = {
            firstName,
            lastName,
            username,
            password

    }

    console.log(newTradesmen)
}

export const createNewService = async (serviceType:string, servicePrice:string) =>{

    let newService = {
            serviceType,
            servicePrice,

    }

    console.log(newService)
}

export const createNewCompany = async (companyName:string, companyType:string) =>{

    let newCompany = {
        companyName,
        companyType,


    }

    console.log(newCompany)
}