const config = {};

config.port = process.env.PORT || 5000;
config.dbURL = process.env.DATABASEURL || ""; // Add Database URI | Mongoose

module.exports = config;
