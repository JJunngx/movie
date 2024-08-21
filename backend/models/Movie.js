const fs = require("fs");
const Movies = {
  all: function (filePath) {
    return JSON.parse(fs.readFileSync(filePath, "utf8"));
  },
};
module.exports = Movies;
exports.getLogin = (req, res, next) => {
  const aa = req.get("Cookie").split(";")[1].trim().split("=")[1] === "true";
};
