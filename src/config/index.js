const merge = require('lodash.merge')
const fs = require('fs');

const baseConfig = {
  port: 3000,
  dbUrl: 'mongodb://ds149034.mlab.com:49034/frontendmasters-node2',
  authSecret: 'blueRhinoJumps',
  authDisable: false,
  authExpiry: '30d'
};

process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

let envConfig;

switch(process.env.NODE_ENV) {
  case 'dev':
    envConfig = require('./dev')
    break;
  case 'prod':
    envConfig = require('./prod')
    break;
  case 'testing':
    envConfig = require('./testing')
    break;
  default:
    envConfig = baseConfig;
    break;
}

export default merge(baseConfig, envConfig)