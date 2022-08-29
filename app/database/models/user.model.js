const mongoose = require("mongoose")
const validator = require("validator")
const bcryptjs = require("bcryptjs")

const userSchema = mongoose.Schema({
    name:{
        type:String,
        trim:true,
        lowercase:true, //uppercase
        required:true,
        minlength:3,
        maxlength:20
    },
    email:{
        type:String,
        trim:true,
        lowercase:true, //uppercase
        required:true,
        unique:true,
        validate(value){
            if(!validator.isEmail(value)) throw new Error("invalid email")
        }
    },
    password:{
        type:String,
        trim:true,
        required:true,
        minlength:6,
        // match:/^(?=.*[a-z])(?=.*[0-9])$/,
        validate(value){
            if(
                value.includes("password")|| 
                value.includes("123")||
                value.includes(this.name)
                )
                throw new Error("week password")
        }
    },
    age:{
        type: Number,
        min: 20,
        max: 65,
        default: 21
    },
    gender:{
        type:String,
        trim:true,
        required:true,
        lowercase:true,
        enum:["male", "female"]
    },
},{
    timestamps: true
})

userSchema.methods.toJSON = function(){
    const deleted =["__v", "password"]
    const userData = this.toObject() // to deal with js functions of objects like (delete)
    deleted.forEach(d => delete userData[d])
    return userData
}

userSchema.pre("save", async function(){
    // console.log(this) // this => userData.save()
    const userData = this
    if(userData.isModified("password"))
        userData.password = await bcryptjs.hash(userData.password, 10)
})

const User = mongoose.model("User", userSchema)
module.exports = User