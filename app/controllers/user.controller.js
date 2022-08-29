const userModel = require("../database/models/user.model")

class User{
    static getAllUsers = async(req, res)=>{ //localhost:3000/user/
        try {
            const data = await userModel.find()
            res.status(200).send({apiStatus: true, message: "all users fetched", data})
        } 
        catch (e) {
            res.status(500).send({apiStatus: false, message: e.message, data: e})
        }
    }
    static register = async(req, res)=>{
        try {
            const userData = new userModel(req.body)
            await userData.save()
            res.status(200).send({apiStatus: true, message: "user registered", data: userData})
        } 
        catch (e) {
            res.status(500).send({apiStatus: false, message: e.message, data: e})
        }
    }
    static singleUser = async(req, res)=>{
        try {
            const data = await userModel.findById(req.params.id)
            res.status(200).send({apiStatus: true, message: "single user", data})
        } 
        catch (e) {
            res.status(500).send({apiStatus: false, message: e.message, data: e})
        }
    }
    static editUser = async(req, res)=>{
        try {
            const data = await userModel.findByIdAndUpdate(
                req.params.id,
                req.body, 
                {runValidator:true})
            res.status(200).send({apiStatus: true, message: "user edited", data})
        } 
        catch (e) {
            res.status(500).send({apiStatus: false, message: e.message, data: e})
        }
    }
    static delUser = async(req, res)=>{
        try {
            const data = await userModel.findByIdAndDelete(req.params.id)
            res.status(200).send({apiStatus: true, message: "user deleted", data})
        } 
        catch (e) {
            res.status(500).send({apiStatus: false, message: e.message, data: e})
        }
    }
    static login = async(req, res)=>{
        try {
            const userData = await userModel.login(req.body.email, req.body.password)
            const token = await userData.generateToken()
            res.status(200).send({apiStatus: true, message: "user logged in", data: {userData, token}})
        } 
        catch (e) {
            res.status(500).send({apiStatus: false, message: e.message, data: e})
        }
    }
    static profile = async(req, res)=>{
        try {
            res.status(200).send({apiStatus: true, message: "user profile", data: req.user})
        } 
        catch (e) {
            res.status(500).send({apiStatus: false, message: e.message, data: e})
        }
    }
    static logout = async(req, res)=>{
        try {
            const userData = await userModel.login(req.body.email, req.body.password)
            const token = await userData.generateToken()
            res.status(200).send({apiStatus: true, message: "user logged in", data: {userData, token}})
        } 
        catch (e) {
            res.status(500).send({apiStatus: false, message: e.message, data: e})
        }
    }
}

module.exports = User