import { Company } from "./Company"
import { Service } from "./Service"
import { User } from "./User"

export class Appointment {
    appointmentId: number
    customerId: User
    companyId: Company
    appointmentStart: string
    appointmentEnd: string
    appointmentConfirmed: boolean
    forService: Service
    appointmentCompleted: boolean
}