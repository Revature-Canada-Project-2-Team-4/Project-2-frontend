import { Company } from "./Company"
import { ServiceTypes } from "./ServiceTypes"
export class Service {
    serviceId: number
    serviceTypes: ServiceTypes
    servicePrice: number
    providedBy: Company
}