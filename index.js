const express = require('express');
const app = express();

app.get('/', (req, res) => {
	res.send('<h1>Hello Digital Ocean!</h1>');
});

app.listen(3000, () => {
	console.log('Magic is here on port 3000');
});
