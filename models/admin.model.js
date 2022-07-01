module.exports = mongoose => {
    var AdminSchema = mongoose.Schema({
        email:{
            type:String,
            required:true
        },
        password:{
            type:String,
            required:true
        }
    })

    const AdminModel = mongoose.model("admin",AdminSchema)
    return AdminModel
}