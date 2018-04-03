const express = require('express');
const app = express();
const path = require('path')

const config = {
	PORT: 3000,
	HOST: '0.0.0.0',
};

app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'index.html')))

app.get('/health', (req, res) => {
	res.json({name: 'web', statusOk: true});
});

app.listen(
	config.PORT,
	config.HOST,
	() => console.log(`Running on port ${config.HOST}:${config.PORT}!`)
);