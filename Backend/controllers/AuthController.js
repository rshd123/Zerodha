const user = require("../Model/UserModel.js");
const { createSecretToken } = require("../util/SecretToken.js");
const bcrypt = require("bcryptjs");

module.exports.Signup = async (req, res, next) => {
  try {
    const { password, username, createdAt } = req.body;
    const existingUser = await user.findOne({ username });
    if (existingUser) {
      return res.json({ message: "User already exists" });
    }
    const User = await user.create({ password, username, createdAt });
    const token = createSecretToken(User._id);
    res.cookie("token", token, {
      withCredentials: true,
      httpOnly: false,
    });
    res
      .status(201)
      .json({ message: "User signed in successfully", success: true, user });
    next();
  } catch (error) {
    console.error(error);
  }
};


module.exports.Login = async (req, res, next) => {
  try {
    const { username, password } = req.body;
    if(!username || !password ){
      return res.json({message:'Incomplete credentials entered!'})
    }
    const User = await user.findOne({ username });
    if(!User){
      return res.json({message:'Incorrect password or email' }) 
    }
    const auth = await bcrypt.compare(password,User.password)
    if (!auth) {
      return res.json({message:'Incorrect password or email' }) 
    }
     const token = createSecretToken(User._id);
     res.cookie("token", token, {
       withCredentials: true,
       httpOnly: false,
     });
     res.status(201).json({ message: "User logged in successfully", success: true });
     next()
  } catch (error) {
    console.error(error);
  }
}