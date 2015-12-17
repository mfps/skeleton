'use strict';
module.exports = {
  TOKEN_SECRET: process.env.TOKEN_SECRET || 'A hard to guess string',
  MONGO_URI: process.env.MONGO_URI || 'localhost:27017/mediadbv2',
//  MONGO_URI: process.env.MONGO_URI || 'mongodb://mediadb:password666@ds063170.mongolab.com:63170/mediadb',
};