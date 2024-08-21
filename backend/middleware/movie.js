const moviesModels = require("../models/Movie");
const usersToken = moviesModels.all("../backend/data/userToken.json");

const authMiddleware = (req, res, next) => {
  const { token } = req.query; // Lấy token từ tham số của request

  if (!token) {
    return res.status(401).json({ message: "Unauthorized - Token is missing" });
  }

  // Kiểm tra xem token có tồn tại trong danh sách userToken không
  const user = usersToken.find((user) => user.token === token);

  if (!user) {
    return res.status(401).json({ message: "Unauthorized - Invalid Token" });
  }

  // Gán thông tin user vào request để sử dụng trong các route sau
  // console.log(user);

  req.user = user;

  // console.log(user);
  // Người dùng đã được xác thực thành công, tiếp tục xử lý
  next();
};

module.exports = authMiddleware;
