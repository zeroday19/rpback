const Joi = require('@hapi/joi')

const authSchema = Joi.object({
  phonenumber: Joi.string().required().length(10),
  password: Joi.string().min(8).required(),
  email: Joi.string().email(),
  city_of_business: Joi.string(),
  name_of_user: Joi.string(),
})
const invoiceSchema = Joi.object({
  supplier_gst: Joi.string().required().length(15),
  receipient_gst: Joi.string().length(15).required(),
  total_amount: Joi.string(),
  invoice_no: Joi.string(),
  placeofsupply: Joi.string(),
  invoice_date: Joi.string(),
  
})
const gstnSchema = Joi.object({
  gstn_number: Joi.string().required().length(15),
  name_of_gstn: Joi.string().required()
  
  
})

module.exports = {
  authSchema,invoiceSchema,gstnSchema,
}
