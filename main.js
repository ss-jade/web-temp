const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const fs = require("fs");

app.get("/", (req, res) => {
	try {
		const data = fs.readFileSync(
			"/sys/class/thermal/thermal_zone0/temp",
			"utf8"
		);
		console.log(data);
	} catch (err) {
		console.error(err);
	}

	res.send("<h1>Hi</h1> {data}");

	//res.sendFile(__dirname + "/index.html");
});

server.listen(3000, () => {
	console.log("listening on *:3000");
});
