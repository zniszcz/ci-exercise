/* eslint-disable dot-notation */
const config = {};

config['DEV'] = {
    API_URL: 'http://dev.example-api/api',
};

config['PROD'] = {
    API_URL: 'http://prod.example-api/api',
};

export default config[process.env.ENV || 'DEV'];
