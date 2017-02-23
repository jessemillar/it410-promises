const fs = require("fs");
const path = require("path");

module.exports.resolvedPath = function(directoryPath, fileName) {
	return path.resolve(directoryPath, fileName);
};

module.exports.readFile = function(fileName) {
	fs.readFile(fileName, 'utf8', function(err, res) {
		res = JSON.parse(res);
	});
};

module.exports.readDir = function(directoryPath) {
	return null;
};

module.exports.readDirFiles = function(directoryPath) {
	return null;
};
