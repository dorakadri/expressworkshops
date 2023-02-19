const mongoose =require('mongoose');
const Shema = mongoose.Schema;

const Contact = new Shema({
    Fullname:String,
    Phone:Number
}); module.exports=mongoose.model('contrats',Contact);