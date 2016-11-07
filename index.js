var express = require("express"),
	bodyParser = require("body-parser"),
	app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.route("/")
	.get(function(req, res) {
		res.send("We are open for business")
	});

app.route("/create-tournament-table")
	.post(function(req, res) {
		var ctt = require("./createTable.js");
		players = JSON.parse(req.body.players);
		res.json(ctt(players.sort()));
	});

app.listen(8080);