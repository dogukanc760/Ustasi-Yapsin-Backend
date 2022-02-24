const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema(
    {
       name:{type:String, required:true},
       surname:{type:String, required:true},
       gsm:{type:String, required:true, unique:true},
       mail:{type:String, required:true, unique:true},
       password:{type:String, required:true},
       company:{type:String, default:''},
       taxnum:{type:String, default:''},
       isBusinness:{type:Boolean, default:false},
       sector:{type:String, default:''},
       category:{type:String, default:''},
       sectorCity:{type:Array, default:''},
       sectorDistinct:{type:Array, default:''},
       worksDays:{type:Array, default:''},
       worksHours:{type:Array, default:''}, 
       isAdmin:{type:Boolean, default:false},
       isActive:{type:Boolean, default:true},
       img:{type:String, default:''},
       adress:{type:Array, default:''},
       comments:{type:Array, default:''},
       rating:{type:Number, default:0},
       ratingCount:{type:Number, default:0},
       about:{type:String, default:null},
       referances:{type:Array, default:''},
    },{timestamps: true}
);


module.exports = mongoose.model("User", UserSchema);