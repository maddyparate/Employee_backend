const db = require('../models/')
const bcrypt = require('bcrypt')
const AdminModel = db.admin

exports.create = (req,res,next) =>{
    let {name,mobile,address,email,password} = req.body
    AdminModel.create({
        name,
        mobile,
        address,
        email,
        password
    }, (err,result) => {
        if(err){
            res.json({
                message: "Error while saving customer",
                error: err
            })
        }
        res.json({
            status:200,
            data:result
        })
    })
}

exports.login = (req,res,next) =>{
    AdminModel.findOne({email:req.body.email}, (err,result) => {
        if(err){
            next(err)
            console.log("invalid user")
        }
        else{
            if(bcrypt.compare(req.body.password,result.password)){
                res.json({
                    status: "Success",
                    message: "Succesfully Logged in",
                    data: {
                        admin: result,
                    }
                })
            }
        }
    })
}
