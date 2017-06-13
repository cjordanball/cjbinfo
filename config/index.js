const ENVIRONMENT = process.env.NODE_ENV;
let AUTH_PATH;
let API_PATH;

switch (ENVIRONMENT) {
case 'production':
	AUTH_PATH = '';
	API_PATH = '';
	break;
default:
	AUTH_PATH = 'http://localhost:3142';
	API_PATH = 'http://localhost:8080';
}

module.exports = {
	AUTH_PATH,
	API_PATH
};
