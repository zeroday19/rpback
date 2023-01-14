const createError = require('http-errors')
const Gstn = require('../Models/Gstn.model')
const { gstnSchema } = require('../helpers/validation_schema')
const {
  signAccessToken,
  signRefreshToken,
  verifyRefreshToken,
  jwtverify,
  verifyAccessTokenforgst,
} = require('../helpers/jwt_helper')
const client = require('../helpers/init_redis')
const express = require('express');
const router = express.Router();
const ObjectId = require('mongodb').ObjectId;
const JWT = require('jsonwebtoken')
const User = require('../Models/User.model')


module.exports = {
    gstnregister:(verifyAccessTokenforgst,async (req, res, next) => {
      res.send("okek")
    }),
    addinvoice: async (req, res, next) => {},
    getinvoice: async (req, res, next) => {
        const message="done bro"
        res.send({message})
    },
    deleteinvoice: async (req, res, next) => {},
}