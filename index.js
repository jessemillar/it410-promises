const fs = require("fs");
const path = require("path");

var resolvedPath = function(directoryPath, fileName) {
	return path.resolve(directoryPath, fileName);
};

module.exports = resolvedPath;

var readFile = function(filename, callback) {
	fs.readFile(filename, 'utf8', function(err, res) {
		if (err) return callback(err);

		try {
			res = JSON.parse(res);
		} catch (ex) {
			return callback(ex);
		}

		callback(null, res);
	});
};

module.exports = readFile;

var readDir = function() {
	return null;
};

module.exports = readDir;

var readDirFiles = function() {
	return null;
};

module.exports = readDirFiles;
