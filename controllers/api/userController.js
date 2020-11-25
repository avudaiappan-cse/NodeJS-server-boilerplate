const User = require("../../models/user");
const jwt = require("jsonwebtoken");

function index(req, res) {
  return res.status(200).json({
    success: false,
  });
}

async function login(req, res) {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email: email });
    if (!user || user.password !== password) {
      return res.status(500).json({
        message: "Invalid email or password",
      });
    }
    const payload = {
      id: user.id,
      email: user.email,
      name: user.name,
    };
    const JWT_SECRET = "secret-key-avinash123";
    const jsonData = {
      token: jwt.sign(payload, JWT_SECRET, { expiresIn: "7 days" }),
      message: "Signed in successfully",
      success: true,
    };
    return res.status(200).json(jsonData);
  } catch (err) {
    return res.status(500).json({
      message: err,
    });
  }
}

async function signup(req, res) {
  const { name, email, password, confirmPassword } = req.body;
  if (password !== confirmPassword)
    return res
      .status(500)
      .json({ message: "email / password should be matched!" });
  if (!name || !email)
    return res
      .status(500)
      .json({ message: "name and email should be needed to signup!" });
  console.log(req.body);
  const user = await User.findOne({ email: email });
  try {
    if (!user) {
      const createdUser = await User.create({
        name,
        email,
        password,
      });
      await createdUser.save();
      if (createdUser) {
        return res.status(201).json({
          message: "User Created Successfully!",
          user: {
            name: createdUser.name,
            email: createdUser.email,
            id: createdUser.id,
          },
        });
      } else {
        return res.status(500).json({
          message: "Something went wrong!",
        });
      }
    } else {
      return res.status(500).json({
        message: "User already exist!",
      });
    }
  } catch (err) {
    return res.status(500).json({
      message: {
        ...err,
        reason: err.message,
      },
    });
  }
}

module.exports = {
  index,
  signup,
  login,
};
