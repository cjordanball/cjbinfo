const ENVIRONMENT = process.env.NODE_ENV;
let AUTH_PATH;
let API_PATH;

switch (ENVIRONMENT) {
case 'production':
	AUTH_PATH = 'https://cjbinfoapi.com/auth';
	API_PATH = 'https://cjbinfoapi.com';
	break;
default:
	AUTH_PATH = 'http://localhost:3142/auth';
	API_PATH = 'http://localhost:8080';
}

module.exports = {
	ENVIRONMENT,
	AUTH_PATH,
	API_PATH
};
