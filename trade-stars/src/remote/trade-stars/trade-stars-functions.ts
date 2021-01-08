export const createNewTradesmen = async (firstName:string, lastName:string, username:string, password:string) => {

    let newTradesmen = {
        firstName,
        lastName,
        username,
        password
    }
}

//console.log(newTradesmen)


export const createNewCompany = async (companyName: string, companyType: string) => {

    let newCompany = {
        companyName,
        companyType
    }
}

export const createNewService = async (service_type: string, service_price: number) => {

    let newService = {
        service_type,
        service_price
    }
}

