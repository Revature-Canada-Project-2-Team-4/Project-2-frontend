export class Tradesmen {
    userId: number
    username: string
    password: string
    firstName: string
    lastName: string
    companyWorker: Company
}

export class Company {
    companyId: number
    companyName: string
    companyType: string
    servicesProvided: Services
}

export class Services {
    serviceId: number
    service_type: string
    service_price: number
}
