// controllers/degree-program.js
var db = require(__dirname + './../lib/mysql');

// Find all degrees.
exports.find = function (req, res, next) {
	db.query("SELECT * FROM degree", function (err, rows) {
		if(err) return(err);
		res.send(rows);
	});
};

// Find one degree program.
exports.findOne = function (req, res, next) {
	//console.log(req.params.id);
	db.query("SELECT * FROM degree WHERE degree_id='"+req.params.id+"'", function (err, rows) {
		if(err) return(err);
		if(rows.length === 0)
			res.send(404, {message: 'Degree program not found.'});
		else res.send(rows[0]);
	});
};

// Insert a degree program.
exports.insert = function (req, res, next) {
	
	var code = req.body.code;
	var name = req.body.name;
	var unit = req.body.units;
	
	db.query("INSERT INTO degree(degree_code,description,total_units) VALUES (?,?,?)", [code,name,unit], function (err, rows) {
		if(err) return(err);
		res.send(rows);
		return({"degree_code": code,
				"description": name,
				"total_units": unit});

	});
}

// Delete a degree program.
exports.remove = function (req, res, next) {
	db.query("DELETE FROM degree WHERE degree_id='"+req.body.id+"'", function (err, rows) {
		if(err) return(err);
		if(rows.length === 0)
			res.send(404, {message: 'Degree program not found.'});
		else res.send(rows);
	});
};

// Update a degree program.
exports.update = function (req, res, next) {
	db.query("UPDATE degree SET total_units='"+req.body.units+"', WHERE degree_id='"+req.params.id+"'", function (err, rows) {
		if(err) return(err);
		if(rows.length === 0)
			res.send(404, {message: 'Degree program not found.'});
		else res.send(rows);
	});
};
