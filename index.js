const fs = require("fs");
const path = require("path");

module.exports.resolvedPath = function(directoryPath, fileName) {
	return path.resolve(directoryPath, fileName);
};

module.exports.readFile = function(fileName) {
	return new Promise(function(resolve, reject) {
		fs.readFile(fileName, 'utf8', function(err, data) {
			if (err) {
				reject(err);
			} else {
				resolve(data);
			}
		});
	})
};

module.exports.readDir = function(directoryPath) {
	return new Promise(function(resolve, reject) {
		fs.readdir(directoryPath, function(err, files) {
			if (err) {
				reject(err);
			} else {
				resolve(files);
			}
		});
	})
};

module.exports.readDirFiles = function(directoryPath) {
	return null;
};
