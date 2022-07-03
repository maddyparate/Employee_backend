// const db = require('../models/admin.model')
// const bcrypt = require('bcrypt')
// const adminModel = db.admin

// exports.create = (req, res, next) => {
//     let { name, email, password } = req.body
//     adminModel.create({
//         name,
//         email,
//         password
//     }, (err, result) => {
//         if (err) {
//             res.json({
//                 message: "Error while saving customer",
//                 error: err
//             })
//         }
//         res.json({
//             status: 200,
//             data: result
//         })
//     })
// }

// exports.login = (req, res, next) => {
//     adminModel.findOne({ email: req.body.email }, (err, result) => {
//         if (err) {
//             next(err)
//         }
//         else {
//             if (bcrypt.compare(req.body.password, result.password)) {
//                 res.json({
//                     status: "success",
//                     message: "successfully logged in",
//                     data: {
//                         admin: result
//                     }
//                 })
//             }
//         }
//     })
// }


const adminModel = require('../models/admin.model')
const bcrypt = require('bcrypt')


const create = (req,res,next) => {
    const {name,email,password} = req.body

    adminModel.create({
        name,
        email,
        password
    }, (err,result) => {
        if(err)
        next(err)
        else
        res.status(200).json({
            status: "Success",
            message: "Admin Added Successfully",
            data: result
        })
    })
} 

const login = (req,res,next) => {
  //  console.log("check1")
    adminModel.findOne({email:req.body.email}, (err,result) => {
        if(err){
            next(err)
        }
        else{
            if(bcrypt.compare(req.body.password, result.password)){
                res.json({
                    status:"success",
                    message:"successfully logged in",
                    data:{
                        admin:result
                    }
                })
            }
        }
    })
}

module.exports = {create, login}