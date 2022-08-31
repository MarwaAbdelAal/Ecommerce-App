import { Token } from "@angular/compiler"

export interface User {
    _id?: String
    name: String
    email: String
    password: String
    age?: String
    gender: String
    userImg?: String
    tokens?: Token[]
    createdAt?: Date
    updatedAt?: Date

}
