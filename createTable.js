function createTournamentTable(players) {
	var matches = [];
	function createMatch(p) { return [p.pop(), p.shift()] }
	while (players.length >= 2) {
		matches.push(createMatch(players))
	}
	var reverseMatch = matches.map(function(m) { return [m[1], m[0]] });
	return {
		first: matches,
		last: reverseMatch
	}
}

module.exports = createTournamentTable;