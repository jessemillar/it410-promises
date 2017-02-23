const fs = require("fs");
const path = require("path");

module.exports.resolvedPath = function(directoryPath, fileName) {
	return path.resolve(directoryPath, fileName);
};

module.exports.readFile = function(fileName) {
	return fs.readFile(fileName, 'utf8').then(function(res) {
		return JSON.parse(res);
	});
};

module.exports.readDir = function(directoryPath) {
	return null;
};

module.exports.readDirFiles = function(directoryPath) {
	return null;
};
