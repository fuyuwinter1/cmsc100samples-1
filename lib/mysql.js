var mysql = require('mysql');
module.exports = mysql.createConnection({
	host	 : 'localhost',
	user	 : 'root',
	password : 'fuyuwinter',
	database : 'cmsc100ef2l'
});
