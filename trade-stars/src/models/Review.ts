import { Company } from "./Company"
import { User } from "./User"

export class Review {
    reviewId: number
    reviewText: string
    reviewedBy: User
    reviewedFor: Company
}