const fs = require("fs");

class FilesHandler {
  constructor() {}

  static getFilesFrom(dir) {
    return new Promise((resolve) => {
      fs.readdir(dir, (_, files) => {
        resolve(files);
      });
    });
  }

  static getFileContent(dir) {
    return new Promise((resolve) => {
      fs.readFile(dir, (_, file) => {
        resolve(file);
      });
    });
  }
}

module.exports = FilesHandler;
