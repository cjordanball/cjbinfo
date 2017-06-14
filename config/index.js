const ENVIRONMENT = process.env.NODE_ENV;
let AUTH_PATH;
let API_PATH;

switch (ENVIRONMENT) {
case 'production':
	AUTH_PATH = 'https://cjbinfoapi.com/auth';
	API_PATH = 'https://cjbinfoapi.com';
	break;
case 'development':
	AUTH_PATH = 'http://localhost:3142';
	API_PATH = 'http://localhost:8080';
default:
	AUTH_PATH = 'https://cjbinfoapi.com/auth';
	API_PATH = 'https://cjbinfoapi.com';
}

module.exports = {
	AUTH_PATH,
	API_PATH
};
