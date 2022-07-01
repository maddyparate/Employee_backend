const db = require("../models")
const EmployeeModel = db.employee

// Create
exports.create = (req,res,next) =>{
    let {name,mobile,address,email,password} = req.body
    EmployeeModel.create({
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
// Get All
exports.getAll = (req,res,next) =>{
    EmployeeModel.find({},(err,result)=>{
        if(err)
        next(err)
        res.json({
            status:"success",
            message:"All Bankers Are Here",
            data:{
                model:result
            }
        })
    })

}
// Get By ID
exports.getById = (req,res,next) =>{
    EmployeeModel.findById(req.params.id,(err,result)=>{
        if(err)
        next(err)
        res.json({
            status:"Success",
            message:"Successfully Retrieved by ID Banker",
            data:{
                model:result
            }
        })
    })

}
// Get By Email
exports.getByEmail = (req,res,next) =>{
    EmployeeModel.find({"email":req.body.email},(err,result)=>{
        if(err)
        next(err)
        res.json({
            status:"Success",
            message:"Successfully Retrieved",
            data:{
                model: result
            }

        })
    })

}
// Update
exports.updateById = (req,res,next) =>{
    EmployeeModel.findByIdAndUpdate(req.params.id,req.body,(err,result)=>{
    if(err)
    next(err)
    res.json({
        status:"Success",
            message:"Successfully Updated Banker By ID",
            data:{
                model: result
            }

    })
})
}
// Delete By Id
exports.deleteById = (req,res,next) =>{

    EmployeeModel.findByIdAndRemove(req.params.id,(err,result)=>{
        if(err)
        next(err)
        res.json({
            status:"Success",
            message:"Successfully Deleted Banker By ID",
            data:{
                model: result
            }

        })
    })
}
// Delete All
exports.deleteAll = (req,res,next) =>{
    EmployeeModel.remove({}, (err,result) => {
        if(err)
        next(err)
        res.json({
            status:"Success",
            message:"Successfully Deleted Banker By ID",
            data:{
                model: result
            }

        })
    })
}