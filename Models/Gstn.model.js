const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcrypt')
const { number, string } = require('@hapi/joi')
const { Number } = require('mongoose')
const { String } = require('mongoose/lib/schema/index')


const GstnSchema = new Schema({
  gstn_number: {
    type: String,
     
      
    },
    name_of_gstn: {
      type: String,
    
    },
    user_id:{
      type: String,
      
    },
    
  })

  const Gstn = mongoose.model('gstn', GstnSchema)
module.exports = Gstn