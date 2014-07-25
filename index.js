var _ = require('lodash');
var path = require('path');
var env = process.env.NODE_ENV || 'development';
var configPath = path.resolve('./config/env');

// Main config object
var Config = {};

// Set default config values
Config.env = env;

// Set up enviroment config files values
Config = _.extend(
  require(path.join(configPath, 'all')),
  require(path.join(configPath, env))
);

module.exports = Config;