const env = process.env.NODE_ENV || 'development';

const config = {
    development: {
        port: process.env.PORT || 3003,
        dbURL: 'mongodb://127.0.0.1:27017/blogspot',
        origin: ['http://localhost:5555', 'http://localhost:4200', 'http://localhost:3000']
    },
    production: {
        port: process.env.PORT || 3003,
        dbURL: process.env.DB_URL_CREDENTIALS,
        origin: []
    }
};

module.exports = config[env];
