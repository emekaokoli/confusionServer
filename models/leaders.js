const mongoose = require('mongoose')
const Schema = mongoose.Schema


const leadersSchema = new Schema({
  name:{
     type: String,
     required: true,
     unique: true,
  },
  image:{
    type: String,
    required: true,

  },
  designation:{
    type: String,
    default:''
  },
  abbr:{
    type: String,
    require: true,
  },
  description:{
    type:String,
    required:true,
  },
   featured: {
        type: Boolean,
        default: false
    },
}, {
    timestamps: true,
    usePushEach: true
})

var Leaders = mongoose.model('Leaders', leadersSchema)

module.exports = Leaders