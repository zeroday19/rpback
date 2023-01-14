const express = require('express')
const morgan = require('morgan')
const createError = require('http-errors')
const cors = require('cors');
require('dotenv').config()
require('./helpers/init_mongodb')
const { verifyAccessToken, verifyAccessTokenforgst } = require('./helpers/jwt_helper')
require('./helpers/init_redis')
const JWT = require('jsonwebtoken')
const AuthRoute = require('./Routes/Auth.route');
const InvoiceRoute = require('./Routes/Invoice.route');
const User = require('./Models/User.model');
const { JsonWebTokenError } = require('jsonwebtoken');
const Gstn = require('./Models/Gstn.model');

const app = express()
app.use(cors());

app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', verifyAccessToken, async (req, res, next) => {
  // res.send('Hello from express.')
  
})
app.post('/info/gstnum', async (req, res) => {
  const token = req.headers.authorization;
  try {
    if (!req.headers['authorization']) return res.send("Unauthorised")
    const authHeader = req.headers['authorization']
    const bearerToken = authHeader.split(' ')
    const token = bearerToken[1]
    
      const decoded = JWT.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, payload) => {
        if (err) {
          const message =
            err.name === 'JsonWebTokenError' ? 'Unauthorized' : err.message
          return createError.Unauthorized(message)
        }
        return req.payload = payload
      })
      const user_id = decoded.aud;
      // Get the two fields from the body
      const { gstn_number,name_of_gstn } = req.body;
      // Create a new Numbers document with the userId and the two fields
      const newNumbers = new Gstn({ gstn_number, name_of_gstn,user_id  });
      // Save the document to the collection
      await newNumbers.save();
      return res.status(200).send(gstn_number);
  } catch (error) {
      console.error(error);
      return res.status(401).send("Mongo save fail");
  }
});
app.use('/auth', AuthRoute)
// app.use('/info', InvoiceRoute)

app.use(async (req, res, next) => {
  next(createError.NotFound())
})

app.use((err, req, res, next) => {
  res.status(err.status || 500)
  res.send({
    error: {
      status: err.status || 500,
      message: err.message,
    },
  })
})

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
