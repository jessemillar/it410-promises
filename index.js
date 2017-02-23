const fs = require("fs");
const path = require("path");

module.exports.resolvedPath = function(directoryPath, fileName) {
	console.log(path.resolve(directoryPath, fileName));
	return path.resolve(directoryPath, fileName);
};

module.exports.readFile = function(fileName, callback) {
	fs.readFile(fileName, 'utf8', function(err, res) {
		if (err) return callback(err);

		try {
			res = JSON.parse(res);
		} catch (ex) {
			return callback(ex);
		}

		callback(null, res);
	});
};

module.exports.readDir = function() {
	return null;
};

module.exports.readDirFiles = function() {
	return null;
};
