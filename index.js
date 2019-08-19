const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

app.get('/', (req, res) => {
	res.sendFile(__dirname + "/front/index.html");
})

app.listen(5050, function () {
	console.log("servidor rodando")
});